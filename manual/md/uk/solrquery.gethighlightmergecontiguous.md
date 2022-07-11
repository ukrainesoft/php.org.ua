- [«
SolrQuery::getHighlightMaxAnalyzedChars](solrquery.gethighlightmaxanalyzedchars.md)
- [SolrQuery::getHighlightRegexMaxAnalyzedChars
»](solrquery.gethighlightregexmaxanalyzedchars.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає, чи повернути суміжні фрагменти в один фрагмент

# SolrQuery::getHighlightMergeContiguous

(PECL solr \> u003d 0.9.2)

SolrQuery::getHighlightMergeContiguous — Повертає, чи згорнути суміжні
фрагменти в один фрагмент

### Опис

public **SolrQuery::getHighlightMergeContiguous**(string
`$field_override` u003d ?): bool

Повертає, чи повернути суміжні фрагменти в один фрагмент. Приймає
необов'язкове перевизначення поля

### Список параметрів

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає логічне значення у разі успішного виконання та
**`null`**, якщо значення не задано
