- [«SolrQuery::getFacetMinCount](solrquery.getfacetmincount.md)
- [SolrQuery::getFacetOffset »](solrquery.getfacetoffset.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає стан параметра facet.missing

# SolrQuery::getFacetMissing

(PECL solr \> u003d 0.9.2)

SolrQuery::getFacetMissing — Повертає поточний стан параметра
facet.missing

### Опис

public **SolrQuery::getFacetMissing**(string `$field_override` u003d ?):
bool

Повертає поточний стан facet.missing. Приймає
необов'язкове перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає логічне значення у разі успішного виконання та
**`null`**, якщо значення не задано
