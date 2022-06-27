- [« Основна інформація про функції модуля
MySQLi](mysqli.summary.md)
- [mysqli::$affected_rows »](mysqli.affected-rows.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- Клас mysqli

# Клас mysqli

(PHP 5, PHP 7, PHP 8)

## Вступ

Представляє зв'язок між PHP та базою даних MySQL.

## Огляд класів

class **mysqli** {

/\* Властивості \*/

public readonly int\|string `$affected_rows`;

public readonly string `$client_info`;

public readonly int `$client_version`;

public readonly int `$connect_errno`;

public readonly ?string `$connect_error`;

public readonly int `$errno`;

public readonly string `$error`;

public readonly array `$error_list`;

public readonly int `$field_count`;

public readonly string `$host_info`;

public readonly ?string `$info`;

public readonly int\|string `$insert_id`;

public readonly string `$server_info`;

public readonly int `$server_version`;

public readonly string `$sqlstate`;

public readonly int `$protocol_version`;

public readonly int `$thread_id`;

public readonly int `$warning_count`;

/\* Методи \*/

public [\_\_construct](mysqli.construct.md)(
string `$hostname` u003d ini_get("mysqli.default_host"),
string `$username` u003d ini_get("mysqli.default_user"),
string `$password` u003d ini_get("mysqli.default_pw"),
string `$database` u003d "",
int `$port` u003d ini_get("mysqli.default_port"),
string `$socket` u003d ini_get("mysqli.default_socket")
)

public [autocommit](mysqli.autocommit.md)(bool `$enable`): bool

public [begin_transaction](mysqli.begin-transaction.md)(int `$flags` u003d
0, ?string `$name` u003d **`null`**): bool

public [change_user](mysqli.change-user.md)(string `$username`, string
`$password`, ?string `$database`): bool

public [character_set_name](mysqli.character-set-name.md)(): string

public [close](mysqli.close.md)(): bool

public [commit](mysqli.commit.md)(int `$flags` u003d 0, ?string `$name` u003d
**`null`**): bool

public [connect](function.mysqli-connect.md)(
string `$hostname` u003d ini_get("mysqli.default_host"),
string `$username` u003d ini_get("mysqli.default_user"),
string `$password` u003d ini_get("mysqli.default_pw"),
string `$database` u003d "",
int `$port` u003d ini_get("mysqli.default_port"),
string `$socket` u003d ini_get("mysqli.default_socket")
): void

public [debug](mysqli.debug.md)(string `$options`): bool

public [dump_debug_info](mysqli.dump-debug-info.md)(): bool

public [get_charset](mysqli.get-charset.md)(): ?object

public [get_client_info](mysqli.get-client-info.md)(): string

public [get_connection_stats](mysqli.get-connection-stats.md)(): array

public **mysqli_stmt::get_server_info**(): string

public [get_warnings](mysqli.get-warnings.md)():
[mysqli_warning](class.mysqli-warning.md)\|false

public [kill](mysqli.kill.md)(int `$process_id`): bool

public [more_results](mysqli.more-results.md)(): bool

public [multi_query](mysqli.multi-query.md)(string `$query`): bool

public [next_result](mysqli.next-result.md)(): bool

public [options](mysqli.options.md)(int `$option`, string\|int
`$value`): bool

public [ping](mysqli.ping.md)(): bool

public static [poll](mysqli.poll.md)(
?array `&$read`,
?array `&$error`,
array `&$reject`,
int `$seconds`,
int `$microseconds` u003d 0
): int\|false

public [prepare](mysqli.prepare.md)(string `$query`):
[mysqli_stmt](class.mysqli-stmt.md)\|false

public [query](mysqli.query.md)(string `$query`, int `$result_mode` u003d
**`MYSQLI_STORE_RESULT`**):
[mysqli_result](class.mysqli-result.md)\|bool

public [real_connect](mysqli.real-connect.md)(
string `$host` u003d ?,
string `$username` u003d ?,
string `$passwd` u003d ?,
string `$dbname` u003d ?,
int `$port` u003d ?,
string `$socket` u003d ?,
int `$flags` u003d ?
): bool

public [real_escape_string](mysqli.real-escape-string.md)(string
`$string`): string

public [real_query](mysqli.real-query.md)(string `$query`): bool

public [reap_async_query](mysqli.reap-async-query.md)():
[mysqli_result](class.mysqli-result.md)\|bool

public [refresh](mysqli.refresh.md)(int `$flags`): bool

public [release_savepoint](mysqli.release-savepoint.md)(string
`$name`): bool

public [rollback](mysqli.rollback.md)(int `$flags` u003d 0, ?string
`$name` u003d **`null`**): bool

public [savepoint](mysqli.savepoint.md)(string `$name`): bool

public [select_db](mysqli.select-db.md)(string `$database`): bool

public [set_charset](mysqli.set-charset.md)(string `$charset`): bool

public [ssl_set](mysqli.ssl-set.md)(
?string `$key`,
?string `$certificate`,
?string `$ca_certificate`,
?string `$ca_path`,
?string `$cipher_algos`
): bool

public [stat](mysqli.stat.md)(): string\|false

public [stmt_init](mysqli.stmt-init.md)():
[mysqli_stmt](class.mysqli-stmt.md)\|false

public [store_result](mysqli.store-result.md)(int `$mode` u003d 0):
[mysqli_result](class.mysqli-result.md)\|false

public [thread_safe](mysqli.thread-safe.md)(): bool

public [use_result](mysqli.use-result.md)():
[mysqli_result](class.mysqli-result.md)\|false

}

## Зміст

- [mysqli::$affected_rows](mysqli.affected-rows.md) — Отримує число
рядків, порушених попередньою операцією MySQL
- [mysqli::autocommit](mysqli.autocommit.md) — Включає або
відключає автоматичну фіксацію змін бази даних
- [mysqli::begin_transaction](mysqli.begin-transaction.md) -
Стартує транзакцію
- [mysqli::change_user](mysqli.change-user.md) — Дозволяє змінити
користувача підключеного до бази даних
- [mysqli::character_set_name](mysqli.character-set-name.md) -
Повертає поточне кодування, встановлене для з'єднання з БД
- [mysqli::close](mysqli.close.md) — Закриває раніше відкрите
з'єднання з базою даних
- [mysqli::commit](mysqli.commit.md) — Фіксує поточну транзакцію
- [mysqli::$connect_errno](mysqli.connect-errno.md) — Повертає код
помилки останньої спроби з'єднання
- [mysqli::$connect_error](mysqli.connect-error.md) — Повертає
опис останньої помилки підключення
- [mysqli::\_\_construct](mysqli.construct.md) - Встановлює нове
з'єднання з сервером MySQL
- [mysqli::debug](mysqli.debug.md) — Виконує процедури налагодження
- [mysqli::dump_debug_info](mysqli.dump-debug-info.md) -
Журналування налагоджувальної інформації
- [mysqli::$errno](mysqli.errno.md) — Повертає код помилки
останнього виклику функції
- [mysqli::$error_list](mysqli.error-list.md) — Повертає список
помилок виконання останньої занедбаної команди
- [mysqli::$error](mysqli.error.md) — Повертає рядок із описом
останньої помилки
- [mysqli::$field_count](mysqli.field-count.md) — Повертає число
стовпців, порушених останнім запитом
- [mysqli::get_charset](mysqli.get-charset.md) — Повертає об'єкт,
описує кодування
- [mysqli::$client_info](mysqli.get-client-info.md) — Отримує
інформацію про клієнта MySQL
- [mysqli::$client_version](mysqli.get-client-version.md) -
Повертає інформацію про клієнта MySQL у вигляді рядка
- [mysqli::get_connection_stats](mysqli.get-connection-stats.md) -
Повертає статистику з'єднання з клієнтом
- [mysqli::$host_info](mysqli.get-host-info.md) — Повертає рядок,
містить тип використовуваного з'єднання
- [mysqli::$protocol_version](mysqli.get-proto-info.md) — Повертає
версію використовуваного MySQL протоколу
- [mysqli::$server_info](mysqli.get-server-info.md) — Повертає
версію MySQL сервера
- [mysqli::$server_version](mysqli.get-server-version.md) -
Повертає версію сервера MySQL, представлену у вигляді integer
- [mysqli::get_warnings](mysqli.get-warnings.md) — Отримує
результат SHOW WARNINGS
- [mysqli::$info](mysqli.info.md) — Витягує інформацію про останнє
виконаному запиті
- [mysqli::init](mysqli.init.md) - Ініціалізує MySQLi та
повертає об'єкт для використання у функції mysqli_real_connect()
- [mysqli::$insert_id](mysqli.insert-id.md) — Повертає значення,
створене для стовпця AUTO_INCREMENT останнім запитом
- [mysqli::kill](mysqli.kill.md) — Запит для сервера завершити
виконання процесу MySQL
- [mysqli::more_results](mysqli.more-results.md) — Перевірка, чи є
ще результати в мультизапиті
- [mysqli::multi_query](mysqli.multi-query.md) — Виконує один або
кілька запитів до бази даних
- [mysqli::next_result](mysqli.next-result.md) — Підготовка
наступного доступного результуючого набору з multi_query
- [mysqli::options](mysqli.options.md) — Налаштування установок
- [mysqli::ping](mysqli.ping.md) - Перевіряє працездатність
з'єднання або намагається перепідключитися, якщо з'єднання розірвано
- [mysqli::poll](mysqli.poll.md) — Опитування підключень
- [mysqli::prepare](mysqli.prepare.md) — Підготовка SQL
вираз до виконання
- [mysqli::query](mysqli.query.md) — Виконує запит до бази даних
- [mysqli::real_connect](mysqli.real-connect.md) — Встановлює
з'єднання з сервером mysql
- [mysqli::real_escape_string](mysqli.real-escape-string.md) -
Екранує спеціальні символи в рядку для використання в
SQL-вираз, використовуючи поточний набір символів з'єднання
- [mysqli::real_query](mysqli.real-query.md) — Виконання SQL
запиту
- [mysqli::reap_async_query](mysqli.reap-async-query.md) — Отримання
результату асинхронного запиту
- [mysqli::refresh](mysqli.refresh.md) — Оновлення
- [mysqli::release_savepoint](mysqli.release-savepoint.md) — Видаляє
іменовану точку збереження зі списку точок збереження поточної
транзакції
- [mysqli::rollback](mysqli.rollback.md) - Відкат поточної транзакції
- [mysqli::savepoint](mysqli.savepoint.md) — Встановіть іменовану
точку збереження транзакції
- [mysqli::select_db](mysqli.select-db.md) — Встановлює базу
даних для виконуваних запитів
- [mysqli::set_charset](mysqli.set-charset.md) — Задає набір
символів
- [mysqli::$sqlstate](mysqli.sqlstate.md) — Повертає код стану
SQLSTATE останній MySQL операції
- [mysqli::ssl_set](mysqli.ssl-set.md) — Використовується для
встановлення безпечних з'єднань за допомогою SSL
- [mysqli::stat](mysqli.stat.md) — Отримання інформації про поточний
стан системи
- [mysqli::stmt_init](mysqli.stmt-init.md) — Ініціалізує запит та
повертає об'єкт для використання в mysqli_stmt_prepare
- [mysqli::store_result](mysqli.store-result.md) — Передає на
клієнта результуючий набір останнього запиту
- [mysqli::$thread_id](mysqli.thread-id.md) — Повертає ID процесу
поточного підключення
- [mysqli::thread_safe](mysqli.thread-safe.md) — Показує,
чи безпечна робота з процесами
- [mysqli::use_result](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
- [mysqli::$warning_count](mysqli.warning-count.md) — Повертає
кількість попереджень із останнього запиту заданого
підключення
