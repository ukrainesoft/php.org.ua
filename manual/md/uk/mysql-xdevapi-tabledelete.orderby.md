- [«TableDelete::limit](mysql-xdevapi-tabledelete.limit.md)
- [TableDelete::where »](mysql-xdevapi-tabledelete.where.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)
- Встановлює критерії сортування видалення

# TableDelete::orderby

(No version information available, might only be in Git)

TableDelete::orderby — Встановлює критерії сортування видалення

### Опис

public **mysql_xdevapi\TableDelete::orderby**(string `$orderby_expr`):
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

Встановлює параметри порядку для набору результатів.

### Список параметрів

`orderby_expr`
Визначення сортування.

### Значення, що повертаються

Об'єкт TableDelete.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableDelete::orderBy()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$table->delete() ->where("age u003d :age")  ->bind(['age' u003d> 42])  ->orderby("name DESC")  ->limit(1)  -> execute();?> `
