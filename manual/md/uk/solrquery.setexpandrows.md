- [«SolrQuery::setExpandQuery](solrquery.setexpandquery.md)
- [SolrQuery::setExplainOther »](solrquery.setexplainother.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Встановлює кількість рядків для відображення у кожній групі
(expand.rows). Типово 5

# SolrQuery::setExpandRows

(PECL solr \>u003d 2.2.0)

SolrQuery::setExpandRows — Встановлює кількість рядків для
відображення у кожній групі (expand.rows). Типово 5

### Опис

public **SolrQuery::setExpandRows**(int `$value`):
[SolrQuery](class.solrquery.md)

Встановлює кількість рядків для відображення у кожній групі
(expand.rows). Типово 5

### Список параметрів

`value`

### Значення, що повертаються

[SolrQuery](class.solrquery.md)

### Дивіться також

- [SolrQuery::setExpand()](solrquery.setexpand.md) -
Включає/вимикає компонент Expand
- [SolrQuery::addExpandSortField()](solrquery.addexpandsortfield.md) -
Впорядковує документи у розширених групах (параметр expand.sort)
- [SolrQuery::removeExpandSortField()](solrquery.removeexpandsortfield.md) -
Видаляє розширене поле сортування за допомогою параметра expand.sort
- [SolrQuery::setExpandQuery()](solrquery.setexpandquery.md) -
Встановлює параметр expand.q
- [SolrQuery::addExpandFilterQuery()](solrquery.addexpandfilterquery.md) -
Перевизначає запит основного фільтра, визначає, які документи
включити до основної групи
- [SolrQuery::removeExpandFilterQuery()](solrquery.removeexpandfilterquery.md) -
Видаляє запит розширеного фільтра
