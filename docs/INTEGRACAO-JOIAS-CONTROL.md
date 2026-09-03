# Integração com o Joias Control

O Joias Control continua sendo a fonte oficial. O site não acessa o SQLite pela internet e não usa banco online: ele publica somente um retrato estático do catálogo.

## Publicar o catálogo

No Windows, abra `Atualizar vitrine AURA.cmd` na raiz do projeto com dois cliques.
O atalho verifica a branch `redesign/aura-master-v1`, pede para fechar o Joias Control
e mostra o total de produtos, fotos e categorias ausentes depois da exportação.
Ele atualiza somente os arquivos locais: confira as alterações no GitHub Desktop,
faça commit e Push origin, valide a prévia e promova a versão na Vercel.
Para conferir a configuração sem exportar, execute
`node --experimental-sqlite tools/joias-control-publicador/atualizar-vitrine.mjs --check`.

Com o Joias Control fechado, execute na pasta deste site:

```powershell
npm run catalog:publish
```

O publicador abre o banco em modo somente leitura, seleciona apenas produtos com estoque e gera:

- `public/catalogo.json`
- `public/catalogo/produtos/*`

Clientes, vendas, custos, usuários e configurações internas nunca entram no arquivo público.

Se uma versão futura do Joias Control possuir o campo `exibir_catalogo`, apenas os produtos marcados serão publicados. Na versão 19.5, que ainda não possui esse campo, entram os produtos com estoque positivo.

Para usar outra pasta de dados, defina `JOIAS_CONTROL_DATA_DIR` antes de executar o comando.
