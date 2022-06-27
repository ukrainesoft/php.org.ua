- [«SolrQuery::setFacetOffset](solrquery.setfacetoffset.md)
- [SolrQuery::setFacetSort »](solrquery.setfacetsort.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- визначає рядковий префікс, за допомогою якого обмежуються
вирази, на яких виконується фасет

# SolrQuery::setFacetPrefix

(PECL solr \> u003d 0.9.2)

SolrQuery::setFacetPrefix — Визначає рядковий префікс за допомогою
якого обмежуються вирази, на яких виконується фасет

### Опис

public **SolrQuery::setFacetPrefix**(string `$prefix`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Визначає рядковий префікс, за допомогою якого обмежуються
вирази, у яких виконується фасет.

### Список параметрів

`prefix`
Строковий префікс

`field_override`
Назва поля.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
