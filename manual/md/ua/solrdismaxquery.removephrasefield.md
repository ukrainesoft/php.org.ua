- [«
SolrDisMaxQuery::removeBoostQuery](solrdismaxquery.removeboostquery.md)
- [SolrDisMaxQuery::removeQueryField
»](solrdismaxquery.removequeryfield.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Видаляє поле фрази (параметра)

# SolrDisMaxQuery::removePhraseField

(No version information available, might only be in Git)

SolrDisMaxQuery::removePhraseField — Видаляє поле фрази (параметра)

### Опис

public **SolrDisMaxQuery::removePhraseField**(string `$field`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Видаляє поле фрази (параметра), яке було раніше додано за допомогою
SolrDisMaxQuery::addPhraseField

### Список параметрів

`field`
Ім'я поля

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::removePhraseField()****

`<?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery   ->addPhraseField('first', 3, 1)    ->addPhraseField('se ' );echo $dismaxQuery . PHP_EOL;echo $dismaxQuery->removePhraseField('second');?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&pfu003dfirst~1^3 second~1^4 cat^55
qu003dlucene&defTypeu003dedismax&pfu003dfirst~1^3 cat^55

### Дивіться також

- [SolrDisMaxQuery::addPhraseField()](solrdismaxquery.addphrasefield.md) -
Додає поле фрази (параметр pf)
- [SolrDisMaxQuery::setPhraseFields()](solrdismaxquery.setphrasefields.md) -
Встановлює поля фрази та їх посилення (і відхилення) за допомогою
параметра pf2
