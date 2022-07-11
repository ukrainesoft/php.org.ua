- [« SolrQuery::getFacetDateOther](solrquery.getfacetdateother.md)
- [SolrQuery::getFacetFields »](solrquery.getfacetfields.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає нижню межу першого діапазону дат для всіх аспектів
дати у цьому полі

# SolrQuery::getFacetDateStart

(PECL solr \> u003d 0.9.2)

SolrQuery::getFacetDateStart — Повертає нижню межу першого
діапазону дат для всіх аспектів дати у цьому полі

### Опис

public **SolrQuery::getFacetDateStart**(string `$field_override` u003d ?):
string

Повертає нижню межу першого діапазону дат для всіх аспектів дати
це поле. Приймає необов'язкове перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає рядок у разі успішного виконання та **`null`**, якщо
значення не задано
