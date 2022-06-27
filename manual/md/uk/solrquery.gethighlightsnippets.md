- [«
SolrQuery::getHighlightSimplePre](solrquery.gethighlightsimplepre.md)
- [SolrQuery::getHighlightUsePhraseHighlighter
»](solrquery.gethighlightusephrasehighlighter.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає максимальну кількість виділених фрагментів для
створення для кожного поля

# SolrQuery::getHighlightSnippets

(PECL solr \> u003d 0.9.2)

SolrQuery::getHighlightSnippets — Повертає максимальну кількість
виділених фрагментів для створення для кожного поля

### Опис

public **SolrQuery::getHighlightSnippets**(string `$field_override` u003d
?): int

Повертає максимальну кількість виділених фрагментів для створення
для кожного поля. Приймає необов'язкове перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає ціле число у разі успішного виконання та **`null`**, якщо
значення не встановлено.
