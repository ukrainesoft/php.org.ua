- [«
mysqli_driver::embedded_server_start](mysqli-driver.embedded-server-start.md)
- [mysqli_warning »](class.mysqli-warning.md)

- [PHP Manual](index.md)
- [mysqli_driver](class.mysqli-driver.md)
- Встановлює режим звіту про помилки mysqli

# mysqli_driver::$report_mode

# mysqli_report

(PHP 5, PHP 7, PHP 8)

mysqli_driver::$report_mode -- mysqli_report — Встановлює режим
звіту про помилки mysqli

### Опис

Об'єктно-орієнтований стиль

int `$mysqli_driver->report_mode`;

Процедурний стиль

[mysqli_report](function.mysqli-report.md)(int `$flags`): bool

Залежно від прапорів, функція встановлює режим звіту про помилки
mysqli на виняток, попередження чи відсутність. Якщо встановлено
значення **`MYSQLI_REPORT_ALL`** або **`MYSQLI_REPORT_INDEX`**, функція
також інформуватиме про запити, які не використовують індекс (або
використовують неправильний індекс).

Починаючи з PHP 8.1.0, за замовчуванням встановлено значення
`MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT`. Раніше воно було
**`MYSQLI_REPORT_OFF`**.

### Список параметрів

`flags`
| Ім'я Опис |
|----------------------------|-------------------- -------------------------------------------------- ------------------------------------------|
| **`MYSQLI_REPORT_OFF`** | Вимкнути протоколювання |
| **`MYSQLI_REPORT_ERROR`** | Заносити до протоколу помилки викликів функцій mysqli
| **`MYSQLI_REPORT_STRICT`** | Замість повідомлень про помилки викидати виняток [mysqli_sql_exception](class.mysqli-sql-exception.md) |
| **`MYSQLI_REPORT_INDEX`** | Заносити до протоколу факти використання у запитах невірного індексу (або коли індекс не використовується взагалі) |
| **`MYSQLI_REPORT_ALL`** | Увімкнути всі налаштування (заносити до протоколу всі події) |

**Підтримувані прапори**

### Значення, що повертаються

Повертає **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------------------------|
| 8.1.0 | Тепер за замовчуванням встановлено значення `MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT`. Раніше воно було **`MYSQLI_REPORT_OFF`**. |

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* включение протоколирования */$driver u003d new mysqli_driver();$driver->report_mode u003d MYSQLI_REPORT_ALL;try {    /* если получится подключится, будет выброшено исключение mysqli_sql_exception */    $mysqli u003d new mysqli("localhost", "my_user", "my_password", "my_db"); /* цей запрос повинен повідомити про помилка */    $result u003d $mysqli->query("SELECT Name FROM Nonexistingtable WHERE population > 50000"); /* этот запрос должен сообщить о неверном индексе, если у столбца population нет индекса */    $result u003d $mysqli->query("SELECT Name FROM City WHERE population > 50000");} catch (mysqli_sql_exception $e) {    error_log($ e->__toString());} `

**Приклад #2 Процедурний стиль**

` <?php/* включение протоколирования */mysqli_report(MYSQLI_REPORT_ALL);try {    /* Если соединение завершилось с ошибкой, будет выброшено исключение mysqli_sql_exception */    $link u003d mysqli_connect("localhost", "my_user", "my_password", "my_db "); /* цей запрос повинен повідомити про помилка */    $result u003d mysqli_query($link, "SELECT Name FROM Nonexistingtable WHERE population > 50000"); /* этот запрос должен сообщить о неверном индексе, если у столбца population нет индекса */    $result u003d mysqli_query($link, "SELECT Name FROM City WHERE population > 50000");} catch (mysqli_sql_exception $e) {    error_log($e ->__toString());} `

**Приклад #3 Звіт про помилки, крім помилок неправильного індексу**

` <?php/* включение протоколирования */mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);try {    /* если получится подключится, будет выброшено исключение mysqli_sql_exception */    $mysqli u003d new mysqli("localhost", "my_user", "my_password", " my_db"); /* цей запрос повинен повідомити про помилка */    $result u003d $mysqli->query("SELECT Name FROM Nonexistingtable WHERE population > 50000"); /* это НЕ БУДЕТ сообщать об ошибках, даже если индекс недоступен */    $result u003d $mysqli->query("SELECT Name FROM City WHERE population > 50000");} catch (mysqli_sql_exception $e) {    error_log($e-> __toString());} `

### Дивіться також

- [mysqli_sql_exception](class.mysqli-sql-exception.md)
- [set_exception_handler()](function.set-exception-handler.md) -
Задає користувальницький обробник винятків
- [error_reporting()](function.error-reporting.md) - Задає, які
помилки PHP потраплять у звіт
