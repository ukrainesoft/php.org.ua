- [«SolrQuery::setFacetMinCount](solrquery.setfacetmincount.md)
- [SolrQuery::setFacetOffset »](solrquery.setfacetoffset.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Відповідає facet.missing

# SolrQuery::setFacetMissing

(PECL solr \> u003d 0.9.2)

SolrQuery::setFacetMissing — Відповідає facet.missing

### Опис

public **SolrQuery::setFacetMissing**(bool `$flag`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Використовується для позначення того, що на додаток до заснованих на
виразах обмежень поля фасета має бути обчислена кількість
всіх результатів зіставлення, які мають значення для поля.

### Список параметрів

`flag`
**`true`** включає цю функцію, **`false`** відключає її.

`field_override`
Назва поля.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
