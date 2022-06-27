- [«db2_procedures](function.db2-procedures.md)
- [db2_rollback »](function.db2-rollback.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає один стовпець з рядка у наборі результатів

# db2_result

(PECL ibm_db2 \>u003d 1.0.0)

db2_result — Повертає один стовпець із рядка у наборі результатів

### Опис

**db2_result**(resource `$stmt`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$column`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Використовуйте **db2_result()**, щоб повернути значення вказаного стовпця
у поточному рядку набору результатів. Ви повинні викликати
[db2_fetch_row()](function.db2-fetch-row.md) перед викликом
**db2_result()**, щоб встановити положення вказівника набору
результатів.

### Список параметрів

`stmt`
Допустимий ресурс `stmt`.

`column`
Або цілісний індекс стовпця (починаючи з 0) у наборі результатів,
або рядок, що відповідає імені стовпця.

### Значення, що повертаються

Повертає значення запитаного поля, якщо поле існує у наборі
результатів. Повертає NULL, якщо поле не існує та видає
попередження.

### Приклади

**Приклад #1 Приклад використання **db2_result()****

У наступному прикладі показано, як виконати ітерацію за набором
результатів за допомогою [db2_fetch_row()](function.db2-fetch-row.md) та
отримати стовпці з набору результатів за допомогою **db2_result()**.

` <?php$sql u003d 'SELECT name, breed FROM animals WHERE weight < ?';$stmt u003d db2_prepare($conn, $sql);db2_execute($stmt, array(10)_t$2 ) {   $name u003d db2_result($stmt, 0); $breedu003du003ddb2_result($stmt, 'BREED'); print "$name $breed";}?> `

Результат виконання цього прикладу:

cat Pook
gold fish Bubbles
budgerigar Gizmo
goat Rickety Ride

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
- [db2_fetch_row()](function.db2-fetch-row.md) - Встановлює
покажчик набору результатів на наступний рядок або запитаний
рядок
