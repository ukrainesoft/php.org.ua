- [« Session::quoteName](mysql-xdevapi-session.quotename.md)
- [Session::rollback »](mysql-xdevapi-session.rollback.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Скасує встановлену точку збереження

# Session::releaseSavepoint

(No version information available, might only be in Git)

Session::releaseSavepoint — Скасовує встановлену точку збереження

### Опис

public **mysql_xdevapi\Session::releaseSavepoint**(string `$name`): void

Скасує встановлену точку збереження.

### Список параметрів

`name`
Ім'я точки збереження для скасування.

### Значення, що повертаються

Об'єкт SqlStatementResult.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::releaseSavepoint()****

` <?php$session    u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$collection u003d $session->getSchema("addressbook")->getCollection("friends");$session-> startTransaction();$collection->add( '{"test1":1, "test2":2}' )->execute();$savepoint u003d $session->setSavepoint();$collection->add( ' {"test3":3, "test4":4}' )->execute();$session->releaseSavepoint($savepoint);$session->rollback();?> `
