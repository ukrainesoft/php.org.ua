- [« Модуль mysqli та постійні з'єднання](mysqli.persistconns.md)
- [Основна інформація про функції модуля MySQLi
»](mysqli.summary.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`MYSQLI_READ_DEFAULT_GROUP`**
Читати опції із зазначеної групи у файлі `my.cnf` або файлі, вказаному з
допомогою **`MYSQLI_READ_DEFAULT_FILE`**

**`MYSQLI_READ_DEFAULT_FILE`**
Читати опції із зазначеного файлу, замість `my.cnf`

**`MYSQLI_OPT_CONNECT_TIMEOUT`**
Час очікування на підключення в секундах.

**`MYSQLI_OPT_READ_TIMEOUT`**
Час очікування результату виконання команди за секунди. Доступно з PHP
7.2.0.

**`MYSQLI_OPT_LOCAL_INFILE`**
Включає команду `LOAD LOCAL INFILE`.

**`MYSQLI_OPT_INT_AND_FLOAT_NATIVE`**
Перетворює цілі та плаваючі стовпці назад до числа PHP. Коректно
працює тільки з mysqlnd.

**`MYSQLI_OPT_NET_CMD_BUFFER_SIZE`**
Розмір внутрішнього буфера команди/мережі. Коректно працює тільки з
mysqlnd.

**`MYSQLI_OPT_NET_READ_BUFFER_SIZE`**
Максимальний розмір блоку читання в байтах під час читання тіла пакета команд
MySQL. Тільки valid для mysqlnd.

**`MYSQLI_OPT_SSL_VERIFY_SERVER_CERT`**
Потрібний MySQL 5.1.10 і вище

**`MYSQLI_INIT_COMMAND`**
Команда, яка буде виконана під час підключення до сервера MySQL. Ця
команда буде повторно викликана під час перепідключення.

**`MYSQLI_CLIENT_SSL`**
Використовувати SSL (шифрований протокол). Ця опція не може бути
встановлена програмами; вона встановлюється всередині бібліотеки клієнта
MySQL.

**`MYSQLI_CLIENT_COMPRESS`**
Використовувати компресію.

**`MYSQLI_CLIENT_INTERACTIVE`**
Чекати `interactive_timeout` секунд (замість `wait_timeout`) бездіяльності
перед закриттям з'єднання. Змінна сесії клієнта `wait_timeout`
буде встановлено значення змінної сесії `interactive_timeout`.

**`MYSQLI_CLIENT_IGNORE_SPACE`**
Дозволити пробіли після назв функцій. Робить усі імена функцій
зарезервованими словами.

**`MYSQLI_CLIENT_NO_SCHEMA`**
Заборонити синтаксис `db_name.tbl_name.col_name`.

**`MYSQLI_CLIENT_MULTI_QUERIES`**
Дозволити виконання в одному виклик функції
[mysqli_query()](mysqli.query.md) кількох запитів, розділених
крапкою з комою.

**`MYSQLI_STORE_RESULT`**
Для використання буферизації наборів даних. Значення дорівнює `0`.

**`MYSQLI_USE_RESULT`**
Для використання небуферизованих наборів даних. Значення дорівнює `1`.

**`MYSQLI_ASSOC`**
Результат повертається у вигляді асоціативного масиву з іменами полів у
якість індексів.

**`MYSQLI_NUM`**
Результат повертається як індексного масиву.

**`MYSQLI_BOTH`**
Результат повертається у вигляді масиву, який містить як числовий,
так і асоціативні індекси.

**`MYSQLI_NOT_NULL_FLAG`**
Інформує про те, що поле визначено як 'NOT NULL'.

**`MYSQLI_PRI_KEY_FLAG`**
Поле є частиною первинного індексу.

**`MYSQLI_UNIQUE_KEY_FLAG`**
Поле є частиною унікального індексу.

**`MYSQLI_MULTIPLE_KEY_FLAG`**
Поле є частиною індексу.

**`MYSQLI_BLOB_FLAG`**
Поле визначено як 'BLOB'.

**`MYSQLI_UNSIGNED_FLAG`**
Поле визначено як `UNSIGNED`.

**`MYSQLI_ZEROFILL_FLAG`**
Поле визначено як `ZEROFILL`.

**`MYSQLI_AUTO_INCREMENT_FLAG`**
Поле визначено як AUTO_INCREMENT.

**`MYSQLI_TIMESTAMP_FLAG`**
Поле визначено як `TIMESTAMP`.

**`MYSQLI_SET_FLAG`**
Поле визначено як SET.

**`MYSQLI_NUM_FLAG`**
Поле визначено як 'NUMERIC'.

**`MYSQLI_PART_KEY_FLAG`**
Поле є частиною мульти-індексу.

**`MYSQLI_GROUP_FLAG`**
Поле є частиною `GROUP BY`.

**`MYSQLI_TYPE_DECIMAL`**
Поле визначено як `DECIMAL`.

**`MYSQLI_TYPE_NEWDECIMAL`**
Математична точність полів `DECIMAL` або `NUMERIC` (MySQL 5.0.3 та
вище).

**`MYSQLI_TYPE_BIT`**
Поле визначено як `BIT` (MySQL 5.0.3 та вище).

**`MYSQLI_TYPE_TINY`**
Поле визначено як `TINYINT`.

**`MYSQLI_TYPE_SHORT`**
Поле визначено як SMALLINT.

**`MYSQLI_TYPE_LONG`**
Поле визначено як INT.

**`MYSQLI_TYPE_FLOAT`**
Поле визначено як 'FLOAT'.

**`MYSQLI_TYPE_DOUBLE`**
Поле визначено як 'DOUBLE'.

**`MYSQLI_TYPE_NULL`**
Поле визначено як DEFAULT NULL.

**`MYSQLI_TYPE_TIMESTAMP`**
Поле визначено як `TIMESTAMP`.

**`MYSQLI_TYPE_LONGLONG`**
Поле визначено як 'BIGINT'.

**`MYSQLI_TYPE_INT24`**
Поле визначено як `MEDIUMINT`.

**`MYSQLI_TYPE_DATE`**
Поле визначено як `DATE`.

**`MYSQLI_TYPE_TIME`**
Поле визначено як `TIME`.

**`MYSQLI_TYPE_DATETIME`**
Поле визначено як `DATETIME`.

**`MYSQLI_TYPE_YEAR`**
Поле визначено як 'YEAR'.

**`MYSQLI_TYPE_NEWDATE`**
Поле визначено як `DATE`.

**`MYSQLI_TYPE_INTERVAL`**
Поле визначено як `INTERVAL`

**`MYSQLI_TYPE_ENUM`**
Поле визначено як ENUM.

**`MYSQLI_TYPE_SET`**
Поле визначено як SET.

**`MYSQLI_TYPE_TINY_BLOB`**
Поле визначено як `TINYBLOB`.

**`MYSQLI_TYPE_MEDIUM_BLOB`**
Поле визначено як `MEDIUMBLOB`.

**`MYSQLI_TYPE_LONG_BLOB`**
Поле визначено як LONGBLOB.

**`MYSQLI_TYPE_BLOB`**
Поле визначено як 'BLOB'.

**`MYSQLI_TYPE_VAR_STRING`**
Поле визначено як VARCHAR.

**`MYSQLI_TYPE_STRING`**
Поле визначено як `CHAR` або `BINARY`

**`MYSQLI_TYPE_CHAR`**
Поле визначено як `TINYINT`. Для `CHAR` дивіться `MYSQLI_TYPE_STRING`

**`MYSQLI_TYPE_GEOMETRY`**
Поле визначено як 'GEOMETRY'.

**`MYSQLI_TYPE_JSON`**
Поле визначено як 'JSON'. Дійсно тільки для mysqlnd та MySQL
5.7.8 та вище.

**`MYSQLI_NEED_DATA`**
Є ще дані, доступні для пов'язаних змінних.

**`MYSQLI_NO_DATA`**
Більше немає доступних даних для пов'язаних змінних.

**`MYSQLI_DATA_TRUNCATED`**
Відбулося усічення даних. Доступно з MySQL 5.0.5.

**`MYSQLI_ENUM_FLAG`**
Поле визначено як ENUM.

**`MYSQLI_BINARY_FLAG`**
Поле визначено як `BINARY`.

**`MYSQLI_CURSOR_TYPE_FOR_UPDATE`**

**`MYSQLI_CURSOR_TYPE_NO_CURSOR`**

**`MYSQLI_CURSOR_TYPE_READ_ONLY`**

**`MYSQLI_CURSOR_TYPE_SCROLLABLE`**

**`MYSQLI_STMT_ATTR_CURSOR_TYPE`**

**`MYSQLI_STMT_ATTR_PREFETCH_ROWS`**

**`MYSQLI_STMT_ATTR_UPDATE_MAX_LENGTH`**

**`MYSQLI_SET_CHARSET_NAME`**

**`MYSQLI_REPORT_INDEX`**
Повідомляти, якщо індекс, який використовується у запиті, не вказано або
перевищує максимум.

**`MYSQLI_REPORT_ERROR`**
Повідомляти про помилки виклику mysqli.

**`MYSQLI_REPORT_STRICT`**
Обробляти `mysqli_sql_exception` як помилки, а не як попередження.

**`MYSQLI_REPORT_ALL`**
Включити усі повідомлення.

**`MYSQLI_REPORT_OFF`**
Вимикає повідомлення.

**`MYSQLI_DEBUG_TRACE_ENABLED`**
Встановлено в 1, якщо використовується функція
[mysqli_debug()](mysqli.debug.md).

**`MYSQLI_SERVER_QUERY_NO_GOOD_INDEX_USED`**

**`MYSQLI_SERVER_QUERY_NO_INDEX_USED`**

**`MYSQLI_SERVER_PUBLIC_KEY`**

**`MYSQLI_REFRESH_GRANT`**
Оновлює таблицю прав доступу.

**`MYSQLI_REFRESH_LOG`**
Скидає логи, так само, як і SQL вираз `FLUSH LOGS`.

**`MYSQLI_REFRESH_TABLES`**
Очищає кеш таблиці, так само, як і SQL вираз `FLUSH TABLES`.

**`MYSQLI_REFRESH_HOSTS`**
Очищає кеш хоста, так само, як і SQL вираз `FLUSH HOSTS`.

**`MYSQLI_REFRESH_REPLICA`**
Аліас константи **`MYSQLI_REFRESH_SLAVE`**. Доступна, починаючи з PHP
8.1.0.

**`MYSQLI_REFRESH_STATUS`**
Скидає змінні стани, так само, як і SQL вираз
`FLUSH STATUS`.

**`MYSQLI_REFRESH_THREADS`**
Очищує кеш потоку.

**`MYSQLI_REFRESH_SLAVE`**
На веденому сервері, що реплікується (slave): скинути інформацію ведучого
сервера (master) і перезапустити ведений сервер. Аналогічно до виконання
SQL виразу `RESET SLAVE`.

**`MYSQLI_REFRESH_MASTER`**
На провідному сервері, що реплікується (master): видалити бінарні файли логів
у бінарному індексі логів, та обрізати файл індексу. Аналогічно до виконання
SQL виразу `RESET MASTER`.

**`MYSQLI_TRANS_COR_AND_CHAIN`**
Додає "AND CHAIN" до [mysqli_commit()](mysqli.commit.md) або
[mysqli_rollback()](mysqli.rollback.md).

**`MYSQLI_TRANS_COR_AND_NO_CHAIN`**
Додає "AND NO CHAIN" в [mysqli_commit()](mysqli.commit.md) або
[mysqli_rollback()](mysqli.rollback.md).

**`MYSQLI_TRANS_COR_RELEASE`**
Додає "RELEASE" в [mysqli_commit()](mysqli.commit.md) або
[mysqli_rollback()](mysqli.rollback.md).

**`MYSQLI_TRANS_COR_NO_RELEASE`**
Додає "NO RELEASE" в [mysqli_commit()](mysqli.commit.md) або
[mysqli_rollback()](mysqli.rollback.md).

**`MYSQLI_TRANS_START_READ_ONLY`**
Починає транзакцію як "START TRANSACTION READ ONLY" з
[mysqli_begin_transaction()](mysqli.begin-transaction.md).

**`MYSQLI_TRANS_START_READ_WRITE`**
Починає транзакцію як "START TRANSACTION READ WRITE" з
[mysqli_begin_transaction()](mysqli.begin-transaction.md).

**`MYSQLI_TRANS_START_CONSISTENT_SNAPSHOT`**
Починає транзакцію як "START TRANSACTION WITH CONSISTENT SNAPSHOT" з
[mysqli_begin_transaction()](mysqli.begin-transaction.md).

**`MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT`**
Потрібний MySQL 5.6.5 і вище

**`MYSQLI_IS_MARIADB`**
Визначає, чи зібраний mysqli модуль з клієнтською бібліотекою MariaDB.
Доступно з PHP 8.1.2.
