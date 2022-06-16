- [«
SolrQuery::getHighlightFormatter](solrquery.gethighlightformatter.md)
- [SolrQuery::getHighlightFragsize
»](solrquery.gethighlightfragsize.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає генератор фрагментів тексту для виділеного тексту

# SolrQuery::getHighlightFragmenter

(PECL solr \> u003d 0.9.2)

SolrQuery::getHighlightFragmenter — Повертає генератор фрагментів
тексту для виділеного тексту

### Опис

public **SolrQuery::getHighlightFragmenter**(string `$field_override` u003d
?): string

Повертає генератор фрагментів тексту виділеного тексту. Приймає
необов'язкове перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає рядок у разі успішного виконання та **`null`**, якщо
значення не задано
