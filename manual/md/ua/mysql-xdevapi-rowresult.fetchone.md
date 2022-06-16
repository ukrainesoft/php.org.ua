- [« RowResult::fetchAll](mysql-xdevapi-rowresult.fetchall.md)
- [RowResult::getColumnsCount
»](mysql-xdevapi-rowresult.getcolumncount.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)
- отримує рядок з результату

# RowResult::fetchOne

(No version information available, might only be in Git)

RowResult::fetchOne — Отримує рядок із результату

### Опис

public **mysql_xdevapi\RowResult::fetchOne**(): array

Витягує один результат із набору результатів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Результат у вигляді асоціативного масиву або **`null`**, якщо ні
результатів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\RowResult::fetchOne()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE addressbook")->execute();$session->sql("CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names") ;$row u003d $table->select('name', 'age')->where('age < 40')->execute()->fetchOne();print_r($row); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[name] u003d> Sam
[age] u003d> 33
)
