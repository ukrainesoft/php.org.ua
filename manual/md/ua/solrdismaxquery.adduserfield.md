- [«
SolrDisMaxQuery::addTrigramPhraseField](solrdismaxquery.addtrigramphrasefield.md)
- [SolrDisMaxQuery::\_\_construct »](solrdismaxquery.construct.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Додає поле до параметра користувача полів (uf)

# SolrDisMaxQuery::addUserField

(No version information available, might only be in Git)

SolrDisMaxQuery::addUserField — Додає поле до параметра
користувацьких полів (uf)

### Опис

public **SolrDisMaxQuery::addUserField**(string `$field`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Додає поле до параметра полів користувача (uf)

### Список параметрів

`field`
Ім'я поля

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання **SolrDisMaxQuery::addUserField()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->addUserField('cat')->addUserField('text')->addUserField('*_dt');echo $dismaxQuery.PHP_EOL > `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&ufu003dcat text *_dt

### Дивіться також

- [SolrDisMaxQuery::removeUserField()](solrdismaxquery.removeuserfield.md) -
Видаляє поле з параметра користувацьких полів (uf)
- [SolrDisMaxQuery::setUserFields()](solrdismaxquery.setuserfields.md) -
Встановлює параметр полів користувача (uf)
