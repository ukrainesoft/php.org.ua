- [«SolrQuery::setFacetMethod](solrquery.setfacetmethod.md)
- [SolrQuery::setFacetMissing »](solrquery.setfacetmissing.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Відповідає facet.mincount

# SolrQuery::setFacetMinCount

(PECL solr \> u003d 0.9.2)

SolrQuery::setFacetMinCount — Відповідає facet.mincount

### Опис

public **SolrQuery::setFacetMinCount**(int `$mincount`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Встановлює мінімальну кількість полів фасетів, які мають бути
включені у відповідь

### Список параметрів

`mincount`
Мінімальна кількість

`field_override`
Назва поля.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
