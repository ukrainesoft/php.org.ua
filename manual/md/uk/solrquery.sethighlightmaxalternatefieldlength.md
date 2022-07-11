- [«
SolrQuery::setHighlightHighlightMultiTerm](solrquery.sethighlighthighlightmultiterm.md)
- [SolrQuery::setHighlightMaxAnalyzedChars
»](solrquery.sethighlightmaxanalyzedchars.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Встановлює максимальну кількість символів поля для повернення

# SolrQuery::setHighlightMaxAlternateFieldLength

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightMaxAlternateFieldLength — Встановлює
максимальна кількість символів поля для повернення

### Опис

public **SolrQuery::setHighlightMaxAlternateFieldLength**(int
`$fieldLength`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

Якщо SolrQuery::setHighlightAlternateField() було передано значення
**`true`**, цей параметр вказує максимальну кількість символів
поля для повернення

Будь-яке значення менше або 0 означає необмежене.

### Список параметрів

`fieldLength`
Довжина поля

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
