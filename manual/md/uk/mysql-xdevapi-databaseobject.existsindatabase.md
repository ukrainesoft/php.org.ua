- [«
mysql_xdevapi\DatabaseObject](class.mysql-xdevapi-databaseobject.md)
- [DatabaseObject::getName
»](mysql-xdevapi-databaseobject.getname.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\DatabaseObject](class.mysql-xdevapi-databaseobject.md)
- Перевіряє, чи існує об'єкт у базі даних

# DatabaseObject::existsInDatabase

(No version information available, might only be in Git)

DatabaseObject::existsInDatabase — Перевіряє, чи існує об'єкт в
базі даних

### Опис

abstract public **mysql_xdevapi\DatabaseObject::existsInDatabase**():
bool

Перевіряє, чи об'єкт бази даних посилається на об'єкт, який існує
у базі даних.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо об'єкт існує в базі даних, інакше
**`false`**, якщо це не так.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\DatabaseObject::existsInDatabase()****

` <?php$existInDb u003d $dbObj->existsInDatabase();?> `
