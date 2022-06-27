- [«
mysql_xdevapi\SchemaObject](class.mysql-xdevapi-schemaobject.md)
- [mysql_xdevapi\Session »](class.mysql-xdevapi-session.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\SchemaObject](class.mysql-xdevapi-schemaobject.md)
- Отримує об'єкт схеми

# SchemaObject::getSchema

(No version information available, might only be in Git)

SchemaObject::getSchema — Отримує об'єкт схеми

### Опис

abstract **mysql_xdevapi\SchemaObject::getSchema**():
[mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)

Використовується іншими об'єктами для отримання схеми об'єкта.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточний об'єкт Schema.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::getSchema()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");print_r($schema); `

Результатом виконання цього прикладу буде щось подібне:

mysql_xdevapi\Schema Object
(
[name] u003d> addressbook
)
