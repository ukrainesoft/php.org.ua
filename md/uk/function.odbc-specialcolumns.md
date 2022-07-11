- [«odbc_setoption](function.odbc-setoption.md)
- [odbc_statistics »](function.odbc-statistics.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Витягує спеціальні стовпці

#odbc_specialcolumns

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_specialcolumns — Витягує спеціальні стовпці

### Опис

**odbc_specialcolumns**(
resource `$odbc`,
int `$type`,
?string `$catalog`,
string `$schema`,
string `$table`,
int `$scope`,
int `$nullable`
): resource \ | false

Витягує або оптимальний набір стовпців, який однозначно визначає
рядок у таблиці, або стовпці, які автоматично оновлюються, коли
будь-яке значення у рядку оновлюється транзакцією.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

`type`
Коли аргументом є **`SQL_BEST_ROWID`**,
**odbc_specialcolumns()** повертає стовпець або стовпці, які
однозначно ідентифікують кожен рядок у таблиці. Коли аргументом
є **`SQL_ROWVER`**, **odbc_specialcolumns()** повертає стовпець
або стовпці у зазначеній таблиці, якщо вони є, які автоматично
оновлюються джерелом даних, коли будь-яке значення в рядку оновлюється
будь-якою транзакцією.

`catalog`
Каталог ('qualifier' мовою ODBC 2).

`schema`
Схема ('owner' мовою ODBC 2).

`table`
Таблиця.

`scope`
Область, яка впорядковує результативний набір. Одна з констант
**`SQL_SCOPE_CURROW`**, **`SQL_SCOPE_TRANSACTION`** або
**`SQL_SCOPE_SESSION`**.

`nullable`
Визначає, чи повертати спеціальні стовпці, які можуть мати
значення NULL. Одна з констант **`SQL_NO_NULLS`** або
**`SQL_NULLABLE`**.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC або **`false`** у разі
виникнення помилки.

У результуючому наборі є такі стовпці:

- `SCOPE`
- `COLUMN_NAME`
- `DATA_TYPE`
- `TYPE_NAME`
- `COLUMN_SIZE`
- `BUFFER_LENGTH`
- `DECIMAL_DIGITS`
- `PSEUDO_COLUMN`

Драйвери можуть повідомляти додаткові стовпці.

Результуючий набір впорядковується за SCOPE.

### Дивіться також

- [odbc_tables()](function.odbc-tables.md) - Отримує список імен
таблиць, що зберігаються у певному джерелі даних
