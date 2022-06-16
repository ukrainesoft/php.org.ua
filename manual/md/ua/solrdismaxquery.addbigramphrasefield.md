- [«SolrDisMaxQuery](class.solrdismaxquery.md)
- [SolrDisMaxQuery::addBoostQuery
»](solrdismaxquery.addboostquery.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Додає поле фразової біграми (параметр pf2)

# SolrDisMaxQuery::addBigramPhraseField

(No version information available, might only be in Git)

SolrDisMaxQuery::addBigramPhraseField — Додає поле фразової біграми
(Параметр pf2)

### Опис

public **SolrDisMaxQuery::addBigramPhraseField**(string `$field`, string
`$boost`, string `$slop` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Додає поле фразової біграми (параметр pf2) Вихідний формат:
field\~slop^boost АБО field^boost Slop не є обов'язковим

### Список параметрів

`field`

`boost`

`slop`

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::addBigramPhraseField()****

`<?php$dismaxQuery u003d new SolrDisMaxQuery("lucene");$dismaxQuery   ->addBigramPhraseField('cat', 2, 5.1)    ->addBigramPhraseField' 

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&pf2u003dcat~5.1^2 feature^4.5

### Дивіться також

- [SolrDisMaxQuery::removeBigramPhraseField()](solrdismaxquery.removebigramphrasefield.md) -
Видаляє поле біграми фрази (параметр pf2)
- [SolrDisMaxQuery::setBigramPhraseFields()](solrdismaxquery.setbigramphrasefields.md) -
Встановлює поля біграми фрази та їх посилення (і відхилення) з
за допомогою параметра pf2
- [SolrDisMaxQuery::setBigramPhraseSlop()](solrdismaxquery.setbigramphraseslop.md) -
Встановлює коефіцієнт відхилення біграми фрази (параметр ps2)
