- [« PDOStatement::errorCode](pdostatement.errorcode.md)
- [PDOStatement::execute »](pdostatement.execute.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Отримання розширеної інформації про помилку, що сталася в
в результаті роботи об'єкта PDOStatement

# PDOStatement::errorInfo

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

PDOStatement::errorInfo — Отримання розширеної інформації про помилку,
що сталася в результаті роботи об'єкта PDOStatement

### Опис

public **PDOStatement::errorInfo**(): array

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**PDOStatement::errorInfo()** повертає масив з інформацією про помилку,
відповідної останньої операції об'єкта PDOStatement. Масив складається
як мінімум з наступних полів:

| Елемент Інформація |
|---------|------------------------------------------- -------------------------------------------------- --------------|
| 0 | Код помилки SQLSTATE (п'ятисимвольний код, що складається з букв та цифр, визначений у стандарті ANSI SQL). |
| 1 | Код помилки, який повертається драйвером. |
| 2 | Повідомлення про помилку, яке повертається драйвером. |

### Приклади

**Приклад #1 Виведення полів errorInfo() при PDO_ODBC підключенні до DB2**

` <?php/* Спровокуємо помилки -- таблиці BONES не існує */$sth u003d $dbh->prepare('SELECT skull FROM bones');$sth->execute();echo "
PDOStatement::errorInfo():
";$arr u003d $sth->errorInfo();print_r($arr);?> `

Результат виконання цього прикладу:

PDOStatement::errorInfo():
Array
(
[0] u003d> 42S02
[1] u003d> -204
[2] u003d> [IBM][CLI Driver][DB2/LINUX] SQL0204N "DANIELS.BONES" is an undefined name. SQLSTATEu003d42704
)

### Дивіться також

- [PDO::errorCode()](pdo.errorcode.md) - Повертає код SQLSTATE
результату останньої операції з базою даних
- [PDO::errorInfo()](pdo.errorinfo.md) - Отримує розширену
інформацію про помилку, що сталася під час останнього звернення до
базі даних
- [PDOStatement::errorCode()](pdostatement.errorcode.md) - Отримує
код SQLSTATE, пов'язаний з останньою операцією в об'єкті PDOStatement
