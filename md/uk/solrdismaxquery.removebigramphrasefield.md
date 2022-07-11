- [«SolrDisMaxQuery::\_\_construct](solrdismaxquery.construct.md)
- [SolrDisMaxQuery::removeBoostQuery
»](solrdismaxquery.removeboostquery.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Видаляє поле біграми фрази (параметр pf2)

# SolrDisMaxQuery::removeBigramPhraseField

(No version information available, might only be in Git)

SolrDisMaxQuery::removeBigramPhraseField — Видаляє поле біграми фрази
(Параметр pf2)

### Опис

public **SolrDisMaxQuery::removeBigramPhraseField**(string `$field`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Видаляє поле фрази біграми (параметр pf2), яке було раніше додано
за допомогою
[SolrDisMaxQuery::addBigramPhraseField()](solrdismaxquery.addbigramphrasefield.md)

### Список параметрів

`field`
Ім'я поля

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::removeBigramPhraseField()****

`<?php$dismaxQuery u003d new SolrDisMaxQuery("lucene");$dismaxQuery   ->addBigramPhraseField('cat', 2, 5.1)    ->addBigramPhraseField| | з pf2$dismaxQuery   ->removeBigramPhraseField('cat');echo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&pf2u003dcat~5.1^2 feature^4.5
qu003dlucene&defTypeu003dedismax&pf2u003dfeature^4.5

### Дивіться також

- [SolrDisMaxQuery::addBigramPhraseField()](solrdismaxquery.addbigramphrasefield.md) -
Додає поле фразової біграми (параметр pf2)
- [SolrDisMaxQuery::setBigramPhraseFields()](solrdismaxquery.setbigramphrasefields.md) -
Встановлює поля біграми фрази та їх посилення (і відхилення) з
за допомогою параметра pf2
- [SolrDisMaxQuery::setBigramPhraseSlop()](solrdismaxquery.setbigramphraseslop.md) -
Встановлює коефіцієнт відхилення біграми фрази (параметр ps2)
