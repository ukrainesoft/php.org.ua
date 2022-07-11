- [«SolrClient::getById](solrclient.getbyid.md)
- [SolrClient::getDebug »](solrclient.getdebug.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Отримує документи щодо їх ідентифікаторів. Використовує Solr Realtime
Get (RTG)

# SolrClient::getByIds

(PECL solr \>u003d 2.2.0)

SolrClient::getByIds — Отримує документи щодо їх ідентифікаторів.
Використовує Solr Realtime Get (RTG)

### Опис

public **SolrClient::getByIds**(array `$ids`):
[SolrQueryResponse](class.solrqueryresponse.md)

Отримує документи щодо їх ідентифікаторів. Використовує Solr Realtime Get
(RTG)

### Список параметрів

`ids`
ID документів

### Значення, що повертаються

[SolrQueryResponse](class.solrqueryresponse.md)

### Приклади

**Приклад #1 Приклад використання **SolrClient::getByIds()****

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,    'path'     u003d> SOLR_SERVER_PATH) ;$client u003d new SolrClient($options);$response u003d $client->getByIds(['GB18030TEST', '6H500F0']);print_r($response->getResponse());?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[response] u003d> SolrObject Object
(
[numFound] u003d> 2
[start] u003d> 0
[docs] u003d> Array
(
[0] u003d> SolrObject Object
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

[1] u003d> SolrObject Object
(
[id] u003d> 6H500F0
[name] u003d> Array
(
[0] u003d> Maxtor DiamondMax 11 - hard drive - 500 GB - SATA-300
)

[manu] u003d> Array
(
[0] u003d> Maxtor Corp.
)

[manu_id_s] u003d> maxtor
[cat] u003d> Array
(
[0] u003d> electronics
[1] u003d> hard drive
)

[features] u003d> Array
(
[0] u003d> SATA 3.0Gb/s, NCQ
[1] u003d> 8.5ms seek
[2] u003d> 16MB cache
)

[price] u003d> Array
(
[0] u003d> 350
)

[popularity] u003d> Array
(
[0] u003d> 6
)

[inStock] u003d> Array
(
[0] u003d> 1
)

[store] u003d> Array
(
[0] u003d> 45.17614,-93.87341
)

[manufacturedate_dt] u003d> 2006-02-13T15:26:37Z
[_version_] u003d> 1510294336449806336
)

)

)

)

### Дивіться також

- [SolrClient::getById()](solrclient.getbyid.md) - Отримує документ
за ідентифікатором. Використовує Solr Realtime Get (RTG)
