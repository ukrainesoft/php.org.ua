- [«
Collection::\_\_construct](mysql-xdevapi-collection.construct.md)
- [Collection::createIndex
»](mysql-xdevapi-collection.createindex.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Отримує кількість документів

# Collection::count

(No version information available, might only be in Git)

Collection::count — Отримує кількість документів

### Опис

public **mysql_xdevapi\Collection::count**(): int

Функціонал аналогічний операції SQL `SELECT COUNT(*)` на сервері MySQL
для поточної схеми та колекції. Іншими словами, метод підраховує
кількість документів у колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Кількість документів у колекції.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Collection::count()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$collection u003d $schema->get people "); "Father","Salary":0}    ],   "hobbies": ["Sports","Making cupcakes"]}',  '{"name": "Jane",    "jobs": [  | Scientist","Salary":18000},     {"title":"Mother","Salary":0}    ],   "hobbies": ["Walking","Making pies"]}') var_dump($collection->count());?> `

Результат виконання цього прикладу:

int(2)
