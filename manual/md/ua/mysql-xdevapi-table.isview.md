- [«Table::insert](mysql-xdevapi-table.insert.md)
- [Table::select »](mysql-xdevapi-table.select.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Перевірити, чи є таблиця уявленням

# Table::isView

(No version information available, might only be in Git)

Table::isView — Перевірити, чи є таблиця уявленням

### Опис

public **mysql_xdevapi\Table::isView**(): bool

Визначте, чи є базовий об'єкт уявленням чи ні.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо базовий об'єкт є поданням, в протилежному
випадку **`false`**.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::isView()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");if ($table->isView()) {    echo "Це подання.";} else {    echo "Це не подання.";}?> `

Результат виконання цього прикладу:

int(2)
