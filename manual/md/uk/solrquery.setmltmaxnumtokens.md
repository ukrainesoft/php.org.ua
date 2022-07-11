- [«
SolrQuery::setMltMaxNumQueryTerms](solrquery.setmltmaxnumqueryterms.md)
- [SolrQuery::setMltMaxWordLength
»](solrquery.setmltmaxwordlength.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Задає максимальну кількість токенів для аналізу

# SolrQuery::setMltMaxNumTokens

(PECL solr \> u003d 0.9.2)

SolrQuery::setMltMaxNumTokens — Задає максимальну кількість токенів
для аналізу

### Опис

public **SolrQuery::setMltMaxNumTokens**(int `$value`):
[SolrQuery](class.solrquery.md)

Задає максимальну кількість токенів для аналізу у кожному прикладі поля
документа, який не зберігається за допомогою TermVector.

### Список параметрів

`value`
Максимальна кількість токенів для аналізу

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
