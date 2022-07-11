- [«SolrQuery::getFields](solrquery.getfields.md)
- [SolrQuery::getGroup »](solrquery.getgroup.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає масив запитів фільтра

# SolrQuery::getFilterQueries

(PECL solr \> u003d 0.9.2)

SolrQuery::getFilterQueries — Повертає масив запитів фільтра

### Опис

public **SolrQuery::getFilterQueries**(): array

Повертає масив запитів фільтра. Це запити, які можна
використовувати для обмеження розширеного набору документів, які
можуть бути повернуті, не впливаючи на оцінку.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив у разі успішного виконання та **`null`**, якщо
значення не задано
