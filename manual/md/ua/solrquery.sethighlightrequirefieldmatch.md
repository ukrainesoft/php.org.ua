- [«
SolrQuery::setHighlightRegexSlop](solrquery.sethighlightregexslop.md)
- [SolrQuery::setHighlightSimplePost
»](solrquery.sethighlightsimplepost.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Вимагати зіставлення полів при виділенні

# SolrQuery::setHighlightRequireFieldMatch

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightRequireFieldMatch — Вимагати зіставлення полів
при виділенні

### Опис

public **SolrQuery::setHighlightRequireFieldMatch**(bool `$flag`):
[SolrQuery](class.solrquery.md)

Якщо **`true`**, тоді поле буде виділено лише в тому випадку, якщо
запит відповідає цьому конкретному полю.

Працюватиме, тільки якщо для
SolrQuery::setHighlightUsePhraseHighlighter() встановлено значення
**`true`**

### Список параметрів

`flag`
**`true`** або **`false`**

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
