- [« Session::createSchema](mysql-xdevapi-session.createschema.md)
- [Session::generateUUID »](mysql-xdevapi-session.generateuuid.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Видаляє схему

# Session::dropSchema

(No version information available, might only be in Git)

Session::dropSchema — Видаляє схему

### Опис

public **mysql_xdevapi\Session::dropSchema**(string `$schema_name`):
bool

Видаляє схему (базу даних).

### Список параметрів

`schema_name`
Ім'я схеми видалення.

### Значення, що повертаються

**`true`**, якщо схема видалена, або **`false`** якщо вона не існує
або не може бути видалено.

Генерується помилка рівня **`E_WARNING`**, якщо схема не існує.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::dropSchema()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->dropSchema("addressbook");$session->close();?> `
