- [«odbc_procedurecolumns](function.odbc-procedurecolumns.md)
- [odbc_result_all »](function.odbc-result-all.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Отримує список процедур, що зберігаються у певному джерелі даних

#odbc_procedures

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_procedures — Отримує список процедур, що зберігаються у певному
джерелі даних

### Опис

**odbc_procedures**(
resource `$odbc`,
?string `$catalog` u003d **`null`**,
?string `$schema` u003d **`null`**,
?string `$procedure` u003d **`null`**
): resource \ | false

Перелічує всі процедури в діапазоні.

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
Ім'я процедури. Цей параметр приймає такі шаблони пошуку: `%`
відповідний нулю або більше символів, і `_` відповідний рівно
один символ.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC, який містить інформацію або
**`false`** у разі виникнення помилки.

У результуючому наборі є такі стовпці:

- `PROCEDURE_CAT`
- `PROCEDURE_SCHEM`
- `PROCEDURE_NAME`
- `NUM_INPUT_PARAMS`
- `NUM_OUTPUT_PARAMS`
- `NUM_RESULT_SETS`
- `REMARKS`
- `PROCEDURE_TYPE`

Драйвери можуть повідомляти додаткові стовпці.

Результуючий набір впорядковується за PROCEDURE_CAT,
`PROCEDURE_SCHEMA` та `PROCEDURE_NAME`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------------------|
| 8.0.0 | До цієї версії функцію можна було викликати лише з одним або чотирма аргументами. |

### Приклади

**Приклад #1 Перелік процедур бази даних**

` <?php$connu003du003dodbc_connect($dsn, $user, $pass);$procedures u003d odbc_procedures($conn, $catalog, $schema, '%');while(($row u003d odbc_fetch_arra ) {    print_r($row); break; // наступні рядки опущені для короткості}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[PROCEDURE_CAT] u003d> TutorialDB
[PROCEDURE_SCHEM] u003d> dbo
[PROCEDURE_NAME] u003d> GetEmployeeSalesYTD;1
[NUM_INPUT_PARAMS] u003d> -1
[NUM_OUTPUT_PARAMS] u003d> -1
[NUM_RESULT_SETS] u003d> -1
[REMARKS] u003d>
[PROCEDURE_TYPE] u003d> 2
)

### Дивіться також

- [odbc_procedurecolumns()](function.odbc-procedurecolumns.md) -
Отримує інформацію про параметри процедур
- [odbc_tables()](function.odbc-tables.md) - Отримує список імен
таблиць, що зберігаються у певному джерелі даних
