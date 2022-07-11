- [«
SolrDisMaxQuery::removePhraseField](solrdismaxquery.removephrasefield.md)
- [SolrDisMaxQuery::removeTrigramPhraseField
»](solrdismaxquery.removetrigramphrasefield.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Видаляє поле запиту (параметр qf)

# SolrDisMaxQuery::removeQueryField

(No version information available, might only be in Git)

SolrDisMaxQuery::removeQueryField — Видаляє поле запиту (параметр qf)

### Опис

public **SolrDisMaxQuery::removeQueryField**(string `$field`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Видаляє поле запиту (параметр qf) зі списку полів, доданих з
допомогою
[SolrDisMaxQuery::addQueryField()](solrdismaxquery.addqueryfield.md)

qf: При створенні DisjunctionMaxQueries з запиту користувача він
вказує поля для пошуку та збільшує їх кількість.

### Список параметрів

`field`
Ім'я поля

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::removeQueryField()****

`<?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery    ->ad|Qued| PHP_EOL;//  видаліть поле 'second'echo $dismaxQuery->removeQueryField('second');?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&qfu003dfirst^3 second^0.2 cat
qu003dlucene&defTypeu003dedismax&qfu003dfirst^3 cat

### Дивіться також

- [SolrDisMaxQuery::addQueryField()](solrdismaxquery.addqueryfield.md) -
Додає поле запиту з необов'язковим збільшенням (параметр qf)
