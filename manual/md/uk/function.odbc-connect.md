- [«odbc_commit](function.odbc-commit.md)
- [odbc_cursor »](function.odbc-cursor.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- З'єднує із джерелом даних

#odbc_connect

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_connect — З'єднує з джерелом даних

### Опис

**odbc_connect**(
string `$dsn`,
string `$user`,
string `$password`,
int `$cursor_option` u003d **`SQL_CUR_USE_DRIVER`**
): resource \ | false

Ідентифікатор з'єднання, що повертається цією функцією, необхідний
інших ODBC-функцій. Ви можете тримати одночасно відкритими кілька
з'єднань.

Деякі ODBC-драйвери, що виконують складні процедури, що зберігаються, можуть
обриватися з помилкою типу: "Cannot open a cursor on a stored procedure
що має будь-який інший, ніж один select statement in it".
Використання SQL_CUR_USE_ODBC допоможе уникнути цієї помилки.
Також деякі драйвери не підтримують необов'язковий параметр
row_number у [odbc_fetch_row()](function.odbc-fetch-row.md).
SQL_CUR_USE_ODBC також може допомогти у цьому випадку.

### Список параметрів

`dsn`
Database Source Name (DSN) для з'єднання. Як альтернатива можна
робити з'єднання і без DSN.

`user`
Ім'я.

`password`
Пароль.

`cursor_option`
Встановлює тип курсору для з'єднання. Зазвичай цей
параметр не потрібен, але може виявитися корисним для обходу проблем з
Деякі драйвери ODBC.

Наступні константи визначені для курсору:

- SQL_CUR_USE_IF_NEEDED
- SQL_CUR_USE_ODBC
- SQL_CUR_USE_DRIVER

### Значення, що повертаються

Повертає з'єднання ODBC або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 З'єднання без DSN**

` <?php// Microsoft SQL Server використовуючи SQL Native Client 10.0 ODBC Driver - дозволяє з'єднуватися// с SQL 7, 2000, 2005 r|Clu003du003d0| ;Databaseu003d$database;", $user, $password);// Microsoft Access$connection u003d odbc_connect("Driveru003d{Microsoft Access Driver (*.mdb)};Dbqu003d$mdbFilename", $user, $password) ;// Microsoft Excel$excelFile u003d realpath('C:/ExcelData.xls');$excelDir u003d dirname($excelFile);$connection u003d odbc_connect("Driveru003d{Microsoft Excel Driver (*.xls)}; DriverId 790;Dbqu003d$excelFile;DefaultDiru003d$excelDir" , '', '');?> `

### Дивіться також

- Для постійних з'єднань:
[odbc_pconnect()](function.odbc-pconnect.md) - Відкриває
постійне з'єднання з базою даних
