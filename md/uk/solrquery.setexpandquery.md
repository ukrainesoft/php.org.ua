- [«SolrQuery::setExpand](solrquery.setexpand.md)
- [SolrQuery::setExpandRows »](solrquery.setexpandrows.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Встановлює параметр expand.q

# SolrQuery::setExpandQuery

(PECL solr \>u003d 2.2.0)

SolrQuery::setExpandQuery — Встановлює параметр expand.q

### Опис

public **SolrQuery::setExpandQuery**(string `$q`):
[SolrQuery](class.solrquery.md)

Встановлює параметр expand.q

Перевизначає основний параметр q, визначає, які документи увімкнути
у основну групу.

### Список параметрів

`q`

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
- [SolrQuery::addExpandFilterQuery()](solrquery.addexpandfilterquery.md) -
Перевизначає запит основного фільтра, визначає, які документи
включити до основної групи
- [SolrQuery::removeExpandFilterQuery()](solrquery.removeexpandfilterquery.md) -
Видаляє запит розширеного фільтра
