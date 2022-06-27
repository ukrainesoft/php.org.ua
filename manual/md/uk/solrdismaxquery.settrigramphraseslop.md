- [«
SolrDisMaxQuery::setTrigramPhraseFields](solrdismaxquery.settrigramphrasefields.md)
- [SolrDisMaxQuery::setUserFields
»](solrdismaxquery.setuserfields.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює коефіцієнт відхилення триграм фрази (параметр ps3)

# SolrDisMaxQuery::setTrigramPhraseSlop

(No version information available, might only be in Git)

SolrDisMaxQuery::setTrigramPhraseSlop — Встановлює коефіцієнт
відхилення триграми фрази (параметр ps3)

### Опис

public **SolrDisMaxQuery::setTrigramPhraseSlop**(string `$slop`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює коефіцієнт відхилення триграм фрази (параметр ps3).

### Список параметрів

`slop`
Коефіцієнт відхилення.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setTrigramPhraseSlop()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->setTrigramPhraseSlop(2);echo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&ps3u003d2

### Дивіться також

- [SolrDisMaxQuery::addTrigramPhraseField()](solrdismaxquery.addtrigramphrasefield.md) -
Додає поле триграми (параметр pf3)
- [SolrDisMaxQuery::removeTrigramPhraseField()](solrdismaxquery.removetrigramphrasefield.md) -
Видаляє поле триграми (параметр pf3)
- [SolrDisMaxQuery::setTrigramPhraseFields()](solrdismaxquery.settrigramphrasefields.md) -
Безпосередньо встановлює поля триграми фрази (параметр pf3)
