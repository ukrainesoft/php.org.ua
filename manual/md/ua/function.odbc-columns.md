- [«odbc_columnprivileges](function.odbc-columnprivileges.md)
- [odbc_commit »] (function.odbc-commit.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- перераховує імена стовпців у зазначених таблицях

#odbc_columns

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_columns — Перелік імен стовпців у вказаних таблицях

### Опис

**odbc_columns**(
resource `$odbc`,
?string `$catalog` u003d **`null`**,
?string `$schema` u003d **`null`**,
?string `$table` u003d **`null`**,
?string `$column` u003d **`null`**
): resource \ | false

Перелічує усі стовпці у запитаному діапазоні.

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

`table`
Ім'я таблиці. Цей параметр приймає такі шаблони пошуку: `%`
відповідний нулю або більше символів, і `_` відповідний рівно
один символ.

`column`
Ім'я стовпця. Цей параметр приймає такі шаблони пошуку: `%`
відповідний нулю або більше символів, і `_` відповідний рівно
один символ.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC або **`false`** у разі
виникнення помилки.

У результуючому наборі є такі стовпці:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `COLUMN_NAME`
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

Результуючий набір впорядковується за TABLE_CAT, TABLE_SCHEM,
`TABLE_NAME` та `ORDINAL_POSITION`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------------------|
| 8.0.0 | `schema`, `table` та `column` тепер допускають значення null. |

### Приклади

**Приклад #1 Перелік стовпців таблиці**

` <?php$conn u003d odbc_connect($dsn, $user, $pass);$columns u003d odbc_columns($conn, 'TutorialDB', 'dbo', 'test', '%');while (($row u003d odbc_fetch_array($columns))) {    print_r($row); break; // наступні рядки опущені для короткості}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[TABLE_CAT] u003d> TutorialDB
[TABLE_SCHEM] u003d> dbo
[TABLE_NAME] u003d> TEST
[COLUMN_NAME] u003d> id
[DATA_TYPE] u003d> 4
[TYPE_NAME] u003d> int
[COLUMN_SIZE] u003d> 10
[BUFFER_LENGTH] u003d> 4
[DECIMAL_DIGITS] u003d> 0
[NUM_PREC_RADIX] u003d> 10
[NULLABLE] u003d> 0
[REMARKS] u003d>
[COLUMN_DEF] u003d>
[SQL_DATA_TYPE] u003d> 4
[SQL_DATETIME_SUB] u003d>
[CHAR_OCTET_LENGTH] u003d>
[ORDINAL_POSITION] u003d> 1
[IS_NULLABLE] u003d> NO
)

### Дивіться також

- [odbc_columnprivileges()](function.odbc-columnprivileges.md) -
Перелічує стовпці та пов'язані привілеї для даної таблиці
- [odbc_procedurecolumns()](function.odbc-procedurecolumns.md) -
Отримує інформацію про параметри процедур
