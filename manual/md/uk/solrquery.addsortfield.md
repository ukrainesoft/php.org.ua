- [« SolrQuery::addMltQueryField](solrquery.addmltqueryfield.md)
- [SolrQuery::addStatsFacet »](solrquery.addstatsfacet.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Використовується для керування сортуванням результатів

# SolrQuery::addSortField

(PECL solr \> u003d 0.9.2)

SolrQuery::addSortField — Використовується для керування сортуванням
результатів

### Опис

public **SolrQuery::addSortField**(string `$field`, int `$order` u003d
SolrQuery::ORDER_DESC): [SolrQuery](class.solrquery.md)

Використовується для керування сортуванням результатів.

### Список параметрів

`field`
Назва поля

`order`
Напрямок сортування. Має бути або SolrQuery::ORDER_ASC, або
SolrQuery::ORDER_DESC.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery.
