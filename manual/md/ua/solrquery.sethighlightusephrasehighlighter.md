- [«
SolrQuery::setHighlightSnippets](solrquery.sethighlightsnippets.md)
- [SolrQuery::setMlt »](solrquery.setmlt.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Чи слід виділяти вирази тільки тоді, коли вони з'являються в
фразі запиту

# SolrQuery::setHighlightUsePhraseHighlighter

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightUsePhraseHighlighter — Чи слід виділяти
вирази лише тоді, коли вони з'являються у фразі запиту

### Опис

public **SolrQuery::setHighlightUsePhraseHighlighter**(bool `$flag`):
[SolrQuery](class.solrquery.md)

Встановлює, чи слід використовувати SpanScorer для виділення
виразів тільки тоді, коли вони з'являються у фразі запиту
документ.

### Список параметрів

`value`
Встановлює, чи слід використовувати SpanScorer для виділення
виразів тільки тоді, коли вони з'являються у фразі запиту
документ.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
