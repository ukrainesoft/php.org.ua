- [«SolrQuery::setGroupLimit](solrquery.setgrouplimit.md)
- [SolrQuery::setGroupNGroups »](solrquery.setgroupngroups.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Якщо true, результат першої команди групування полів використовується в
як основний список результатів у відповіді з використанням
group.formatu003dsimple

# SolrQuery::setGroupMain

(PECL solr \>u003d 2.2.0)

SolrQuery::setGroupMain — Якщо true, результат першої команди
групування полів використовується як основний список результатів в
відповіді з використанням group.formatu003dsimple

### Опис

public **SolrQuery::setGroupMain**(string `$value`):
[SolrQuery](class.solrquery.md)

Якщо **`true`**, результат першої команди групування полів використовується
як основний список результатів у відповіді з використанням
`group.formatu003dsimple`.

### Список параметрів

`value`
Якщо **`true`**, результат першої команди групування полів використовується
як основний список результатів у відповіді.

### Значення, що повертаються

Повертає екземпляр [SolrQuery](class.solrquery.md).

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
- **SolrQuery::setGroupMain()**
- [SolrQuery::setGroupNGroups()](solrquery.setgroupngroups.md) -
Якщо true, Solr включає в результати кількість груп, які
відповідають запиту
- [SolrQuery::setGroupTruncate()](solrquery.setgrouptruncate.md) -
Якщо true, підрахунок фасетів базується на найбільш релевантному документі
кожної групи, що відповідає запиту
- [SolrQuery::setGroupFormat()](solrquery.setgroupformat.md) -
Встановлює формат групи, структуру результату (параметр
group.format)
- [SolrQuery::setGroupCachePercent()](solrquery.setgroupcachepercent.md) -
Включає кешування для угруповання результатів
