- [« Collection::getSchema](mysql-xdevapi-collection.getschema.md)
- [Collection::modify »](mysql-xdevapi-collection.modify.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Повертає об'єкт Session

# Collection::getSession

(No version information available, might only be in Git)

Collection::getSession — Повертає об'єкт Session

### Опис

public **mysql_xdevapi\Collection::getSession**(): Session

Повертає новий об'єкт Session із об'єкта Collection.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Session.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::getSession()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");// ...$news ->getSession();var_dump($session);var_dump($newsession);?> `

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\Session)#1 (0) {
}
object(mysql_xdevapi\Session)#4 (0) {
}
