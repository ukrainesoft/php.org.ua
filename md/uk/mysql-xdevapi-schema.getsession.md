- [« Schema::getName](mysql-xdevapi-schema.getname.md)
- [Schema::getTable »](mysql-xdevapi-schema.gettable.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Отримати сесію схеми

# Schema::getSession

(No version information available, might only be in Git)

Schema::getSession — Отримати сесію схеми

### Опис

public **mysql_xdevapi\Schema::getSession**():
[mysql_xdevapi\Session](class.mysql-xdevapi-session.md)

Отримання нового об'єкта Session із Schema.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Session.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Schema::getSession()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");// ...$newsessionu003du003d$schema->getSession();var_dump($session);var_ump $newsession);?> `

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\Session)#1 (0) {
}

object(mysql_xdevapi\Session)#3 (0) {
}
