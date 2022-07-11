- [« Установка](memcache.installation.md)
- [Типи ресурсів»] (memcache.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](memcache.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------------------------|---------- ----|-----------------|--------------------------- ------|
| [memcache.allow_failover](memcache.ini.md#ini.memcache.allow-failover) | "1" | PHP_INI_ALL | Доступно з memcache 2.0.2. |
| [memcache.max_failover_attempts](memcache.ini.md#ini.memcache.max-failover-attempts) | "20" | PHP_INI_ALL | Доступно з memcache 2.1.0. |
| [memcache.chunk_size](memcache.ini.md#ini.memcache.chunk-size) | "8192" | PHP_INI_ALL | Доступно з memcache 2.0.2. |
| [memcache.default_port](memcache.ini.md#ini.memcache.default-port) | "11211" | PHP_INI_ALL | Доступно з memcache 2.0.2. |
| [memcache.hash_strategy](memcache.ini.md#ini.memcache.hash-strategy) | "standard" | PHP_INI_ALL | Доступно з memcache 2.2.0. |
| [memcache.hash_function](memcache.ini.md#ini.memcache.hash-function) | "crc32" | PHP_INI_ALL | Доступно з memcache 2.2.0. |
| [memcache.protocol](memcache.ini.md#ini.memcache.protocol) | Ascii | \>PHP_INI_ALL | Підтримується з Memcache 3.0.0 |
| [memcache.redundancy](memcache.ini.md#ini.memcache.redundancy) | 1 | \>PHP_INI_ALL | Підтримується з Memcache 3.0.0 |
| [memcache.session_redundancy](memcache.ini.md#ini.memcache.session-redundancy) | 2 | \>PHP_INI_ALL | Підтримується з Memcache 3.0.0 |
| [memcache.compress_threshold](memcache.ini.md#ini.memcache.compress-threshold) | 20000 | \>PHP_INI_ALL | Підтримується з Memcache 3.0.3 |
| [memcache.lock_timeout](memcache.ini.md#ini.memcache.lock-timeout) | 15 | \>PHP_INI_ALL | Підтримується з memcache 3.0.4

**Конфігураційні параметри Memcache**

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- --------------------|--------------|-------------- ---|------------------------------------------|
| [session.save_handler](memcache.ini.md#ini.memcache.save-handler) | "files" | PHP_INI_ALL | Підтримується з memcache 2.1.2 |
| [session.save_path](memcache.ini.md#ini.memcache.save-path) | "" | PHP_INI_ALL | Підтримується з memcache 2.1.2 |

**Параметри конфігурації сесії, що впливають на поведінку Memcache**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`memcache.allow_failover` bool
Дозвіл прозорого перемикання (failover) на інші сервери
виникнення помилок.

`memcache.max_failover_attempts` int
Встановлює кількість спроб читання та запису даних. Використовується тільки
у поєднанні з memcache.allow_failover.

`memcache.chunk_size` int
Встановлює розмір блоків даних, що передаються. Використання малих
значень призводить до підвищення мережевої активності. У разі несподіваного
Уповільнення роботи спробуйте збільшити значення до 32768.

`memcache.default_port` string
Встановлює номер порту TCP за замовчуванням для підключення до сервера
memcached, якщо явно не вказаний інший.

`memcache.hash_strategy` string
Контролює стратегію відображення ключів на сервері. Встановіть
цей параметр в `consistent` для включення послідовного
хешування, яке не вимагає перепризначення ключів кешу при
додаванні та видаленні серверів з пулу. Встановлення цього параметра в
`standard` призводить до використання старої стратегії.

`memcache.hash_function` string
Встановлює хеш-функцію для відображення ключів на сервері. При
значення crc32 буде використовуватися стандартний CRC32 хеш, а при
`fnv` - FNV-1a.

`memcache.protocol` string

`memcache.redundancy` int

`memcache.session_redundancy` int

`memcache.compress_threshold` int

`memcache.lock_timeout` int

`session.save_handler` string
Встановіть цей параметр в `memcache` для використання memcache в
як оброблювач сесій.

`session.save_path` string
Встановлює список адрес серверів, розділених комою, для зберігання
сесій. Наприклад, ``tcp://host1:11211, tcp://host2:11211''.

Кожна адреса може містити параметри, аналогічні використовуваним в
методі [Memcache::addServer()](memcache.addserver.md), які будуть
застосовані сервером. Наприклад,
`"tcp://host1:11211?persistentu003d1&weightu003d1&timeoutu003d1&retry_intervalu003d15"`
