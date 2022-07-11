- [« Установка](seaslog.installation.md)
- [Типи ресурсів»] (seaslog.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](seaslog.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- |----------------------------------|-------------- ---|---------------------|
| [seaslog.appender](seaslog.configuration.md#ini.seaslog.appender) | 1 | PHP_INI_SYSTEM | |
| [seaslog.appender_retry](seaslog.configuration.md#ini.seaslog.appender-retry) | 0 | PHP_INI_ALL | |
| [seaslog.level](seaslog.configuration.md#ini.seaslog.level) | 8 | PHP_INI_ALL | |
| [seaslog.remote_host](seaslog.configuration.md#ini.seaslog.remote-host) | 127.0.0.1 | PHP_INI_ALL | |
| [seaslog.remote_port](seaslog.configuration.md#ini.seaslog.remote-port) | 514 | PHP_INI_ALL | |
| [seaslog.remote_timeout](seaslog.configuration.md#ini.seaslog.remote-timeout) | 1 | PHP_INI_SYSTEM | |
| [seaslog.default_basepath](seaslog.configuration.md#ini.seaslog.default-basepath) | /var/log/www | PHP_INI_SYSTEM | |
| [seaslog.default_logger](seaslog.configuration.md#ini.seaslog.default-logger) | default | PHP_INI_SYSTEM | |
| [seaslog.default_template](seaslog.configuration.md#ini.seaslog.default-template) | %T \| %L \| %P \| %Q \| %t \| %M | PHP_INI_SYSTEM | |
| [seaslog.default_datetime_format](seaslog.configuration.md#ini.seaslog.default-datetime-format) | Y-m-d H: i: s | PHP_INI_SYSTEM | |
| [seaslog.trace_error](seaslog.configuration.md#ini.seaslog.trace-error) | 1 | PHP_INI_ALL | |
| [seaslog.trace_exception](seaslog.configuration.md#ini.seaslog.trace-exception) | 0 | PHP_INI_SYSTEM | |
| [seaslog.trace_notice](seaslog.configuration.md#ini.seaslog.trace-notice) | 0 | PHP_INI_ALL | |
| [seaslog.trace_warning](seaslog.configuration.md#ini.seaslog.trace-warning) | 0 | PHP_INI_ALL | |
| [seaslog.use_buffer](seaslog.configuration.md#ini.seaslog.use-buffer) | 0 | PHP_INI_SYSTEM | |
| [seaslog.buffer_size](seaslog.configuration.md#ini.seaslog.buffer-size) | 0 | PHP_INI_ALL | |
| [seaslog.buffer_disabled_in_cli](seaslog.configuration.md#ini.seaslog.buffer-disabled-in-cli) | 0 | PHP_INI_SYSTEM | |
| [seaslog.disting_type](seaslog.configuration.md#ini.seaslog.disting-type) | 0 | PHP_INI_SYSTEM | |
| [seaslog.disting_folder](seaslog.configuration.md#ini.seaslog.disting-folder) | 1 | PHP_INI_SYSTEM | |
| [seaslog.disting_by_hour](seaslog.configuration.md#ini.seaslog.disting-by-hour) | 0 | PHP_INI_SYSTEM | |
| [seaslog.recall_depth](seaslog.configuration.md#ini.seaslog.recall-depth) | 0 | PHP_INI_ALL | |
| [seaslog.trim_wrap](seaslog.configuration.md#ini.seaslog.trim-wrap) | 0 | PHP_INI_ALL | |
| [seaslog.ignore_warning](seaslog.configuration.md#ini.seaslog.ignore-warning) | 1 | PHP_INI_ALL | |
| [seaslog.throw_exception](seaslog.configuration.md#ini.seaslog.throw-exception) | 1 | PHP_INI_ALL | |

**Опції налаштування Seaslog**

Коротке пояснення конфігураційних директив.

`seaslog.appender` int
Перемикає сховище журналу записів. 1 – Файл, 2 – TCP, 3 – UDP
(за замовчуванням 1)

SeasLog надішле журнал на сервер tcp://remote_host:remote_port або
udp://remote_host:remote_port, якщо *seaslog.appender* налаштований на
`2 (TCP)` або `3 (UDP)`.

Коли *SeasLog* надсилає журнал TCP/UDP, стиль відповідає
RFC5424. `{logInfo}`, на який впливає *seaslog.default_template*.

Стиль журналу відформатовано так:
<15>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | DEBUG | 21423 | 599157af4e937 | 1466787583.322 | this is a neeke debug
<14>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | INFO | 21423 | 599157af4e937 | 1466787583.323 | this is a info log
<13>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | NOTICE | 21423 | 599157af4e937 | 1466787583.324 | this is a notice log

`seaslog.appender_retry` int
Записує кількість повторних спроб журналу. За замовчуванням 0 (не
записує)

`seaslog.buffer_disabled_in_cli` int
Відключає буфер у CLI. 1 - Так, 0 - Ні (за замовчуванням)

Увімкніть опцію buffer_disabled_in_cli. buffer_disabled_in_cli вимкнено
за замовчуванням. Якщо увімкнути buffer_disabled_in_cli і запустити його в
CLI, параметр seaslog.use_buffer буде скинутий, Seaslog НЕГАЙНО
зробить запис у сховищі даних.

`seaslog.buffer_size` int
Задайте для параметра buffer_size значення 100.
0, це означає, що буфер не використовується. Якщо buffer_size
\> 0, SeasLog перезапише дані у сховищі, якщо розмір попередньо
записаного в пам'ять журналу \>u003d buffer_size, а потім оновіть опитування
пам'яті.

`seaslog.default_basepath` string
Базовий шлях журналу за промовчанням. За промовчанням "/var/log/www".

`seaslog.default_datetime_format` string
Стиль DateTime. За промовчанням "Y-m-d H: i: s".

`seaslog.default_logger` string
Шлях до реєстратора за замовчуванням. За промовчанням "default".

`seaslog.disting_by_hour` int
Перемикає режим реєстратора щогодини. 1 - Так, 0 - Ні (за замовчуванням)

> **Примітка**:
>
> *seaslog.disting_by_hour u003d 1* перемикає режим використання Logger
> DisTing щогодини. Це означає, що SeasLog буде створювати файл
> кожну годину.

`seaslog.disting_folder` int
Перемикає режим використання реєстратора за папками. 1 - Так (за
замовчуванням), 0 - Ні.

> **Примітка**:
>
> *seaslog.disting_folder u003d 1* перемикає режим використання Logger
> DisTing за папками, це означає, що SeasLog буде створювати файли в
> папки та при цьому налаштування закриття SeasLog створить файл з
> підкресленням, використовуючи тип реєстратора та час, наприклад,
> default_20180211.log.

`seaslog.disting_type` int
Перемикає режим використання реєстратора типу. 1 - Так, 0 - Ні
(за замовчуванням)

> **Примітка**:
>
> *seaslog.disting_type u003d 1* перемикає режим використання Logger
> DisTing за типом, це означає, що SeasLog створить файл
> info\warn rror або іншого типу.

`seaslog.ignore_warning` int
Перемикає режим ігнорування попереджень SeasLog. 1 - Так (за
замовчуванням), 0 - Ні.

> **Примітка**:
>
> *seaslog.ignore_warning u003d 1* Відкриває попередження про ігнорування
> самого SeasLog. Коли права доступу до каталогу або порти сервера
> прийому заблоковано, вони ігноруються; при закритті видається
> попередження.

`seaslog.level` int
Рівень запису реєстратора. Типово 8 (все). 0 - EMERGENCY, 1 -
ALERT, 2 - CRITICAL, 3 - ERROR, 4 - WARNING, 5 - NOTICE, 6 - INFO, 7 -
DEBUG, 8-ALL

> **Примітка**:
>
> Примітка: елемент конфігурації було змінено, починаючи з версії 1.7.0.
> До версії 1.7.0, що менше значення, то більше записів ведеться в
> відповідно до рівня: 0 - все, 1 - debug, 2 - info, 3-notice,
> 4-warning, 5-error, 6-critical, 7-alert, 8-emergency. До версії 1.7.0
> значення за промовчанням - 0 (все).

`seaslog.recall_depth` int
Глибина виклику функцій журналу. Буде порушена змінна `LineNo` в
`%F`. Типово 0

`seaslog.remote_host` string
Якщо ви використовуєте запис TCP або UDP, настройте віддалений IP. за
замовчуванням "127.0.0.1".

`seaslog.remote_port` int
Якщо ви використовуєте запис TCP або UDP, настройте віддалений порт. за
замовчуванням 514.

`seaslog.remote_timeout` int
Якщо ви використовуєте запис TCP або UDP, настройте віддалений час
очікування. За замовчуванням 1 секунда

`seaslog.throw_exception` int
Перемикає режим викиду виключення SeasLog. 1 - Так (за
замовчуванням), 0 - Ні.

> **Примітка**:
>
> *seaslog.throw_exception u003d 1* Відкриває виняток, який
> викидає сам SeasLog. Якщо адміністрація каталогу або порт
> приймаючого сервера заблоковані, викидається виняток; не
> викидається виняток під час закриття.

`seaslog.trace_error` int
Автоматичний запис "error" за замовчуванням реєстратором. 1 - Так (за
замовчуванням), 0 - Ні.

`seaslog.trace_exception` int
Автоматичний запис "exception" за замовчуванням реєстратором. 1 - Так,
0 - Ні (за замовчуванням).

`seaslog.trace_notice` int
Автоматичний запис "notice" за замовчуванням реєстратором. 1 - Так, 0 -
Ні (за замовчуванням).

`seaslog.trace_warning` int
Автоматичний запис "warning" за замовчуванням реєстратором. 1 - Так, 0 -
Ні (за замовчуванням).

`seaslog.trim_wrap` int
Обрізає
 і у повідомленні журналу. 1 - Так, 0 - Ні (за замовчуванням)

`seaslog.use_buffer` int
Перемикає режим використання буфера журналу пам'яті. 1 - Так, 0 -
Ні (за замовчуванням)

> **Примітка**:
>
> *seaslog.use_buffer u003d 1* Увімкніть configure use_buffer. За замовчуванням
> use_buffer вимкнено. Якщо увімкнути use_buffer, SeasLog буде
> попередньо записувати журнал у пам'ять і він буде перезаписано в
> сховище даних шляхом завершення запиту або виходу з PHP
> (PHP RSHUTDOWN або PHP MSHUTDOWN).

`seaslog.default_template` string
Стандартний шаблон журналу. За замовчуванням "%T\|%L\|%P\|%Q\|%t\|
%M".

> **Примітка**:
>
> Надаються наступні змінні за замовчуванням, які можна
> використовувати безпосередньо у шаблоні журналу та замінювати
> відповідним значенням під час створення журналу.
>
> Шаблон журналу за промовчанням:
> `seaslog.default_template u003d "%T | %L | %P | %Q | %t | %M"`, це
> означає, що стиль журналу за замовчуванням:
> `{dateTime} | {Level} | {pid} | {uniqid} | {timeStamp} | {logInfo}`
>
> Якщо ви використовуєте власний шаблон журналу, наприклад:
> `seaslog.default_template u003d "[%T]:%L %P %Q %t %M"`, це буде
> означати, що стиль журналу був налаштований як:
> `[{dateTime}]:{level} {pid} {uniqid} {timeStamp} {logInfo}`
>
> | Variable Name | Опис |
> |---------------|-------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------|
> | %L | Рівень. |
> | %M | Повідомлення. |
> | % T | DateTime. Таке як `2017-08-16 19:15:02`, порушене `seaslog.default_datetime_format`. |
> | %t | Timestamp. Таке як `1502882102.862`, з точністю до мілісекунд. |
> | % Q | RequestId. Щоб розрізняти один запит, наприклад, не викликати функцію SeasLog::setRequestId($string), при ініціалізації запиту використовується унікальне значення, згенероване вбудованою функцією static char *get_uniqid(). |
> | %H | HostName. |
> | %P | ProcessId. |
> | %D | Domain:Port. Таке як `www.cloudwise.com:80`; Якщо CLI, то `cli`. |
> | %R | URI запиту. Такий як `/app/user/signin`; Якщо CLI, то, наприклад, `CliIndex.php`. |
> | %m | Спосіб запиту. Такий як `Get`; Якщо CLI, то використовується команда, наприклад, `/bin/bash`. |
> | % I | IP-адреса клієнта; Якщо CLI, то `local`. Пріоритет значень: HTTP_X\_REAL_IP \> HTTP_X\_FORWARDED_FOR \> REMOTE_ADDR |
> | %F | FileName:LineNo. Таке як `UserService.php:118`. |
> | %U | Memoryusage в байтах. Виклик `zend_memory_usage`. |
> | %u | Перехіднапам'ятівикористання в байтах. Виклик `zend_memory_peak_usage`. |
> | %C | `TODO` Class::Action. Таке як `UserService::getUserInfo` |
>
> **Таблиця змінних за замовчуванням Seaslog**
