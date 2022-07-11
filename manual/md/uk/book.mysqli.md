- [«Кодування символів](mysqlinfo.concepts.charset.md)
- [Вступ »](intro.mysqli.md)

- [PHP Manual](index.md)
- [MySQL](set.mysqlinfo.md)
- Покращений модуль MySQL (MySQL Improved)

# Покращений модуль MySQL (MySQL Improved)

- [Вступ](intro.mysqli.md)
- [Короткий огляд](mysqli.overview.md)
- [Короткий посібник](mysqli.quickstart.md)
- [Процедурний та об'єктно-орієнтований
интерфейс](mysqli.quickstart.dual-interface.md)
- [З'єднання](mysqli.quickstart.connections.md)
- [Виконання запитів](mysqli.quickstart.statements.md)
- [Підготовлювані
запити](mysqli.quickstart.prepared-statements.md)
- [Збережені процедури](mysqli.quickstart.stored-procedures.md)
- [Множинні
запити](mysqli.quickstart.multiple-statement.md)
- [API підтримка транзакцій](mysqli.quickstart.transactions.md)
- [Метадані](mysqli.quickstart.metadata.md)
- [Встановлення та налаштування](mysqli.setup.md)
- [Вимоги](mysqli.requirements.md)
- [Установка](mysqli.installation.md)
- [Налаштування під час виконання](mysqli.configuration.md)
- [Типи ресурсів](mysqli.resources.md)
- [Модуль mysqli та постійні з'єднання](mysqli.persistconns.md)
- [Предвизначені константи](mysqli.constants.md)
- [Основна інформація про функції модуля MySQLi](mysqli.summary.md)
- [mysqli](class.mysqli.md) - Клас mysqli
- [mysqli::$affected_rows](mysqli.affected-rows.md) — Отримує
число рядків, порушених попередньою операцією MySQL
- [mysqli::autocommit](mysqli.autocommit.md) — Включає або
відключає автоматичну фіксацію змін бази даних
- [mysqli::begin_transaction](mysqli.begin-transaction.md) -
Стартує транзакцію
- [mysqli::change_user](mysqli.change-user.md) — Дозволяє
змінити користувача підключеного до бази даних
- [mysqli::character_set_name](mysqli.character-set-name.md) -
Повертає поточне кодування, встановлене для з'єднання з БД
- [mysqli::close](mysqli.close.md) — Закриває раніше відкрите
з'єднання з базою даних
- [mysqli::commit](mysqli.commit.md) — Фіксує поточну
транзакцію
- [mysqli::$connect_errno](mysqli.connect-errno.md) — Повертає
код помилки останньої спроби з'єднання
- [mysqli::$connect_error](mysqli.connect-error.md) — Повертає
опис останньої помилки підключення
- [mysqli::\_\_construct](mysqli.construct.md) - Встановлює
нове з'єднання з сервером MySQL
- [mysqli::debug](mysqli.debug.md) — Виконує процедури налагодження
- [mysqli::dump_debug_info](mysqli.dump-debug-info.md) -
Журналування налагоджувальної інформації
- [mysqli::$errno](mysqli.errno.md) — Повертає код помилки
останнього виклику функції
- [mysqli::$error_list](mysqli.error-list.md) — Повертає
список помилок виконання останньої запущеної команди
- [mysqli::$error](mysqli.error.md) — Повертає рядок з
описом останньої помилки
- [mysqli::$field_count](mysqli.field-count.md) — Повертає
число стовпців, порушених останнім запитом
- [mysqli::get_charset](mysqli.get-charset.md) — Повертає
об'єкт, що описує кодування
- [mysqli::$client_info](mysqli.get-client-info.md) — Отримує
інформацію про клієнта MySQL
- [mysqli::$client_version](mysqli.get-client-version.md) -
Повертає інформацію про клієнта MySQL у вигляді рядка
- [mysqli::get_connection_stats](mysqli.get-connection-stats.md)
— Повертає статистику з'єднання із клієнтом
- [mysqli::$host_info](mysqli.get-host-info.md) — Повертає
рядок, що містить тип використовуваного з'єднання
- [mysqli::$protocol_version](mysqli.get-proto-info.md) -
Повертає версію використовуваного MySQL протоколу
- [mysqli::$server_info](mysqli.get-server-info.md) — Повертає
версію MySQL сервера
- [mysqli::$server_version](mysqli.get-server-version.md) -
Повертає версію сервера MySQL, представлену у вигляді integer
- [mysqli::get_warnings](mysqli.get-warnings.md) — Отримує
результат SHOW WARNINGS
- [mysqli::$info](mysqli.info.md) — Витягує інформацію про
останньому виконаному запиті
- [mysqli::init](mysqli.init.md) - Ініціалізує MySQLi та
повертає об'єкт для використання у функції
mysqli_real_connect()
- [mysqli::$insert_id](mysqli.insert-id.md) — Повертає
значення, створене для стовпця AUTO_INCREMENT останнім
запитом
- [mysqli::kill](mysqli.kill.md) — Запит для сервера завершити
виконання процесу MySQL
- [mysqli::more_results](mysqli.more-results.md) — Перевірка,
є ще результати в мультизапиті
- [mysqli::multi_query](mysqli.multi-query.md) — Виконує один
або кілька запитів до бази даних
- [mysqli::next_result](mysqli.next-result.md) — Підготовка
наступного доступного результуючого набору з multi_query
- [mysqli::options](mysqli.options.md) — Встановлення установок
- [mysqli::ping](mysqli.ping.md) - Перевіряє працездатність
з'єднання або намагається перепідключитися, якщо з'єднання
розірвано
- [mysqli::poll](mysqli.poll.md) — Опитування підключень
- [mysqli::prepare](mysqli.prepare.md) — Підготовка SQL
вираз до виконання
- [mysqli::query](mysqli.query.md) — Виконує запит до бази
даних
- [mysqli::real_connect](mysqli.real-connect.md) — Встановлює
з'єднання з сервером mysql
- [mysqli::real_escape_string](mysqli.real-escape-string.md) -
Екранує спеціальні символи в рядку для використання в
SQL-вираз, використовуючи поточний набір символів з'єднання
- [mysqli::real_query](mysqli.real-query.md) — Виконання SQL
запиту
- [mysqli::reap_async_query](mysqli.reap-async-query.md) -
Отримання результату асинхронного запиту
- [mysqli::refresh](mysqli.refresh.md) — Оновлення
- [mysqli::release_savepoint](mysqli.release-savepoint.md) -
Видаляє іменовану точку збереження зі списку точок збереження
поточної транзакції
- [mysqli::rollback](mysqli.rollback.md) - Відкат поточної
транзакції
- [mysqli::savepoint](mysqli.savepoint.md) — Встановіть
іменовану точку збереження транзакції
- [mysqli::select_db](mysqli.select-db.md) — Встановлює базу
даних для виконуваних запитів
- [mysqli::set_charset](mysqli.set-charset.md) — Задає набір
символів
- [mysqli::$sqlstate](mysqli.sqlstate.md) — Повертає код
стану SQLSTATE останньої MySQL операції
- [mysqli::ssl_set](mysqli.ssl-set.md) — Використовується для
встановлення безпечних з'єднань за допомогою SSL
- [mysqli::stat](mysqli.stat.md) — Отримання інформації про
поточний стан системи
- [mysqli::stmt_init](mysqli.stmt-init.md) - Ініціалізує
запит і повертає об'єкт для використання в
mysqli_stmt_prepare
- [mysqli::store_result](mysqli.store-result.md) — Передає на
клієнта результуючий набір останнього запиту
- [mysqli::$thread_id](mysqli.thread-id.md) — Повертає ID
процесу поточного підключення
- [mysqli::thread_safe](mysqli.thread-safe.md) — Показує,
чи безпечна робота з процесами
- [mysqli::use_result](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
- [mysqli::$warning_count](mysqli.warning-count.md) — Повертає
кількість попереджень із останнього запиту заданого
підключення
- [mysqli_stmt](class.mysqli-stmt.md) — The mysqli_stmt class
- [mysqli_stmt::$affected_rows](mysqli-stmt.affected-rows.md) -
Повертає загальну кількість рядків, змінених, віддалених,
вставлених або зіставлених останнім виконаним виразом
- [mysqli_stmt::attr_get](mysqli-stmt.attr-get.md) — Отримує
поточне значення атрибуту запиту
- [mysqli_stmt::attr_set](mysqli-stmt.attr-set.md) — Змінює
поведінка підготовленого запиту
- [mysqli_stmt::bind_param](mysqli-stmt.bind-param.md) -
Прив'язка змінних до параметрів запиту
- [mysqli_stmt::bind_result](mysqli-stmt.bind-result.md)
Прив'язка змінних до підготовленого запиту для розміщення
результату
- [mysqli_stmt::close](mysqli-stmt.close.md) — Закриває
підготовлений запит
- [mysqli_stmt::\_\_construct](mysqli-stmt.construct.md) -
Конструктор для об'єкту mysqli_stmt
- [mysqli_stmt::data_seek](mysqli-stmt.data-seek.md) — Перехід до
заданому рядку в результуючому наборі
- [mysqli_stmt::$errno](mysqli-stmt.errno.md) — Повертає код
помилки виконання останнього запиту
- [mysqli_stmt::$error_list](mysqli-stmt.error-list.md) -
Повертає перелік помилок виконання останнього запиту
- [mysqli_stmt::$error](mysqli-stmt.error.md) — Повертає
рядок із поясненням останньої помилки під час виконання запиту
- [mysqli_stmt::execute](mysqli-stmt.execute.md) — Виконує
підготовлене затвердження
- [mysqli_stmt::fetch](mysqli-stmt.fetch.md) — Зв'язує
результати підготовленого виразу зі змінними
- [mysqli_stmt::$field_count](mysqli-stmt.field-count.md) -
Повертає кількість стовпців у заданому вираженні
- [mysqli_stmt::free_result](mysqli-stmt.free-result.md) -
Звільняє пам'ять від результату запиту, вказаного
дескриптором
- [mysqli_stmt::get_result](mysqli-stmt.get-result.md)
Отримує результат із підготовленого запиту у вигляді об'єкту
mysqli_result
- [mysqli_stmt::get_warnings](mysqli-stmt.get-warnings.md) -
Отримує результат від SHOW WARNINGS
- [mysqli_stmt::$insert_id](mysqli-stmt.insert-id.md) — Отримує
ID, згенерований попередньою операцією INSERT
- [mysqli_stmt::more_results](mysqli-stmt.more-results.md)
Перевіряє, чи є ще набори рядків через мультизапит.
- [mysqli_stmt::next_result](mysqli-stmt.next-result.md)
Читає наступний набір рядків із мультизапиту
- [mysqli_stmt::$num_rows](mysqli-stmt.num-rows.md) — Повертає
кількість рядків, отриманих із сервера
- [mysqli_stmt::$param_count](mysqli-stmt.param-count.md) -
Повертає кількість параметрів у запиті
- [mysqli_stmt::prepare](mysqli-stmt.prepare.md) -
Готує затвердження SQL до виконання
- [mysqli_stmt::reset](mysqli-stmt.reset.md) — Скидає
результати виконання підготовленого запиту
- [mysqli_stmt::result_metadata](mysqli-stmt.result-metadata.md)
— Повертає метадані результуючої таблиці.
запиту
- [mysqli_stmt::send_long_data](mysqli-stmt.send-long-data.md) -
Надсилання даних блоками
- [mysqli_stmt::$sqlstate](mysqli-stmt.sqlstate.md) — Повертає
код помилки SQLSTATE, викликаної під час виконання останньої
операції над запитом
- [mysqli_stmt::store_result](mysqli-stmt.store-result.md)
Зберігає набір результатів у внутрішньому буфері
- [mysqli_result](class.mysqli-result.md) - Клас mysqli_result
- [mysqli_result::\_\_construct](mysqli-result.construct.md) -
Конструктор об'єкту mysqli_result
- [mysqli_result::$current_field](mysqli-result.current-field.md)
— Отримує зміщення вказівника щодо поточного поля
- [mysqli_result::data_seek](mysqli-result.data-seek.md)
Переміщує покажчик результату на вибраний рядок
- [mysqli_result::fetch_all](mysqli-result.fetch-all.md)
Вибирає всі рядки з результуючого набору та поміщає їх у
асоціативний масив, звичайний масив або обидва
- [mysqli_result::fetch_array](mysqli-result.fetch-array.md)
Вибирає наступний рядок з набору результатів і поміщає їх у
асоціативний масив, звичайний масив або обидва
- [mysqli_result::fetch_assoc](mysqli-result.fetch-assoc.md)
Вибирає наступний рядок з набору результатів і поміщає їх у
асоціативний масив
- [mysqli_result::fetch_column](mysqli-result.fetch-column.md)
Отримує один стовпець з наступного рядка набору результатів
- [mysqli_result::fetch_field_direct](mysqli-result.fetch-field-direct.md)
— Отримання метаданих конкретного поля
- [mysqli_result::fetch_field](mysqli-result.fetch-field.md)
Повертає наступне поле результуючого набору
- [mysqli_result::fetch_fields](mysqli-result.fetch-fields.md)
Повертає масив об'єктів, що становлять поля результуючого
набору
- [mysqli_result::fetch_object](mysqli-result.fetch-object.md)
Вибирає наступний рядок із набору результатів у вигляді об'єкта
- [mysqli_result::fetch_row](mysqli-result.fetch-row.md)
Вибирає наступний рядок з набору результатів і поміщає їх у
звичайний масив
- [mysqli_result::$field_count](mysqli-result.field-count.md)
Отримує кількість полів у наборі результатів
- [mysqli_result::field_seek](mysqli-result.field-seek.md)
Встановити вказівник поля на певне усунення
- [mysqli_result::free](mysqli-result.free.md) — Звільняє
пам'ять, зайняту результатами запиту
- [mysqli_result::getIterator](mysqli-result.getiterator.md)
Витягує зовнішній ітератор
- [mysqli_result::$lengths](mysqli-result.lengths.md)
Повертає довжини полів поточного рядка результуючого набору
- [mysqli_result::$num_rows](mysqli-result.num-rows.md) —
Отримує кількість рядків у наборі результатів
- [mysqli_driver](class.mysqli-driver.md) - Клас mysqli_driver
- [mysqli_driver::embedded_server_end](mysqli-driver.embedded-server-end.md)
- Зупиняє вбудований сервер
- [mysqli_driver::embedded_server_start](mysqli-driver.embedded-server-start.md)
— Ініціалізує та запускає вбудований сервер
- [mysqli_driver::$report_mode](mysqli-driver.report-mode.md) -
Встановлює режим звіту про помилки mysqli
- [mysqli_warning](class.mysqli-warning.md) - Клас mysqli_warning
- [mysqli_warning::\_\_construct](mysqli-warning.construct.md) -
Закритий конструктор для заборони прямого створення екземпляра
- [mysqli_warning::next](mysqli-warning.next.md) — Отримує
наступне попередження
- [mysqli_sql_exception](class.mysqli-sql-exception.md) - Клас
mysqli_sql_exception
- [mysqli_sql_exception::getSqlState](mysqli-sql-exception.getsqlstate.md)
— Повертає код помилки SQLSTATE
- [Синоніми та застарілі функції Mysqli](ref.mysqli.md)
- [mysqli_connect](function.mysqli-connect.md) - Псевдонім
mysqli::\_\_construct
- [mysqli::escape_string](function.mysqli-escape-string.md) -
Псевдонім функції mysqli_real_escape_string
- [mysqli_execute](function.mysqli-execute.md) - Синонім для
mysqli_stmt_execute
- [mysqli_get_client_stats](function.mysqli-get-client-stats.md)
- Отримати клієнтську попроцесну статистику
- [mysqli_get_links_stats](function.mysqli-get-links-stats.md) -
Повертає інформацію про відкриті та закешовані з'єднання
MySQL
- [mysqli_report](function.mysqli-report.md) - Псевдонім
mysqli_driver-\>report_mode
- [mysqli::set_opt](function.mysqli-set-opt.md) - Псевдонім
mysqli_options
- [Список змін](changelog.mysqli.md)
