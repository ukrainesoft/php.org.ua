- [«SolrCollapseFunction::setHint](solrcollapsefunction.sethint.md)
- [SolrCollapseFunction::setMin »](solrcollapsefunction.setmin.md)

- [PHP Manual](index.md)
- [SolrCollapseFunction](class.solrcollapsefunction.md)
- Вибирає заголовки групи за максимальним значенням числового поля
або запит функції

# SolrCollapseFunction::setMax

(PECL solr \>u003d 2.2.0)

SolrCollapseFunction::setMax — Вибирає заголовки групи за
максимальному значенню числового поля або запиту функції

### Опис

public **SolrCollapseFunction::setMax**(string `$max`):
[SolrCollapseFunction](class.solrcollapsefunction.md)

Вибирає заголовки групи за максимальним значенням числового поля або
запиту функції.

### Список параметрів

`max`

### Значення, що повертаються

[SolrCollapseFunction](class.solrcollapsefunction.md)

### Приклади

**Приклад #1 Приклад використання **SolrCollapseFunction::setMax()****

` <?php$func u003d new SolrCollapseFunction('field_name');$func->setMax('sum(cscore(),field(some_field))');$query u003d new SolrQuery('*:*');$ query->collapse($func);?> `
