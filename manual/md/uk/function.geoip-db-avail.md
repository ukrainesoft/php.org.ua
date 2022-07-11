- [« geoip_database_info](function.geoip-database-info.md)
- [geoip_db_filename »](function.geoip-db-filename.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Перевіряє доступність бази GeoIP

# geoip_db_avail

(PECL geoip \>u003d 1.0.1)

geoip_db_avail — Перевірка доступності бази GeoIP

### Опис

**geoip_db_avail**(int `$database`): bool

Функція **geoip_db_avail()** визначає, чи доступна відповідна
база GeoIP і може бути відкрита на диску.

При цьому не повідомляється, чи файл є коректною базою даних, тільки
доступність для читання.

### Список параметрів

`database`
Тип бази даних визначається цілим числом (integer). Ви можете
використовувати [різні константи](geoip.constants.md), визначені в
цьому модулі (ie: GEOIP\_\*\_EDITION).

### Значення, що повертаються

Повертає **`true`**, якщо база даних існує, **`false`**, якщо не
знайдено, або **`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **geoip_db_avail()****

Приклад виводить версію поточної бази даних у вигляді рядка.

` <?phpif (geoip_db_avail(GEOIP_COUNTRY_EDITION))    print geoip_database_info(GEOIP_COUNTRY_EDITION);?> `

Результат виконання цього прикладу:

GEO-106FREE 20080801 Build 1 Copyright (c) 2006 MaxMind LLC All Rights Reserved
