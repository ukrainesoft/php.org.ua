- [« Установка](ibase.installation.md)
- [Типи ресурсів»] (ibase.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](ibase.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ------------------------------|------------------- --|-----------------|------------------|
| [ibase.allow_persistent](ibase.configuration.md#ini.ibase.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [ibase.max_persistent](ibase.configuration.md#ini.ibase.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [ibase.max_links](ibase.configuration.md#ini.ibase.max-links) | "-1" | PHP_INI_SYSTEM | |
| [ibase.default_db](ibase.configuration.md#ini.ibase.default-db) | NULL | PHP_INI_SYSTEM | |
| [ibase.default_user](ibase.configuration.md#ini.ibase.default-user) | NULL | PHP_INI_ALL | |
| [ibase.default_password](ibase.configuration.md#ini.ibase.default-password) | NULL | PHP_INI_ALL | |
| [ibase.default_charset](ibase.configuration.md#ini.ibase.default-charset) | NULL | PHP_INI_ALL | |
| [ibase.timestampformat](ibase.configuration.md#ini.ibase.timestampformat) | "%Y-%m-%d %H:%M:%S" | PHP_INI_ALL | |
| [ibase.dateformat](ibase.configuration.md#ini.ibase.dateformat) | "%Y-%m-%d" | PHP_INI_ALL | |
| [ibase.timeformat](ibase.configuration.md#ini.ibase.timeformat) | "%H:%M:%S" | PHP_INI_ALL | |

**Конфігураційні опції InterBase**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`ibase.allow_persistent` bool
Чи дозволено використовувати [постійні
з'єднання](features.persistent-connections.md) до Firebird/InterBase.

`ibase.max_persistent` int
Максимальна кількість постійних з'єднань для процесу. Якщо це
обмеження буде перевищено, то функція ibase_pconnect() буде
повертати непостійні з'єднання.

`ibase.max_links` int
Максимальна кількість з'єднань із Firebird/InterBase на процес,
включаючи постійні.

`ibase.default_db` string
База даних за промовчанням. Якщо викликати ibase\_\[p\]connect() без
вказівки імені бази даних, то буде використано це значення. Якщо
цей параметр встановлений і включений безпечний режим SQL, то будуть
дозволені з'єднання лише з цією базою.

`ibase.default_user` string
Ім'я користувача за промовчанням.

`ibase.default_password` string
Пароль за замовчуванням.

`ibase.default_charset` string
Кодування за замовчуванням.

`ibase.timestampformat` string

`ibase.dateformat` string

`ibase.timeformat` string
Ці директиви використовуються для встановлення формату дати та часу. Дані
формати будуть використовуватися як при отриманні результуючого набору,
містить поля відповідних типів, так і при зв'язуванні значень з
параметрами запиту.
