- [«TableUpdate::execute](mysql-xdevapi-tableupdate.execute.md)
- [TableUpdate::orderby »](mysql-xdevapi-tableupdate.orderby.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)
- Обмежує кількість рядків для оновлення

# TableUpdate::limit

(No version information available, might only be in Git)

TableUpdate::limit — Обмежує кількість рядків для оновлення

### Опис

public **mysql_xdevapi\TableUpdate::limit**(int `$rows`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

Встановлює максимальну кількість записів або оновлень.

### Список параметрів

`rows`
Максимальна кількість записів або документів для оновлення.

### Значення, що повертаються

Об'єкт TableUpdate.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableUpdate::limit()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$res u003d $table->update()  ->set('level', 3) ->where('age > 15 and age < 22') ->limit(4) --orderby(['age asc ','name desc'])  ->execute();?> `
