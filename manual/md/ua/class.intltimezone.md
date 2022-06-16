- [«
IntlGregorianCalendar::setGregorianChange](intlgregoriancalendar.setgregorianchange.md)
- [IntlTimeZone::\_\_construct »](intltimezone.construct.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас IntlTimeZone

# Клас IntlTimeZone

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

## Вступ

## Огляд класів

class **IntlTimeZone** {

/\* Constants \*/

const int `DISPLAY_SHORT` u003d 1;

const int `DISPLAY_LONG` u003d 2;

/\* Методи \*/

private [\_\_construct](intltimezone.construct.md)()

public static
[countEquivalentIDs](intltimezone.countequivalentids.md)(string
`$timezoneId`): int\|false

public static [createDefault](intltimezone.createdefault.md)():
[IntlTimeZone](class.intltimezone.md)

public static
[createEnumeration](intltimezone.createenumeration.md)([IntlTimeZone](class.intltimezone.md)\|string\|int\|float\|null
`$countryOrRawOffset` u003d **`null`**):
[IntlIterator](class.intliterator.md)\|false

public static [createTimeZone](intltimezone.createtimezone.md)(string
`$timezoneId`): ?[IntlTimeZone](class.intltimezone.md)

public static
[createTimeZoneIDEnumeration](intltimezone.createtimezoneidenumeration.md)(int
`$type`, ?string `$region` u003d **`null`**, ?int `$rawOffset` u003d
**`null`**): [IntlIterator](class.intliterator.md)\|false

public static
[fromDateTimeZone](intltimezone.fromdatetimezone.md)([DateTimeZone](class.datetimezone.md)
`$timezone`): ?[IntlTimeZone](class.intltimezone.md)

public static [getCanonicalID](intltimezone.getcanonicalid.md)(string
`$timezoneId`, bool `&$isSystemId` u003d **`null`**): string\|false

public [getDisplayName](intltimezone.getdisplayname.md)(bool `$dst` u003d
**`false`**, int `$style` u003d IntlTimeZone::DISPLAY_LONG, ?string
`$locale` u003d **`null`**): string\|false

public [getDSTSavings](intltimezone.getdstsavings.md)(): int

public static
[getEquivalentID](intltimezone.getequivalentid.md)(string
`$timezoneId`, int `$offset`): string\|false

public [getErrorCode](intltimezone.geterrorcode.md)(): int\|false

public [getErrorMessage](intltimezone.geterrormessage.md)():
string\|false

public static [getGMT](intltimezone.getgmt.md)():
[IntlTimeZone](class.intltimezone.md)

public [getID](intltimezone.getid.md)(): string\|false

public static
[getIDForWindowsID](intltimezone.getidforwindowsid.md)(string
`$timezoneId`, ?string `$region` u003d **`null`**): string\|false

public [getOffset](intltimezone.getoffset.md)(
float `$timestamp`,
bool `$local`,
int `&$rawOffset`,
int `&$dstOffset`
): bool

public [getRawOffset](intltimezone.getrawoffset.md)(): int

public static [getRegion](intltimezone.getregion.md)(string
`$timezoneId`): string\|false

public static [getTZDataVersion](intltimezone.gettzdataversion.md)():
string\|false

public static [getUnknown](intltimezone.getunknown.md)():
[IntlTimeZone](class.intltimezone.md)

public static [getWindowsID](intltimezone.getwindowsid.md)(string
`$timezoneId`): string\|false

public
[hasSameRules](intltimezone.hassamerules.md)([IntlTimeZone](class.intltimezone.md)
`$other`): bool

public [toDateTimeZone](intltimezone.todatetimezone.md)():
[DateTimeZone](class.datetimezone.md)\|false

public [useDaylightTime](intltimezone.usedaylighttime.md)(): bool

}

## Зумовлені константи

**`IntlTimeZone::DISPLAY_SHORT`**

**`IntlTimeZone::DISPLAY_LONG`**

## Зміст

- [IntlTimeZone::\_\_construct](intltimezone.construct.md) -
Конструктор класу, який забороняє пряме створення екземпляра
- [IntlTimeZone::countEquivalentIDs](intltimezone.countequivalentids.md)
— Отримати кількість ідентифікаторів у групі схожих вартових
поясів, включаючи цей ідентифікатор
- [IntlTimeZone::createDefault](intltimezone.createdefault.md) -
Створити нову копію часового поясу за промовчанням для поточного хоста
- [IntlTimeZone::createEnumeration](intltimezone.createenumeration.md)
— Отримати перерахування з ідентифікаторів часових поясів за
зазначеній країні чи зміщенню
- [IntlTimeZone::createTimeZone](intltimezone.createtimezone.md) -
Створити об'єкт часового поясу за ідентифікатором
- [IntlTimeZone::createTimeZoneIDEnumeration](intltimezone.createtimezoneidenumeration.md)
— Отримати перерахування з ідентифікаторів системних часових поясів
за заданими умовами фільтрації
- [IntlTimeZone::fromDateTimeZone](intltimezone.fromdatetimezone.md)
— Створити об'єкт часового поясу з DateTimeZone
- [IntlTimeZone::getCanonicalID](intltimezone.getcanonicalid.md) -
Отримати канонічний системний ідентифікатор часового поясу або
нормалізований ідентифікатор часового поясу
заданому ідентифікатору часового поясу
- [IntlTimeZone::getDisplayName](intltimezone.getdisplayname.md) -
Отримати ім'я часового поясу для відображення користувача
- [IntlTimeZone::getDSTSavings](intltimezone.getdstsavings.md) -
Отримати кількість мілісекунд, яку потрібно додати до місцевого
поясний час, щоб отримати літній час
- [IntlTimeZone::getEquivalentID](intltimezone.getequivalentid.md) -
Отримати ідентифікатор у групі схожих часових поясів, включаючи
заданий ідентифікатор
- [IntlTimeZone::getErrorCode](intltimezone.geterrorcode.md) -
Отримати останній код про помилку в об'єкті
- [IntlTimeZone::getErrorMessage](intltimezone.geterrormessage.md) -
Отримати останнє повідомлення про помилку в об'єкті
- [IntlTimeZone::getGMT](intltimezone.getgmt.md) — Створити вартовий
пояс по GMT (UTC)
- [IntlTimeZone::getID](intltimezone.getid.md) — Отримати
ідентифікатор часового поясу
- [IntlTimeZone::getIDForWindowsID](intltimezone.getidforwindowsid.md)
— Перетворити часовий пояс для Windows на системний часовий пояс
- [IntlTimeZone::getOffset](intltimezone.getoffset.md) — Отримати
необроблене значення часового поясу та усунення за Грінвічем (GMT)
за заданим моментом часу
- [IntlTimeZone::getRawOffset](intltimezone.getrawoffset.md) -
Отримати необроблене значення зсуву за Грінвічем (GMT) без
обліку літнього часу
- [IntlTimeZone::getRegion](intltimezone.getregion.md) — Отримати
код регіону, що відповідає заданому ідентифікатору системного
часового поясу
- [IntlTimeZone::getTZDataVersion](intltimezone.gettzdataversion.md)
— Отримати версію даних про часовий пояс, який зараз
використовується в ICU
- [IntlTimeZone::getUnknown](intltimezone.getunknown.md) — Отримати
невідомий часовий пояс ("unknown")
- [IntlTimeZone::getWindowsID](intltimezone.getwindowsid.md) -
Перетворити системний часовий пояс на часовий пояс для Windows
- [IntlTimeZone::hasSameRules](intltimezone.hassamerules.md) -
Перевірити, що в іншому часовому поясі використовуються ті самі
правила та усунення, що й у першому заданому
- [IntlTimeZone::toDateTimeZone](intltimezone.todatetimezone.md) -
Перетворити на об'єкт DateTimeZone
- [IntlTimeZone::useDaylightTime](intltimezone.usedaylighttime.md) -
Перевірити, що в даному часовому поясі використовується літній час
