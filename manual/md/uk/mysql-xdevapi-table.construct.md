- [« mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- [Table::count »](mysql-xdevapi-table.count.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Конструктор Table

# Table::\_\_construct

(No version information available, might only be in Git)

Table::\_\_construct — Конструктор Table

### Опис

private **mysql_xdevapi\Table::\_\_construct**()

Створити об'єкт таблиці.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Table::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );?> `
