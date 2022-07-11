- [« Установка](mysql.installation.md)
- [Типи ресурсів»] (mysql.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mysql.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ----------------------------------|--------------| -----------------|------------------|
| [mysql.allow_local_infile](mysql.configuration.md#ini.mysql.allow-local-infile) | "1" | PHP_INI_SYSTEM | |
| [mysql.allow_persistent](mysql.configuration.md#ini.mysql.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [mysql.max_persistent](mysql.configuration.md#ini.mysql.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [mysql.max_links](mysql.configuration.md#ini.mysql.max-links) | "-1" | PHP_INI_SYSTEM | |
| [mysql.trace_mode](mysql.configuration.md#ini.mysql.trace-mode) | "0" | PHP_INI_ALL | |
| [mysql.default_port](mysql.configuration.md#ini.mysql.default-port) | NULL | PHP_INI_ALL | |
| [mysql.default_socket](mysql.configuration.md#ini.mysql.default-socket) | NULL | PHP_INI_ALL | |
| [mysql.default_host](mysql.configuration.md#ini.mysql.default-host) | NULL | PHP_INI_ALL | |
| [mysql.default_user](mysql.configuration.md#ini.mysql.default-user) | NULL | PHP_INI_ALL | |
| [mysql.default_password](mysql.configuration.md#ini.mysql.default-password) | NULL | PHP_INI_ALL | |
| [mysql.connect_timeout](mysql.configuration.md#ini.mysql.connect-timeout) | "60" | PHP_INI_ALL | |

**Директиви конфігурації MySQL**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`mysql.allow_local_infile` int
Дозволяє доступ до локальних файлів, з точки зору PHP, за допомогою
інструкцій LOAD DATA

`mysql.allow_persistent` bool
Чи дозволяти [постійні
з'єднання](features.persistent-connections.md) з MySQL.

`mysql.max_persistent` int
Максимальна кількість постійних з'єднань з MySQL однією процес.

`mysql.max_links` int
Максимальна кількість з'єднань з MySQL на один процес, включаючи
постійні з'єднання.

`mysql.trace_mode` bool
Режим трасування. Якщо увімкнено опцію `mysql.trace_mode`, будуть
відображатиметься попередження при скануванні таблиць/індексів, непустих
результуючих наборів (result sets), і навіть помилки SQL. (Додано в
версії PHP 4.3.0)

`mysql.default_port` string
TCP-порт, який використовується для з'єднання з базою даних за замовчуванням (якщо
не було зазначено інший). Якщо ця директива опущена, порт буде взято з
змінного середовища `MYSQL_TCP_PORT`, значення `mysql-tcp` у файлі
`/etc/services` або константи **`MYSQL_PORT`**, вказаної при
компіляції, у вказаному порядку. Win32 використовує лише константу
**`MYSQL_PORT`**.

`mysql.default_socket` string
Назва стандартного сокету, що використовується для з'єднання з локальною базою
даних, якщо не було вказано інший.

`mysql.default_host` string
Адреса сервера за замовчуванням, що використовується для підключення до сервера бази
даних, якщо не вказано інший. Не працює в [SQL safe
mode](ini.core.md#ini.sql.safe-mode).

`mysql.default_user` string
Стандартне ім'я користувача, яке використовується для підключення до сервера
бази даних, якщо не зазначено інше. Не працює в [SQL safe
mode](ini.core.md#ini.sql.safe-mode).

`mysql.default_password` string
Стандартний пароль, який використовується для підключення до сервера бази даних,
якщо не вказано інший. Не працює в [SQL safe
mode](ini.core.md#ini.sql.safe-mode).

`mysql.connect_timeout` int
Час очікування на відповідь до розриву з'єднання в секундах. Linux також
використовує це значення, очікуючи першої відповіді від сервера.
