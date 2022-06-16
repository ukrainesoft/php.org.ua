- [« Session::dropSchema](mysql-xdevapi-session.dropschema.md)
- [Session::getDefaultSchema
»](mysql-xdevapi-session.getdefaultschema.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Отримує новий UUID

# Session::generateUUID

(No version information available, might only be in Git)

Session::generateUUID — Отримує новий UUID

### Опис

public **mysql_xdevapi\Session::generateUUID**(): string

Генерує універсальний унікальний ідентифікатор (UUID),
згенерований відповідно до [»RFC
4122](http://www.faqs.org/rfcs/rfc4122).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

UUID; рядок завдовжки 32 символи.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::generateUuid()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$uuid u003d $session->generateUuid();var_dump($uuid); `

Результатом виконання цього прикладу буде щось подібне:

string(32) "484B18AC7980F8D4FE84613CDA5EE84B"
