- [«
SolrDisMaxQuery::removeQueryField](solrdismaxquery.removequeryfield.md)
- [SolrDisMaxQuery::removeUserField
»](solrdismaxquery.removeuserfield.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Видаляє поле триграми (параметр pf3)

# SolrDisMaxQuery::removeTrigramPhraseField

(No version information available, might only be in Git)

SolrDisMaxQuery::removeTrigramPhraseField — Видаляє поле триграми
(Параметр pf3)

### Опис

public **SolrDisMaxQuery::removeTrigramPhraseField**(string `$field`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Видаляє поле триграми (параметр pf3)

### Список параметрів

`field`
Ім'я поля

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::removeTrigramPhraseField()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->addTrigramPhraseField('cat', 2, 5.1)->addTrigramPhraseField('feature', 4.5); dismaxQuery->removeTrigramPhraseField('cat');echo $dismaxQuery.PHP_EOL;?> `

Результат виконання цього прикладу:

qu003dlucene&defTypeu003d%s&pf3u003dcat~5.1^2 feature^4.5
qu003dlucene&defTypeu003d%s&pf3u003dfeature^4.5

### Дивіться також

- [SolrDisMaxQuery::addTrigramPhraseField()](solrdismaxquery.addtrigramphrasefield.md) -
Додає поле триграми (параметр pf3)
- [SolrDisMaxQuery::setTrigramPhraseFields()](solrdismaxquery.settrigramphrasefields.md) -
Безпосередньо встановлює поля триграми фрази (параметр pf3)
- [SolrDisMaxQuery::setTrigramPhraseSlop()](solrdismaxquery.settrigramphraseslop.md) -
Встановлює коефіцієнт відхилення триграми фрази (параметр PS3)
