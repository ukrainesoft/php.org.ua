- [« Установка](pgsql.installation.md)
- [Типи ресурсів»] (pgsql.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](pgsql.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ----------------------------------------|--------- -----|-----------------|------------------|
| [pgsql.allow_persistent](pgsql.configuration.md#ini.pgsql.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [pgsql.max_persistent](pgsql.configuration.md#ini.pgsql.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [pgsql.max_links](pgsql.configuration.md#ini.pgsql.max-links) | "-1" | PHP_INI_SYSTEM | |
| [pgsql.auto_reset_persistent](pgsql.configuration.md#ini.pgsql.auto-reset-persistent) | "0" | PHP_INI_SYSTEM | |
| [pgsql.ignore_notice](pgsql.configuration.md#ini.pgsql.ignore-notice) | "0" | PHP_INI_ALL | |
| [pgsql.log_notice](pgsql.configuration.md#ini.pgsql.log-notice) | "0" | PHP_INI_ALL | |

**Параметри конфігурації PostgreSQL**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`pgsql.allow_persistent` bool
Чи потрібно дозволити постійне з'єднання з Postgres.

`pgsql.max_persistent` int
Максимальна кількість постійних з'єднань на один процес.

`pgsql.max_links` int
Максимальна кількість з'єднань Postgres на один процес, включаючи
постійні з'єднання.

`pgsql.auto_reset_persistent` int
Визначати розірвані постійні посилання з
[pg_pconnect()](function.pg-pconnect.md). Потрібні невеликі
Додаткові ресурси.

`pgsql.ignore_notice` int
Ігнорувати чи ні повідомлення від PostgreSQL.

`pgsql.log_notice` int
Чи записувати в лог повідомлення від PostgreSQL. Для запису в лог
повідомлень також необхідно відключити PHP-директиву
[pgsql.ignore_notice](pgsql.configuration.md#ini.pgsql.ignore-notice).
