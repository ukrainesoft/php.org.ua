- [«
SolrQuery::getHighlightSnippets](solrquery.gethighlightsnippets.md)
- [SolrQuery::getMlt »](solrquery.getmlt.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає стан параметра hl.usePhraseHighlighter

# SolrQuery::getHighlightUsePhraseHighlighter

(PECL solr \> u003d 0.9.2)

SolrQuery::getHighlightUsePhraseHighlighter — Повертає стан
параметра hl.usePhraseHighlighter

### Опис

public **SolrQuery::getHighlightUsePhraseHighlighter**(): bool

Повертає, чи слід використовувати SpanScorer для виділення фразових
виразів, лише коли вони з'являються у фразі запиту документі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішного виконання повертає логічне значення та
**`null`**, якщо значення не встановлено.
