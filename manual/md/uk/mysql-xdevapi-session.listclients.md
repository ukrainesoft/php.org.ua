- [«
Session::getServerVersion](mysql-xdevapi-session.getserverversion.md)
- [Session::quoteName »](mysql-xdevapi-session.quotename.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Отримує список клієнтів

# Session::listClients

(No version information available, might only be in Git)

Session::listClients — Отримує список клієнтів

### Опис

public **mysql_xdevapi\Session::listClients**(): array

Отримати список клієнтських підключень до сесії сервера MySQL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив, що містить поточні зареєстровані клієнти. Елементи
масиву: "client_id", "user", "host", та "sql_session".

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::listClients()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$ids u003d $session->listClients();var_dump($ids);?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
array(4) {
["client_id"]u003d>
int(61)
["user"]u003d>
string(4) "root"
["host"]u003d>
string(9) "localhost"
["sql_session"]u003d>
int(72)
}
}
