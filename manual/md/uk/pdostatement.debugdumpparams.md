- [« PDOStatement::columnCount](pdostatement.columncount.md)
- [PDOStatement::errorCode »](pdostatement.errorcode.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Виведення інформації про підготовлену SQL-команду з метою налагодження

# PDOStatement::debugDumpParams

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.9.0)

PDOStatement::debugDumpParams — Виведення інформації про підготовлену
SQL-команді з метою налагодження

### Опис

public **PDOStatement::debugDumpParams**(): ?bool

Виводить інформацію про підготовлений запит у вихідний потік. Буде
виводитись текст використовуваного `SQL` запиту, кількість задіяних
параметрів (`Params`), список параметрів зі своїми іменами ключів або
індексами, їх іменами, індексами у запиті (якщо підтримується в
драйвері PDO, інакше -1), типом (`param_type`) у вигляді цілого числа та
логічне значення `is_param`.

Це функція налагодження, яка направляє дані на стандартний висновок.

**Підказка**

Як і з будь-якою іншою функцією, що здійснює виведення безпосередньо в
браузер, ви можете використовувати [функції контролю
виводу](book.outcontrol.md), щоб перехоплювати виведені цієї
функцією дані та зберігати їх, наприклад, у рядок (string).

Ця функція виведе інформацію про параметри запиту, що існують на
момент дзвінка. Додаткові параметри не зберігаються у запиті, тому
відображені не будуть.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`null`** або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------|
| 7.2.0 | **PDOStatement::debugDumpParams()** тепер повертає SQL, відправлений до бази даних, у тому числі повний необроблений запит (включаючи замінені параметри з їх пов'язаними значеннями). Зверніть увагу, що це буде працювати тільки при включеній емуляції запитів, що готуються. |

### Приклади

**Приклад #1 Приклад використання **PDOStatement::debugDumpParams()** з
іменованими параметрами**

`<?php/* Виконання запиту з прив'язкою PHP змінних */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('SELECT name, colour, ca   ca colour u003d :colour');$sth->bindParam(':calories', $calories, PDO::PARAM_INT);$sth->bindValue(':colour', $colour, PDO::PARAM_STR, 12);$ sth->execute();$sth->debugDumpParams();?> `

Результат виконання цього прикладу:

SQL: [96] SELECT name, colour, calories
FROM fruit
WHERE calories < :calories AND colour u003d :colour
Params: 2
Key: Name: [9] :calories
paramnou003d-1
nameu003d[9] ":calories"
is_paramu003d1
param_typeu003d1
Key: Name: [7] :colour
paramnou003d-1
nameu003d[7] ":colour"
is_paramu003d1
param_typeu003d2

**Приклад #2 Приклад використання **PDOStatement::debugDumpParams()** з
неіменованими (?) параметрами**

` <?php/* Виконання запиту з прив'язкою PHP змінних */$calories u003d 150;$colour u003d 'red';$name u003d 'apple';$sth u003d $dbh->prepare('SELECT    fruit    WHERE calories < ? AND colour u003d ?');$sth->bindParam(1, $calories, PDO::PARAM_INT);$sth->bindValue(2, $colour, PDO::PA execute();$sth->debugDumpParams();?> `

Результат виконання цього прикладу:

SQL: [82] SELECT name, colour, calories
FROM fruit
WHERE calories < ? AND colour u003d?
Params: 2
Key: Position #0:
paramnou003d0
nameu003d[0] ""
is_paramu003d1
param_typeu003d1
Key: Position #1:
paramnou003d1
nameu003d[0] ""
is_paramu003d1
param_typeu003d2

### Дивіться також

- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::bindParam()](pdostatement.bindparam.md) -
Прив'язує параметр запиту до змінної
- [PDOStatement::bindValue()](pdostatement.bindvalue.md) - Зв'язує
параметр із заданим значенням
