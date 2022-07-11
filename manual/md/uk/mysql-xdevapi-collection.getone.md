- [« Collection::getName](mysql-xdevapi-collection.getname.md)
- [Collection::getSchema »](mysql-xdevapi-collection.getschema.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Отримує один документ

# Collection::getOne

(No version information available, might only be in Git)

Collection::getOne — Отримує один документ

### Опис

public **mysql_xdevapi\Collection::getOne**(string `$id`): Document

Вибирає один документ із колекції.

Це короткий запис для:
`Collection.find("_id u003d :id").bind("id", id).execute().fetchOne();`

### Список параметрів

`id`
\_id документи в колекції.

### Значення, що повертаються

Об'єкт колекції або **null, якщо \_id не відповідає документу.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::getOne()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d $ {"name": "Alfred", "age": 42, "job": "Butler"}')->execute();// Унікальний _id (за замовчуванням і рекомендується) генерується MySQL Server// в цьому прикладі тільки один запис, тому $ids[0]$ids        u003d $result->getGeneratedIds();$alfreds_id u003du003d$$s[0];// ...print_$ getOne($alfreds_id));?> `

Результатом виконання цього прикладу буде щось подібне:

00005b6b536100000000000001

Array
(
[_id] u003d> 00005b6b53610000000000000b1
[age] u003d> 42
[job] u003d> Butler
[name] u003d> Alfred
)
