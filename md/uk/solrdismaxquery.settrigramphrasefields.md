- [«
SolrDisMaxQuery::setTieBreaker](solrdismaxquery.settiebreaker.md)
- [SolrDisMaxQuery::setTrigramPhraseSlop
»](solrdismaxquery.settrigramphraseslop.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Безпосередньо встановлює поля триграм фрази (параметр pf3)

# SolrDisMaxQuery::setTrigramPhraseFields

(No version information available, might only be in Git)

SolrDisMaxQuery::setTrigramPhraseFields — Безпосередньо встановлює
поля триграми фрази (параметр pf3)

### Опис

public **SolrDisMaxQuery::setTrigramPhraseFields**(string `$fields`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Безпосередньо встановлює поля триграм фрази (параметр pf3).

### Список параметрів

`fields`
Полі триграми фрази.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setTrigramPhraseFields()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->setTrigramPhraseFields('cat~5.1^2 feature^4.5');echo $dismaxQuery.PHP_EOL;?> `

Результат виконання цього прикладу:

qu003dlucene&defTypeu003dedismax&pf3u003dcat~5.1^2 feature^4.5

### Дивіться також

- [SolrDisMaxQuery::addTrigramPhraseField()](solrdismaxquery.addtrigramphrasefield.md) -
Додає поле триграми (параметр pf3)
- [SolrDisMaxQuery::removeTrigramPhraseField()](solrdismaxquery.removetrigramphrasefield.md) -
Видаляє поле триграми (параметр pf3)
- [SolrDisMaxQuery::setTrigramPhraseSlop()](solrdismaxquery.settrigramphraseslop.md) -
Встановлює коефіцієнт відхилення триграми фрази (параметр PS3)
