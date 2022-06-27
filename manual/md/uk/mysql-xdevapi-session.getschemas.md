- [« Session::getSchema](mysql-xdevapi-session.getschema.md)
- [Session::getServerVersion
»](mysql-xdevapi-session.getserverversion.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Отримує схеми

# Session::getSchemas

(No version information available, might only be in Git)

Session::getSchemas — Отримує схеми

### Опис

public **mysql_xdevapi\Session::getSchemas**(): array

Отримати об'єкти схеми для всіх схем, доступних у сесії.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив, що містить об'єкти, які представляють всі схеми, доступні в
сесії.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::getSchemas()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schemas u003d $session->getSchemas();print_r($schemas); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> mysql_xdevapi\Schema Object
(
[name] u003d> addressbook
)
[1] u003d> mysql_xdevapi\Schema Object
(
[name] u003d> information_schema
)
...
