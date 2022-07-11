- [« Установка](filesystem.installation.md)
- [Типи ресурсів»] (filesystem.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](filesystem.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------------------------|---------- ----|-----------------|--------------------------- ---------------|
| [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | "1" | PHP_INI_SYSTEM | |
| [allow_url_include](filesystem.configuration.md#ini.allow-url-include) | "0" | PHP_INI_SYSTEM | Оголошена застаріла з версії PHP 7.4.0. |
| [user_agent](filesystem.configuration.md#ini.user-agent) | NULL | PHP_INI_ALL | |
| [default_socket_timeout](filesystem.configuration.md#ini.default-socket-timeout) | "60" | PHP_INI_ALL | |
| [from](filesystem.configuration.md#ini.from) | "" | PHP_INI_ALL | |
| [auto_detect_line_endings](filesystem.configuration.md#ini.auto-detect-line-endings) | "0" | PHP_INI_ALL | Оголошена застаріла з версії PHP 8.1.0. |
| [sys_temp_dir](filesystem.configuration.md#ini.sys-temp-dir) | "" | PHP_INI_SYSTEM | |

**Директиви конфігурації файлової системи та потоків**

Коротке пояснення конфігураційних директив.

`allow_url_fopen` bool
Ця директива включає підтримку обгорток URL (URL wrappers), які
дозволяють працювати з об'єктами URL як із звичайними файлами. Обгортки,
доступні за замовчуванням, служать для роботи з [віддаленими
файлами](features.remote-files.md) з використанням ftp або http
протоколу. Деякі модулі, наприклад [zlib](ref.zlib.md), можуть
реєструвати власні обгортки.

`allow_url_include` bool
Ця опція дозволяє використовувати обгортки fopen, які підтримують
роботу з URL, у функціях [include](function.include.md),
[include_once](function.include-once.md),
[require](function.require.md),
[require_once](function.require-once.md).

> **Примітка**:
>
> Ця опція вимагає увімкнення опції allow_url_fopen.

`user_agent` string
Встановлює рядок, що відсилається PHP, "User-Agent".

`default_socket_timeout` int
Значення часу очікування за промовчанням (у секундах) для потоків,
що використовують сокети. Негативне значення означає нескінченний час
очікування.

`from` string
Адреса електронної пошти, яка використовується у з'єднаннях FTP без авторизації, а також у
як значення заголовка From у HTTP з'єднаннях при використанні
ftp і http обгорток, відповідно.

`auto_detect_line_endings` bool
Коли ця директива включена, PHP перевіряє дані, які отримують
функціями [fgets()](function.fgets.md) та [file()](function.file.md)
для того, щоб визначити спосіб завершення рядків (Unix, MS-Dos або
Macintosh).

Ця директива дозволяє PHP взаємодіяти з системами Macintosh,
однак, за умовчанням ця директива вимкнена, оскільки за її
використання виникає (несуттєва) потреба у додаткових
ресурси для визначення символу закінчення першого рядка, а також
тому, що програмісти, що використовують у системах Unix символи повернення
каретки як роздільники, зіткнуться зі зворотно-несумісним
поведінкою PHP.

`sys_temp_dir` string
