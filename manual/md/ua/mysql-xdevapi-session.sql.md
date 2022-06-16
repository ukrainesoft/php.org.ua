- [« Session::setSavepoint](mysql-xdevapi-session.setsavepoint.md)
- [Session::startTransaction
»](mysql-xdevapi-session.starttransaction.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Виконує SQL запит

# Session::sql

(No version information available, might only be in Git)

Session::sql — Виконує запит SQL

### Опис

public **mysql_xdevapi\Session::sql**(string `$query`):
[mysql_xdevapi\SqlStatement](class.mysql-xdevapi-sqlstatement.md)

Створює власний оператор SQL. Заповнювачі підтримуються за допомогою
нативного синтаксису "?" Використовує метод `execute` для виконання
затвердження SQL.

### Список параметрів

`query`
Твердження SQL для виконання.

### Значення, що повертаються

Об'єкт SqlStatement.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Session::sql()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("CREATE DATABASE addressbook")->execute();?> `
