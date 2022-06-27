- [«SolrQuery::setTermsUpperBound](solrquery.settermsupperbound.md)
- [SolrDisMaxQuery »](class.solrdismaxquery.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Час, відведений на пошук

# SolrQuery::setTimeAllowed

(PECL solr \> u003d 0.9.2)

SolrQuery::setTimeAllowed — Час, відведений на пошук

### Опис

public **SolrQuery::setTimeAllowed**(int `$timeAllowed`):
[SolrQuery](class.solrquery.md)

Час, відведений для завершення пошуку. Це значення відноситься тільки до
пошуку, а не до запитів загалом. Час у мілісекундах. Значення,
менші або рівні нулю, не припускають обмеження часу.
Часткові результати можуть бути повернуті, якщо вони є.

### Список параметрів

`timeAllowed`
Час, відведений для завершення пошуку.

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.
