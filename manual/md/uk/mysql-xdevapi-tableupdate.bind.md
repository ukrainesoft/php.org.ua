- [«mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)
- [TableUpdate::\_\_construct
»](mysql-xdevapi-tableupdate.construct.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)
- Прив'язує параметри запиту на оновлення

# TableUpdate::bind

(No version information available, might only be in Git)

TableUpdate::bind — Прив'язує параметри запиту на оновлення

### Опис

public **mysql_xdevapi\TableUpdate::bind**(array `$placeholder_values`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

Прив'язує значення до певного наповнювача.

### Список параметрів

`placeholder_values`
Ім'я заповнювача та значення для прив'язки, визначене як масив JSON.

### Значення, що повертаються

Об'єкт TableUpdate.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\TableUpdate::bind()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$table->update() ->set('status', 'admin')  ->where('name u003d :name and age > :age') ->bind(['name' u003d> 'Bernie') , 'age' u003d> 2000]) ->execute();?> `
