- [«SolrQuery::setFacetLimit](solrquery.setfacetlimit.md)
- [SolrQuery::setFacetMinCount »](solrquery.setfacetmincount.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Задає тип алгоритму, який слід використовувати під час фасетування
поля

# SolrQuery::setFacetMethod

(PECL solr \> u003d 0.9.2)

SolrQuery::setFacetMethod — Задає тип алгоритму, який слідує
використовувати при фасетуванні поля

### Опис

public **SolrQuery::setFacetMethod**(string `$method`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Задає тип алгоритму, який слід використовувати під час фасетування
поля. Метод припускає перевизначення необов'язкового поля.

### Список параметрів

`method`
Використовуваний метод.

`field_override`
Назва поля.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
