- [« Установка](yac.installation.md)
- [Типи ресурсів»] (yac.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](yac.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ----------------------------|--------------|------ -----------|------------------|
| [yac.compress_threshold](yac.configuration.md#ini.yac.compress-threshold) | -1 | PHP_INI_SYSTEM | |
| [yac.debug](yac.configuration.md#ini.yac.debug) | 0 | PHP_INI_ALL | |
| [yac.enable](yac.configuration.md#ini.yac.enable) | 1 | PHP_INI_SYSTEM | |
| [yac.enable_cli](yac.configuration.md#ini.yac.enable-cli) | 0 | PHP_INI_SYSTEM | |
| [yac.keys_memory_size](yac.configuration.md#ini.yac.keys-memory-size) | 4M | PHP_INI_SYSTEM | |
| [yac.serializer](yac.configuration.md#ini.yac.serializer) | php | PHP_INI_SYSTEM | |
| [yac.values_memory_size](yac.configuration.md#ini.yac.values-memory-size) | 64M | PHP_INI_SYSTEM | |

**Опції налаштування Yac**

Коротке пояснення конфігураційних директив.

`yac.compress_threshold` int

`yac.debug` int

`yac.enable` int

`yac.enable_cli` int

`yac.keys_memory_size` string

`yac.serializer` string

`yac.values_memory_size` string
