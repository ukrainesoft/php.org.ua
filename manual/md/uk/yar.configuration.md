- [« Установка](yar.installation.md)
- [Типи ресурсів»] (yar.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](yar.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ----------------------|--------------|------------ -----|------------------|
| [yar.packager](yar.configuration.md#ini.yar.packager) | php | PHP_INI_SYSTEM | |
| [yar.debug](yar.configuration.md#ini.yar.debug) | Off | PHP_INI_ALL | |
| [yar.connect_timeout](yar.configuration.md#ini.yar.connect-timeout) | 1000 | PHP_INI_ALL | |
| [yar.timeout](yar.configuration.md#ini.yar.timeout) | 5000 | PHP_INI_ALL | |
| [yar.expose_info](yar.configuration.md#ini.yar.expose-info) | On | PHP_INI_SYSTEM | |

**Yar Опції налаштування**

Коротке пояснення конфігураційних директив.

`yar.packager` string
може бути php, json та msgpack (потрібна вбудована підтримка msgpack)

`yar.debug` string

`yar.connect_timeout` int
Час очікування з'єднання у мілісекундах.

`yar.timeout` int
Час очікування у мілісекундах.

`yar.expose_info` bool
розкривати дані сервера (при доступі за допомогою GET)
