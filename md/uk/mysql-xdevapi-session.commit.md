- [« Session::close](mysql-xdevapi-session.close.md)
- [Session::\_\_construct »](mysql-xdevapi-session.construct.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Фіксує транзакцію

# Session::commit

(PHP 4 \>u003d 4.4.0, PHP 5, PHP 7, PHP 8)

Session::commit — Фіксує транзакцію

### Опис

public **mysql_xdevapi\Session::commit**(): Object

Фіксує транзакцію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт SqlStatementResult.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Session::commit()****

` <?php$session    u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$collection u003d $session->getSchema("addressbook")->getCollection("friends");$session-> startTransaction();$collection->add('{"John":42, "Sam":33}')->execute();$savepoint u003d $session->setSavepoint();$session->commit() ;$session->close(); `
