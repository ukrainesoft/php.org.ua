- [« Collection::modify](mysql-xdevapi-collection.modify.md)
- [Collection::removeOne »](mysql-xdevapi-collection.removeone.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Видаляє документи колекції

# Collection::remove

(No version information available, might only be in Git)

Collection::remove — Видаляє документи колекції

### Опис

public **mysql_xdevapi\Collection::remove**(string `$search_condition`):
[mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)

Видаляє колекції, які відповідають певним умовам пошуку.
Дозволяється кілька операцій та підтримується прив'язка параметрів.

### Список параметрів

`search_condition`
Має бути коректним виразом SQL, що використовується для порівняння
документів, які необхідно змінити. Вираз може бути таким же
простим, як **`true`**, яке відповідає всім документам, або воно
може використовувати функції та оператори, такі як
``CAST(_id AS SIGNED) >u003d 10'`, `'age MOD 2 u003d 0 OR age MOD 3 u003d 0'', або
`'_id IN ["2","5","7","10"]'`.

### Значення, що повертаються

Якщо операцію не виконано, функція поверне об'єкт Remove, який можна
використовувати додавання додаткових операцій видалення.

Якщо операцію видалення виконано, то повернутий об'єкт міститиме
результат операції.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::remove()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$collection->ad ": "Alfred", "age": 18, "job": "Butler"}')->execute();$collection->add('{"name": "Bob",    "age": 19, "job": "Painter"}')->execute();// Видалення всіх художників$collection  ->remove("job in ('Painter')") ->execute();// Видалення найстарішого двору collection  ->remove("job in ('Butler')") ->sort('age desc') ->limit(1) ->execute();// Видалення запису з самим низким ove| 'true') ->sort('age desc') ->limit(1) ->execute();?> `
