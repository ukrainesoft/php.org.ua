- [«SolrClient::\_\_destruct](solrclient.destruct.md)
- [SolrClient::getByIds »](solrclient.getbyids.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Отримує документ щодо ідентифікатора. Використовує Solr Realtime Get
(RTG)

# SolrClient::getById

(PECL solr \>u003d 2.2.0)

SolrClient::getById — Отримує документ для ідентифікатора. Використовує
Solr Realtime Get (RTG)

### Опис

public **SolrClient::getById**(string `$id`):
[SolrQueryResponse](class.solrqueryresponse.md)

Отримує документ щодо ідентифікатора. Використовує Solr Realtime Get (RTG)

### Список параметрів

`id`
ID документа

### Значення, що повертаються

[SolrQueryResponse](class.solrqueryresponse.md)

### Приклади

**Приклад #1 Приклад використання **SolrClient::getById()****

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,    'path'     u003d> SOLR_SERVER_PATH) ;$client u003d new SolrClient($options);$response u003d $client->getById('GB18030TEST');print_r($response->getResponse());?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[doc] u003d> SolrObject Object
(
[id] u003d> GB18030TEST
[name] u003d> Array
(
[0] u003d> Test with some GB18030 encoded characters
)

[features] u003d> Array
(
[0] u003d> No accents here
[1] u003d> 这是一个功能
[2] u003d> This is a feature (перекладається)
[3] u003d> 这份文件是很有光泽
[4] u003d> Цей документ є дуже shiny (translated)
)

[price] u003d> Array
(
[0] u003d> 0
)

[inStock] u003d> Array
(
[0] u003d> 1
)

[_version_] u003d> 1510294336239042560
)

)

### Дивіться також

- [SolrClient::getByIds()](solrclient.getbyids.md) - Отримує
документи щодо їх ідентифікаторів. Використовує Solr Realtime Get (RTG)
