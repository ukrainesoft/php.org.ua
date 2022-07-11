- [« SolrQuery::setFacetPrefix](solrquery.setfacetprefix.md)
- [SolrQuery::setGroup »](solrquery.setgroup.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Визначає порядок обмежень поля фасету

# SolrQuery::setFacetSort

(PECL solr \> u003d 0.9.2)

SolrQuery::setFacetSort — Визначає порядок обмежень поля фасету

### Опис

public **SolrQuery::setFacetSort**(int `$facetSort`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Визначає порядок обмежень поля фасету

### Список параметрів

`facetSort`
Використовуйте SolrQuery :: FACET_SORT_INDEX для сортування по порядку
індекс або SolrQuery::FACET_SORT_COUNT для сортування за кількістю.

`field_override`
Назва поля.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
