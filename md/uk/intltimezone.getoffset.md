- [«
IntlTimeZone::getIDForWindowsID](intltimezone.getidforwindowsid.md)
- [IntlTimeZone::getRawOffset »](intltimezone.getrawoffset.md)

- [PHP Manual](index.md)
- [IntlTimeZone](class.intltimezone.md)
- Отримати необроблене значення часового поясу та зміщення за
Грінвічу (GMT) за заданим моментом часу

# IntlTimeZone::getOffset

# intltz_get_offset

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlTimeZone::getOffset -- intltz_get_offset — Отримати необроблене
значення часового поясу та усунення за Грінвічем (GMT) за заданим
моменту часу

### Опис

Об'єктно-орієнтований стиль (метод):

public **IntlTimeZone::getOffset**(
float `$timestamp`,
bool `$local`,
int `&$rawOffset`,
int `&$dstOffset`
): bool

Процедурний стиль:

**intltz_get_offset**(
[IntlTimeZone](class.intltimezone.md) `$timezone`,
float `$timestamp`,
bool `$local`,
int `&$rawOffset`,
int `&$dstOffset`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`timestamp`

`local`

`rawOffset`

`dstOffset`

### Значення, що повертаються
