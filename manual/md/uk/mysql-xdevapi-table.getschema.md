- [« Table::getName](mysql-xdevapi-table.getname.md)
- [Table::getSession »](mysql-xdevapi-table.getsession.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Отримати схему таблиці

# Table::getSchema

(No version information available, might only be in Git)

Table::getSchema — Отримати схему таблиці

### Опис

public **mysql_xdevapi\Table::getSchema**():
[mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)

Витягти схему, пов'язану з таблицею.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Schema.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::getSchema()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");var_dump($table->getSchema());?> `

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\Schema)#9 (1) {
["name"]u003d>
string(11) "addressbook"
}
