- [« Session::rollbackTo](mysql-xdevapi-session.rollbackto.md)
- [Session::sql »](mysql-xdevapi-session.sql.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Створює точку збереження

# Session::setSavepoint

(No version information available, might only be in Git)

Session::setSavepoint — Створює точку збереження

### Опис

public **mysql_xdevapi\Session::setSavepoint**(string `$name` u003d ?):
string

Створює нову точку збереження транзакції.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`name`
Назва точки збереження. Ім'я генерується автоматично, якщо
необов'язковий параметр `name` не визначений, як 'SAVEPOINT1',
'SAVEPOINT2' і т.д.

### Значення, що повертаються

Назва точки збереження.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::setSavepoint()****

` <?php$session    u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$collection u003d $session->getSchema("addressbook")->getCollection("names");$session-> startTransaction();$collection->add( '{"test1":1, "test2":2}' )->execute();$savepoint u003d $session->setSavepoint();$collection->add( ' {"test3":3, "test4":4}' )->execute();$session->releaseSavepoint($savepoint);$session->rollback();?> `
