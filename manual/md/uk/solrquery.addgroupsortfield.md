- [« SolrQuery::addGroupQuery](solrquery.addgroupquery.md)
- [SolrQuery::addHighlightField »](solrquery.addhighlightfield.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Додає поле сортування групи (параметр group.sort)

# SolrQuery::addGroupSortField

(PECL solr \>u003d 2.2.0)

SolrQuery::addGroupSortField — Додає поле сортування групи
(Параметр group.sort)

### Опис

public **SolrQuery::addGroupSortField**(string `$field`, int `$order` u003d
?): [SolrQuery](class.solrquery.md)

Дозволяє сортувати групові документи, використовуючи поле сортування
групи (параметр group.sort).

### Список параметрів

`field`
Назва поля

`order`
Напрямок сортування ASC/DESC, використовуйте константи
SolrQuery::ORDER\_\*

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **SolrQuery::addGroupSortField()****

` <?php$solrQuery u003d new SolrQuery('*:*');$solrQuery    ->setGroup(true)    ->addGroupSortField('price', SolrQuery::ORDER_ASC)'ech

Результатом виконання цього прикладу буде щось подібне:

qu003d*:*&groupu003dtrue&group.sortu003dprice asc

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
- [SolrQuery::setGroupFormat()](solrquery.setgroupformat.md) -
Встановлює формат групи, структуру результату (параметр
group.format)
- [SolrQuery::setGroupCachePercent()](solrquery.setgroupcachepercent.md) -
Включає кешування для угруповання результатів
