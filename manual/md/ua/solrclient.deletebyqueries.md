- [« SolrClient::deleteByIds](solrclient.deletebyids.md)
- [SolrClient::deleteByQuery »](solrclient.deletebyquery.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Видаляє всі документи, що відповідають будь-якому із запитів

# SolrClient::deleteByQueries

(PECL solr \> u003d 0.9.2)

SolrClient::deleteByQueries — Видаляє всі відповідні документи.
будь-якому із запитів

### Опис

public **SolrClient::deleteByQueries**(array `$queries`):
[SolrUpdateResponse](class.solrupdateresponse.md)

Видаляє всі документи, що відповідають будь-якому запиту.

### Список параметрів

`queries`
Масив запитів. Це має бути фактична змінна php.

### Значення, що повертаються

Повертає SolrUpdateResponse у разі успішного виконання та
викидає SolrClientException у разі виникнення помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Дивіться також

- [SolrClient::deleteById()](solrclient.deletebyid.md) - Видаляє за
ідентифікатору
- [SolrClient::deleteByIds()](solrclient.deletebyids.md) - Видаляє
за ідентифікаторами
- [SolrClient::deleteByQuery()](solrclient.deletebyquery.md) -
Видаляє всі документи, що відповідають заданому запиту
