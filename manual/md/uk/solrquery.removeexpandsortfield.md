- [«
SolrQuery::removeExpandFilterQuery](solrquery.removeexpandfilterquery.md)
- [SolrQuery::removeFacetDateField
»](solrquery.removefacetdatefield.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Видаляє розширене поле сортування за допомогою параметра expand.sort

# SolrQuery::removeExpandSortField

(PECL solr \>u003d 2.2.0)

SolrQuery::removeExpandSortField — Видаляє розширене поле сортування
із параметра expand.sort

### Опис

public **SolrQuery::removeExpandSortField**(string `$field`):
[SolrQuery](class.solrquery.md)

Видаляє розширене поле сортування за допомогою параметра expand.sort.

### Список параметрів

`field`
Ім'я поля

### Значення, що повертаються

[SolrQuery](class.solrquery.md)

### Дивіться також

- [SolrQuery::setExpand()](solrquery.setexpand.md) -
Включає/вимикає компонент Expand
- [SolrQuery::addExpandSortField()](solrquery.addexpandsortfield.md) -
Впорядковує документи у розширених групах (параметр expand.sort)
- [SolrQuery::setExpandRows()](solrquery.setexpandrows.md) -
Встановлює кількість рядків для відображення у кожній групі
(expand.rows). Типово 5
- [SolrQuery::setExpandQuery()](solrquery.setexpandquery.md) -
Встановлює параметр expand.q
- [SolrQuery::addExpandFilterQuery()](solrquery.addexpandfilterquery.md) -
Перевизначає запит основного фільтра, визначає, які документи
включити до основної групи
- [SolrQuery::removeExpandFilterQuery()](solrquery.removeexpandfilterquery.md) -
Видаляє запит розширеного фільтра
