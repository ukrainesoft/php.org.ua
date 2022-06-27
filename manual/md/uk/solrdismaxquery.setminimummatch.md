- [«
SolrDisMaxQuery::setBoostQuery](solrdismaxquery.setboostquery.md)
- [SolrDisMaxQuery::setPhraseFields
»](solrdismaxquery.setphrasefields.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює мінімальну відповідність "Should" (mm)

# SolrDisMaxQuery::setMinimumMatch

(No version information available, might only be in Git)

SolrDisMaxQuery::setMinimumMatch - Встановлює мінімальне
відповідність "Should" (mm)

### Опис

public **SolrDisMaxQuery::setMinimumMatch**(string `$value`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює параметр мінімальної відповідності "Should" (mm). Якщо
оператор запиту за замовчуванням – AND(І), тоді mm u003d 100%, якщо оператор
запиту за замовчуванням (q.op) - OR (АБО), то mm u003d 0%.

### Список параметрів

`value`
Мінімальне значення відповідності/вираз.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setMinimumMatch()****

`<?php$dismaxQuery u003d new SolrDisMaxQuery("lucene");// 75% пропозицій запиту мають відповідати$dismaxQuery->setMinimumMatch("75%");echo $dismaxQuery . PHP_EOL;?> `

Результат виконання цього прикладу:

qu003dlucene&defTypeu003dedismax&mmu003d75%
