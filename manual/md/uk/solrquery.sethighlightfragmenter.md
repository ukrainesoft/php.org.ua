- [«
SolrQuery::setHighlightFormatter](solrquery.sethighlightformatter.md)
- [SolrQuery::setHighlightFragsize
»](solrquery.sethighlightfragsize.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Встановлює генератор текстових фрагментів для виділеного тексту

# SolrQuery::setHighlightFragmenter

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightFragmenter — Встановлює генератор текстових
фрагментів для виділеного тексту

### Опис

public **SolrQuery::setHighlightFragmenter**(string `$fragmenter`,
string `$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Задає генератор текстового фрагмента виділеного тексту.

### Список параметрів

`fragmenter`
Стандартний фрагментер – розрив. Інший варіант - регулярне вираження,
яке намагається створити фрагменти, схожі на певне регулярне
вираз.

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
