- [« IntlTimeZone::getID](intltimezone.getid.md)
- [IntlTimeZone::getOffset »](intltimezone.getoffset.md)

- [PHP Manual](index.md)
- [IntlTimeZone](class.intltimezone.md)
- Перетворити часовий пояс для Windows на системний часовий пояс

# IntlTimeZone::getIDForWindowsID

# intltz_get_id_for_windows_id

(PHP 7 \>u003d 7.1.0, PHP 8)

IntlTimeZone::getIDForWindowsID -- intltz_get_id_for_windows_id
Перетворити часовий пояс для Windows на системний часовий пояс

### Опис

Об'єктно-орієнтований стиль (метод):

public static **IntlTimeZone::getIDForWindowsID**(string `$timezoneId`,
?string `$region` u003d **`null`**): string\|false

Процедурний стиль:

**intltz_get_id_for_windows_id**(string `$timezoneId`, ?string `$region`
u003d **`null`**): string\|false

Перекладає часовий пояс для Windows (наприклад, "Pacific Standard Time")
системний часовий пояс (наприклад, "America/Los_Angeles").

> **Примітка**: Ця функція потребує ICU версії ≥ 52.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`timezoneId`

`region`

### Значення, що повертаються

Повертає системний часовий пояс або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------|
| 8.0.0 | Параметр `region` тепер допускає значення **`null`**. |

### Дивіться також

- [IntlTimeZone::getWindowsID()](intltimezone.getwindowsid.md) -
Перетворити часовий пояс на часовий пояс для Windows
