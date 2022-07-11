- [« SolrQuery::getTermsReturnRaw](solrquery.gettermsreturnraw.md)
- [SolrQuery::getTermsUpperBound »](solrquery.gettermsupperbound.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Повертає ціле число, яке вказує, як сортуються вирази

# SolrQuery::getTermsSort

(PECL solr \> u003d 0.9.2)

SolrQuery::getTermsSort — Повертає ціле число, яке вказує, як
сортуються вирази

### Опис

public **SolrQuery::getTermsSort**(): int

SolrQuery::TERMS_SORT_INDEX вказує, що вирази повертаються в
порядку індексу. SolrQuery::TERMS_SORT_COUNT має на увазі, що
вирази сортуються за частотою виразу (спочатку найвище
кількість)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішного виконання повертає ціле число і **`null`**, якщо
значення не встановлено.
