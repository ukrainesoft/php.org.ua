- [« Типи ресурсів](pgsql.resources.md)
- [Приклади »](pgsql.examples.md)

- [PHP Manual](index.md)
- [PostgreSQL](book.pgsql.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`PGSQL_LIBPQ_VERSION`** (string)
Коротке позначення версії libpq, що містить лише цифри та точки.

**`PGSQL_LIBPQ_VERSION_STR`** (string)
До PHP 8.0.0 – довге позначення версії libpq, яке включає
інформацію про компілятор. Починаючи з PHP 8.0.0, значення ідентичне
**`PGSQL_LIBPQ_VERSION`**, а використання **`PGSQL_LIBPQ_VERSION_STR`**
застаріло.

**`PGSQL_ASSOC`** (int)
Передається до функції [pg_fetch_array()](function.pg-fetch-array.md).
Повертає асоціативний масив 'ім'я поля' u003d 'значення поля'.

**`PGSQL_NUM`** (int)
Передається до функції [pg_fetch_array()](function.pg-fetch-array.md).
Повертає нумерований масив 'номер поля' u003d\> 'значення поля'.

**`PGSQL_BOTH`** (int)
Передається до функції [pg_fetch_array()](function.pg-fetch-array.md).
Повертає масив значень поля, нумерований (за номером поля) та
асоціативний (на ім'я поля).

**`PGSQL_CONNECT_FORCE_NEW`** (int)
Передається у функцію [pg_connect()](function.pg-connect.md) для
примусового створення нового підключення замість використання
ідентичного існуючого.

**`PGSQL_CONNECT_ASYNC`** (int)
Передається до [pg_connect()](function.pg-connect.md) для створення
асинхронного з'єднання.

**`PGSQL_CONNECTION_AUTH_OK`** (int)

**`PGSQL_CONNECTION_AWAITING_RESPONSE`** (int)

**`PGSQL_CONNECTION_BAD`** (int)
Повертається функцією
[pg_connection_status()](function.pg-connection-status.md), вказує
на непрацездатність з'єднання з базою даних.

**`PGSQL_CONNECTION_MADE`** (int)

**`PGSQL_CONNECTION_OK`** (int)
Повертається функцією
[pg_connection_status()](function.pg-connection-status.md), вказує
на нормальний (робочий) стан з'єднання з базою даних.

**`PGSQL_CONNECTION_SETENV`** (int)

**`PGSQL_CONNECTION_SSL_STARTUP`** (int)

**`PGSQL_CONNECTION_STARTED`** (int)

**`PGSQL_SEEK_SET`** (int)
Передається до функції [pg_lo_seek()](function.pg-lo-seek.md). Операція
пошуку розпочне роботу з початку об'єкта.

**`PGSQL_SEEK_CUR`** (int)
Передається до функції [pg_lo_seek()](function.pg-lo-seek.md). Операція
пошуку розпочне роботу з поточної позиції.

**`PGSQL_SEEK_END`** (int)
Передається до функції [pg_lo_seek()](function.pg-lo-seek.md). Операція
пошуку розпочне роботу з кінця об'єкта.

**`PGSQL_EMPTY_QUERY`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). Означає, що
надісланий на сервер рядок був порожнім.

**`PGSQL_COMMAND_OK`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). означає успішне
завершення команди, яка не повертає даних.

**`PGSQL_TUPLES_OK`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). означає успішне
завершення команди, яка повертає будь-які дані (наприклад, `SELECT`
або `SHOW`).

**`PGSQL_COPY_OUT`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). Повідомляє, що було
розпочато копіювання даних із сервера.

**`PGSQL_COPY_IN`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). Повідомляє, щоб
розпочато копіювання даних на сервер.

**`PGSQL_BAD_RESPONSE`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). Повідомляє, що
відповідь від сервера не була розпізнана.

**`PGSQL_NONFATAL_ERROR`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). Повідомляє, що
сталася некритична (повідомлення чи попередження) помилка.

**`PGSQL_FATAL_ERROR`** (int)
Повертається функцією
[pg_result_status()](function.pg-result-status.md). Повідомляє, що
сталася критична помилка.

**`PGSQL_TRANSACTION_IDLE`** (int)
Повертається функцією
[pg_transaction_status()](function.pg-transaction-status.md).
Означає, що з'єднання на даний момент не діє і не знаходиться в
рамках транзакції.

**`PGSQL_TRANSACTION_ACTIVE`** (int)
Повертається функцією
[pg_transaction_status()](function.pg-transaction-status.md). означає
стан, коли команда перебуває у виконання. Запит через
з'єднання надіслано, але виконання ще не завершено.

**`PGSQL_TRANSACTION_INTRANS`** (int)
Повертається функцією
[pg_transaction_status()](function.pg-transaction-status.md).
Це означає, що з'єднання простоює і знаходиться в рамках транзакції.

**`PGSQL_TRANSACTION_INERROR`** (int)
Повертається функцією
[pg_transaction_status()](function.pg-transaction-status.md).
Це означає, що з'єднання простоює і знаходиться в рамках транзакції
зазнала невдачі при виконанні.

**`PGSQL_TRANSACTION_UNKNOWN`** (int)
Повертається функцією
[pg_transaction_status()](function.pg-transaction-status.md).
Це означає, що з'єднання розірвано.

**`PGSQL_DIAG_SEVERITY`** (int)
Передається у функцію
[pg_result_error_field()](function.pg-result-error-field.md). Повідомляє
про утруднення. Можливі лише перераховані значення: `ERROR`, `FATAL`,
або `PANIC` (у повідомленні про помилку), або `WARNING`, `NOTICE`, `DEBUG`,
`INFO`, або `LOG` (у повідомленні), або переклад перерахованих значень у
відповідно до використовуваної локалізації. Поле завжди визначене.

**`PGSQL_DIAG_SQLSTATE`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Код
помилки SQLSTATE. Код SQLSTATE визначає тип помилки, що відбулася; він
може бути використаний прикладною програмою при виконанні
специфічних операцій (таких як обробка помилки) у відповідь на помилку
бази даних. Це поле завжди визначено та його значення не залежить від
локалізації.

**`PGSQL_DIAG_MESSAGE_PRIMARY`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Основне
Зручне читання повідомлення про помилку (зазвичай один рядок). Поле завжди
визначено.

**`PGSQL_DIAG_MESSAGE_DETAIL`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md).
Деталізація: додаткове повідомлення про помилку, що містить більше
Детальну інформацію про проблему. Може містити кілька рядків.

**`PGSQL_DIAG_MESSAGE_HINT`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md).
Підказка: вказівка на можливі способи усунення помилки. Відрізняється від
деталізації помилки тим, що це просто пропозиції (можливо помилкові),
а чи не точна інформація. Може містити кілька рядків.

**`PGSQL_DIAG_STATEMENT_POSITION`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Рядок,
містить десяткове ціле число, що вказує на позицію курсора
вихідному вираженні, де сталася помилка. Перший символ має індекс 1,
Позиції обчислюються в символах, а не в байтах.

**`PGSQL_DIAG_INTERNAL_POSITION`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md).
Визначення також, що й для поля **`PG_DIAG_STATEMENT_POSITION`**, але
використовується у випадках, коли курсор вказує на команду,
згенеровану сервером БД. У таких випадках завжди з'являється поле
**`PG_DIAG_INTERNAL_QUERY`**.

**`PGSQL_DIAG_INTERNAL_QUERY`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Текст
помилки, згенерованої внутрішньою командою СУБД, у якій сталася
помилка. Це може бути, наприклад, SQL-запит, сформований функцією
PL/pgSQL.

**`PGSQL_DIAG_CONTEXT`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Вказівка
на контекст, де сталася помилка. В основному містить трасування
запрограмованих функцій та автоматично згенерованих запитів.
Трасування виводиться рядково, починаючи з останнього рядка.

**`PGSQL_DIAG_SOURCE_FILE`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Ім'я
файлу вихідного коду PostgreSQL, у якому зазначено помилку.

**`PGSQL_DIAG_SOURCE_LINE`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Номер
рядки файлу вихідного коду PostgreSQL, де зазначено помилку.

**`PGSQL_DIAG_SOURCE_FUNCTION`** (int)
Передається в
[pg_result_error_field()](function.pg-result-error-field.md). Ім'я
функції у вихідному коді PostgreSQL, що повідомляє про помилку.

**`PGSQL_DIAG_SCHEMA_NAME`** (string)
Додано до PHP 7.3.0.

**`PGSQL_DIAG_TABLE_NAME`** (string)
Додано до PHP 7.3.0.

**`PGSQL_DIAG_COLUMN_NAME`** (string)
Додано до PHP 7.3.0.

**`PGSQL_DIAG_DATATYPE_NAME`** (string)
Додано до PHP 7.3.0.

**`PGSQL_DIAG_CONSTRAINT_NAME`** (string)
Додано до PHP 7.3.0.

**`PGSQL_ERRORS_TERSE`** (int)
Передається в
[pg_set_error_verbosity()](function.pg-set-error-verbosity.md). Дає
припис, що видані повідомлення будуть містити лише важливість
помилки, основний текст та покажчик на місце, де вона сталася; ця
інформація зазвичай міститься в один рядок.

**`PGSQL_ERRORS_DEFAULT`** (int)
Передається в
[pg_set_error_verbosity()](function.pg-set-error-verbosity.md). В
режимі за промовчанням повідомлення про помилки містять описану вище
інформацію, а також деталізацію, підказку чи поля з контекстом помилки
(Можуть займати кілька рядків).

**`PGSQL_ERRORS_VERBOSE`** (int)
Передається в
[pg_set_error_verbosity()](function.pg-set-error-verbosity.md). Задає
режим, у якому повідомлення будуть включені всі можливі поля.

**`PGSQL_NOTICE_LAST`** (int)
Використовується [pg_last_notice()](function.pg-last-notice.md). Доступно
із PHP 7.1.0.

**`PGSQL_NOTICE_ALL`** (int)
Використовується [pg_last_notice()](function.pg-last-notice.md). Доступно
із PHP 7.1.0.

**`PGSQL_NOTICE_CLEAR`** (int)
Використовується [pg_last_notice()](function.pg-last-notice.md). Доступно
із PHP 7.1.0.

**`PGSQL_STATUS_LONG`** (int)
Передається до [pg_result_status()](function.pg-result-status.md).
Вказує на те, що як значення, що повертається, очікується
числовий код.

**`PGSQL_STATUS_STRING`** (int)
Передається до [pg_result_status()](function.pg-result-status.md).
Вказує на те, що як значення, що повертається, очікується
текстове уявлення статусу.

**`PGSQL_CONV_IGNORE_DEFAULT`** (int)
Передається до [pg_convert()](function.pg-convert.md). ігнорувати
значення за замовчуванням у таблиці у процесі перетворення.

**`PGSQL_CONV_FORCE_NULL`** (int)
Передається до [pg_convert()](function.pg-convert.md). Замінювати порожні
рядки string на SQL `NULL` під час перетворення.

**`PGSQL_CONV_IGNORE_NOT_NULL`** (int)
Передається до [pg_convert()](function.pg-convert.md). Вказує, що не
потрібно конвертувати **`null`** у стовпці SQL `NOT NULL`.

**`PGSQL_DML_NO_CONV`** (int)
Передається до [pg_insert()](function.pg-insert.md),
[pg_select()](function.pg-select.md),
[pg_update()](function.pg-update.md) та
[pg_delete()](function.pg-delete.md). Усі параметри передаються в
вихідному вигляді. Ручне екранування є обов'язковим, якщо параметри містять
дані користувача. Використовуйте для цього
[pg_escape_string()](function.pg-escape-string.md).

**`PGSQL_DML_EXEC`** (int)
Передається до [pg_insert()](function.pg-insert.md),
[pg_select()](function.pg-select.md),
[pg_update()](function.pg-update.md) та
[pg_delete()](function.pg-delete.md). Виконати запит за допомогою цих
функцій.

**`PGSQL_DML_ASYNC`** (int)
Передається до [pg_insert()](function.pg-insert.md),
[pg_select()](function.pg-select.md),
[pg_update()](function.pg-update.md) та
[pg_delete()](function.pg-delete.md). Виконати асинхронний запит з
допомогою цих функцій.

**`PGSQL_DML_STRING`** (int)
Передається до [pg_insert()](function.pg-insert.md),
[pg_select()](function.pg-select.md),
[pg_update()](function.pg-update.md) та
[pg_delete()](function.pg-delete.md). Повернути рядок із виконаним
запитом.

**`PGSQL_DML_ESCAPE`** (int)
Передається до [pg_insert()](function.pg-insert.md),
[pg_select()](function.pg-select.md),
[pg_update()](function.pg-update.md) та
[pg_delete()](function.pg-delete.md). Застосувати екранування до всіх
параметрам замість внутрішнього виклику
[pg_convert()](function.pg-convert.md). Ця опція пропускає перегляд
метаданих. Запит може бути таким самим швидким, як і
[pg_query()](function.pg-query.md) та
[pg_send_query()](function.pg-send-query.md).

**`PGSQL_POLLING_FAILED`** (int)
Повертається функцією [pg_connect_poll()](function.pg-connect-poll.md)
і свідчить про те, що спроба з'єднання провалилася.

**`PGSQL_POLLING_READING`** (int)
Повертається функцією [pg_connect_poll()](function.pg-connect-poll.md)
і вказує на те, що з'єднання очікує, коли сокет PostgreSQL стане
доступним для читання.

**`PGSQL_POLLING_WRITING`** (int)
Повертається функцією [pg_connect_poll()](function.pg-connect-poll.md)
і вказує на те, що з'єднання очікує, коли сокет PostgreSQL стане
доступним для запису.

**`PGSQL_POLLING_OK`** (int)
Повертається функцією [pg_connect_poll()](function.pg-connect-poll.md)
і вказує на те, що з'єднання готове до використання.

**`PGSQL_POLLING_ACTIVE`** (int)
Повертається функцією [pg_connect_poll()](function.pg-connect-poll.md)
і свідчить про те, що з'єднання зараз активно.

**`PGSQL_DIAG_SEVERITY_NONLOCALIZED`** (int)
Важливість; Можливі наступні значення: ERROR, FATAL або PANIC (у
повідомленні про помилку), або WARNING, NOTICE, DEBUG, INFO або LOG (у
повідомлення про попередження). Це ідентично полю PG_DIAG_SEVERITY за
крім того, вміст не локалізовано. Доступно лише у версії
9.6 або новіші / PHP 7.3.0 або новіші.
