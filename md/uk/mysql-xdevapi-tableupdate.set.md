- [«TableUpdate::orderby](mysql-xdevapi-tableupdate.orderby.md)
- [TableUpdate::where »](mysql-xdevapi-tableupdate.where.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)
- Додає поле для оновлення

# TableUpdate::set

(No version information available, might only be in Git)

TableUpdate::set — Додає поле для оновлення

### Опис

public **mysql_xdevapi\TableUpdate::set**(string `$table_field`, string
`$expression_or_literal`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

Оновлює значення стовпця для записів у таблиці.

### Список параметрів

`table_field`
Ім'я стовпця, що підлягає оновленню.

`expression_or_literal`
Значення, яке буде встановлене у вказаному стовпці.

### Значення, що повертаються

Об'єкт TableUpdate.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\TableUpdate::set()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$res u003d $table->update()  ->set('level', 3) ->where('age > 15 and age < 22') ->limit(4) --orderby(['age asc ','name desc'])  ->execute();?> `
