- [« SolrQuery::setHighlight](solrquery.sethighlight.md)
- [SolrQuery::setHighlightFormatter
»](solrquery.sethighlightformatter.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Задає поле резервного копіювання для використання

# SolrQuery::setHighlightAlternateField

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightAlternateField — Задає поле резервного
копіювання для використання

### Опис

public **SolrQuery::setHighlightAlternateField**(string `$field`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Якщо фрагмент не може бути створений через відсутність відповідних
виразів, можна вказати поле для використання в якості резервної
копії або стандартні зведення.

### Список параметрів

`field`
Ім'я резервного поля

`field_override`
Ім'я поля, для якого ми перевизначаємо цей параметр.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
