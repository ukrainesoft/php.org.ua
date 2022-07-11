- [«SolrServerException](class.solrserverexception.md)
- [SolrIllegalArgumentException
»](class.solrillegalargumentexception.md)

- [PHP Manual](index.md)
- [SolrServerException](class.solrserverexception.md)
- Повертає внутрішню інформацію про те, де було викинуто
виняток

# SolrServerException::getInternalInfo

(PECL solr \>u003d 1.1.0, \>u003d2.0.0)

SolrServerException::getInternalInfo — Повертає внутрішню інформацію
про те, де було викинуто виняток

### Опис

public **SolrServerException::getInternalInfo**(): array

Повертає внутрішню інформацію про те, де викинули виняток.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив, що містить інформацію про те, де було викинуто
виняток. Використовується лише розробниками модулів для налагодження.
