- [«
date_default_timezone_get](function.date-default-timezone-get.md)
- [date_diff »](function.date-diff.md)

- [PHP Manual](index.md)
- [Функції дати та часу](ref.datetime.md)
- Встановлює часовий пояс за промовчанням для всіх функцій
дати/часу у скрипті

# date_default_timezone_set

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

date_default_timezone_set — Встановлює часовий пояс за замовчуванням для
всіх функцій дати/часу у скрипті

### Опис

**date_default_timezone_set**(string `$timezoneId`): bool

**date_default_timezone_set()** встановлює часовий пояс за промовчанням
для всіх функцій дати/часу у скрипті.

Замість використання цієї функції, ви можете скористатися
INI-настроюванням
[date.timezone](datetime.configuration.md#ini.date.timezone) для
установки часового поясу за промовчанням.

### Список параметрів

`timezoneId`
Ідентифікатор часового поясу, наприклад, `UTC`, `Africa/Lagos`,
'Asia/Hong_Kong' або 'Europe/Lisbon'. Список допустимих ідентифікаторів
часових поясів можна знайти в розділі [Список підтримуваних часових поясів
поясів](timezones.md).

### Значення, що повертаються

Функція повертає **`false`**, якщо `timezoneId` має невірне
значення, в інших випадках **`true`**.

### Приклади

**Приклад #1 Отримання часового поясу за замовчуванням**

`<?phpdate_default_timezone_set('America/Los_Angeles');$script_tz u003d date_default_timezone_get();if (strcmp($script_tz, ini_get('date.timezone')))Додатковий| ';} else {    echo 'Годинний пояс скрипта і настройки INI-файла збігаються.';}?> `

### Дивіться також

- [date_default_timezone_get()](function.date-default-timezone-get.md) -
Повертає часовий пояс, який використовується за замовчуванням усіма функціями
дати/часу у скрипті
- [Список підтримуваних часових поясів](timezones.md)
