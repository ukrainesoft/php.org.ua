- [« IntlTimeZone::getUnknown](intltimezone.getunknown.md)
- [IntlTimeZone::hasSameRules »](intltimezone.hassamerules.md)

- [PHP Manual](index.md)
- [IntlTimeZone](class.intltimezone.md)
- Перетворити системний часовий пояс на часовий пояс для Windows

# IntlTimeZone::getWindowsID

# intltz_get_windows_id

(PHP 7 \>u003d 7.1.0, PHP 8)

IntlTimeZone::getWindowsID -- intltz_get_windows_id — Перетворити
системний часовий пояс у часовий пояс для Windows

### Опис

Об'єктно-орієнтований стиль (метод):

public static **IntlTimeZone::getWindowsID**(string `$timezoneId`):
string\|false

Процедурний стиль:

**intltz_get_windows_id**(string `$timezoneId`): string\|false

Переводить системний часовий пояс (наприклад, «America/Los_Angeles») в
часовий пояс для Windows (наприклад, Pacific Standard Time).

> **Примітка**: Ця функція потребує ICU версії ≥ 52.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`timezoneId`

### Значення, що повертаються

Повертає часовий пояс для Windows або **`false`** у випадку
виникнення помилки.

### Дивіться також

- [IntlTimeZone::getIDForWindowsID()](intltimezone.getidforwindowsid.md) -
Перетворити часовий пояс для Windows на системний часовий пояс
