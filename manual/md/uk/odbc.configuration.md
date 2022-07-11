- [« Встановлення](odbc.installation.md)
- [Типи ресурсів »](uodbc.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](uodbc.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------|--------------|--- --------------|------------------|
| [odbc.default_db](odbc.configuration.md#ini.uodbc.default-db) \* | NULL | PHP_INI_ALL | |
| [odbc.default_user](odbc.configuration.md#ini.uodbc.default-user) \* | NULL | PHP_INI_ALL | |
| [odbc.default_pw](odbc.configuration.md#ini.uodbc.default-pw) \* | NULL | PHP_INI_ALL | |
| [odbc.allow_persistent](odbc.configuration.md#ini.uodbc.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [odbc.check_persistent](odbc.configuration.md#ini.uodbc.check-persistent) | "1" | PHP_INI_SYSTEM | |
| [odbc.max_persistent](odbc.configuration.md#ini.uodbc.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [odbc.max_links](odbc.configuration.md#ini.uodbc.max-links) | "-1" | PHP_INI_SYSTEM | |
| [odbc.defaultlrl](odbc.configuration.md#ini.uodbc.defaultlrl) | "4096" | PHP_INI_ALL | |
| [odbc.defaultbinmode](odbc.configuration.md#ini.uodbc.defaultbinmode) | "1" | PHP_INI_ALL | |
| [odbc.default_cursortype](odbc.configuration.md#ini.uodbc.defaultcursortype) | "3" | PHP_INI_ALL | |

**Параметри конфігурації Unified ODBC**

> **Примітка**: Записи, помічені \*, ще не реалізовані.

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`odbc.default_db` string
Джерело даних ODBC для використання, якщо жоден не вказано
[odbc_connect()](function.odbc-connect.md) або
[odbc_pconnect()](function.odbc-pconnect.md).

`odbc.default_user` string
Ім'я користувача для використання, якщо жоден не вказано
[odbc_connect()](function.odbc-connect.md) або
[odbc_pconnect()](function.odbc-pconnect.md).

`odbc.default_pw` string
Пароль для використання, якщо жоден не вказано
[odbc_connect()](function.odbc-connect.md) або
[odbc_pconnect()](function.odbc-pconnect.md).

`odbc.allow_persistent` bool
Чи дозволяти постійні з'єднання ODBC.

`odbc.check_persistent` bool
Перед повторним використанням переконайтеся, що з'єднання все ще
доступний.

`odbc.max_persistent` int
Максимальна кількість постійних з'єднань ODBC на процес.

`odbc.max_links` int
Максимальна кількість з'єднань ODBC на процес, включаючи постійні
з'єднання.

`odbc.defaultlrl` int
Обробка довгих (LONG) полів. Визначає кількість байтів,
повертаються змінним. Дивіться
[odbc_longreadlen()](function.odbc-longreadlen.md) для подробиць.

Якщо використовується int значення вимірюється байтами. ви також можете
використовувати скорочений запис, який описано в [цьому розділі
FAQ](faq.using.md#faq.using.shorthandbytes).

`odbc.defaultbinmode` int
Обробка бінарних даних. Дивіться
[odbc_binmode()](function.odbc-binmode.md) для подробиць.

`odbc.default_cursortype` int
Керує моделлю курсору ODBC. Можливі значення
**`SQL_CURSOR_FORWARD_ONLY`**, **`SQL_CURSOR_KEYSET_DRIVEN`**,
**`SQL_CURSOR_DYNAMIC`** та **`SQL_CURSOR_STATIC`** (за замовчуванням).
