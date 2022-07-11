- [«TableUpdate::bind](mysql-xdevapi-tableupdate.bind.md)
- [TableUpdate::execute »](mysql-xdevapi-tableupdate.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)
- Конструктор класу TableUpdate

# TableUpdate::\_\_construct

(No version information available, might only be in Git)

TableUpdate::\_\_construct - Конструктор класу TableUpdate

### Опис

private **mysql_xdevapi\TableUpdate::\_\_construct**()

Ініціюється за допомогою методу update().

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableUpdate::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$res u003d $table->update()  ->set('level', 3) ->where('age > 15 and age < 22') ->limit(4) --orderby(['age asc ','name desc'])  ->execute();?> `
