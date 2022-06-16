- [«odbc_primarykeys](function.odbc-primarykeys.md)
- [odbc_procedures »](function.odbc-procedures.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Отримує інформацію про параметри процедур

#odbc_procedurecolumns

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_procedurecolumns — Отримує інформацію про параметри процедур

### Опис

**odbc_procedurecolumns**(
resource `$odbc`,
?string `$catalog` u003d **`null`**,
?string `$schema` u003d **`null`**,
?string `$procedure` u003d **`null`**,
?string `$column` u003d **`null`**
): resource \ | false

Отримує інформацію про параметри процедури.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

`catalog`
Каталог ('qualifier' мовою ODBC 2).

`schema`
Схема ('owner' мовою ODBC 2). Цей параметр приймає такі
шаблони пошуку: `%` відповідний нулю або більше символів, та `_`
відповідний рівно одному символу.

`procedure`
Процедура. Цей параметр приймає такі шаблони пошуку: `%`
відповідний нулю або більше символів, і `_` відповідний рівно
один символ.

`column`
Стовпець. Цей параметр приймає такі шаблони пошуку: `%`
відповідний нулю або більше символів, і `_` відповідний рівно
один символ.

### Значення, що повертаються

Повертає список вхідних та вихідних параметрів, а також стовпці,
складові результуючий набір для зазначених процедур. Повертає
ідентифікатор результату ODBC або **`false`** у разі виникнення
помилки.

У результуючому наборі є такі стовпці:

- `PROCEDURE_CAT`
- `PROCEDURE_SCHEM`
- `PROCEDURE_NAME`
- `COLUMN_NAME`
- `COLUMN_TYPE`
- `DATA_TYPE`
- `TYPE_NAME`
- `COLUMN_SIZE`
- `BUFFER_LENGTH`
- `DECIMAL_DIGITS`
- `NUM_PREC_RADIX`
- `NULLABLE`
- `REMARKS`
- `COLUMN_DEF`
- `SQL_DATA_TYPE`
- `SQL_DATETIME_SUB`
- `CHAR_OCTET_LENGTH`
- `ORDINAL_POSITION`
- `IS_NULLABLE`

Драйвери можуть повідомляти додаткові стовпці.

Результуючий набір впорядковується за PROCEDURE_CAT,
`PROCEDURE_SCHEM`, `PROCEDURE_NAME` та `COLUMN_TYPE`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------------------------------------|
| 8.0.0 | До цієї версії функцію можна було викликати лише з одним або п'ятьма аргументами. |

### Приклади

**Приклад #1 Перелік стовпців процедури, що зберігається**

` <?php$conn u003d odbc_connect($dsn, $user, $pass);$columns u003d odbc_procedurecolumns($conn, 'TutorialDB', 'dbo', 'GetEmployeeSalesYTD;1', '%'); rowu003du003dodbc_fetch_array($columns))) {   print_r($row); break; // наступні рядки опущені для короткості}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[PROCEDURE_CAT] u003d> TutorialDB
[PROCEDURE_SCHEM] u003d> dbo
[PROCEDURE_NAME] u003d> GetEmployeeSalesYTD;1
[COLUMN_NAME] u003d> @SalesPerson
[COLUMN_TYPE] u003d> 1
[DATA_TYPE] u003d> -9
[TYPE_NAME] u003d> nvarchar
[COLUMN_SIZE] u003d> 50
[BUFFER_LENGTH] u003d> 100
[DECIMAL_DIGITS] u003d>
[NUM_PREC_RADIX] u003d>
[NULLABLE] u003d> 1
[REMARKS] u003d>
[COLUMN_DEF] u003d>
[SQL_DATA_TYPE] u003d> -9
[SQL_DATETIME_SUB] u003d>
[CHAR_OCTET_LENGTH] u003d> 100
[ORDINAL_POSITION] u003d> 1
[IS_NULLABLE] u003d> YES
)

### Дивіться також

- [odbc_columns()](function.odbc-columns.md) - Перераховує імена
стовпців у зазначених таблицях
