- [« PDOStatement::nextRowset](pdostatement.nextrowset.md)
- [PDOStatement::setAttribute »](pdostatement.setattribute.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Повертає кількість рядків, порушених останнім SQL-запитом

# PDOStatement::rowCount

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

PDOStatement::rowCount — Повертає кількість рядків, порушених
останнім SQL-запитом

### Опис

public **PDOStatement::rowCount**(): int

**PDOStatement::rowCount()** повертає кількість рядків, які були
порушені в ході виконання останнього запиту DELETE, INSERT або
UPDATE, запущений відповідним об'єктом `PDOStatement`.

Якщо останнім запитом, запущеним відповідним об'єктом
`PDOStatement`, було SQL-вираз SELECT, деякі СУБД можуть повернути
кількість рядків у результуючому наборі. Однак така поведінка методу
не гарантується для всіх баз даних, і це потрібно враховувати при
проектування додатків.

> **Примітка**:
>
> Цей метод завжди повертає "0" (нуль) з драйвером SQLite, а з
> драйвером PostgreSQL лише при установці атрибута оператора
> **`PDO::ATTR_CURSOR`** рівним **`PDO::CURSOR_SCROLL`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість рядків.

### Приклади

**Приклад #1 Отримання кількості віддалених рядків**

**PDOStatement::rowCount()** повертає кількість рядків, змінених
виразами DELETE, INSERT або UPDATE.

` <?php/* Видалимо всі рядки з таблиці FRUIT */$del u003d $dbh->prepare('DELETE FROM fruit');$del->execute();/* Виведемо число віддалених віддалених рядків:
");$count u003d $del->rowCount();print("Видалено $count рядків.")
");?> `

Результатом виконання цього прикладу буде щось подібне:

Кількість віддалених рядків:
Вилучено 9 рядків.

**Приклад #2 Підрахунок рядків, що повертаються виразом SELECT**

Для більшості СУБД **PDOStatement::rowCount()** не повертає
кількість рядків, порушених SELECT запитом. Замість цього методу
запустіть через [PDO::query()](pdo.query.md) вираз SELECT
COUNT(\*) з тим самим текстом запиту. Потім методом
[PDOStatement::fetchColumn()](pdostatement.fetchcolumn.md) ви отримаєте
число рядків, що збігаються.

` <?php$sql u003d "SELECT COUNT(*) FROM fruit WHERE calories > 100";$res u003d $conn->query($sql);$count u003d $res->fetchColumn();print "Спис" " . $count;?> `

Результатом виконання цього прикладу буде щось подібне:

Збігаються записи: 2

### Дивіться також

- [PDOStatement::columnCount()](pdostatement.columncount.md) -
Повертає кількість стовпців у результуючому наборі
- [PDOStatement::fetchColumn()](pdostatement.fetchcolumn.md) -
Повертає дані одного стовпця наступного рядка результуючого
набору
- [PDO::query()](pdo.query.md) - Готує та виконує
вираз SQL без наповнювачів
