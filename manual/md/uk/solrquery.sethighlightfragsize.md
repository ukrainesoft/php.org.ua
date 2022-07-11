- [«
SolrQuery::setHighlightFragmenter](solrquery.sethighlightfragmenter.md)
- [SolrQuery::setHighlightHighlightMultiTerm
»](solrquery.sethighlighthighlightmultiterm.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- розмір фрагментів, які слід враховувати при виділенні

# SolrQuery::setHighlightFragsize

(PECL solr \> u003d 0.9.2)

SolrQuery::setHighlightFragsize — Розмір фрагментів, які слідують
враховувати при виділенні

### Опис

public **SolrQuery::setHighlightFragsize**(int `$size`, string
`$field_override` u003d ?): [SolrQuery](class.solrquery.md)

Встановлює розмір символів фрагментів для виділення. "0" вказує,
що слід використати всі значення поля (без фрагментації).

### Список параметрів

`size`
Розмір символів фрагментів, які слід враховувати при виділенні

`field_override`
Ім'я поля

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
