- [«
SolrQuery::setFacetEnumCacheMinDefaultFrequency](solrquery.setfacetenumcachemindefaultfrequency.md)
- [SolrQuery::setFacetMethod »](solrquery.setfacetmethod.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Відповідає facet.limit

# SolrQuery::setFacetLimit

(PECL solr \> u003d 0.9.2)

SolrQuery::setFacetLimit — Відповідає facet.limit

### Опис

public **SolrQuery::setFacetLimit**(int `$limit`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Відповідає facet.limit. Встановлює максимальну кількість
обмежень, які мають бути повернуті для полів фасета.

### Список параметрів

`limit`
Максимальна кількість обмежень

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
