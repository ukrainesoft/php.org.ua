- [« Session::commit](mysql-xdevapi-session.commit.md)
- [Session::createSchema »](mysql-xdevapi-session.createschema.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Опис конструктора

# Session::\_\_construct

(No version information available, might only be in Git)

Session::\_\_construct — Опис конструктора

### Опис

private **mysql_xdevapi\Session::\_\_construct**()

Об'єкт Session, ініційований getSession().

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->close();?> `
