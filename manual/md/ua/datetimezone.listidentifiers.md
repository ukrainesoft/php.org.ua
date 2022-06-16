- [«
DateTimeZone::listAbbreviations](datetimezone.listabbreviations.md)
- [DateInterval »](class.dateinterval.md)

- [PHP Manual](index.md)
- [DateTimeZone](class.datetimezone.md)
- Повертає чисельно індексований масив із усіма ідентифікаторами
часових поясів

# DateTimeZone::listIdentifiers

#timezone_identifiers_list

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTimeZone::listIdentifiers -- timezone_identifiers_list — Повертає
чисельно індексований масив з усіма ідентифікаторами часових поясів

### Опис

Об'єктно-орієнтований стиль

public static **DateTimeZone::listIdentifiers**(int `$timezoneGroup` u003d
DateTimeZone::ALL, ?string `$countryCode` u003d **`null`**): array

Процедурний стиль

[timezone_identifiers_list](function.timezone-identifiers-list.md)(int
`$timezoneGroup` u003d DateTimeZone::ALL, ?string `$countryCode` u003d
**`null`**): array

### Список параметрів

`timezoneGroup`
Одна з констант класу [DateTimeZone](class.datetimezone.md) (або
комбінація їх).

`countryCode`
Двохлітерний код країни, сумісний з ISO 3166-1.

> **Примітка**: Ця опція використовується лише тоді, коли параметр
> `timezoneGroup` встановлено в **`DateTimeZone::PER_COUNTRY`**.

### Значення, що повертаються

Повертає масив ідентифікаторів часових поясів.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------|
| 8.0.0 | До цієї версії, у разі виникнення помилки поверталося **`false`**. |
| 7.1.0 | `countryCode` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання
[timezone_identifiers_list()](function.timezone-identifiers-list.md)**

` <?php$timezone_identifiers u003d DateTimeZone::listIdentifiers();for ($iu003d0; $i < 5; $i++) {    echo "$timezone_identifiers[$i]
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara

### Дивіться також

- [timezone_abbreviations_list()](function.timezone-abbreviations-list.md) -
Псевдонім DateTimeZone::listAbbreviations
