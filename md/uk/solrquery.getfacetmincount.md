- [« SolrQuery::getFacetMethod](solrquery.getfacetmethod.md)
- [SolrQuery::getFacetMissing »](solrquery.getfacetmissing.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає мінімальну кількість полів аспектів, які мають
бути включені у відповідь

# SolrQuery::getFacetMinCount

(PECL solr \> u003d 0.9.2)

SolrQuery::getFacetMinCount — Повертає мінімальну кількість полів
аспектів, які повинні бути включені у відповідь

### Опис

public **SolrQuery::getFacetMinCount**(string `$field_override` u003d ?):
int

Повертає мінімальну кількість полів аспектів, які мають бути
включені у відповідь. Приймає необов'язкове перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає ціле число у разі успішного виконання та **`null`**, якщо
значення не задано
