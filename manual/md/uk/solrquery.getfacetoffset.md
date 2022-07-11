- [«SolrQuery::getFacetMissing](solrquery.getfacetmissing.md)
- [SolrQuery::getFacetPrefix »](solrquery.getfacetprefix.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає зсув у списку обмежень, які будуть
використовуватися для посторінкової навігації

# SolrQuery::getFacetOffset

(PECL solr \> u003d 0.9.2)

SolrQuery::getFacetOffset — Повертає зсув у списку обмежень,
які будуть використовуватися для посторінкової навігації

### Опис

public **SolrQuery::getFacetOffset**(string `$field_override` u003d ?): int

Повертає зсув у списку обмежень, які будуть використовуватись
для посторінкової навігації. Приймає необов'язкове перевизначення
поля

### Список параметрів

`field_override`
Ім'я поля, яке потрібно перевизначити.

### Значення, що повертаються

У разі успішного виконання повертає ціле число і **`null`**, якщо
зміщення не встановлено
