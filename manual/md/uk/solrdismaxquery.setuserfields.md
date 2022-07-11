- [«
SolrDisMaxQuery::setTrigramPhraseSlop](solrdismaxquery.settrigramphraseslop.md)
- [SolrDisMaxQuery::useDisMaxQueryParser
»](solrdismaxquery.usedismaxqueryparser.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює параметр полів користувача (uf)

# SolrDisMaxQuery::setUserFields

(No version information available, might only be in Git)

SolrDisMaxQuery::setUserFields — Встановлює параметри користувача
полів (uf)

### Опис

public **SolrDisMaxQuery::setUserFields**(string `$fields`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює параметр полів користувача (uf)

Поля користувача: вказує, які поля схеми кінцевий користувач
може вимагати.

### Список параметрів

`fields`
Імена полів, вказані через пробіл

Параметр підтримує знаки підстановки.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання **SolrDisMaxQuery::setUserFields()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->setUserFields('field1 field2 *_txt');echo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&ufu003dfield1 field2 *_txt

### Дивіться також

- [SolrDisMaxQuery::addUserField()](solrdismaxquery.adduserfield.md) -
Додає поле до параметра полів користувача (uf)
- [SolrDisMaxQuery::removeUserField()](solrdismaxquery.removeuserfield.md) -
Видаляє поле з параметра користувацьких полів (uf)
