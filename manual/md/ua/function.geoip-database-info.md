- [«
geoip_country_name_by_name](function.geoip-country-name-by-name.md)
- [geoip_db_avail »](function.geoip-db-avail.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає інформацію про базу GeoIP

# geoip_database_info

(PECL geoip \>u003d 0.2.0)

geoip_database_info — Повертає інформацію про базу GeoIP

### Опис

**geoip_database_info**(int `$database` u003d GEOIP_COUNTRY_EDITION): string

Функція **geoip_database_info()** повертає версію бази GeoIP,
відповідне визначення у бінарному файлі.

Ця функція викликається без параметрів та повертає версію бази GeoIP
Free Country Edition.

### Список параметрів

`database`
Тип бази визначається цілим числом (integer). Ви можете використовувати
[різноманітні константи](geoip.constants.md), визначені в цьому
модулі (тобто: GEOIP\_\*\_EDITION).

### Значення, що повертаються

Повертає відповідну версію, або **`null`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **geoip_database_info()****

Приклад демонструє виведення інформації про базу даних.

` <?phpprint geoip_database_info(GEOIP_COUNTRY_EDITION);?> `

Результат виконання цього прикладу:

GEO-106FREE 20060801 Build 1 Copyright (c) 2006 MaxMind LLC All Rights Reserved
