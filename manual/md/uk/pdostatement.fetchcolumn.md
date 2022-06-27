- [« PDOStatement::fetchAll](pdostatement.fetchall.md)
- [PDOStatement::fetchObject »](pdostatement.fetchobject.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Повертає дані одного стовпця наступного рядка результуючого
набору

# PDOStatement::fetchColumn

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.9.0)

PDOStatement::fetchColumn — Повертає дані одного стовпця наступного
рядки результуючого набору

### Опис

public **PDOStatement::fetchColumn**(int `$column` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає дані одного стовпця наступного рядка результуючого
таблиці. Якщо в результаті запиту рядків більше немає, функція поверне
**`false`**.

> **Примітка**:
>
> Не слід використовувати **PDOStatement::fetchColumn()** для отримання
> булевих полів, тому що неможливо відрізнити значення **`false`** від
> відсутності рядків результату, що залишилися. Натомість використовуйте метод
> [PDOStatement::fetch()](pdostatement.fetch.md).

### Список параметрів

`column`
Номер стовпця, дані якого потрібно витягти. Нумерація починається
з 0. Якщо параметр не заданий, **PDOStatement::fetchColumn()** вибере
дані першого стовпця.

### Значення, що повертаються

**PDOStatement::fetchColumn()** повертає значення одного стовпця
наступного рядка результуючого набору або **`false`**, якщо більше немає
рядків.

**Увага**

При використанні **PDOStatement::fetchColumn()** для отримання даних
із результуючого набору неможливо отримати значення іншого стовпця
того ж рядка.

### Приклади

**Приклад #1 Отримання значення першого стовпця наступного рядка**

` <?php$sth u003d $dbh->prepare("SELECT name, colour FROM fruit");$sth->execute();print("Отримання значення першого стовпця першого рядки:
");$result u003d $sth->fetchColumn();print("name u003d $result
");print("Отримання значення другого стовпця другого рядки:
");$result u003d $sth->fetchColumn(1);print("colour u003d $result
");?> `

Результат виконання цього прикладу:

Отримання значення першого стовпця першого рядка:
name u003d lemon
Отримання значення другого стовпця другого рядка:
colour u003d red

### Дивіться також

- [PDO::query()](pdo.query.md) - Готує та виконує
вираз SQL без наповнювачів
- [PDOStatement::fetch()](pdostatement.fetch.md) - Вилучення
наступного рядка з результуючого набору
- [PDOStatement::fetchAll()](pdostatement.fetchall.md) - Вибирає
рядки, що залишилися з набору результатів
- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::setFetchMode()](pdostatement.setfetchmode.md) -
Встановлює стандартний режим вибірки для об'єкта запиту
