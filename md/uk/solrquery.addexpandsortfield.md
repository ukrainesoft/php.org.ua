- [«
SolrQuery::addExpandFilterQuery](solrquery.addexpandfilterquery.md)
- [SolrQuery::addFacetDateField »](solrquery.addfacetdatefield.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Упорядковує документи у розширених групах (параметр expand.sort)

# SolrQuery::addExpandSortField

(PECL solr \>u003d 2.2.0)

SolrQuery::addExpandSortField — Упорядковує документи у розширених
групах (параметр expand.sort)

### Опис

public **SolrQuery::addExpandSortField**(string `$field`, string
`$order` u003d ?): [SolrQuery](class.solrquery.md)

Впорядковує документи у розширених групах (параметр expand.sort).

### Список параметрів

`field`
Ім'я поля

`order`
Порядок ASC/DESC, використовуючи константи SolrQuery::ORDER\_\*.

Типово: SolrQuery::ORDER_DESC

### Значення, що повертаються

[SolrQuery](class.solrquery.md)

### Дивіться також

- [SolrQuery::setExpand()](solrquery.setexpand.md) -
Включає/вимикає компонент Expand
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
- [SolrQuery::removeExpandFilterQuery()](solrquery.removeexpandfilterquery.md) -
Видаляє запит розширеного фільтра
