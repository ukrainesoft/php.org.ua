- [«
SolrDisMaxQuery::setBigramPhraseFields](solrdismaxquery.setbigramphrasefields.md)
- [SolrDisMaxQuery::setBoostFunction
»](solrdismaxquery.setboostfunction.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює коефіцієнт відхилення біграми фрази (параметр ps2)

# SolrDisMaxQuery::setBigramPhraseSlop

(No version information available, might only be in Git)

SolrDisMaxQuery::setBigramPhraseSlop — Встановлює коефіцієнт
відхилення біграми фрази (параметр ps2)

### Опис

public **SolrDisMaxQuery::setBigramPhraseSlop**(string `$slop`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює коефіцієнт відхилення біграми фрази (параметр PS2).
Коефіцієнт відхилення за промовчанням для полів біграми фрази.

### Список параметрів

`slop`
Коефіцієнт відхилення.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setBigramPhraseSlop()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->setBigramPhraseSlop(5);echo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&ps2u003d5
