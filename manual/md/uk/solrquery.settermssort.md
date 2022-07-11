- [«SolrQuery::setTermsReturnRaw](solrquery.settermsreturnraw.md)
- [SolrQuery::setTermsUpperBound »](solrquery.settermsupperbound.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Визначає, як сортувати повернені умови

# SolrQuery::setTermsSort

(PECL solr \> u003d 0.9.2)

SolrQuery::setTermsSort — Визначає, як сортувати повернені
умови

### Опис

public **SolrQuery::setTermsSort**(int `$sortType`):
[SolrQuery](class.solrquery.md)

Якщо SolrQuery::TERMS_SORT_COUNT сортує терміни за частотою
(Найбільше спочатку). Якщо SolrQuery::TERMS_SORT_INDEX,
повертає умови у порядку індексу

### Список параметрів

`sortType`
SolrQuery::TERMS_SORT_INDEX або SolrQuery::TERMS_SORT_COUNT

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
