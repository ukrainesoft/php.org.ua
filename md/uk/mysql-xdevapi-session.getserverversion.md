- [« Session::getSchemas](mysql-xdevapi-session.getschemas.md)
- [Session::listClients »](mysql-xdevapi-session.listclients.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Отримує версію сервера

# Session::getServerVersion

(No version information available, might only be in Git)

Session::getServerVersion — Отримує версію сервера

### Опис

public **mysql_xdevapi\Session::getServerVersion**(): int

Отримує версію MySQL сервера для сесії.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Версія сервера MySQL для сесії у вигляді цілого числа, такого як "80012".

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::getServerVersion()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$version u003d $session->getServerVersion();var_dump($version); `

Результатом виконання цього прикладу буде щось подібне:

int(80012)
