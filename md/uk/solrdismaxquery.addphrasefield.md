- [«
SolrDisMaxQuery::addBoostQuery](solrdismaxquery.addboostquery.md)
- [SolrDisMaxQuery::addQueryField
»](solrdismaxquery.addqueryfield.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Додає поле фрази (параметр pf)

# SolrDisMaxQuery::addPhraseField

(No version information available, might only be in Git)

SolrDisMaxQuery::addPhraseField — Додає поле фрази (параметр pf)

### Опис

public **SolrDisMaxQuery::addPhraseField**(string `$field`, string
`$boost`, string `$slop` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Додає поле фрази (параметр pf)

### Список параметрів

`field`
field name

`boost`

`slop`

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання **SolrDisMaxQuery::addPhraseField()****

`<?php$dismaxQuery u003d new SolrDisMaxQuery("lucene");$dismaxQuery   ->addPhraseField('cat', 3, 1)    ->addPhraseField('third', >| );echo $dismaxQuery;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&pfu003dcat~1^3 third~2^4 source^55

### Дивіться також

- [SolrDisMaxQuery::removePhraseField()](solrdismaxquery.removephrasefield.md) -
Видаляє поле фрази (параметра)
- [SolrDisMaxQuery::setPhraseFields()](solrdismaxquery.setphrasefields.md) -
Встановлює поля фрази та їх посилення (і відхилення) за допомогою
параметра pf2
