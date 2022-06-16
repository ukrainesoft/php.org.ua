- [«SolrClient::optimize](solrclient.optimize.md)
- [SolrClient::query »](solrclient.query.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Перевіряє, чи сервер Solr працює

# SolrClient::ping

(PECL solr \> u003d 0.9.2)

SolrClient::ping — Перевіряє, чи сервер Solr працює

### Опис

public **SolrClient::ping**():
[SolrPingResponse](class.solrpingresponse.md)

Перевіряє, чи доступний сервер Solr. Надсилає запит HEAD на сервер
Apache Solr.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [SolrPingResponse](class.solrpingresponse.md) у
у разі успішного виконання або викидає виняток у разі
виникнення помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Приклади

**Приклад #1 Приклад використання **SolrClient::ping()****

` <?php$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient($options);$ pingresponseu003du003d$client->ping();?> `

Результатом виконання цього прикладу буде щось подібне:
