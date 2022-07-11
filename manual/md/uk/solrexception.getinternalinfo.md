- [«SolrException](class.solrexception.md)
- [SolrClientException »](class.solrclientexception.md)

- [PHP Manual](index.md)
- [SolrException](class.solrexception.md)
- Повертає внутрішню інформацію про те, де було викинуто
виняток

# SolrException::getInternalInfo

(PECL solr \> u003d 0.9.2)

SolrException::getInternalInfo — Повертає внутрішню інформацію про те,
де було викинуто виняток

### Опис

public **SolrException::getInternalInfo**(): array

Повертає внутрішню інформацію про те, де викинули виняток.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив, що містить внутрішню інформацію про те, де була
викликана помилка. Використовується лише для налагодження розробниками модулів.
