- [«db2_fetch_object](function.db2-fetch-object.md)
- [db2_field_display_size »](function.db2-field-display-size.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Встановлює покажчик набору результатів на наступний рядок або
запитаний рядок

#db2_fetch_row

(PECL ibm_db2 \>u003d 1.0.0)

db2_fetch_row — Встановлює покажчик набору результатів на наступний
рядок або запитаний рядок

### Опис

**db2_fetch_row**(resource `$stmt`, int `$row_number` u003d ?): bool

Використовуйте **db2_fetch_row()** для ітерації набір результатів або
для вказівки на певний рядок у наборі результатів, якщо ви
запитали курсор, що прокручується.

Щоб отримати окремі поля з набору результатів, викличте функцію
[db2_result()](function.db2-result.md).

Замість викликати **db2_fetch_row()** і
[db2_result()](function.db2-result.md), більшість програм буде
викликати одну з функцій
[db2_fetch_assoc()](function.db2-fetch-assoc.md),
[db2_fetch_both()](function.db2-fetch-both.md) або
[db2_fetch_array()](function.db2-fetch-array.md), щоб просунути
покажчик набору результатів та повернути повний рядок у вигляді масиву.

### Список параметрів

`stmt`
Допустимий ресурс `stmt`.

`row_number`
За допомогою курсорів, що прокручуються, ви можете запросити конкретний номер
рядки у наборі результатів. Нумерація рядків починається з першого.

### Значення, що повертаються

Повертає **`true`**, якщо запитаний рядок існує у наборі
результатів. Повертає **`false`**, якщо запитаний рядок не
існує у наборі результатів.

### Приклади

**Приклад #1 Ітерації з набору результатів**

У наступному прикладі показано, як виконати ітерацію за набором
результатів за допомогою **db2_fetch_row()** та отримати стовпці з набору
результатів за допомогою [db2_result()](function.db2-result.md).

` <?php$sql u003d 'SELECT name, breed FROM animals WHERE weight < ?';$stmt u003d db2_prepare($conn, $sql);db2_execute($stmt, array(10)_t$2 ) {   $name u003d db2_result($stmt, 0); $breed u003d db2_result ($stmt, 1); print "$name $breed";}?> `

Результат виконання цього прикладу:

cat Pook
gold fish Bubbles
budgerigar Gizmo
goat Rickety Ride

**Приклад #2 Рекомендовані альтернативи db2_fetch_row/db2_result для
i5/OS**

В i5/OS рекомендується використовувати
[db2_fetch_both()](function.db2-fetch-both.md),
[db2_fetch_array()](function.db2-fetch-array.md) або
[db2_fetch_object()](function.db2-fetch-object.md) замість
**db2_fetch_row()**/[db2_result()](function.db2-result.md). Зазвичай у
**db2_fetch_row()**/[db2_result()](function.db2-result.md) більше
проблем з різними типами стовпців при перетворенні `EBCIDIC` на
`ASCII`, включаючи можливе усічення в `DBCS` додатках. Ви також
можете виявити, що продуктивність
[db2_fetch_both()](function.db2-fetch-both.md),
[db2_fetch_array()](function.db2-fetch-array.md) та
[db2_fetch_object()](function.db2-fetch-object.md) перевершує
**db2_fetch_row()**/[db2_result()](function.db2-result.md).

`<?php  $conn u003d db2_connect("","",""); $sql u003d 'SELECT SPECIFIC_SCHEMA, SPECIFIC_NAME, ROUTINE_SCHEMA, ROUTINE_NAME, ROUTINE_TYPE, ROUTINE_CREATED, ROUTINE_BODY, IN_PARMS, OUT_PARMS, INOUT_PARMS, PARAMETER_STYLE, EXTERNAL_NAME, EXTERNAL_LANGUAGE FROM QSYS2.SYSROUTINES FETCH FIRST 2 ROWS ONLY'; $stmt u003d db2_exec($conn, $sql, array('cursor' u003d> DB2_SCROLLABLE)); while($row u003d db2_fetch_both($stmt)){   echo "<br>db2_fetch_both {$row['SPECIFIC_NAME']} {$row['ROUTINE_CREATED']} {$row[5] }  $stmt u003d db2_exec($conn, $sql, array('cursor' u003d> DB2_SCROLLABLE)); while($row u003d db2_fetch_array($stmt)){   echo "<br>db2_fetch_array {$row[1]}  {$row[5]}"; }  $stmt u003d db2_exec($conn, $sql, array('cursor' u003d> DB2_SCROLLABLE)); while($row u003d db2_fetch_object($stmt)){   echo "<br>db2_fetch_object {$row->SPECIFIC_NAME} {$row->ROUTINE_CREATED}"; }  db2_close($conn);?> `

Результат виконання цього прикладу:

db2_fetch_both MATCH_ANIMAL 2006-08-25-17.10.23.775000 2006-08-25-17.10.23.775000
db2_fetch_both MULTIRESULTS 2006-10-17-10.11.05.308000 2006-10-17-10.11.05.308000
db2_fetch_array MATCH_ANIMAL 2006-08-25-17.10.23.775000
db2_fetch_array MULTIRESULTS 2006-10-17-10.11.05.308000
db2_fetch_object MATCH_ANIMAL 2006-08-25-17.10.23.775000
db2_fetch_object MULTIRESULTS 2006-10-17-10.11.05.308000

### Дивіться також

- [db2_fetch_array()](function.db2-fetch-array.md) - Повертає
масив, індексований за положенням стовпця, що представляє рядок
у наборі результатів
- [db2_fetch_assoc()](function.db2-fetch-assoc.md) - Повертає
масив, індексований на ім'я стовпця, що представляє рядок в
наборі результатів
- [db2_fetch_both()](function.db2-fetch-both.md) - Повертає
масив, індексований як на ім'я стовпця, і за позицією,
представляє рядок у наборі результатів
- [db2_fetch_object()](function.db2-fetch-object.md) - Повертає
об'єкт з властивостями, що становлять стовпці у вибраному рядку
- [db2_result()](function.db2-result.md) - Повертає один стовпець
з рядка у наборі результатів
