- [«SolrQuery](class.solrquery.md)
- [SolrQuery::addExpandSortField »](solrquery.addexpandsortfield.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Перевизначає запит основного фільтра, визначає які документи
включити до основної групи

# SolrQuery::addExpandFilterQuery

(PECL solr \>u003d 2.2.0)

SolrQuery::addExpandFilterQuery — Перевизначає запит основного
фільтра, визначає, які документи включити до основної групи

### Опис

public **SolrQuery::addExpandFilterQuery**(string `$fq`):
[SolrQuery](class.solrquery.md)

Перевизначає запит основного фільтра, визначає, які документи
включити до основної групи.

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
- [SolrQuery::removeExpandFilterQuery()](solrquery.removeexpandfilterquery.md) -
Видаляє запит розширеного фільтра
