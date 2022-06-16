- [«
DatabaseObject::getName](mysql-xdevapi-databaseobject.getname.md)
- [mysql_xdevapi\DocResult »](class.mysql-xdevapi-docresult.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\DatabaseObject](class.mysql-xdevapi-databaseobject.md)
- Отримує ім'я сесії

# DatabaseObject::getSession

(No version information available, might only be in Git)

DatabaseObject::getSession — Отримує ім'я сесії

### Опис

abstract public **mysql_xdevapi\DatabaseObject::getSession**():
[mysql_xdevapi\Session](class.mysql-xdevapi-session.md)

Отримує сесію, пов'язану з об'єктом бази даних.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Session.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\DatabaseObject::getSession()****

` <?php$session u003d $dbObj->getSession();?> `
