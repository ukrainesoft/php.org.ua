- [«
SolrDisMaxQuery::addBigramPhraseField](solrdismaxquery.addbigramphrasefield.md)
- [SolrDisMaxQuery::addPhraseField
»](solrdismaxquery.addphrasefield.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Додає поле підвищення запиту зі значенням та необов'язковим
посиленням (параметр bq)

# SolrDisMaxQuery::addBoostQuery

(No version information available, might only be in Git)

SolrDisMaxQuery::addBoostQuery — Додає поле підвищення запиту з
значенням та необов'язковим посиленням (параметр bq)

### Опис

public **SolrDisMaxQuery::addBoostQuery**(string `$field`, string
`$value`, string `$boost` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Додає поле підвищення запиту зі значенням \[і підвищення\] (параметр
bq)

### Список параметрів

`field`

`value`

`boost`

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання **SolrDisMaxQuery::addBoostQuery()****

`<?php$dismaxQuery u003d new SolrDisMaxQuery("lucene");$dismaxQuery   ->addBoostQuery('cat', 'clothing', 2)    ->addBoostQuery('cat', ; PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&bqu003dcat:clothing^2 cat:electronics^5.1

### Дивіться також

- [SolrDisMaxQuery::removeBoostQuery()](solrdismaxquery.removeboostquery.md) -
Видаляє часткове підвищення запиту на ім'я поля (bq)
- [SolrDisMaxQuery::setBoostQuery()](solrdismaxquery.setboostquery.md) -
Безпосередньо встановлює параметр запиту на посилення (bq)
