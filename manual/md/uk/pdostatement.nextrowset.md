- [« PDOStatement::getIterator](pdostatement.getiterator.md)
- [PDOStatement::rowCount »](pdostatement.rowcount.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Перехід до наступного набору рядків через запит

# PDOStatement::nextRowset

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.0)

PDOStatement::nextRowset — Перехід до наступного набору рядків
в результаті запиту

### Опис

public **PDOStatement::nextRowset**(): bool

Деякі СУБД підтримують процедури, що зберігаються, які повертають більше
одного набору рядків (його ще називають результуючим набором).
**PDOStatement::nextRowset()** дозволяє отримати доступ до другого та
подальшим наборам, що відповідають об'єкту PDOStatement. Різні набори
рядків можуть мати різну кількість стовпців.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Вилучення даних із кількох наборів рядків, повернутих
процедурою, що зберігається**

У наступному прикладі показано, як викликати процедуру, що зберігається
`MULTIPLE_ROWSETS`, яка повертає три набори рядків. Ми викликаємо
**PDOStatement::nextRowset()** у циклі
[do-while](control-structures.do.while.md), доки він не поверне
**`false`** і завершить цикл, коли більше не буде доступних
результуючих наборів.

` <?php$sql u003d 'CALL multiple_rowsets()';$stmt u003d $conn->query($sql);$i u003d 1;do {    $rowset u003d $stmt->fetchAll(PDO::FETCH if ($rowset) {        printResultSet($rowset, $i); }   $i++;} while ($stmt->nextRowset());function printResultSet(&$rowset, $i) {    print "Результуючий набір $i:
";   foreach ($rowset as $row) {        foreach ($row as $col) {             print|
";    }    print "
";}?> `

Результат виконання цього прикладу:

Результуючий набір 1:
apple red
banana yellow

Результативний набір 2:
orange orange 150
banana yellow 175

Результативний набір 3:
lime green
apple red
banana yellow

### Дивіться також

- [PDOStatement::columnCount()](pdostatement.columncount.md) -
Повертає кількість стовпців у результуючому наборі
- [PDOStatement::execute()](pdostatement.execute.md) - Запускає
підготовлений запит на виконання
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md) -
Повертає метадані стовпця у результуючій таблиці
- [PDO::query()](pdo.query.md) - Готує та виконує
вираз SQL без наповнювачів
