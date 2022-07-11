- [«SolrClient::\_\_construct](solrclient.construct.md)
- [SolrClient::deleteByIds »](solrclient.deletebyids.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Видаляє за ідентифікатором

# SolrClient::deleteById

(PECL solr \> u003d 0.9.2)

SolrClient::deleteById — Видалити за ідентифікатором

### Опис

public **SolrClient::deleteById**(string `$id`):
[SolrUpdateResponse](class.solrupdateresponse.md)

Видаляє документ із зазначеним ідентифікатором. Де ID – значення поля
uniqueKey, оголошеного у схемі.

### Список параметрів

`id`
Значення поля uniqueKey, оголошене у схемі

### Значення, що повертаються

Повертає об'єкт [SolrUpdateResponse](class.solrupdateresponse.md)
або викидає виняток у разі помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Дивіться також

- [SolrClient::deleteByIds()](solrclient.deletebyids.md) - Видаляє
за ідентифікаторами
- [SolrClient::deleteByQuery()](solrclient.deletebyquery.md) -
Видаляє всі документи, що відповідають заданому запиту
- [SolrClient::deleteByQueries()](solrclient.deletebyqueries.md) -
Видаляє всі документи, що відповідають будь-якому запиту.
