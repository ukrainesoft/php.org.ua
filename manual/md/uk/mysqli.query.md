- [« mysqli::prepare](mysqli.prepare.md)
- [mysqli::real_connect »](mysqli.real-connect.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Виконує запит до бази даних

# mysqli::query

# mysqli_query

(PHP 5, PHP 7, PHP 8)

mysqli::query -- mysqli_query — Виконує запит до бази даних

### Опис

Об'єктно-орієнтований стиль

public **mysqli::query**(string `$query`, int `$result_mode` u003d
**`MYSQLI_STORE_RESULT`**):
[mysqli_result](class.mysqli-result.md)\|bool

Процедурний стиль

**mysqli_query**([mysqli](class.mysqli.md) `$mysql`, string `$query`,
int `$result_mode` u003d **`MYSQLI_STORE_RESULT`**):
[mysqli_result](class.mysqli-result.md)\|bool

Виконує запит `query` до бази даних.

Для не DML-запитів (не INSERT, UPDATE або DELETE), ця функція
рівносильна виклику функції
[mysqli_real_query()](mysqli.real-query.md), а потім
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_store_result()](mysqli.store-result.md).

> **Примітка**:
>
> У випадку, якщо довжина виразу, який ви передаєте в
> **mysqli_query()**, більше, ніж `max_allowed_packet` сервера,
> коди помилки, що повертаються, можуть різнитися в залежності від
> використовуваного драйвера. А це може бути рідний MySQL драйвер
> (`mysqlnd`), або клієнтська бібліотека MySQL (`libmysqlclient`).
> Поведінка функції буде такою:
>
> - `mysqlnd` на платформі Linux повертає код помилки 1153. Повідомлення
> про помилку означає “розмір пакета перевищує `max_allowed_packet`
> байт”.
>
> - `mysqlnd` на платформі Windows повертає код помилки 2006. Це
> повідомлення про помилку означає “відмову сервера”.
>
> - `libmysqlclient` на всіх платформах повертає код помилки 2006 року.
> Це повідомлення про помилку означає “відмову сервера”.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`query`
Текст запиту.

**Увага**
# Попередження безпеки: SQL-ін'єкція

Якщо запит містить будь-які вхідні змінні, натомість слід
використовувати [підготовлювані
запросы](mysqli.quickstart.prepared-statements.md). В якості
альтернативи дані повинні бути правильно відформатовані та всі рядки
повинні бути екрановані за допомогою функції
[mysqli_real_escape_string()](mysqli.real-escape-string.md).

`result_mode`
Режим результату може бути однією з трьох констант, що вказують, як
результат буде повернуто сервером MySQL.

**`MYSQLI_STORE_RESULT`** (за замовчуванням) - повертає об'єкт
[mysqli_result](class.mysqli-result.md) з буферизованим набором
результатів.

**`MYSQLI_USE_RESULT`** - повертає об'єкт
[mysqli_result](class.mysqli-result.md) з небуферизованим набором
результатів. Поки є відкладені записи, що чекають на вибірки, лінія
з'єднання буде зайнято і всі наступні виклики повертатимуть помилку
`Commands out of sync`. Щоб уникнути помилки, всі записи мають бути
отримані з сервера або набір результатів має бути відкинуто шляхом
виклику [mysqli_free_result()](mysqli-result.free.md).

**`MYSQLI_ASYNC`** (доступно з mysqlnd) - запит виконується асинхронно,
набір результатів одразу не повертається. Потім використовується
[mysqli_poll()](mysqli.poll.md) для отримання результатів за цим
запитів. Використовується у поєднанні з константою
**`MYSQLI_STORE_RESULT`** або **`MYSQLI_USE_RESULT`**.

### Значення, що повертаються

Повертає **`false`** у разі виникнення помилки. У разі успішного
виконання запитів, які створюють набір результатів, таких як
`SELECT, SHOW, DESCRIBE` або `EXPLAIN`, **mysqli_query()** поверне об'єкт
[mysqli_result](class.mysqli-result.md). Для решти успішних
запитів **mysqli_query()** поверне **`true`**.

### Приклади

**Приклад #1 Приклад використання **mysqli::query()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Створення Ти "CREATE TEMPORARY TABLE myCity LIKE City");printf("Таблиця myCity створена.
");/* Запроси SELECT, повертають набір результатів */$result u003d $mysqli->query("SELECT Name FROM City LIMIT 10");printf("Запит SELECT вернув %d 
", $result->num_rows);/* Якщо потрібно витягти великий обсяг даних, використовуємо MYSQLI_USE_RESULT */$result u003d $mysqli->query("SELECT * FROM C  викликати функції, взаємодіючі   з сервером, поки не закриємо набір результатів.

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR || MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* Створення таблиці, не TEMPORARY TABLE myCity LIKE City»);printf(«Таблиця myCity створена.
");/* Запроси SELECT, повертають набір результатів */$result u003d mysqli_query($link, "SELECT Name FROM City LIMIT 10");printf("Запрос SELECT вернув .
", mysqli_num_rows($result));/* Если нужно извлечь большой объем данных, используем MYSQLI_USE_RESULT */$result u003d mysqli_query($link, "SELECT * FROM City", MYSQLI_USE_RESULT);/* Важно заметить, что мы не можем вызывать функції, взаємодіючі   з сервером, поки не закриємо набір результатів.

Результат виконання даних прикладів:

Таблиця myCity створена.
Запит SELECT повернув 10 рядків.

Fatal error: Uncaught mysqli_sql_exception: Commands out of sync; you can't run this command now in...

### Дивіться також

- [mysqli_real_query()](mysqli.real-query.md) - Виконання SQL
запиту
- [mysqli_multi_query()](mysqli.multi-query.md) - Виконує один або
кілька запитів до бази даних
- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_free_result()](mysqli-result.free.md) - Звільняє
пам'ять, зайняту результатами запиту
