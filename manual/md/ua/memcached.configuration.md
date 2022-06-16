- [« Установка](memcached.installation.md)
- [Типи ресурсів »](memcached.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](memcached.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- --------------|----------------|-----------------| -------------------------------------------------- -----------------------------------------------|
| [memcached.sess_locking](memcached.configuration.md#ini.memcached.sess-locking) | On | PHP_INI_ALL | Доступно з memcached 0.1.0. |
| [memcached.sess_consistent_hash](memcached.configuration.md#ini.memcached.sess-consistent-hash) | On | PHP_INI_ALL | Доступно з memcached 2.1.0. Значення за промовчанням - On, починаючи з memcached 3.0.0. |
| [memcached.sess_binary](memcached.configuration.md#ini.memcached.sess-binary) | Off | PHP_INI_ALL | Доступно з memcached 2.0.0. Замінено на memcached.sess_binary_protocol у memcached 3.0.0. |
| [memcached.sess_lock_wait](memcached.configuration.md#ini.memcached.sess-lock-wait) | 150000 | PHP_INI_ALL | Доступно з memcached 0.1.0. Видалено в memcached 3.0.0. |
| [memcached.sess_prefix](memcached.configuration.md#ini.memcached.sess-prefix) | memc.sess.key. | PHP_INI_ALL | Доступно з memcached 0.1.0. |
| [memcached.sess_number_of_replicas](memcached.configuration.md#ini.memcached.sess-number-of-replicas) | 0 | PHP_INI_ALL | Доступно з memcached 2.1.0. |
| [memcached.sess_randomize_replica_read](memcached.configuration.md#ini.memcached.sess-randomize-replica-read) | Off | PHP_INI_ALL | Доступно з memcached 2.1.0. |
| [memcached.sess_remove_failed](memcached.configuration.md#ini.memcached.sess-remove-failed) | On | PHP_INI_ALL | Доступно з memcached 2.1.0. Замінено на memcached.sess_remove_failed_servers у memcached 3.0.0. |
| [memcached.compression_type](memcached.configuration.md#ini.memcached.compression-type) | fastlz | PHP_INI_ALL | Доступно з memcached 0.1.0. |
| [memcached.compression_factor](memcached.configuration.md#ini.memcached.compression-factor) | 1.3 | PHP_INI_ALL | Доступно з memcached 0.1.0. |
| [memcached.compression_threshold](memcached.configuration.md#ini.memcached.compression-threshold) | 2000 | PHP_INI_ALL | Доступно з memcached 0.1.0. |
| [memcached.serializer](memcached.configuration.md#ini.memcached.serializer) | igbinary | PHP_INI_ALL | Доступно з memcached 0.1.0. |
| [memcached.use_sasl](memcached.configuration.md#ini.memcached.use-sasl) | Off | PHP_INI_SYSTEM | Доступно з memcached 2.2.0. Видалено в memcached 3.0.0. |
| [memcached.default_binary_protocol](memcached.configuration.md#ini.memcached.default-binary-protocol) | Off | PHP_INI_ALL | Доступно з memcached 3.0.0. |
| [memcached.default_connect_timeout](memcached.configuration.md#ini.memcached.default-connect-timeout) | 0 | PHP_INI_ALL | Доступно з memcached 3.0.0. |
| [memcached.default_consistent_hash](memcached.configuration.md#ini.memcached.default-consistent-hash) | Off | PHP_INI_ALL | Доступно з memcached 3.0.0. |
| [memcached.sess_binary_protocol](memcached.configuration.md#ini.memcached.sess-binary-protocol) | On | PHP_INI_ALL | Доступно з memcached 3.0.0. Замінено на memcached.sess_binary. |
| [memcached.sess_connect_timeout](memcached.configuration.md#ini.memcached.sess-connect-timeout) | 1000 | PHP_INI_ALL | Доступно з memcached 2.2.0. |
| [memcached.sess_consistent_hash_type](memcached.configuration.md#ini.memcached.sess-consistent-hash-type) | ketama | PHP_INI_ALL | Доступно з memcached 3.1.0. |
| [memcached.sess_lock_expire](memcached.configuration.md#ini.memcached.sess-lock-expire) | 0 | PHP_INI_ALL | Доступно з memcached 2.2.0. |
| [memcached.sess_lock_retries](memcached.configuration.md#ini.memcached.sess-lock-retries) | 5 | PHP_INI_ALL | Доступно з memcached 3.0.0. |
| [memcached.sess_lock_wait_max](memcached.configuration.md#ini.memcached.sess-lock-wait-max) | 150 | PHP_INI_ALL | Доступно з memcached 3.0.0. Значення за замовчуванням 150 з memcached 3.1.0 (вперше 2000). |
| [memcached.sess_lock_wait_min](memcached.configuration.md#ini.memcached.sess-lock-wait-min) | 150 | PHP_INI_ALL | Доступно з memcached 3.0.0. Значення за замовчуванням 150 з memcached 3.1.0 (вперше 1000). |
| [memcached.sess_persistent](memcached.configuration.md#ini.memcached.sess-persistent) | Off | PHP_INI_ALL | Доступно з memcached 3.0.0. |
| [memcached.sess_remove_failed_servers](memcached.configuration.md#ini.memcached.sess-remove-failed-servers) | Off | PHP_INI_ALL | Доступно з memcached 3.0.0. Замінено на memcached.sess_remove_failed. |
| [memcached.sess_server_failure_limit](memcached.configuration.md#ini.memcached.sess-server-failure-limit) | 0 | PHP_INI_ALL | Доступно з memcached 3.0.0. |
| [memcached.sess_sasl_password](memcached.configuration.md#ini.memcached.sess-sasl-password) | null | PHP_INI_ALL | Доступно з memcached 2.2.0. |
| [memcached.sess_sasl_username](memcached.configuration.md#ini.memcached.sess-sasl-username) | null | PHP_INI_ALL | Доступно з memcached 2.2.0. |
| [memcached.store_retry_count](memcached.configuration.md#ini.memcached.store-retry-count) | 2 | PHP_INI_ALL | Доступно з memcached 2.2.0. |

**Опції налаштування Memcached**

Коротке пояснення конфігураційних директив.

`memcached.sess_locking` bool
Використовувати блокування сесій. Допустимі значення: On, Off. за
замовчуванням

`memcached.sess_consistent_hash` bool
Якщо увімкнено, то для обробки сесій буде використано узгоджене
хешування. При використанні узгодженого хешування можна
додавати або видаляти вузли кешування без великих втрат кешованих
ключів. За промовчанням On.

`memcached.sess_binary` bool
Використовувати бінарний режим сесії.Репліки libmemcached працюють тільки
якщо активовано цей режим. За замовчуванням Off.

`memcached.sess_lock_wait` int
Час очікування повторної синхронізації сесії у мікросекундах. При
встановлення цього значення будьте обережні. Допустимі цілочисленні
значення. Якщо встановлено як 0, використовується значення за промовчанням.
Негативні значення зменшують блокування спроб блокування. за
замовчуванням 150000.

`memcached.sess_prefix` string
Префікс ключ сесії. Рядок довжиною трохи більше 219 байт. За замовчуванням
"memc.sess.key."

`memcached.sess_number_of_replicas` int
Записувати дані на ряд додаткових серверів memcached. Це "висока
доступність для бідняків", як її називає libmemcached. Якщо це
значення позитивне, та активований режим
sessions_remove_failed_servers, коли сервер memcached виходить з ладу,
сесія буде, як і раніше, доступна з репліки. Однак якщо відмовив
сервер memcache знову стає доступним, він читатиме сесію
звідти, яка може мати старі дані чи взагалі не мати даних. за
замовчуванням 0.

`memcached.sess_randomize_replica_read` bool
Випадкове читання репліки memcached сесією.

`memcached.sess_remove_failed` int
Дозволити автоматичне видалення недоступних серверів memcached.

`memcached.compression_type` string
Настроювання типу стиснення, коректні значення: fastlz, zlib. За замовчуванням
fastlz.

`memcached.compression_factor` float
Коефіцієнт стиснення. Зберігати значення стиснутими лише якщо коефіцієнт
стиснення перевищує заданий. Зберігаємо стислим якщо:
`plain_len> comp_len* factor`. 1.3 (економія місця 23%).

`memcached.compression_threshold` int
Поріг стиснення. Не стискати серіалізовані значення менше вказаного
розміру. Типово 2000 bytes.

`memcached.serializer` string
Налаштування стандартного серіалізатора для нових об'єктів memcached.
Допустимі значення: php, igbinary, json, json_array, msgpack.

json
Стандартне кодування JSON. Цей серіалізатор швидкий та компактний, але
працює тільки з даними у UTF-8 і не повністю реалізує серіалізацію.
Подробиці див. у описі модуля JSON. Доступно з memcached 0.2.0.

json_array
Той-таки json, але розкодується в масиви. Доступно з memcached 2.0.0.

php
Стандартний серіалізатор PHP.

igbinary
Бінарний серіалізатор. Доступно з memcached 0.1.4

msgpack
Міжмовний двійковий серіалізатор. Доступно з memcached 2.2.0.

За замовчуванням igbinary, якщо доступний, потім igbinary, якщо доступний,
інакше PHP.

`memcached.use_sasl` bool
Використовувати автентифікацію SASL під час з'єднання. Допустимі значення:
On, Off. За замовчуванням Off.

`memcached.default_binary_protocol` bool
Встановлює протокол memcached за промовчанням для нових підключень.
(Щоб налаштувати протокол memcached для з'єднань, що використовуються
сесіями, використовуйте замість нього memcached.sess_binary_protocol) Якщо
встановлено значення On, за замовчуванням використовується двійковий протокол
memcached. Якщо встановлено значення Off, використовується текстовий
протокол memcached. За замовчуванням Off

`memcached.default_connect_timeout` int
Встановлює час очікування з'єднання memcached за замовчуванням для нових
з'єднань. (Щоб налаштувати час очікування з'єднання memcached для
сесій, використовуйте замість цього memcached.sess_connect_timeout)
неблокуючому режимі це змінює значення часу очікування під час
підключення до сокету у мілісекундах. Вказівка -1 означає нескінченне
час очікування. Вказівка 0 означає використання часу очікування
стандартні з'єднання для бібліотеки memcached. Типово 0.

`memcached.default_consistent_hash` bool
Встановлює значення за замовчуванням для узгодженого хешування для
нових підключень. (Щоб налаштувати узгоджене хешування для
сесій, використовуйте замість цього memcached.sess_consistent_hash) Якщо
встановлено значення On, для обробки сесії використовується узгоджене
хешування (libketama). Коли використовується узгоджене хешування,
можна додавати або видаляти вузли кешу, не турбуючись про те, що
існуючі ключі за замовчуванням вимкнено.

`memcached.sess_binary_protocol` bool
Використовуйте двійковий протокол memcached для сесій memcached (замість
текстового протоколу). Репліки libmemcached працюють, тільки якщо
увімкнено двійковий режим. Однак деякі проксі (наприклад, twemproxy)
будуть працювати, тільки якщо двійковий протокол вимкнено. У старіших
версіях php-memcached цей параметр був вимкнений і називався
memcached.sess_binary. За замовчуванням включено з libmemcached 1.0.18 або
новіше. За замовчуванням у старій версії вимкнено.

`memcached.sess_connect_timeout` int
Значення часу очікування з'єднання memcached У режимі неблокування
це змінює значення часу очікування під час з'єднання сокету в
мілісекундах. Вказівка -1 означає нескінченний час очікування.

`memcached.sess_consistent_hash_type` string
Тип узгодженого хешування сесії Memcached. Якщо встановлено
значення 'ketama' (за замовчуванням для php-memcached 3.x), для обробки
сесії використовується узгоджене хешування libketama, якщо
встановлено значення 'ketama_weighted' (за замовчуванням для php-memcached
2.x) для обробки сесії використовується зважене узгоджене
хешування (libketama). За замовчуванням – "ketama".

`memcached.sess_lock_expire` int
Час у секундах до того, як має спрацювати блокування. Установка 0
призводить до поведінки за умовчанням, яке полягає у використанні
PHP max_execution_time Типово 0.

`memcached.sess_lock_retries` int
Кількість спроб повторного блокування блокування сесії, не включаючи
першу спробу. Типово 5.

`memcached.sess_lock_wait_max` int
Максимальний час очікування у мілісекундах між спробами блокування
сесії. Типово 150.

`memcached.sess_lock_wait_min` int
Мінімальний час очікування у мілісекундах між спробами блокування
сесії. Це значення подвоюється при кожній спробі блокування до тих
доки не буде досягнуто memcached.sess_lock_wait_max, після чого
будь-які подальші спроби займатимуть sessions_lock_wait_max секунд.
Типово 150.

`memcached.sess_persistent` bool
Чи слід повторно використовувати з'єднання memcached, відповідні
значенням (значенням) session.save_path після завершення виконання
скрипт. Не використовуйте це, якщо певні установки (наприклад,
налаштування SASL, sess_binary_protocol) будуть перевизначені між
запитами. За замовчуванням Off.

`memcached.sess_remove_failed_servers` bool
Дозволити автоматичне видалення сервера, що відмовив memcached. за
замовчуванням Off. (У попередніх версіях цей параметр називався
memcached.sess_remove_failed)

`memcached.sess_server_failure_limit` int
Встановіть це значення, щоб дозволити видалення сервера після
заданої кількості безперервних збоїв підключення. Типово 0.

`memcached.sess_sasl_password` string
Пароль сесії SASL Для включення SASL необхідно вказати ім'я
користувача та пароль.

`memcached.sess_sasl_username` string
Ім'я користувача сесії SASL Для включення SASL необхідно вказати ім'я
користувача та пароль.

`memcached.store_retry_count` int
Кількість повторних спроб невдалих команд збереження. Цей
механізм забезпечує прозоре перемикання на вторинні сервери при
збої операцій set/increment/decrement/setMulti на бажаному сервері в
середовищі з безліччю серверів. за замовчуванням - 2
