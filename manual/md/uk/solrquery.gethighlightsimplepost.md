- [«
SolrQuery::getHighlightRequireFieldMatch](solrquery.gethighlightrequirefieldmatch.md)
- [SolrQuery::getHighlightSimplePre
»](solrquery.gethighlightsimplepre.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає текст, який з'являється після виділеного виразу

# SolrQuery::getHighlightSimplePost

(PECL solr \> u003d 0.9.2)

SolrQuery::getHighlightSimplePost — Повертає текст, який відображається
після виділеного виразу

### Опис

public **SolrQuery::getHighlightSimplePost**(string `$field_override` u003d
?): string

Повертає текст, який з'являється після виділення.
Приймає необов'язкове перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає рядок у разі успішного виконання та **`null`**, якщо
значення не задано
