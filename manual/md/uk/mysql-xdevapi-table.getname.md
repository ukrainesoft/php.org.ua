- [«
Table::existsInDatabase](mysql-xdevapi-table.existsindatabase.md)
- [Table::getSchema »](mysql-xdevapi-table.getschema.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Отримати ім'я таблиці

# Table::getName

(No version information available, might only be in Git)

Table::getName — Отримати ім'я таблиці

### Опис

public **mysql_xdevapi\Table::getName**(): string

Повертає ім'я бази даних.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ім'я бази даних.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::getName()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");var_dump($table->getName());?> `

Результатом виконання цього прикладу буде щось подібне:

string(5) "names"
