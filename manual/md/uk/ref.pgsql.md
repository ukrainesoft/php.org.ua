- [« Базове використання](pgsql.examples-queries.md)
- [pg_affected_rows »](function.pg-affected-rows.md)

- [PHP Manual](index.md)
- [PostgreSQL](book.pgsql.md)
- Функції PostgreSQL

# Функції PostgreSQL

## Примітки

> **Примітка**:
>
> Не всі функції можуть підтримуватись у зібраному модулі. Це залежить від
> версії вашої libpq (клієнтська бібліотека PostgreSQL) і як libpq була
> зібрана. Якщо модуль PostgreSQL для PHP відсутній, це означає,
> що версія вашої libpq не підтримується.

> **Примітка**:
>
> Більшість функцій PostgreSQL приймають `connection` як
> першого необов'язкового параметра. Якщо параметр відсутній,
> використовується останнє відкрите з'єднання. Якщо ж такого не
> Існує, то функція повертає **`false`**.

> **Примітка**:
>
> PostgreSQL автоматично перекладає всі ідентифікатори (такі як імена
> таблиць/стовпців) у нижній регістр під час створення об'єкта та
> виконання запиту. Для того, щоб змусити використати
> ідентифікатори в обох або тільки у верхньому регістрах, ви повинні
> екранувати ідентифікатор за допомогою подвійних лапок ("").

> **Примітка**:
>
> У PostgreSQL немає спеціальних команд для отримання інформації про схему
> БД (наприклад, всіх таблиць обраної бази даних). Але натомість у
> версіях PostgreSQL 7.4 та вище існує стандартна схема, яка
> називається `information_schema`. Вона містить системні уявлення
> (view) з усією необхідною інформацією у легкодоступній формі. Для
> додаткову інформацію дивіться [»документацію
> PostgreSQL](http://www.postgresql.org/docs/current/interactive/)

## Зміст

- [pg_affected_rows](function.pg-affected-rows.md) - Повертає
кількість порушених запитом записів (кортежів)
- [pg_cancel_query](function.pg-cancel-query.md) - Зупинка
асинхронного запиту.
- [pg_client_encoding](function.pg-client-encoding.md) - Отримання
кодування клієнта.
- [pg_close](function.pg-close.md) — Закриває з'єднання з базою
даних PostgreSQL
- [pg_connect_poll](function.pg-connect-poll.md) — Опитати статус
спроби асинхронного з'єднання PostgreSQL
- [pg_connect](function.pg-connect.md) — Відкриває з'єднання з
базою даних PostgreSQL
- [pg_connection_busy](function.pg-connection-busy.md) — Перевіряє,
зайнято з'єднання в даний момент.
- [pg_connection_reset](function.pg-connection-reset.md) - Скинути
підключення (перепідключення)
- [pg_connection_status](function.pg-connection-status.md) -
Визначає стан підключення
- [pg_consume_input](function.pg-consume-input.md) — Читає вступні
дані на з'єднанні
- [pg_convert](function.pg-convert.md) — Перетворює значення
асоціативного масиву прийнятні для використання в SQL-запитах
- [pg_copy_from](function.pg-copy-from.md) — Вставляє записи з
масиву до таблиці
- [pg_copy_to](function.pg-copy-to.md) — копіює дані з таблиці
в масив
- [pg_dbname](function.pg-dbname.md) — Визначає назву бази даних
- [pg_delete](function.pg-delete.md) — Видалення записів
- [pg_end_copy](function.pg-end-copy.md) — Синхронізує з бекендом
PostgreSQL
- [pg_escape_bytea](function.pg-escape-bytea.md) — Екранує
спецсимволи в рядку для вставки в поле типу bytea
- [pg_escape_identifier](function.pg-escape-identifier.md) -
Екранує ідентифікатор для вставки у текстове поле
- [pg_escape_literal](function.pg-escape-literal.md) — Екранувати
літерал при вставці у текстове поле
- [pg_escape_string](function.pg-escape-string.md) — Екранування
спецсимволів у рядку запиту
- [pg_execute](function.pg-execute.md) — Запускає виконання раніше
підготовленого параметризованого запиту та чекає результату
- [pg_fetch_all_columns](function.pg-fetch-all-columns.md) -
Вибирає всі записи з однієї колонки результату запиту та поміщає
їх у масив
- [pg_fetch_all](function.pg-fetch-all.md) — Вибирає всі дані з
результату запиту та поміщає їх у масив
- [pg_fetch_array](function.pg-fetch-array.md) — Повертає рядок
результату у вигляді масиву
- [pg_fetch_assoc](function.pg-fetch-assoc.md) — Вибирає рядок
результату запиту та поміщає дані в асоціативний масив
- [pg_fetch_object](function.pg-fetch-object.md) — Вибирає рядок
результату запиту та повертає дані у вигляді об'єкта
- [pg_fetch_result](function.pg-fetch-result.md) — Повертає запис
з результату запиту
- [pg_fetch_row](function.pg-fetch-row.md) - Вибирає рядок
результату запиту та поміщає дані в масив
- [pg_field_is_null](function.pg-field-is-null.md) — Перевірка поля
на значення SQL NULL
- [pg_field_name](function.pg-field-name.md) — Повертає
найменування поля
- [pg_field_num](function.pg-field-num.md) - Повертає порядковий
номер іменованого поля
- [pg_field_prtlen](function.pg-field-prtlen.md) - Повертає
кількість друкованих символів
- [pg_field_size](function.pg-field-size.md) — Повертає розмір
поля
- [pg_field_table](function.pg-field-table.md) - Повертає
найменування або ідентифікатор таблиці, що містить задане поле
- [pg_field_type_oid](function.pg-field-type-oid.md) — Повертає
ідентифікатор типу заданого поля
- [pg_field_type](function.pg-field-type.md) — Повертає назву типу
заданого поля
- [pg_flush](function.pg-flush.md) — Скинути дані вихідного
запиту на з'єднанні
- [pg_free_result](function.pg-free-result.md) — Очищення результату
запиту та звільнення пам'яті
- [pg_get_notify](function.pg-get-notify.md) — Отримання SQL NOTIFY
повідомлення
- [pg_get_pid](function.pg-get-pid.md) — Отримує ID процесу
сервера БД
- [pg_get_result](function.pg-get-result.md) — Отримання результату
асинхронного запиту
- [pg_host](function.pg-host.md) - Повертає ім'я хоста,
відповідного підключення
- [pg_insert](function.pg-insert.md) — Заносить дані з масиву
таблицю бази даних
- [pg_last_error](function.pg-last-error.md) — Отримує повідомлення про
останньої помилки, що відбулася на з'єднанні з базою даних
- [pg_last_notice](function.pg-last-notice.md) - Повертає
останнє повідомлення від сервера PostgreSQL
- [pg_last_oid](function.pg-last-oid.md) - Повертає OID останньої
доданого до бази рядка
- [pg_lo_close](function.pg-lo-close.md) — Закриває великий об'єкт
- [pg_lo_create](function.pg-lo-create.md) — Створює великий об'єкт
- [pg_lo_export](function.pg-lo-export.md) — Виведення великого об'єкта
у файл
- [pg_lo_import](function.pg-lo-import.md) — імпорт великого об'єкта
з файлу
- [pg_lo_open](function.pg-lo-open.md) — Відкриває великий об'єкт
бази даних
- [pg_lo_read_all](function.pg-lo-read-all.md) — Читає вміст
великого об'єкта та посилає безпосередньо в браузер
- [pg_lo_read](function.pg-lo-read.md) - Читає дані великого
об'єкта
- [pg_lo_seek](function.pg-lo-seek.md) — Переміщує внутрішній
вказівник великого об'єкта
- [pg_lo_tell](function.pg-lo-tell.md) — Повертає поточний
становище внутрішнього покажчика великого об'єкта
- [pg_lo_truncate](function.pg-lo-truncate.md) - Обрізає великий
об'єкт
- [pg_lo_unlink](function.pg-lo-unlink.md) - Видалення великого
об'єкта
- [pg_lo_write](function.pg-lo-write.md) - Записує дані в
великий об'єкт
- [pg_meta_data](function.pg-meta-data.md) - Отримання метаданих
таблиці
- [pg_num_fields](function.pg-num-fields.md) — Повертає кількість
полів у вибірці
- [pg_num_rows](function.pg-num-rows.md) — Повертає кількість
рядків у вибірці
- [pg_options](function.pg-options.md) — Отримання параметрів
з'єднання з сервером баз даних
- [pg_parameter_status](function.pg-parameter-status.md) — Перегляд
поточних значень параметрів сервера
- [pg_pconnect](function.pg-pconnect.md) — Відкриває постійне
з'єднання з сервером PostgreSQL
- [pg_ping](function.pg-ping.md) — Перевірка з'єднання з базою
даних
- [pg_port](function.pg-port.md) — Повертає номер порту,
відповідний заданому з'єднанню
- [pg_prepare](function.pg-prepare.md) — Надсилає запит на створення
параметризованого SQL висловлювання і чекає на його завершення
- [pg_put_line](function.pg-put-line.md) — Передає на PostgreSQL
сервер рядок із завершальним нулем
- [pg_query_params](function.pg-query-params.md) — Надсилає
параметризований запит на сервер, параметри передаються окремо від
тексту SQL запиту
- [pg_query](function.pg-query.md) — Виконує запит
- [pg_result_error_field](function.pg-result-error-field.md) -
Повертає конкретне поле зі звіту про помилки
- [pg_result_error](function.pg-result-error.md) — Повертає
повідомлення про помилку, пов'язане із запитом результату
- [pg_result_seek](function.pg-result-seek.md) — Зміщує покажчик
на рядок вибірки в екземплярі результату запиту
- [pg_result_status](function.pg-result-status.md) - Повертає
стан результату запиту
- [pg_select](function.pg-select.md) — Вибирає записи з бази
даних
- [pg_send_execute](function.pg-send-execute.md) - Запускає
попередньо підготовлений SQL-запит та передає йому параметри;
не чекає результату, що повертається
- [pg_send_prepare](function.pg-send-prepare.md) — Надсилає запит
створення параметризованого SQL-вираження, не чекаючи його
завершення
- [pg_send_query_params](function.pg-send-query-params.md) -
Надсилає параметризований запит на сервер, не чекає
результату, що повертається
- [pg_send_query](function.pg-send-query.md) - Надсилає
асинхронний запит
- [pg_set_client_encoding](function.pg-set-client-encoding.md) -
Встановлює клієнтське кодування
- [pg_set_error_verbosity](function.pg-set-error-verbosity.md) -
Визначає обсяг тексту повідомлень, що повертаються функціями
pg_last_error та pg_result_error
- [pg_socket](function.pg-socket.md) — Отримати дескриптор тільки
для читання на сокет, що лежить в основі з'єднання PostgreSQL
- [pg_trace](function.pg-trace.md) — Включає трасування
підключення PostgreSQL
- [pg_transaction_status](function.pg-transaction-status.md) -
Повертає поточний стан транзакції на сервері
- [pg_tty](function.pg-tty.md) - Повертає ім'я терміналу TTY,
пов'язане зі з'єднанням
- [pg_unescape_bytea](function.pg-unescape-bytea.md) — Забирає
екранування двійкових даних типу bytea
- [pg_untrace](function.pg-untrace.md) — Вимикає трасування
з'єднання з PostgreSQL
- [pg_update](function.pg-update.md) — Оновлення даних у таблиці
- [pg_version](function.pg-version.md) - Повертає масив,
що містить версії клієнта, протоколу клієнт-серверного
взаємодії та сервера (якщо доступно)
