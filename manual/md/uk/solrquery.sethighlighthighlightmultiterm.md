- [«
SolrQuery::setHighlightFragsize](solrquery.sethighlightfragsize.md)
- [SolrQuery::setHighlightMaxAlternateFieldLength
»](solrquery.sethighlightmaxalternatefieldlength.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Використовувати SpanScorer для виділення виразів

# SolrQuery::setHighlightHighlightMultiTerm

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightHighlightMultiTerm — Використовувати SpanScorer для
виділення виразів

### Опис

public **SolrQuery::setHighlightHighlightMultiTerm**(bool `$flag`):
[SolrQuery](class.solrquery.md)

Використовувати SpanScorer для виділення фразових виразів, тільки коли
вони з'являються у фразі запиту документі.

### Список параметрів

`flag`
Чи слід використовувати SpanScorer для виділення фразових виразів
лише тоді, коли вони з'являються у фразі запиту документі.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
