- [«SolrClient::ping](solrclient.ping.md)
- [SolrClient::request »](solrclient.request.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Надсилає запит на сервер

# SolrClient::query

(PECL solr \> u003d 0.9.2)

SolrClient::query — Надсилає запит на сервер

### Опис

public **SolrClient::query**([SolrParams](class.solrparams.md)
`$query`): [SolrQueryResponse](class.solrqueryresponse.md)

Надсилає запит на сервер.

### Список параметрів

`query`
Об'єкт [SolrParams](class.solrparams.md). Для складних запитів
рекомендується використовувати [SolrQuery](class.solrquery.md).

### Значення, що повертаються

Повертає об'єкт [SolrQueryResponse](class.solrqueryresponse.md) у
у разі успішного виконання або викидає виняток у разі
виникнення помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Приклади

**Приклад #1 Приклад використання **SolrClient::query()****

`<?php$options u003d array(   'hostname' u003d> 'localhost',   'login'    u003d> 'username',    'password' u003d>                 new SolrClient($options);$query u003d new SolrQuery();$query->setQuery('lucene');$query->setStart(0);$query->setRows(50);$query->addField( 'cat')->addField('features')->addField('id')->addField('timestamp');$query_response u003d $client->query($query);$response u003d $query_response->getResponse ();print_r($response);?> `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 3
[params] u003d> SolrObject Object
(
[fl] u003d> cat,features,id,timestamp
[indent] u003d> on
[start] u003d> 0
[q] u003d> lucene
[wt] u003d> xml
[version] u003d> 2.2
[rows] u003d> 50
)

)

[response] u003d> SolrObject Object
(
[numFound] u003d> 1
[start] u003d> 0
[docs] u003d> Array
(
[0] u003d> SolrObject Object
(
[id] u003d> SOLR1000
[cat] u003d> Array
(
[0] u003d> software
[1] u003d> search
)

[features] u003d> Array
(
[0] u003d> Advanced Full-Text Search Capabilities using Lucene
[1] u003d> Optimized for High Volume Web Traffic
[2] u003d> Standards Based Open Interfaces - XML and HTTP
[3] u003d> Comprehensive HTML Administration Interfaces
[4] u003d> Scalability - Efficient Replication to other Solr Search Servers
[5] u003d> Flexible and Adaptable with XML configuration and Schema
[6] u003d> Good unicode support: héllo (hello with an accent over the e)
)

)

)

)

)
