- [«SolrClient::query](solrclient.query.md)
- [SolrClient::rollback »](solrclient.rollback.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Надсилає необроблений запит на оновлення

# SolrClient::request

(PECL solr \> u003d 0.9.2)

SolrClient::request — Надсилає необроблений запит на оновлення

### Опис

public **SolrClient::request**(string `$raw_request`):
[SolrUpdateResponse](class.solrupdateresponse.md)

Надсилає на сервер необроблений запит на оновлення XML

### Список параметрів

`raw_request`
Рядок XML з необробленим запитом до сервера.

### Значення, що повертаються

Повертає [SolrUpdateResponse](class.solrupdateresponse.md) у разі
успішного виконання. Викидає виняток у разі виникнення
помилки.

### Помилки

Викидає
[SolrIllegalArgumentException](class.solrillegalargumentexception.md),
якщо `raw_request` є порожнім рядком.

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Приклади

**Приклад #1 Приклад використання **SolrClient::request()****

` <?php$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient($options);$ update_responseu003du003d$client->request("<commit/>");$responseu003du003d$update_response->getResponse();print_r($response);?> `

Результатом виконання цього прикладу буде щось подібне:

...
