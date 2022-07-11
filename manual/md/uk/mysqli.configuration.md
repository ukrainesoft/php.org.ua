- [« Установка](mysqli.installation.md)
- [Типи ресурсів»] (mysqli.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mysqli.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------| --------------|-----------------|----------------- ---------------------------------------|
| [mysqli.allow_local_infile](mysqli.configuration.md#ini.mysqli.allow-local-infile) | "0" | PHP_INI_SYSTEM | До PHP 7.2.16 та 7.3.3 значенням за замовчуванням було "1". |
| [mysqli.local_infile_directory](mysqli.configuration.md#ini.mysqli.local-infile-directory) | | PHP_INI_SYSTEM | Доступно з PHP 8.1.0. |
| [mysqli.allow_persistent](mysqli.configuration.md#ini.mysqli.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [mysqli.max_persistent](mysqli.configuration.md#ini.mysqli.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [mysqli.max_links](mysqli.configuration.md#ini.mysqli.max-links) | "-1" | PHP_INI_SYSTEM | |
| [mysqli.default_port](mysqli.configuration.md#ini.mysqli.default-port) | "3306" | PHP_INI_ALL | |
| [mysqli.default_socket](mysqli.configuration.md#ini.mysqli.default-socket) | NULL | PHP_INI_ALL | |
| [mysqli.default_host](mysqli.configuration.md#ini.mysqli.default-host) | NULL | PHP_INI_ALL | |
| [mysqli.default_user](mysqli.configuration.md#ini.mysqli.default-user) | NULL | PHP_INI_ALL | |
| [mysqli.default_pw](mysqli.configuration.md#ini.mysqli.default-pw) | NULL | PHP_INI_ALL | |
| [mysqli.reconnect](mysqli.configuration.md#ini.mysqli.reconnect) | "0" | PHP_INI_SYSTEM | |
| [mysqli.rollback_on_cached_plink](mysqli.configuration.md#ini.mysqli.rollback-on-cached-plink) | "0" | PHP_INI_SYSTEM | |

**Параметри конфігурації MySQLi**

Інші деталі та визначення констант PHP_INI\_\* дивіться у розділі
[Конфігураційні зміни](configuration.changes.md).

Коротке пояснення конфігураційних директив.

`mysqli.allow_local_infile` int
Дозволяє доступ до локальних файлів, з точки зору PHP, за допомогою
інструкцій LOAD DATA.

`mysqli.local_infile_directory` string
Дозволяє обмежити завантаження LOAD DATA файлами, розташованими в
вказаному каталозі.

`mysqli.allow_persistent` int
Включає можливість створювати постійні з'єднання за допомогою
[mysqli_connect()](function.mysqli-connect.md).

`mysqli.max_persistent` int
Максимально можлива кількість постійних з'єднань. Для
необмеженої кількості встановіть 0.

`mysqli.max_links` int
Максимальна кількість сполук MySQL на процес.

`mysqli.default_port` int
TCP-порт, який використовується за замовчуванням для з'єднання з сервером баз
даних, якщо інше значення явно не вказано. Якщо значення за замовчуванням
не вказано, воно буде отримано із змінного середовища оточення
`MYSQL_TCP_PORT`, директиви `mysql-tcp` у файлі `/etc/services` або
константи `MYSQL_PORT`, яка задається під час компіляції,
вказаному порядку. Win32 використовує лише константу `MYSQL_PORT`.

`mysqli.default_socket` string
Ім'я стандартного сокету, яке використовується для з'єднання з локальною
базою даних, якщо ім'я сокета був зазначено явно.

`mysqli.default_host` string
Ім'я сервера, яке використовується, якщо ім'я не було вказано.

`mysqli.default_user` string
Ім'я користувача за промовчанням, якщо ім'я не було вказано
явно.

`mysqli.default_pw` string
Пароль, який використовується за замовчуванням для підключення до БД, якщо пароль не
був явно вказаний.

`mysqli.reconnect` int
Автоматично відновлювати з'єднання за його втрати.

> **Примітка**: Ця установка ігнорується драйвером "mysqlnd".

`mysqli.rollback_on_cached_plink` bool
Якщо цей параметр увімкнено, закриття постійного з'єднання відкотить
будь-які очікування транзакції цього з'єднання, перш ніж воно буде
повернено до пулу постійних з'єднань. Інакше очікують
з'єднання будуть відкочуватися лише тоді, коли з'єднання буде
повторно використано або коли його фактично закрито.

Користувачі не можуть встановлювати `MYSQL_OPT_READ_TIMEOUT` за допомогою
API-дзвінків або встановлення конфігураційних значень під час роботи
скрипт. Врахуйте, що якби це було можливо, то `libmysqlclient` і
потоки по-різному обробляли б значення MYSQL_OPT_READ_TIMEOUT.
