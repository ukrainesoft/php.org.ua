- [« RowResult::fetchOne](mysql-xdevapi-rowresult.fetchone.md)
- [RowResult::getColumnNames
»](mysql-xdevapi-rowresult.getcolumnnames.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)
- Отримує кількість стовпців

# RowResult::getColumnsCount

(No version information available, might only be in Git)

RowResult::getColumnsCount — Отримує кількість стовпців

### Опис

public **mysql_xdevapi\RowResult::getColumnsCount**(): int

Отримує кількість стовпців, які є у наборі результатів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Кількість стовпців; 0 якщо їх немає

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------|
| 8.0.14 | Метод перейменований з getColumnCount() на getColumnsCount(). |

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\RowResult::getColumnsCount()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE addressbook")->execute();$session->sql("CREATE DATABASE foo")->execute();$session->sql("CREATE TABLE foo.test_table(x int)")->execute();$session->sql("INSERT INTO addressbook.names values ('John ', 42), ('Sam', 33)")->execute();$sql u003d $session->sql("SELECT * from addressbook.names")->execute();echo $sql->getColumnsCount (); `

Результатом виконання цього прикладу буде щось подібне:

2
