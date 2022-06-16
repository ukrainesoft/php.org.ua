- [« SolrClient::deleteByQueries](solrclient.deletebyqueries.md)
- [SolrClient::\_\_destruct »](solrclient.destruct.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Видаляє всі документи, що відповідають заданому запиту

# SolrClient::deleteByQuery

(PECL solr \> u003d 0.9.2)

SolrClient::deleteByQuery — Видаляє всі відповідні документи.
заданому запиту

### Опис

public **SolrClient::deleteByQuery**(string `$query`):
[SolrUpdateResponse](class.solrupdateresponse.md)

Видаляє всі документи, які відповідають заданому запиту.

### Список параметрів

`query`
Запит

### Значення, що повертаються

Повертає об'єкт [SolrUpdateResponse](class.solrupdateresponse.md)
або викидає виняток у разі помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Приклади

**Приклад #1 Приклад використання **SolrQuery::deleteByQuery()****

` <?php$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient($options);/ /Це соттре весь індекс$client->deleteByQuery("*:*");$client->commit();?> `

### Дивіться також

- [SolrClient::deleteById()](solrclient.deletebyid.md) - Видаляє за
ідентифікатору
- [SolrClient::deleteByIds()](solrclient.deletebyids.md) - Видаляє
за ідентифікаторами
- [SolrClient::deleteByQueries()](solrclient.deletebyqueries.md) -
Видаляє всі документи, що відповідають будь-якому запиту.
