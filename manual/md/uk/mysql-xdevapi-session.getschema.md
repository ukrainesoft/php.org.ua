- [«
Session::getDefaultSchema](mysql-xdevapi-session.getdefaultschema.md)
- [Session::getSchemas »](mysql-xdevapi-session.getschemas.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Отримує новий об'єкт схеми

# Session::getSchema

(No version information available, might only be in Git)

Session::getSchema — Отримує новий об'єкт схеми

### Опис

public **mysql_xdevapi\Session::getSchema**(string `$schema_name`):
[mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)

Новий об'єкт Schema для вказаного імені схеми.

### Список параметрів

`schema_name`
Ім'я схеми (бази даних), на яку потрібно отримати об'єкт Schema.

### Значення, що повертаються

Об'єкт Schema.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::getSchema()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");print_r($schema); `

Результатом виконання цього прикладу буде щось подібне:

mysql_xdevapi\Schema Object
(
[name] u003d> addressbook
)
