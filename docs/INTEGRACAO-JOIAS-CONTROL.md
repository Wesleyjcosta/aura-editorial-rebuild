# Integração com o Joias Control

O Joias Control continua sendo a fonte oficial. O site não acessa o SQLite pela internet e não usa banco online: ele publica somente um retrato estático do catálogo.

## Publicar o catálogo

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
