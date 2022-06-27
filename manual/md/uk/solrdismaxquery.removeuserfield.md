- [«
SolrDisMaxQuery::removeTrigramPhraseField](solrdismaxquery.removetrigramphrasefield.md)
- [SolrDisMaxQuery::setBigramPhraseFields
»](solrdismaxquery.setbigramphrasefields.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Видаляє поле з параметра користувацьких полів (uf)

# SolrDisMaxQuery::removeUserField

(No version information available, might only be in Git)

SolrDisMaxQuery::removeUserField — Видалення поля з параметра
користувацьких полів (uf)

### Опис

public **SolrDisMaxQuery::removeUserField**(string `$field`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Видаляє поле з параметра користувацьких полів (uf)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`field`
Ім'я поля

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::removeUserField()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$dismaxQuery->addUserField('cat')->addUserField('text')->addUserField('*_dt');echo $dismaxQuery.PHP_EOL / видалити поле 'text'$dismaxQuery->removeUserField('text');echo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003d%s&ufu003dcat text *_dt
qu003dlucene&defTypeu003d%s&ufu003dcat *_dt

### Дивіться також

- [SolrDisMaxQuery::addUserField()](solrdismaxquery.adduserfield.md) -
Додає поле до параметра полів користувача (uf)
- [SolrDisMaxQuery::setUserFields()](solrdismaxquery.setuserfields.md) -
Встановлює параметр полів користувача (uf)
