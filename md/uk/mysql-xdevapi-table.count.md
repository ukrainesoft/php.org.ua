- [«Table::\_\_construct](mysql-xdevapi-table.construct.md)
- [Table::delete »](mysql-xdevapi-table.delete.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Отримати кількість рядків

# Table::count

(No version information available, might only be in Git)

Table::count — Отримати кількість рядків

### Опис

public **mysql_xdevapi\Table::count**(): int

Отримати кількість рядків у таблиці.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Загальна кількість рядків у таблиці.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::count()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");var_dump($table->count());?> `

Результат виконання цього прикладу:

int(2)
