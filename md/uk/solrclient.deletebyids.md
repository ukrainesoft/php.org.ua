- [«SolrClient::deleteById](solrclient.deletebyid.md)
- [SolrClient::deleteByQueries »](solrclient.deletebyqueries.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Видаляє за ідентифікаторами

# SolrClient::deleteByIds

(PECL solr \> u003d 0.9.2)

SolrClient::deleteByIds — Видалити за ідентифікаторами

### Опис

public **SolrClient::deleteByIds**(array `$ids`):
[SolrUpdateResponse](class.solrupdateresponse.md)

Видаляє набір документів із зазначеним набором ідентифікаторів.

### Список параметрів

`ids`
Масив ідентифікаторів, що представляють поле uniqueKey, оголошене в
схемою для кожного документа, що видаляється. Повинна бути фактичною
змінна PHP.

### Значення, що повертаються

Повертає об'єкт [SolrUpdateResponse](class.solrupdateresponse.md)
або викидає виняток у разі помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Дивіться також

- [SolrClient::deleteById()](solrclient.deletebyid.md) - Видаляє за
ідентифікатору
- [SolrClient::deleteByQuery()](solrclient.deletebyquery.md) -
Видаляє всі документи, що відповідають заданому запиту
- [SolrClient::deleteByQueries()](solrclient.deletebyqueries.md) -
Видаляє всі документи, що відповідають будь-якому запиту.
