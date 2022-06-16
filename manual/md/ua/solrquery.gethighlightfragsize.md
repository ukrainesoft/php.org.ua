- [«
SolrQuery::getHighlightFragmenter](solrquery.gethighlightfragmenter.md)
- [SolrQuery::getHighlightHighlightMultiTerm
»](solrquery.gethighlighthighlightmultiterm.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає кількість символів фрагментів для виділення

# SolrQuery::getHighlightFragsize

(PECL solr \> u003d 0.9.2)

SolrQuery::getHighlightFragsize — Повертає кількість символів
фрагментів для виділення

### Опис

public **SolrQuery::getHighlightFragsize**(string `$field_override` u003d
?): int

Повертає кількість фрагментів символів для виділення. Нуль
передбачає відсутність фрагментації. Використовуйте все поле.

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає ціле число у разі успішного виконання та **`null`**, якщо
значення не задано
