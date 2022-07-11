- [«odbc_specialcolumns](function.odbc-specialcolumns.md)
- [odbc_tableprivileges »](function.odbc-tableprivileges.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Отримує статистику про таблицю

#odbc_statistics

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_statistics — Отримує статистику про таблицю

### Опис

**odbc_statistics**(
resource `$odbc`,
?string `$catalog`,
string `$schema`,
string `$table`,
int `$unique`,
int `$accuracy`
): resource \ | false

Отримує статистику про таблицю та її індекси.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

`catalog`
Каталог ('qualifier' мовою ODBC 2).

`schema`
Схема ('owner' мовою ODBC 2).

`table`
Ім'я таблиці.

`unique`
Тип індексу. Одна з констант **`SQL_INDEX_UNIQUE`** або
**`SQL_INDEX_ALL`**.

`accuracy`
Одна з констант **`SQL_ENSURE`** або **`SQL_QUICK`**. Остання
запитує у драйвера отримання `CARDINALITY` та `PAGES`, тільки якщо
вони легко доступні із сервера.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC або **`false`** у разі
виникнення помилки.

У результуючому наборі є такі стовпці:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `NON_UNIQUE`
- `INDEX_QUALIFIER`
- `INDEX_NAME`
- `TYPE`
- `ORDINAL_POSITION`
- `COLUMN_NAME`
- `ASC_OR_DESC`
- `CARDINALITY`
- `PAGES`
- `FILTER_CONDITION`

Драйвери можуть повідомляти додаткові стовпці.

Результуючий набір впорядковується за NON_UNIQUE, TYPE,
`INDEX_QUALIFIER`, `INDEX_NAME` та `ORDINAL_POSITION`.

### Приклади

**Приклад #1 Висновок статистики про таблицю**

` <?php$conn u003d odbc_connect($dsn, $user, $pass);$statistics u003d odbc_statistics($conn, 'TutorialDB', 'dbo', 'TEST', SQL_INDEX_UNIQUE, SQL_QUICK); odbc_fetch_array($statistics))) {    print_r($row); break; // наступні рядки опущені для короткості}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[TABLE_CAT] u003d> TutorialDB
[TABLE_SCHEM] u003d> dbo
[TABLE_NAME] u003d> TEST
[NON_UNIQUE] u003d>
[INDEX_QUALIFIER] u003d>
[INDEX_NAME] u003d>
[TYPE] u003d> 0
[ORDINAL_POSITION] u003d>
[COLUMN_NAME] u003d>
[ASC_OR_DESC] u003d>
[CARDINALITY] u003d> 15
[PAGES] u003d> 3
[FILTER_CONDITION] u003d>
)

### Дивіться також

- [odbc_tables()](function.odbc-tables.md) - Отримує список імен
таблиць, що зберігаються у певному джерелі даних
