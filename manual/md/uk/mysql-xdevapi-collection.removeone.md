- [« Collection::remove](mysql-xdevapi-collection.remove.md)
- [Collection::replaceOne »](mysql-xdevapi-collection.replaceone.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Видаляє один документ із колекції

# Collection::removeOne

(No version information available, might only be in Git)

Collection::removeOne — Видаляє один документ із колекції

### Опис

public **mysql_xdevapi\Collection::removeOne**(string `$id`):
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Видаляє один документ із колекції з відповідним ідентифікатором.
Скорочений запис для
`Collection.remove("_id u003d :id").bind("id", id).execute()`.

### Список параметрів

`id`
Ідентифікатор документа колекції, який потрібно видалити. Зазвичай це
\_id, який було згенеровано MySQL Server при додаванні запису.

### Значення, що повертаються

Об'єкт Result, який можна використовувати для запиту кількості
порушених елементів або кількості попереджень, згенерованих
операцією.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::removeOne()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d $ {"name": "Alfred", "age": 18, "job": "Butler"}')->execute(); використовуємо його$ids       u003d $result->getGeneratedIds();$alfred_id u003d $ids[0];$result u003d $collection->removeOne($alfred_id);if(!$result->getAffectedItem { з ідентифікатором $ alfred_id не був віддалений.

Результатом виконання цього прикладу буде щось подібне:

До побачення, Alfred, ти можеш взяти з собою _id 00005b6b53610000000000000cb.
