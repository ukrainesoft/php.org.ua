- [« SolrQuery::getFacetQueries](solrquery.getfacetqueries.md)
- [SolrQuery::getFields »](solrquery.getfields.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає тип сортування фасету

# SolrQuery::getFacetSort

(PECL solr \> u003d 0.9.2)

SolrQuery::getFacetSort — Повертає тип сортування фасету

### Опис

public **SolrQuery::getFacetSort**(string `$field_override` u003d ?): int

Повертає ціле число (SolrQuery::FACET_SORT_INDEX або
SolrQuery::FACET_SORT_COUNT)

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає ціле число (SolrQuery::FACET_SORT_INDEX або
SolrQuery::FACET_SORT_COUNT) у разі успішного виконання і **`null`**,
якщо значення не задано
