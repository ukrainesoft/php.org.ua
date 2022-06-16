- [«SolrQuery::getFacetFields](solrquery.getfacetfields.md)
- [SolrQuery::getFacetMethod »](solrquery.getfacetmethod.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає максимальну кількість лічильників обмежень, яка
має бути повернено для полів фасету

# SolrQuery::getFacetLimit

(PECL solr \> u003d 0.9.2)

SolrQuery::getFacetLimit — Повертає максимальну кількість лічильників
обмежень, яке має бути повернене для полів фасету

### Опис

public **SolrQuery::getFacetLimit**(string `$field_override` u003d ?): int

Повертає максимальну кількість лічильників обмежень, що має
бути повернутий для полів фасета. Приймає необов'язкове
перевизначення поля

### Список параметрів

`field_override`
Ім'я поля, яке потрібно перевизначити

### Значення, що повертаються

Повертає ціле число у разі успішного виконання та **`null`**, якщо
значення не задано
