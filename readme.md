# Desafio Proposto

* Sistema de build simples para a SPA. [x] -> Webpack;
* Mapa:​ exibir todas as lojas no mapa. As lojas com faturamento inferior ao mínimo esperado devem estar em vermelho. [x]
* Incluir filtro de valor minimo [x]
* Listagem paginada:​ ao carregar a página, já trazer uma listagem com 10 lojas por página ordenadas pelo nome da loja, seguindo o protótipo. As lojas com faturamento inferior ao configurado no campo “Faturamento mínimo esperado” devem estar em vermelho. [X]
* Pesquisa:​ Filtrar as lojas pelo nome, tanto na lista quanto no mapa, durante a digitação do texto digitado. [x]
* Faturamento mínimo esperado:​ O valor default desse campo é 15.000,00. As alterações neste campo devem refletir na listagem e no mapa. [x]
* [opcional]​ Permitir reordenar a listagem pelas colunas. [x]
* [opcional]​ Usar mecanismos de ​routing​ na paginação e filtro. [x]

**Sugestao de filtro incluida**: filtrar no mapa apenas lojas da pagina, ou todas as lojas retornadas.

## Execução

para executar esse projeto, faça o clone ou download do mesmo e siga as instruções:

* `yarn` ou `npm i`.
* `yarn start` ou `npm run start`.
* `yarn test` ou `npm run test` para executar o teste de render dos components.

**Routing** funciona com dois parametros por pagina da tabela **ou** por nome da loja, exemplo:

localhost:9000/**page1**
localhost:9000/**moema**