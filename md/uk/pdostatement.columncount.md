- [« PDOStatement::closeCursor](pdostatement.closecursor.md)
- [PDOStatement::debugDumpParams »](pdostatement.debugdumpparams.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Повертає кількість стовпців у результуючому наборі

# PDOStatement::columnCount

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.0)

PDOStatement::columnCount — Повертає кількість стовпців у
результуючому наборі

### Опис

public **PDOStatement::columnCount**(): int

Використовуйте **PDOStatement::columnCount()**, щоб дізнатися кількість
стовпців у результуючому наборі, який представляє об'єкт
PDOStatement.

Якщо об'єкт PDOStatement був повернутий з методу
[PDO::query()](pdo.query.md), число стовпців можна дізнатися відразу.

Якщо об'єкт PDOStatement був повернутий з методу
[PDO::prepare()](pdo.prepare.md), точну кількість стовпців можна
буде дізнатися тільки після запуску методу
[PDOStatement::execute()](pdostatement.execute.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість стовпців у результуючому наборі запиту
PDOStatement, навіть якщо він порожній. Якщо результуючого набору немає,
**PDOStatement::columnCount()** повертає `0`.

### Приклади

**Приклад #1 Підрахунок стовпців**

У цьому прикладі показано, як **PDOStatement::columnCount()** працює в
у разі наявності та відсутності результуючого набору.

` <?php$dbh u003d new PDO('odbc:sample', 'db2inst1', 'ibmdb2');$sth u003d $dbh->prepare("SELECT name, colour FROM fruit");/* Поліц (неіснуючому) результуючому наборі */$colcount u003d $sth->columnCount();print("Перед викликом execute(), в результуючому наборі $colcount стовпців (повинно бути  
");$sth->execute();/* Підрахунок кількості стовпців в результуючому наборі */$colcount u003d $sth->columnCount();print("Після виклику execute(),ж| 2)
");?> `

Результат виконання цього прикладу:

Перед викликом execute(), у результуючому наборі 0 стовпців (має бути 0)
Після виклику execute(), у результуючому наборі 2 стовпчиків (має бути 2)

### Дивіться також

- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::execute()](pdostatement.execute.md) - Запускає
підготовлений запит на виконання
- [PDOStatement::rowCount()](pdostatement.rowcount.md) - Повертає
кількість рядків, порушених останнім SQL-запитом
