- [«SolrQuery::setGroupFacet](solrquery.setgroupfacet.md)
- [SolrQuery::setGroupLimit »](solrquery.setgrouplimit.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Встановлює формат групи, структуру результату (параметр
group.format)

# SolrQuery::setGroupFormat

(PECL solr \>u003d 2.2.0)

SolrQuery::setGroupFormat — Встановлює формат групи, структуру
результату (параметр group.format)

### Опис

public **SolrQuery::setGroupFormat**(string `$value`):
[SolrQuery](class.solrquery.md)

Встановлює параметр group.format. Якщо для цього параметра
встановлено значення simple, згруповані документи подаються в
одному плоскому списку, а параметри start та rows впливають на кількість
документів, а чи не на групи. Допустимі значення: grouped/simple

### Список параметрів

`value`

### Значення, що повертаються

### Дивіться також

- [SolrQuery::setGroup()](solrquery.setgroup.md) -
Включає/вимикає групування результатів (параметр group)
- [SolrQuery::addGroupField()](solrquery.addgroupfield.md) -
Додає поле, яке використовуватиметься для групування
результатів
- [SolrQuery::addGroupFunction()](solrquery.addgroupfunction.md) -
Дозволяє групувати результати на основі унікальних значень
запиту функції (параметр group.func)
- [SolrQuery::addGroupQuery()](solrquery.addgroupquery.md) -
Дозволяє групувати документи, що відповідають цьому запиту
- [SolrQuery::addGroupSortField()](solrquery.addgroupsortfield.md) -
Додає поле сортування групи (параметр group.sort)
- [SolrQuery::setGroupFacet()](solrquery.setgroupfacet.md) -
Встановлює параметр group.facet
- [SolrQuery::setGroupOffset()](solrquery.setgroupoffset.md) -
Встановлює параметр group.offset
- [SolrQuery::setGroupLimit()](solrquery.setgrouplimit.md) - Задає
кількість результатів, що повертаються для кожної групи. Значення
сервера за промовчанням - 1
- [SolrQuery::setGroupMain()](solrquery.setgroupmain.md) - Якщо
true, результат першої команди угруповання полів використовується в
як основний список результатів у відповіді з використанням
group.formatu003dsimple
- [SolrQuery::setGroupNGroups()](solrquery.setgroupngroups.md) -
Якщо true, Solr включає в результати кількість груп, які
відповідають запиту
- [SolrQuery::setGroupTruncate()](solrquery.setgrouptruncate.md) -
Якщо true, підрахунок фасетів базується на найбільш релевантному документі
кожної групи, що відповідає запиту
- [SolrQuery::setGroupCachePercent()](solrquery.setgroupcachepercent.md) -
Включає кешування для угруповання результатів
