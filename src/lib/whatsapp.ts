import type { CartItem } from "./cart";
import { brl } from "./catalog";
import { STORE_ADDRESS, STORE_NAME, STORE_PICKUP, STORE_WHATSAPP } from "@/config/store";

export type Checkout = {
  nome: string;
  observacao: string;
};

export function buildWhatsappUrl(items: CartItem[], total: number, dados: Checkout) {
  const linhas = items.map(
    (i, idx) =>
      `${idx + 1}. ${i.nome}` +
      (i.codigo ? `\n   Código: ${i.codigo}` : "") +
      (i.variacao ? `\n   Detalhe: ${i.variacao}` : "") +
      `\n   Qtd: ${i.qtd} x ${brl(i.preco)}` +
      `\n   Subtotal: ${brl(i.qtd * i.preco)}`,
  );

  const msg = [
    `*${STORE_NAME}* — reserva de peças`,
    "",
    ...linhas,
    "",
    `*TOTAL:* ${brl(total)}`,
    "",
    `Nome: ${dados.nome || "-"}`,
    `Retirada: ${STORE_PICKUP}`,
    `Endereço: ${STORE_ADDRESS}`,
    ...(dados.observacao.trim() ? [`Observação: ${dados.observacao.trim()}`] : []),
    "",
    "Gostaria de confirmar a disponibilidade e combinar a retirada na loja.",
  ].join("\n");

  return `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}
