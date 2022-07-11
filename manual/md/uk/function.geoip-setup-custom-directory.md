- [«
geoip_region_name_by_code](function.geoip-region-name-by-code.md)
- [geoip_time_zone_by_country_and_region
»](function.geoip-time-zone-by-country-and-region.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Встановити власну директорію для бази даних GeoIP

# geoip_setup_custom_directory

(PECL geoip \>u003d 1.1.0)

geoip_setup_custom_directory — Встановити власну директорію
для бази даних GeoIP

### Опис

**geoip_setup_custom_directory**(string `$path`): void

Функція **geoip_setup_custom_directory()** змінює директорію з
замовчуванням для бази даних GeoIP. Використання функції еквівалентне
зміни
[geoip.custom_directory](geoip.configuration.md#ini.geoip.custom-directory).

### Список параметрів

`path`
Повний шлях до бази даних GeoIP.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **geoip_setup_custom_directory()****

Змінимо шлях до бази GeoIP.

` <?phpgeoip_setup_custom_directory('/some/other/path');print geoip_db_filename(GEOIP_COUNTRY_EDITION);?> `

Результат виконання цього прикладу:

/some/other/path/GeoIP.dat
