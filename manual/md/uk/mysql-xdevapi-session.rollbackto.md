- [« Session::rollback](mysql-xdevapi-session.rollback.md)
- [Session::setSavepoint »](mysql-xdevapi-session.setsavepoint.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Відкочує транзакцію до точки збереження

# Session::rollbackTo

(No version information available, might only be in Git)

Session::rollbackTo — Відкочує транзакцію до точки збереження

### Опис

public **mysql_xdevapi\Session::rollbackTo**(string `$name`): void

Відкочує транзакцію до точки збереження.

### Список параметрів

`name`
Ім'я точки збереження для відкату; без урахування регістру.

### Значення, що повертаються

Об'єкт SqlStatementResult.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::rollbackTo()****

` <?php$session    u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$collection u003d $session->getSchema("addressbook")->getCollection("names");$session-> startTransaction();$collection->add( '{"test1":1, "test2":2}' )->execute();$savepoint1 u003d $session->setSavepoint();$collection->add( ' {"test3":3, "test4":4}' )->execute();$savepoint2 u003d $session->setSavepoint();$session->rollbackTo($savepoint1);?> `
