- [« geoip_db_avail](function.geoip-db-avail.md)
- [geoip_db_get_all_info »](function.geoip-db-get-all-info.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає ім'я файлу відповідної бази GeoIP

# geoip_db_filename

(PECL geoip \>u003d 1.0.1)

geoip_db_filename — Повертає ім'я файлу відповідної бази GeoIP

### Опис

**geoip_db_filename**(int `$database`): string

Функція **geoip_db_filename()** повертає ім'я відповідного файлу
бази GeoIP.

Функція не визначає, чи файл на диску, тільки вказує
шлях, яким бібліотека шукає файл бази.

### Список параметрів

`database`
Тип бази визначається цілим числом (integer). Ви можете використовувати
[різноманітні константи](geoip.constants.md), визначені в цьому
модулі (тобто: GEOIP\_\*\_EDITION).

### Значення, що повертаються

Повертає ім'я файлу відповідної бази, або **`null`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **geoip_db_filename()****

Приклад відображення імені файлу поточної бази у вигляді рядка.

`<?phpprint geoip_db_filename(GEOIP_COUNTRY_EDITION);?> `

Результат виконання цього прикладу:

/usr/share/GeoIP/GeoIP.dat
