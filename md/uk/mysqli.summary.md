- [«Зумовлені константи](mysqli.constants.md)
- [mysqli »](class.mysqli.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- Основна інформація про функції модуля MySQLi

# Основна інформація про функції модуля MySQLi

| Клас mysqli | | |
|------------------------------------------------- -------------------------------------------------- ----------------------------|--------------------- -----------------------------------------------|-- -------------------------------------------------- ----------|--------------------------------------- -------------------------------------------------- -----------------------|
| ООП-інтерфейс Процедурний інтерфейс Синонім (не використовуйте!) Опис |
| *Властивості* | | | |
| [$mysqli::affected_rows](mysqli.affected-rows.md) | [mysqli_affected_rows()](mysqli.affected-rows.md) | \- | Отримує кількість рядків, порушених попередньою операцією MySQL
| [$mysqli::client_info](mysqli.get-client-info.md) | [mysqli_get_client_info()](mysqli.get-client-info.md) | \- | Повертає інформацію про версію клієнта MySQL як рядка (string) |
| [$mysqli::client_version](mysqli.get-client-version.md) | [mysqli_get_client_version()](mysqli.get-client-version.md) | \- | Повертає інформацію про версію клієнта MySQL як числа (integer) |
| [$mysqli::connect_errno](mysqli.connect-errno.md) | [mysqli_connect_errno()](mysqli.connect-errno.md) | \- | Повертає код помилки останнього з'єднання
| [$mysqli::connect_error](mysqli.connect-error.md) | [mysqli_connect_error()](mysqli.connect-error.md) | \- | Повертає рядковий опис помилки останнього підключення
| [$mysqli::errno](mysqli.errno.md) | [mysqli_errno()](mysqli.errno.md) | \- | Повернення коду помилки останнього виклику функції |
| [$mysqli::error](mysqli.error.md) | [mysqli_error()](mysqli.error.md) | \- | Повертає рядковий опис останньої помилки
| [$mysqli::field_count](mysqli.field-count.md) | [mysqli_field_count()](mysqli.field-count.md) | \- | Повертає кількість стовпців для останнього запиту
| [$mysqli::host_info](mysqli.get-host-info.md) | [mysqli_get_host_info()](mysqli.get-host-info.md) | \- | Повертає рядок, що містить тип використовуваної сполуки |
| [$mysqli::protocol_version](mysqli.get-proto-info.md) | [mysqli_get_proto_info()](mysqli.get-proto-info.md) | \- | Повертає версію використовуваного протоколу MySQL
| [$mysqli::server_info](mysqli.get-server-info.md) | [mysqli_get_server_info()](mysqli.get-server-info.md) | \- | Повертає версію сервера MySQL
| [$mysqli::server_version](mysqli.get-server-version.md) | [mysqli_get_server_version()](mysqli.get-server-version.md) | \- | Повертає версію сервера MySQL як числа (integer) |
| [$mysqli::info](mysqli.info.md) | [mysqli_info()](mysqli.info.md) | \- | Відображає інформацію про найбільш часто виконуваний запит |
| [$mysqli::insert_id](mysqli.insert-id.md) | [mysqli_insert_id()](mysqli.insert-id.md) | \- | Повертає автоматично згенерований ID, використаний в останньому запиті |
| [$mysqli::sqlstate](mysqli.sqlstate.md) | [mysqli_sqlstate()](mysqli.sqlstate.md) | \- | Повертає помилку SQLSTATE попередньої операції MySQL
| [$mysqli::warning_count](mysqli.warning-count.md) | [mysqli_warning_count()](mysqli.warning-count.md) | \- | Повертає число попереджень останнього запиту для посилання |
| *Методи* | | | |
| [mysqli::autocommit()](mysqli.autocommit.md) | [mysqli_autocommit()](mysqli.autocommit.md) | \- | Вимикає або вимикає автоматичне підтвердження змін бази даних
| [mysqli::change_user()](mysqli.change-user.md) | [mysqli_change_user()](mysqli.change-user.md) | \- | Змінює користувача (user) для цього з'єднання з базою даних |
| [mysqli::character_set_name()](mysqli.character-set-name.md) | [mysqli_character_set_name()](mysqli.character-set-name.md) | Н/Д | Повертає кодування за промовчанням для з'єднання з базою даних |
| [mysqli::close()](mysqli.close.md) | [mysqli_close()](mysqli.close.md) | \- | Закриває відкрите з'єднання з базою |
| [mysqli::commit()](mysqli.commit.md) | [mysqli_commit()](mysqli.commit.md) | \- | Підтверджує поточну транзакцію
| [mysqli::\_\_construct()](mysqli.construct.md) | [mysqli_connect()](function.mysqli-connect.md) | \- | Відкрити нове з'єднання з сервером MySQL \[Примітка: статичний метод (тобто метод класу)\] |
| [mysqli::debug()](mysqli.debug.md) | [mysqli_debug()](mysqli.debug.md) | \- | Виконує операції налагодження
| [mysqli::dump_debug_info()](mysqli.dump-debug-info.md) | [mysqli_dump_debug_info()](mysqli.dump-debug-info.md) | \- | Збір налагоджувальної інформації в балку |
| [mysqli::get_charset()](mysqli.get-charset.md) | [mysqli_get_charset()](mysqli.get-charset.md) | \- | Повертає об'єкт, що описує кодування
| [mysqli::get_connection_stats()](mysqli.get-connection-stats.md) | [mysqli_get_connection_stats()](mysqli.get-connection-stats.md) | \- | Повертає статистику з'єднання клієнта. Доступно лише з модулем [mysqlnd](book.mysqlnd.md). |
| [mysqli::get_client_info()](mysqli.get-client-info.md) | [mysqli_get_client_info()](mysqli.get-client-info.md) | \- | Повертає версію клієнта MySQL у вигляді рядка
| Н/Д | [mysqli_get_client_stats()](function.mysqli-get-client-stats.md) | \- | Повертає статистику клієнта для кожного процесу. Доступно лише з модулем [mysqlnd](book.mysqlnd.md). |
| [mysqli::get_server_info()](mysqli.get-server-info.md) | [mysqli_get_server_info()](mysqli.get-server-info.md) | \- | Повертає рядок, що містить версію сервера MySQL, до якого здійснено підключення |
| [mysqli::get_warnings()](mysqli.get-warnings.md) | [mysqli_get_warnings()](mysqli.get-warnings.md) | \- | Чи не документовано |
| [mysqli::init()](mysqli.init.md) | [mysqli_init()](mysqli.init.md) | \- | Ініціалізує MySQLi та повертає ресурс для використання з mysqli_real_connect. |
| [mysqli::kill()](mysqli.kill.md) | [mysqli_kill()](mysqli.kill.md) | \- | Створює запит на знищення MySQL-потоку |
| [mysqli::more_results()](mysqli.more-results.md) | [mysqli_more_results()](mysqli.more-results.md) | \- | Перевіряє наявність додаткових результатів запиту з мульти-запиту |
| [mysqli::multi_query()](mysqli.multi-query.md) | [mysqli_multi_query()](mysqli.multi-query.md) | \- | Виконує запит до бази даних
| [mysqli::next_result()](mysqli.next-result.md) | [mysqli_next_result()](mysqli.next-result.md) | \- | Підготовка наступного результату з multi_query |
| [mysqli::options()](mysqli.options.md) | [mysqli_options()](mysqli.options.md) | [mysqli_set_opt()](function.mysqli-set-opt.md) | Встановлює налаштування |
| [mysqli::ping()](mysqli.ping.md) | [mysqli_ping()](mysqli.ping.md) | \- | Здійснює пінг з'єднання з сервером, або перепідключення, якщо з'єднання було скинуто |
| [mysqli::prepare()](mysqli.prepare.md) | [mysqli_prepare()](mysqli.prepare.md) | \- | Виконує підготовку SQL-запиту (Prepared statement)
| [mysqli::query()](mysqli.query.md) | [mysqli_query()](mysqli.query.md) | \- | Виконує запит до бази даних
| [mysqli::real_connect()](mysqli.real-connect.md) | [mysqli_real_connect()](mysqli.real-connect.md) | \- | Відкриває з'єднання із сервером MySQL
| [mysqli::real_escape_string()](mysqli.real-escape-string.md), [mysqli::escape_string()](function.mysqli-escape-string.md) | [mysqli_real_escape_string()](mysqli.real-escape-string.md) | [mysqli_escape_string()](function.mysqli-escape-string.md) | Екранує спеціальні символи у рядку, який використовується в SQL-запиті, беручи до уваги кодування з'єднання |
| [mysqli::real_query()](mysqli.real-query.md) | [mysqli_real_query()](mysqli.real-query.md) | \- | Виконує SQL запит |
| [mysqli::refresh()](mysqli.refresh.md) | [mysqli_refresh()](mysqli.refresh.md) | \- | Очищає таблиці чи кеш, чи скидає інформацію сервера реплікації |
| [mysqli::rollback()](mysqli.rollback.md) | [mysqli_rollback()](mysqli.rollback.md) | \- | Відкочує поточну транзакцію |
| [mysqli::select_db()](mysqli.select-db.md) | [mysqli_select_db()](mysqli.select-db.md) | \- | Вибирає базу даних для виконання запитів |
| [mysqli::set_charset()](mysqli.set-charset.md) | [mysqli_set_charset()](mysqli.set-charset.md) | \- | Встановлює кодування замовника за замовчуванням |
| [mysqli::ssl_set()](mysqli.ssl-set.md) | [mysqli_ssl_set()](mysqli.ssl-set.md) | \- | Використовується для встановлення захищених з'єднань за допомогою SSL |
| [mysqli::stat()](mysqli.stat.md) | [mysqli_stat()](mysqli.stat.md) | \- | Отримує поточний стан системи
| [mysqli::stmt_init()](mysqli.stmt-init.md) | [mysqli_stmt_init()](mysqli.stmt-init.md) | \- | Ініціалізує та повертає об'єкт для використання з mysqli_stmt_prepare |
| [mysqli::store_result()](mysqli.store-result.md) | [mysqli_store_result()](mysqli.store-result.md) | \- | |Локально зберігає результат, отриманий останнім запитом |
| [mysqli::thread_id()](mysqli.thread-id.md) | [mysqli_thread_id()](mysqli.thread-id.md) | \- | Повертає ідентифікатор потоку поточного з'єднання |
| [mysqli::thread_safe()](mysqli.thread-safe.md) | [mysqli_thread_safe()](mysqli.thread-safe.md) | \- | Повертає стан безпеки потоку
| [mysqli::use_result()](mysqli.use-result.md) | [mysqli_use_result()](mysqli.use-result.md) | \- | Ініціює отримання результату

**Основна інформація про методи [mysqli](class.mysqli.md)**

| MySQL_STMT | | | |
|------------------------------------------------- -------------------|------------------------------ -------------------------------------|------------ --------------------------------------|----------- -------------------------------------------------- -----------------------------------------|
| ООП-інтерфейс Процедурний інтерфейс Синонім (не використовуйте!) Опис |
| *Властивості* | | | |
| [$mysqli_stmt::affected_rows](mysqli-stmt.affected-rows.md) | [mysqli_stmt_affected_rows()](mysqli-stmt.affected-rows.md) | \- | Повертає число рядків, змінених, віддалених або вставлених під час виконання останньої інструкції |
| [$mysqli_stmt::errno](mysqli-stmt.errno.md) | [mysqli_stmt_errno()](mysqli-stmt.errno.md) | \- | Повертає код помилки останнього виконаного запиту
| [$mysqli_stmt::error](mysqli-stmt.error.md) | [mysqli_stmt_error()](mysqli-stmt.error.md) | \- | Повертає рядковий опис помилки останнього запиту
| [$mysqli_stmt::field_count](mysqli-stmt.field-count.md) | [mysqli_stmt_field_count()](mysqli-stmt.field-count.md) | \- | Повертає кількість полів у заданому запиті – не документовано |
| [$mysqli_stmt::insert_id](mysqli-stmt.insert-id.md) | [mysqli_stmt_insert_id()](mysqli-stmt.insert-id.md) | \- | Отримує ID, згенероване останньою операцією INSERT
| [$mysqli_stmt::num_rows](mysqli-stmt.num-rows.md) | [mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md) | \- | Повертає кількість рядків у результаті виконання запиту |
| [$mysqli_stmt::param_count](mysqli-stmt.param-count.md) | [mysqli_stmt_param_count()](mysqli-stmt.param-count.md) | Н/Д | Повертає кількість параметрів для заданого запиту
| [$mysqli_stmt::sqlstate](mysqli-stmt.sqlstate.md) | [mysqli_stmt_sqlstate()](mysqli-stmt.sqlstate.md) | \- | Повертає помилку SQLSTATE на останній виконаний запит |
| *Методи* | | | |
| [mysqli_stmt::attr_get()](mysqli-stmt.attr-get.md) | [mysqli_stmt_attr_get()](mysqli-stmt.attr-get.md) | \- | Використовується для отримання поточного атрибуту запиту |
| [mysqli_stmt::attr_set()](mysqli-stmt.attr-set.md) | [mysqli_stmt_attr_set()](mysqli-stmt.attr-set.md) | \- | використовується для модифікації поведінки підготовленого запиту |
| [mysqli_stmt::bind_param()](mysqli-stmt.bind-param.md) | [mysqli_stmt_bind_param()](mysqli-stmt.bind-param.md) | Н/Д | Передається змінні на підготовлений запит як параметри |
| [mysqli_stmt::bind_result()](mysqli-stmt.bind-result.md) | [mysqli_stmt_bind_result()](mysqli-stmt.bind-result.md) | Н/Д | Передає змінні до підготовленого запиту для збереження результатів |
| [mysqli_stmt::close()](mysqli-stmt.close.md) | [mysqli_stmt_close()](mysqli-stmt.close.md) | \- | Закриває підготовлений запит
| [mysqli_stmt::data_seek()](mysqli-stmt.data-seek.md) | [mysqli_stmt_data_seek()](mysqli-stmt.data-seek.md) | \- | Виконує пошук довільного рядка у результатах запиту |
| [mysqli_stmt::execute()](mysqli-stmt.execute.md) | [mysqli_stmt_execute()](mysqli-stmt.execute.md) | [mysqli_execute()](function.mysqli-execute.md) | Виконує підготовлений запит |
| [mysqli_stmt::fetch()](mysqli-stmt.fetch.md) | [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) | Н/Д | Вибір результатів підготовленого запиту у зв'язані змінні |
| [mysqli_stmt::free_result()](mysqli-stmt.free-result.md) | [mysqli_stmt_free_result()](mysqli-stmt.free-result.md) | \- | |Звільняє пам'ять, що зберігає результати заданого дескриптором запиту |
| [mysqli_stmt::get_result()](mysqli-stmt.get-result.md) | [mysqli_stmt_get_result()](mysqli-stmt.get-result.md) | \- | Отримує результат підготовленого запиту. Доступно лише з модулем [mysqlnd](book.mysqlnd.md). |
| [mysqli_stmt::get_warnings()](mysqli-stmt.get-warnings.md) | [mysqli_stmt_get_warnings()](mysqli-stmt.get-warnings.md) | \- | Чи не документовано |
| [mysqli_stmt::more_results()](mysqli-stmt.more-results.md) | [mysqli_stmt_more_results()](mysqli-stmt.more-results.md) | \- | Перевіряє наявність додаткових результатів запиту у разі множини |
| [mysqli_stmt::next_result()](mysqli-stmt.next-result.md) | [mysqli_stmt_next_result()](mysqli-stmt.next-result.md) | \- | Читає наступний результат із множинного запиту |
| [mysqli_stmt::num_rows()](mysqli-stmt.num-rows.md) | [mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md) | \- | Дивіться також [$mysqli_stmt::num_rows](mysqli-stmt.num-rows.md) |
| [mysqli_stmt::prepare()](mysqli-stmt.prepare.md) | [mysqli_stmt_prepare()](mysqli-stmt.prepare.md) | \- | Підготовка SQL запиту для запуску |
| [mysqli_stmt::reset()](mysqli-stmt.reset.md) | [mysqli_stmt_reset()](mysqli-stmt.reset.md) | \- | Скидає підготовлений запит
| [mysqli_stmt::result_metadata()](mysqli-stmt.result-metadata.md) | [mysqli_stmt_result_metadata()](mysqli-stmt.result-metadata.md) | Н/Д | Повертає метадані результатів підготовленого запиту
| [mysqli_stmt::send_long_data()](mysqli-stmt.send-long-data.md) | [mysqli_stmt_send_long_data()](mysqli-stmt.send-long-data.md) | Н/Д | Передача даних блоками
| [mysqli_stmt::store_result()](mysqli-stmt.store-result.md) | [mysqli_stmt_store_result()](mysqli-stmt.store-result.md) | \- | Передає результат із підготовленого запиту |

**Основна інформація про методи [mysqli_stmt](class.mysqli-stmt.md)**

| mysqli_result | | | |
|------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----|-------------------------------------------- --------------------------|----------------------- ----|--------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------|
| ООП-інтерфейс Процедурний інтерфейс Синонім (не використовуйте!) Опис |
| *Властивості* | | | |
| [$mysqli_result::current_field](mysqli-result.current-field.md) | [mysqli_field_tell()](mysqli-result.current-field.md) | \- | Отримати усунення вказівника на результат для поточного поля |
| [$mysqli_result::field_count](mysqli-result.field-count.md) | [mysqli_num_fields()](mysqli-result.field-count.md) | \- | Отримати кількість полів у результаті |
| [$mysqli_result::lengths](mysqli-result.lengths.md) | [mysqli_fetch_lengths()](mysqli-result.lengths.md) | \- | Повертає довжини стовпців поточного рядка у наборі результатів
| [$mysqli_result::num_rows](mysqli-result.num-rows.md) | [mysqli_num_rows()](mysqli-result.num-rows.md) | \- | Отримує число рядків у результаті |
| *Методи* | | | |
| [mysqli_result::data_seek()](mysqli-result.data-seek.md) | [mysqli_data_seek()](mysqli-result.data-seek.md) | \- | Встановлює покажчик результату на довільний рядок у результаті |
| [mysqli_result::fetch_all()](mysqli-result.fetch-all.md) | [mysqli_fetch_all()](mysqli-result.fetch-all.md) | \- | Отримує всі результуючі рядки та повертає масив з рядками у вигляді асоціативного масиву та/або нумерованого масиву. Доступно лише з модулем [mysqlnd](book.mysqlnd.md). |
| [mysqli_result::fetch_array()](mysqli-result.fetch-array.md) | [mysqli_fetch_array()](mysqli-result.fetch-array.md) | \- | Отримує результуючий рядок у вигляді асоціативного масиву та/або нумерованого масиву |
| [mysqli_result::fetch_assoc()](mysqli-result.fetch-assoc.md) | [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md) | \- | Отримує результуючий рядок у вигляді асоціативного масиву
| [mysqli_result::fetch_column()](mysqli-result.fetch-column.md) | [mysqli_fetch_column()](mysqli-result.fetch-column.md) | N/A | Отримує один стовпець наступного рядка набору результатів |
| [mysqli_result::fetch_field_direct()](mysqli-result.fetch-field-direct.md) | [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md) | \- | Отримує метадані одного поля |
| [mysqli_result::fetch_field()](mysqli-result.fetch-field.md) | [mysqli_fetch_field()](mysqli-result.fetch-field.md) | \- | Повертає з результату наступне поле |
| [mysqli_result::fetch_fields()](mysqli-result.fetch-fields.md) | [mysqli_fetch_fields()](mysqli-result.fetch-fields.md) | \- | Повертає масив об'єктів із полів результату |
| [mysqli_result::fetch_object()](mysqli-result.fetch-object.md) | [mysqli_fetch_object()](mysqli-result.fetch-object.md) | \- | Повертає поточний рядок результату як об'єкт |
| [mysqli_result::fetch_row()](mysqli-result.fetch-row.md) | [mysqli_fetch_row()](mysqli-result.fetch-row.md) | \- | Отримує рядок результату як нумерований масив
| [mysqli_result::field_seek()](mysqli-result.field-seek.md) | [mysqli_field_seek()](mysqli-result.field-seek.md) | \- | Встановлює усунення вказівника результату на певне поле |
| [mysqli_result::free()](mysqli-result.free.md), [mysqli_result::close](mysqli-result.free.md), [mysqli_result::free_result](mysqli-result.free.md) | [mysqli_free_result()](mysqli-result.free.md) | \- | Визволяє пам'ять, пов'язану з результатом |

**Основна інформація про методи
[mysqli_result](class.mysqli-result.md)**

| MySQL_Driver | | | |
|------------------------------------------------- -----------------------------------|-------------- -------------------------------------------------- ------------|---------------------------|--------- -------------------------------------|
| ООП-інтерфейс Процедурний інтерфейс Синонім (не використовуйте!) Опис |
| *Властивості* | | | |
| [$mysqli_driver::mysqli_report](mysqli-driver.report-mode.md) | [mysqli_report()](function.mysqli-report.md) | Чи не документовано | Встановлює режим звіту про помилки mysqli
| *Методи* | | | |
| [mysqli_driver::embedded_server_end()](mysqli-driver.embedded-server-end.md) | [mysqli_embedded_server_end()](mysqli-driver.embedded-server-end.md) | \- | Чи не документовано |
| [mysqli_driver::embedded_server_start()](mysqli-driver.embedded-server-start.md) | [mysqli_embedded_server_start()](mysqli-driver.embedded-server-start.md) | \- | Чи не документовано |

**Основна інформація про методи
[mysqli_driver](class.mysqli-driver.md)**

> **Примітка**:
>
> Псевдоніми функцій призначені лише для забезпечення зворотного
> сумісності. Не використовуйте їх у нових проектах.
