import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { createInterface } from "node:readline/promises";

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const dataDir = resolve(process.env.JOIAS_CONTROL_DATA_DIR || join(process.env.LOCALAPPDATA || "", "JOIAS_CONTROL", "local-data"));
const requiredBranch = "redesign/aura-master-v1";

async function currentBranch() {
  const candidates = ["git"];
  if (process.platform === "win32") {
    if (process.env.ProgramFiles) candidates.push(join(process.env.ProgramFiles, "Git", "cmd", "git.exe"));
    if (process.env.LOCALAPPDATA) {
      candidates.push(join(process.env.LOCALAPPDATA, "Programs", "Git", "cmd", "git.exe"));
      const desktopRoot = join(process.env.LOCALAPPDATA, "GitHubDesktop");
      const versions = await readdir(desktopRoot, { withFileTypes: true }).catch(() => []);
      versions
        .filter((entry) => entry.isDirectory() && /^app-\d/.test(entry.name))
        .sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }))
        .forEach((entry) => candidates.push(join(desktopRoot, entry.name, "resources", "app", "git", "cmd", "git.exe")));
    }
  }
  const failures = [];
  for (const executable of candidates) {
    if (executable !== "git") {
      try { await access(executable); } catch { continue; }
    }
    const result = spawnSync(executable, ["branch", "--show-current"], {
      cwd: siteRoot, encoding: "utf8", windowsHide: true,
    });
    if (!result.error && result.status === 0) return result.stdout.trim();
    failures.push(`${executable}: ${result.error?.message || result.stderr?.trim() || `codigo ${result.status}`}`);
  }
  throw new Error(`Nao foi possivel conferir a branch pelo Git ou GitHub Desktop.\n${failures.join("\n")}`);
}

async function main() {
  console.log("\nAURA - Atualizacao da vitrine\n");
  const branch = await currentBranch();
  if (branch !== requiredBranch) throw new Error(`Selecione ${requiredBranch} no GitHub Desktop e abra este atalho novamente.`);
  await import("node:sqlite");
  await access(join(dataDir, "joias-control.db"));
  await access(join(dataDir, "uploads"));
  console.log(`Pasta do sistema: ${dataDir}`);
  if (process.argv.includes("--check")) {
    console.log("Configuracao conferida. Nenhum arquivo foi alterado.");
    return;
  }

  const input = createInterface({ input: process.stdin, output: process.stdout });
  let answer;
  try {
    answer = await input.question("\nFeche o Joias Control. Digite ATUALIZAR para continuar: ");
  } finally {
    input.close();
  }
  if (answer.trim().toUpperCase() !== "ATUALIZAR") {
    console.log("Atualizacao cancelada. Nenhum arquivo foi alterado.");
    return;
  }

  const result = spawnSync(process.execPath, ["--experimental-sqlite", join(siteRoot, "tools", "joias-control-publicador", "publicar-catalogo.mjs")], { cwd: siteRoot, stdio: "inherit", windowsHide: true });
  if (result.error || result.status !== 0) throw new Error("A geracao falhou. Nao envie os arquivos ao GitHub; confira o erro acima.");
  const products = JSON.parse(await readFile(join(siteRoot, "public", "catalogo.json"), "utf8"));
  const withPhoto = products.filter((product) => product.imagem_url).length;
  for (const product of products) {
    if (product.imagem_url) await access(join(siteRoot, "public", product.imagem_url));
  }
  console.log(`\nCatalogo local atualizado: ${products.length} produtos.`);
  console.log(`Produtos com foto: ${withPhoto}. Sem foto: ${products.length - withPhoto}.`);
  console.log(`Sem categoria: ${products.filter((product) => !product.categoria?.trim()).length}.`);
  console.log("\nO site online ainda nao foi atualizado.");
  console.log("1. Abra o GitHub Desktop e confira as alteracoes do catalogo.");
  console.log("2. Faca o commit e clique em Push origin.");
  console.log("3. Confira a nova previa da Vercel e promova-a para producao.");
}

main().catch((error) => {
  console.error(`\nAtualizacao interrompida: ${error.message}`);
  process.exitCode = 1;
});
