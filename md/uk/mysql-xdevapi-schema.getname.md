- [« Schema::getCollections](mysql-xdevapi-schema.getcollections.md)
- [Schema::getSession »](mysql-xdevapi-schema.getsession.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Отримати ім'я схеми

# Schema::getName

(No version information available, might only be in Git)

Schema::getName — Отримати назву схеми

### Опис

public **mysql_xdevapi\Schema::getName**(): string

Отримати назву схеми.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ім'я схеми у вигляді рядка, підключеного до об'єкта схеми.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Schema::getName()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");// ...var_dump($schema->getName());?> `

Результатом виконання цього прикладу буде щось подібне:

string(11) "addressbook"
