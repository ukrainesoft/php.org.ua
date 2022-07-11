- [«
Session::releaseSavepoint](mysql-xdevapi-session.releasesavepoint.md)
- [Session::rollbackTo »](mysql-xdevapi-session.rollbackto.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Відкочує транзакцію

# Session::rollback

(No version information available, might only be in Git)

Session::rollback - Відкочує транзакцію

### Опис

public **mysql_xdevapi\Session::rollback**(): void

Відкочує транзакцію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт SqlStatementResult.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Session::rollback()****

` <?php$session    u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$collection u003d $session->getSchema("addressbook")->getCollection("names");$session-> startTransaction();$collection->add( '{"test1":1, "test2":2}' )->execute();$savepoint u003d $session->setSavepoint();$collection->add( ' {"test3":3, "test4":4}' )->execute();$session->releaseSavepoint($savepoint);$session->rollback();?> `
