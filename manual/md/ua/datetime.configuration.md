- [« Встановлення](datetime.installation.md)
- [Типи ресурсів»] (datetime.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](datetime.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------------------|--------------|- ----------------|------------------|
| [date.default_latitude](datetime.configuration.md#ini.date.default-latitude) | "31.7667" | PHP_INI_ALL | |
| [date.default_longitude](datetime.configuration.md#ini.date.default-longitude) | "35.2333" | PHP_INI_ALL | |
| [date.sunrise_zenith](datetime.configuration.md#ini.date.sunrise-zenith) | "90.583333" | PHP_INI_ALL | |
| [date.sunset_zenith](datetime.configuration.md#ini.date.sunset-zenith) | "90.583333" | PHP_INI_ALL | |
| [date.timezone](datetime.configuration.md#ini.date.timezone) | "UTC" | PHP_INI_ALL | |

**Налаштування конфігурації дати/часу**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`date.default_latitude` float
За замовчуванням ширина. в діапазоні від `0` на екваторі до `+90` на північ і
`-90` на південь.

`date.default_longitude` float
За замовчуванням. в діапазоні від `0` на нульовому меридіані до `+180`
на схід та `-180` на захід.

`date.sunrise_zenith` float
Кут, під яким сонце світить під час сходу.

`date.sunset_zenith` float
Кут, під яким сонце світить під час заходу сонця.

`date.timezone` string
Часовий пояс, який використовується за замовчуванням усіма функціями дати/часу.
Порядок пріоритету часових поясів описаний на сторінці
[date_default_timezone_get()](function.date-default-timezone-get.md).
Дивіться також [Список часових поясів, що підтримуються](timezones.md).

> **Примітка**: Перші чотири опції налаштування в даний час
> використовуються лише у функціях
> [date_sunrise()](function.date-sunrise.md) та
> [date_sunset()](function.date-sunset.md).
