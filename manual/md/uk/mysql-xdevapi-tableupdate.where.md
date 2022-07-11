- [«TableUpdate::set](mysql-xdevapi-tableupdate.set.md)
- [mysql_xdevapi\Warning »](class.mysql-xdevapi-warning.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)
- Встановлює фільтр пошуку

# TableUpdate::where

(No version information available, might only be in Git)

TableUpdate::where — Встановлює фільтр пошуку

### Опис

public **mysql_xdevapi\TableUpdate::where**(string `$where_expr`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

Встановлює умову пошуку фільтрації.

### Список параметрів

`where_expr`
Умова пошуку для фільтрації документів чи записів.

### Значення, що повертаються

Об'єкт TableUpdate.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableUpdate::where()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$res u003d $table->update()  ->set('level', 3) ->where('age > 15 and age < 22') ->limit(4) --orderby(['age asc ','name desc'])  ->execute();?> `
