- [«
SolrDisMaxQuery::setPhraseFields](solrdismaxquery.setphrasefields.md)
- [SolrDisMaxQuery::setQueryAlt »](solrdismaxquery.setqueryalt.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює коефіцієнт відхилення за промовчанням для запитів фраз
(Параметр ps)

# SolrDisMaxQuery::setPhraseSlop

(No version information available, might only be in Git)

SolrDisMaxQuery::setPhraseSlop — Встановлює коефіцієнт відхилення за
замовити для запитів фраз (параметр ps)

### Опис

public **SolrDisMaxQuery::setPhraseSlop**(string `$slop`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює коефіцієнт відхилення за промовчанням для фразових запитів,
побудованих з полями "pf", "pf2" та/or "pf3" (впливає на посилення).
Параметр "ps".

### Список параметрів

`slop`
Коефіцієнт відхилення за умовчанням.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання **SolrDisMaxQuery::setPhraseSlop()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->setPhraseSlop(4);echo $dismaxQuery.PHP_EOL;?> `

Результат виконання цього прикладу:

qu003dlucene&defTypeu003dedismax&psu003d4
