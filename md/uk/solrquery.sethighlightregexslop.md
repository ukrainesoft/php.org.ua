- [«
SolrQuery::setHighlightRegexPattern](solrquery.sethighlightregexpattern.md)
- [SolrQuery::setHighlightRequireFieldMatch
»](solrquery.sethighlightrequirefieldmatch.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Встановлює коефіцієнт, на який фрагментатор регулярно
вирази може відхилитися від ідеального розміру фрагмента

# SolrQuery::setHighlightRegexSlop

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightRegexSlop — Встановлює коефіцієнт, на який
фрагментатор регулярного вираження може відхилитися від ідеального
розміру фрагмента

### Опис

public **SolrQuery::setHighlightRegexSlop**(float `$factor`):
[SolrQuery](class.solrquery.md)

Коефіцієнт, який фрагментатор регулярного виразу може
відхилитися від ідеального розміру фрагмента (зазначеного в
SolrQuery::setHighlightFragsize) для відповідності регулярному виразу.

### Список параметрів

`factor`
Коефіцієнт, який фрагментатор регулярного виразу може
відхилитися від ідеального розміру фрагмента

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
