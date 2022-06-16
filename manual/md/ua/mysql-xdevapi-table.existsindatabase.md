- [«Table::delete](mysql-xdevapi-table.delete.md)
- [Table::getName »](mysql-xdevapi-table.getname.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Перевірити, чи існує таблиця у базі даних

# Table::existsInDatabase

(No version information available, might only be in Git)

Table::existsInDatabase — Перевірити, чи існує таблиця у базі даних

### Опис

public **mysql_xdevapi\Table::existsInDatabase**(): bool

Перевіряє, чи існує таблиця в базі даних.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо таблиця існує у базі даних, інакше
**`false`**, якщо таблиці немає.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Table::existsInDatabase()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");if($table->existsInDatabase()) { echo "Так, ця таблиця все ще існує в схемі сесії.";}?> `

Результатом виконання цього прикладу буде щось подібне:

Так, ця таблиця все ще існує у схемі сесії.
