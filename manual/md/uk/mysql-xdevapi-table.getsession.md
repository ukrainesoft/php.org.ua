- [« Table::getSchema](mysql-xdevapi-table.getschema.md)
- [Table::insert »](mysql-xdevapi-table.insert.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Отримати таблицю сесій

# Table::getSession

(No version information available, might only be in Git)

Table::getSession — Отримати таблицю сесій

### Опис

public **mysql_xdevapi\Table::getSession**():
[mysql_xdevapi\Session](class.mysql-xdevapi-session.md)

Отримати сесію, пов'язану з таблицею.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Session.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::getSession()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");var_dump($table->getSession());?> `

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\Session)#9 (0) {
}
