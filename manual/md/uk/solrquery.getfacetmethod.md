- [«SolrQuery::getFacetLimit](solrquery.getfacetlimit.md)
- [SolrQuery::getFacetMinCount »](solrquery.getfacetmincount.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає значення параметра facet.method

# SolrQuery::getFacetMethod

(PECL solr \> u003d 0.9.2)

SolrQuery::getFacetMethod — Повертає значення параметра facet.method

### Опис

public **SolrQuery::getFacetMethod**(string `$field_override` u003d ?):
string

Повертає параметр facet.method. Приймає необов'язкове
перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає рядок у разі успішного виконання та **`null`**, якщо
значення не задано
