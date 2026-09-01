# AURA Fidelity

Quero reconstruir a Home do site AURA Acessórios com ALTA FIDELIDADE VISUAL à imagem de referência que estou anexando.

IMPORTANTE:
Esta não é apenas uma inspiração.
Use a imagem enviada como principal referência de composição, proporções, hierarquia, ritmo, grid, espaçamento, fotografia, tipografia e distribuição dos elementos.

Quero que o resultado final pareça a implementação real da interface apresentada na imagem.

A marca é:

AURA Acessórios

Posicionamento:
boutique premium de joias e acessórios femininos, com linguagem editorial contemporânea, sofisticada, minimalista e autoral.

==================================================
1. ORDEM DE PRIORIDADE
==================================================

Ao implementar, siga esta prioridade:

1. IMAGEM DE REFERÊNCIA ANEXADA
2. Estrutura e direção descritas neste prompt
3. JSON técnico de design fornecido no final
4. Boas práticas de responsividade e acessibilidade

Se existir qualquer conflito entre o JSON e a imagem:
SIGA A IMAGEM.

Não invente uma nova direção visual.

Não transforme o projeto em um template genérico de e-commerce.

Não tente "melhorar" arbitrariamente o design criando:
- cards arredondados;
- gradientes;
- fundos escuros;
- fundos bege dominantes;
- sombras fortes;
- glassmorphism;
- excesso de ícones;
- badges;
- grandes caixas;
- elementos típicos de SaaS;
- efeitos chamativos.

Quero preservar a aparência editorial premium mostrada na referência.

==================================================
2. OBJETIVO
==================================================

A Home não deve parecer apenas um catálogo de produtos.

Ela deve funcionar como uma experiência editorial de marca na seguinte lógica:

MARCA
→ DESEJO
→ MANIFESTO
→ IDENTIDADE
→ COLEÇÃO
→ PRODUTOS
→ LOOK / STYLING
→ CATEGORIAS
→ LOJA FÍSICA
→ HISTÓRIA DA MARCA
→ INSTAGRAM
→ FOOTER

O produto faz parte da narrativa, mas não domina toda a página.

==================================================
3. FUNDO E DIREÇÃO VISUAL
==================================================

O fundo geral deve ser predominantemente BRANCO.

Base:
#FFFFFF

Fundos secundários extremamente suaves podem ser utilizados:
#F8F7F4
#F4F1EC

Texto principal:
#151515

Texto secundário:
#57534D

Dourado:
#B89661

O dourado deve ser usado com extrema moderação:
- pequenas linhas;
- estrelas;
- numeração;
- bordas;
- microdetalhes;
- alguns ícones.

NÃO criar grandes superfícies douradas.

Visual desejado:
quiet luxury / editorial luxury / contemporary jewelry boutique.

==================================================
4. CONTAINER E GRID
==================================================

Desktop de referência:
aproximadamente 1440px.

Criar container principal com aproximadamente:

max-width: 1320px

Margens laterais desktop:
60px a 72px

Tablet:
30px a 36px

Mobile:
18px a 20px

Utilizar grid de 12 colunas como base estrutural no desktop.

As seções devem possuir bastante espaço em branco.

Evitar compactar conteúdo.

==================================================
5. HEADER
==================================================

Reproduzir o header da referência.

Desktop:

AURA à esquerda.

Menu central:
- Novidades
- Coleções
- Comprar
- A AURA
- Loja

À direita:
- busca
- sacola

Header branco.
Muito limpo.
Sem sombra pesada.

Altura aproximada:
88–94px.

Logo editorial AURA.

No mobile:

hamburger | AURA centralizada | busca + sacola

A logo precisa permanecer visualmente centralizada.

==================================================
6. HERO
==================================================

Esta é uma das áreas mais importantes do projeto.

A composição desktop deve ser dividida aproximadamente:

39% conteúdo
61% fotografia

Lado esquerdo branco.

Lado direito com fotografia editorial.

Conteúdo:

Eyebrow:
✦ ACESSÓRIOS QUE REVELAM SUA ESSÊNCIA

Título:

O detalhe
muda tudo.

A palavra "tudo." deve possuir tratamento em itálico editorial.

Adicionar pequena linha dourada abaixo do título.

Texto:

Peças autorais que iluminam sua presença com naturalidade e intenção.

CTA:

DESCOBRIR COLEÇÃO →

Botão outline fino.
Nada arredondado.

A fotografia precisa ocupar toda a área direita.

object-fit: cover

A fotografia deve remeter a:
- joias douradas;
- modelo feminina;
- roupa branca, creme ou neutra;
- luz natural;
- fotografia de moda premium;
- enquadramento editorial.

Adicionar sobre a fotografia um controle circular:

ASSISTA AO FILME

com botão play central.

Esse botão pode abrir futuramente um vídeo em modal.

==================================================
7. MANIFESTO
==================================================

Depois da Hero NÃO colocar produtos imediatamente.

Criar uma pausa editorial branca.

Pequena estrela dourada centralizada.

Texto serif centralizado:

AURA existe para transformar o simples em inesquecível.
Autoralidade, brilho e propósito em cada detalhe.

Dar tratamento itálico à palavra:
inesquecível.

Usar muito espaço vertical.

==================================================
8. AURA EM DETALHES
==================================================

Criar header de seção:

AURA EM DETALHES ───────────────────── DESLIZE PARA EXPLORAR →

Abaixo, criar três composições.

01.
ESSÊNCIA

Fotografia próxima de uma modelo utilizando acessórios.

Texto:
Peças que acompanham seus melhores momentos.

02.
DETALHE

Macro de joia / acabamento.

Texto:
Design autoral, acabamentos impecáveis.

03.
AURA

Produto isolado, preferencialmente anel.

Texto:
O detalhe que revela quem você é.

No terceiro elemento adicionar uma elipse irregular / traço editorial envolvendo parcialmente a joia, semelhante à referência.

IMPORTANTE:

Não transformar esses elementos em três cards idênticos.

Deve existir irregularidade editorial controlada.

No mobile:
usar scroll horizontal com scroll-snap.

==================================================
9. COLEÇÃO LUMINAR
==================================================

Criar seção onde storytelling e e-commerce se encontram.

Desktop:

uma grande imagem editorial à esquerda
+
três produtos à direita.

Proporção aproximada:

2fr 1fr 1fr 1fr

Na imagem maior:

COLEÇÃO
LUMINAR

Luz que acompanha seus melhores momentos.

CONHECER COLEÇÃO →

Ao lado:
- Colar Luminar
- Brinco Luminar
- Anel Luminar

Cada produto:
imagem grande e limpa
nome
preço

Sem cards flutuantes.

Sem grandes borders radius.

==================================================
10. CURADORIA AURA
==================================================

Header:

CURADORIA AURA ───────────────────────────────── VER TUDO →

Grade desktop com 4 produtos.

Cada item deverá possuir:

imagem;
nome;
preço;
coração discreto no canto superior;
botão + circular discreto no canto inferior.

Background do produto:
#F7F6F3 aproximadamente.

Hover:

imagem:
scale(1.025)

transition:
500–700ms

Nada exagerado.

==================================================
11. LOOK AURA
==================================================

Criar seção editorial Shop The Look.

Desktop:

aproximadamente 31% texto
69% fotografia

Texto:

LOOK
AURA

Combine peças, crie histórias e revele a sua melhor versão.

VER LOOK COMPLETO →

Ao lado:
grande fotografia horizontal da modelo.

Na extrema direita da fotografia:
PEÇAS DO LOOK

Exibir pequenas miniaturas verticais das joias utilizadas.

Essa seção deve parecer editorial e não uma grade de ecommerce.

==================================================
12. CATEGORIAS
==================================================

Header:

DESCUBRA SUA CATEGORIA ────────────────────────────────

Criar seis imagens:

BRINCOS
COLARES
ANÉIS
PULSEIRAS
BOLSAS
ÓCULOS

Desktop:
6 colunas.

Usar fotografias em vez de botões comuns.

Ao passar o mouse:
zoom extremamente sutil da imagem.

==================================================
13. RETIRE NA AURA
==================================================

Criar faixa informativa semelhante à referência.

Dividir horizontalmente:

1.
ícone de sacola

Retire na AURA

Você escolhe online, reserva pelo WhatsApp e retira na nossa loja.

2.
ícone de localização

Galeria Maria Mucci, nº 54,
loja 113A — Calçadão,
Viçosa/MG

3.
WhatsApp

(31) 98340-0829

4.
fotografia da loja física.

Usar divisórias finas.

Não criar cards individuais com sombra.

==================================================
14. HISTÓRIA AURA + INSTAGRAM
==================================================

Criar composição assimétrica.

À esquerda:

HISTÓRIA AURA

Texto institucional curto.

CONHEÇA A AURA →

Adicionar fotografia editorial em preto e branco.

À direita:

NO INSTAGRAM

@auraacessorios

Criar grid de imagens de Instagram.

Desktop:
4 colunas aproximadamente.

Adicionar:
VER MAIS →

==================================================
15. FOOTER
==================================================

Footer claro.

Não usar fundo preto.

Logo AURA grande à esquerda.

Criar grupos:

AURA
- Sobre
- Manifesto
- Blog

AJUDA
- Dúvidas Frequentes
- Como Funciona
- Cuidados

ATENDIMENTO
- WhatsApp
- Telefone
- E-mail

SIGA AURA
- Instagram
- WhatsApp

Divisórias extremamente discretas.

==================================================
16. TIPOGRAFIA
==================================================

Precisamos de forte contraste entre:

SERIF EDITORIAL
+
SANS SERIF CONTEMPORÂNEA.

Para títulos utilizar uma direção semelhante a:
- Bodoni Moda
- Cormorant Garamond
- DM Serif Display
- Didot-like

Escolha a fonte disponível que mais se aproxime visualmente da imagem.

Não utilizar serif antiquada ou excessivamente ornamental.

Para interface:
Inter, Manrope, Helvetica Neue ou equivalente.

Hero desktop:

font-size:
clamp(48px, 5.2vw, 82px)

line-height:
aproximadamente 0.95

letter-spacing:
-0.02em a -0.03em

Labels:
uppercase
11–12px
letter-spacing alto.

==================================================
17. BORDAS, RADIUS E SOMBRAS
==================================================

Esta regra é muito importante.

Não utilizar o padrão moderno genérico:

border-radius: 20px;
box-shadow;
cards flutuantes.

Prefira:

border-radius: 0;

border:
1px solid #ECE9E4;

box-shadow:
none;

A sofisticação deve vir de:

fotografia
+
grid
+
tipografia
+
espaço negativo
+
proporções.

==================================================
18. RESPONSIVIDADE
==================================================

Não quero simplesmente reduzir o desktop.

Criar composição mobile específica.

Breakpoint principal:
768px.

Mobile:

Header compacto.

Hero editorial adaptada.

Título aproximadamente:
38–42px.

Fotografia continua protagonista.

AURA em Detalhes:
scroll horizontal.

Coleção Luminar:
imagem editorial primeiro e produtos abaixo ou em carousel horizontal.

Curadoria:
2 produtos por linha.

Look AURA:
empilhar conteúdo e fotografia.

Categorias:
2 por linha.

Retire na AURA:
empilhar informações.

Instagram:
2 colunas.

Footer:
usar accordions caso necessário.

A página mobile deve manter a mesma percepção premium do desktop.

==================================================
19. MOTION
==================================================

Adicionar movimentos discretos.

Ao entrar na viewport:

opacity:
0 → 1

translateY:
18px → 0

duration:
aproximadamente 700ms

easing:
cubic-bezier(0.22,1,0.36,1)

Nas imagens:

parallax de apenas 2%–4% quando apropriado.

Hover:

scale:
1 → 1.025

Links com seta:

translateX:
0 → 5px

Evitar:
- animações saltitantes;
- elementos girando;
- excesso de blur;
- scroll hijacking;
- animações artificiais;
- efeitos de IA aparentes.

==================================================
20. COMPONENTIZAÇÃO
==================================================

Não construir toda a página dentro de um único arquivo.

Criar componentes aproximadamente assim:

AuraHeader
AuraHero
BrandManifesto
AuraDetails
FeaturedCollection
ProductShelf
ProductCard
LookAura
CategoryDiscovery
StorePickup
BrandStory
InstagramGallery
AuraFooter

Criar componentes reutilizáveis para:

SectionHeader
EditorialHeading
ArrowLink
GoldStar
ProductCard

==================================================
21. IMAGENS
==================================================

As imagens são fundamentais.

Se as imagens exatas da referência não estiverem disponíveis:

NÃO substitua por imagens completamente diferentes que alterem a direção artística.

Use placeholders temporários com dimensões corretas e preserve rigorosamente:

- aspect ratio;
- enquadramento;
- posição;
- escala;
- espaço ocupado.

Prepare a estrutura para substituição posterior pelas fotografias oficiais da AURA.

Não utilizar ilustrações genéricas.

==================================================
22. SISTEMA EXISTENTE
==================================================

Se este projeto estiver sendo construído sobre o projeto AURA já existente:

PRESERVE:
- catálogo existente;
- produtos;
- Supabase;
- autenticação existente, se houver;
- banco;
- carrinho;
- integrações;
- URLs;
- regras comerciais;
- estrutura de dados existente.

Não recrie o backend sem necessidade.

A tarefa principal aqui é reconstruir a CAMADA VISUAL e a experiência da Home.

Não fazer alterações destrutivas no banco de dados.

==================================================
23. FIDELIDADE
==================================================

Antes de considerar a página concluída, compare visualmente com a imagem de referência.

Observe principalmente:

- largura das seções;
- altura da Hero;
- proporção texto/fotografia;
- tamanho dos títulos;
- posicionamento das fotografias;
- quantidade de espaço branco;
- alinhamentos;
- largura dos produtos;
- ritmo vertical;
- proporção das categorias;
- dimensões das imagens;
- localização dos CTAs;
- footer;
- versão mobile.

Quero uma implementação baseada em medidas e proporções observáveis, e não apenas uma interpretação do estilo.

==================================================
24. NÃO FAZER
==================================================

Não:

- redesenhar a página em outra direção;
- criar aparência de template;
- criar dezenas de cards;
- exagerar no bege;
- usar fundo preto predominante;
- exagerar no dourado;
- adicionar gradients desnecessários;
- adicionar textos que não existem;
- substituir grandes fotografias por ícones;
- centralizar tudo;
- colocar todos os conteúdos dentro de containers arredondados;
- gerar layout estilo dashboard;
- transformar o site em catálogo simples.

==================================================
25. PRIMEIRA ENTREGA
==================================================

Implemente primeiro a HOME completa com:

1. Header
2. Hero
3. Manifesto
4. AURA em Detalhes
5. Coleção Luminar
6. Curadoria AURA
7. Look AURA
8. Categorias
9. Retire na AURA
10. História AURA
11. Instagram
12. Footer

Implemente desktop e mobile.

Depois faça uma revisão visual completa procurando divergências em relação à referência.

Não avance criando outras páginas até a Home estar visualmente consistente.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aura-editorial-rebuild.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2cccce10-185d-4c8a-aed7-7e79c5d36c54).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
