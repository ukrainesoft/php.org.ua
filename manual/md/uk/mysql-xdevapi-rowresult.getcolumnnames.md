- [«
RowResult::getColumnsCount](mysql-xdevapi-rowresult.getcolumncount.md)
- [RowResult::getColumns »](mysql-xdevapi-rowresult.getcolumns.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)
- Отримує всі імена стовпців

# RowResult::getColumnNames

(No version information available, might only be in Git)

RowResult::getColumnNames — Отримує всі імена стовпців

### Опис

public **mysql_xdevapi\RowResult::getColumnNames**(): array

Отримує імена стовпців, які є у наборі результатів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Числовий масив імен стовпців таблиці або порожній масив, якщо набір
результатів порожній.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\RowResult::getColumnNames()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE addressbook")->execute();$session->sql("CREATE DATABASE foo")->execute();$session->sql("CREATE TABLE foo.test_table(x int)")->execute();$session->sql("INSERT INTO addressbook.names values ('John ', 42), ('Sam', 33)")->execute();$sql u003d $session->sql("SELECT * from addressbook.names")->execute();$colnames u003d $sql- >getColumnNames();print_r($colnames); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> name
[1] u003d> age
)
