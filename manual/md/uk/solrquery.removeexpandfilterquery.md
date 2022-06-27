- [«SolrQuery::getTimeAllowed](solrquery.gettimeallowed.md)
- [SolrQuery::removeExpandSortField
»](solrquery.removeexpandsortfield.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Видаляє запит розширеного фільтра

# SolrQuery::removeExpandFilterQuery

(PECL solr \>u003d 2.2.0)

SolrQuery::removeExpandFilterQuery — Видаляє запит на розширений фільтр

### Опис

public **SolrQuery::removeExpandFilterQuery**(string `$fq`):
[SolrQuery](class.solrquery.md)

Видаляє запит на розширений фільтр.

### Список параметрів

`fq`

### Значення, що повертаються

[SolrQuery](class.solrquery.md)

### Дивіться також

- [SolrQuery::setExpand()](solrquery.setexpand.md) -
Включає/вимикає компонент Expand
- [SolrQuery::addExpandSortField()](solrquery.addexpandsortfield.md) -
Впорядковує документи у розширених групах (параметр expand.sort)
- [SolrQuery::removeExpandSortField()](solrquery.removeexpandsortfield.md) -
Видаляє розширене поле сортування за допомогою параметра expand.sort
- [SolrQuery::setExpandRows()](solrquery.setexpandrows.md) -
Встановлює кількість рядків для відображення у кожній групі
(expand.rows). Типово 5
- [SolrQuery::setExpandQuery()](solrquery.setexpandquery.md) -
Встановлює параметр expand.q
- [SolrQuery::addExpandFilterQuery()](solrquery.addexpandfilterquery.md) -
Перевизначає запит основного фільтра, визначає, які документи
включити до основної групи
