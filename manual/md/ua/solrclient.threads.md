- [«SolrClient::system](solrclient.system.md)
- [SolrResponse »](class.solrresponse.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Перевіряє статус тем

# SolrClient::threads

(PECL solr \> u003d 0.9.2)

SolrClient::threads — Перевіряє статус тем

### Опис

public **SolrClient::threads**(): void

Перевіряє статус тем

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт SolrGenericResponse.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.
