- [« Установка](mysql-xdevapi.installation.md)
- [Складання / Компіляція з вихідного коду »](mysql-xdevapi.build.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mysql-xdevapi.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- ------------|--------------|-----------------|---- --------------|
| [xmysqlnd.collect_memory_statistics](mysql-xdevapi.configuration.md#ini.xmysqlnd.collect-memory-statistics) | 0 | PHP_INI_SYSTEM | |
| [xmysqlnd.collect_statistics](mysql-xdevapi.configuration.md#ini.xmysqlnd.collect-statistics) | 1 | PHP_INI_ALL | |
| [xmysqlnd.debug](mysql-xdevapi.configuration.md#ini.xmysqlnd.debug) | | PHP_INI_SYSTEM | |
| [xmysqlnd.mempool_default_size](mysql-xdevapi.configuration.md#ini.xmysqlnd.mempool-default-size) | 16000 | PHP_INI_ALL | |
| [xmysqlnd.net_read_timeout](mysql-xdevapi.configuration.md#ini.xmysqlnd.net-read-timeout) | 31536000 | PHP_INI_SYSTEM | |
| [xmysqlnd.trace_alloc](mysql-xdevapi.configuration.md#ini.xmysqlnd.trace-alloc) | | PHP_INI_SYSTEM | |

**Опції налаштування Mysql_xdevapi**

Коротке пояснення конфігураційних директив.

`xmysqlnd.collect_memory_statistics` int

`xmysqlnd.collect_statistics` int

`xmysqlnd.debug` string

`xmysqlnd.mempool_default_size` int

`xmysqlnd.net_read_timeout` int

`xmysqlnd.trace_alloc` string
