import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";
import { normalizarCatalogo, fetchCatalogo, imagemCard, estoqueDisponivel, precoFinal } from "../src/lib/catalog.ts";

test("mantem o formato antigo", () => {
  const [p] = normalizarCatalogo([{ id_publico: "antigo", nome: "Bolsa", preco: 29.9, imagem_url: "/bolsa.jpg" }]);
  assert.equal(p.id_publico, "antigo");
  assert.equal(imagemCard(p), "/bolsa.jpg");
  assert.equal(precoFinal(p), 29.9);
});

test("converte o snapshot e nao usa a URL local da foto", () => {
  const [p] = normalizarCatalogo({ produtos: [{ id: "novo", nome: "Bolsa", imagem: "/catalogo-imagens/bolsa.jpg", foto_url_original: "http://localhost:3333/uploads/bolsa.jpg", estoque: 3, disponivel: false, preco: 100, preco_promocional: 80 }] });
  assert.equal(p.id_publico, "novo");
  assert.equal(imagemCard(p), "/catalogo-imagens/bolsa.jpg");
  assert.equal(estoqueDisponivel(p), 0);
  assert.equal(precoFinal(p), 80);
  assert.equal("foto_url_original" in p, false);
});

test("aceita catalogos vazios e rejeita dados invalidos", () => {
  assert.deepEqual(normalizarCatalogo([]), []);
  assert.deepEqual(normalizarCatalogo({ produtos: [] }), []);
  for (const value of [null, {}, { produtos: {} }, [{ nome: "Sem ID" }], { produtos: [{ id: "x", nome: "Bolsa", preco: "invalido" }] }]) {
    assert.throws(() => normalizarCatalogo(value));
  }
});

test("fetch converte os dados e propaga falhas HTTP", async (t) => {
  const mock = t.mock.method(globalThis, "fetch", async () => new Response(JSON.stringify({ produtos: [{ id: "1", nome: "Bolsa" }] })));
  assert.equal((await fetchCatalogo())[0].id_publico, "1");
  mock.mock.mockImplementation(async () => new Response("", { status: 500 }));
  await assert.rejects(fetchCatalogo());
});

test("catalogo local possui identificadores unicos e imagens acessiveis", async () => {
  const data = JSON.parse(await readFile(new URL("../public/catalogo.json", import.meta.url), "utf8"));
  const products = normalizarCatalogo(data);
  assert.equal(new Set(products.map((p) => p.id_publico)).size, products.length);
  for (const product of products) {
    const image = imagemCard(product);
    if (image?.startsWith("/") && !image.startsWith("//")) {
      await access(new URL(`../public${image}`, import.meta.url));
    }
  }
});
