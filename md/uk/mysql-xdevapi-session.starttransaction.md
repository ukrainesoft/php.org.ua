- [« Session::sql](mysql-xdevapi-session.sql.md)
- [mysql_xdevapi\SqlStatement
»](class.mysql-xdevapi-sqlstatement.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- починає транзакцію

# Session::startTransaction

(No version information available, might only be in Git)

Session::startTransaction — Починає транзакцію

### Опис

public **mysql_xdevapi\Session::startTransaction**(): void

Починає нову транзакцію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт SqlStatementResult.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::startTransaction()****

` <?php$session    u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$collection u003d $session->getSchema("addressbook")->getCollection("friends");$session-> startTransaction();$collection->add( '{"test1":1, "test2":2}' )->execute();$savepoint u003d $session->setSavepoint();$collection->add( ' {"test3":3, "test4":4}' )->execute();$session->releaseSavepoint($savepoint);$session->rollback();?> `
