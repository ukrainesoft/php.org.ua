- [«
TableUpdate::\_\_construct](mysql-xdevapi-tableupdate.construct.md)
- [TableUpdate::limit »](mysql-xdevapi-tableupdate.limit.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)
- Виконує запит на оновлення

# TableUpdate::execute

(No version information available, might only be in Git)

TableUpdate::execute — Виконує запит на оновлення

### Опис

public **mysql_xdevapi\TableUpdate::execute**():
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

Виконує затвердження оновлення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт TableUpdate.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableUpdate::execute()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$res u003d $table->update()  ->set('level', 3) ->where('age > 15 and age < 22') ->limit(4) --orderby(['age asc ','name desc'])  ->execute();?> `
