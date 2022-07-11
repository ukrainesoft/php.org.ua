- [«mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- [Session::commit »](mysql-xdevapi-session.commit.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Закриває сесію

# Session::close

(No version information available, might only be in Git)

Session::close — Закриває сесію

### Опис

public **mysql_xdevapi\Session::close**(): bool

Закриває сесію із сервером.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо сесія закрита.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Session::close()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$session->close(); `
