- [« geoip_org_by_name](function.geoip-org-by-name.md)
- [geoip_region_by_name »](function.geoip-region-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає докладну інформацію про адресу, знайдену в базі GeoIP

# geoip_record_by_name

(PECL geoip \>u003d 0.2.0)

geoip_record_by_name — Повертає докладну інформацію про адресу,
знайденому у базі GeoIP

### Опис

**geoip_record_by_name**(string `$hostname`): array

Функція **geoip_record_by_name()** повертає інформацію про адресу,
відповідне ім'я хоста або IP-адреси.

Функція доступна для безкоштовної версії GeoLite City Edition та
комерційної GeoIP City Edition. Якщо необхідних баз немає,
виводиться попередження.

Наступні імена ключів асоціативного масиву, що повертається:

- "continent_code" - Дволітерний код континенту (з версії 1.0.4 с
libgeoip 1.4.3 або новішої)
- "country_code" -- Двохлітерний код країни (дивіться
[geoip_country_code_by_name()](function.geoip-country-code-by-name.md))
- "country_code3" -- Трилітерний код країни (дивіться
[geoip_country_code3_by_name()](function.geoip-country-code3-by-name.md))
- "country_name" -- Назва країни (дивіться
[geoip_country_name_by_name()](function.geoip-country-name-by-name.md))
- "region" -- Код регіону (наприклад, CA для Каліфорнії)
- "City" - Місто.
- "postal_code" -- Поштовий індекс, FSA або Zip-код
- "latitude" - Широта, знакове речове число (signed double).
- "longitude" - Довгота, знакове речове число (signed
double).
- "dma_code" -- Код ринкової зони (Designated Market Area, DMA),
тільки для США та Канади
- "area_code" -- Код телефонної мережі загального користування (PSTN),
наприклад, 212

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса, дані за якою мають бути отримані.

### Значення, що повертаються

Повертає асоціативний масив у разі успішного виконання або
**`false`**, якщо адреса не може бути знайдена в базі.

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- -----|
| PECL geoip 1.0.4 | Доданий код континенту (continent_code) із GeoIP Library 1.4.3 або новішими. |
| PECL geoip 1.0.3 | Доданий трилітерний код країни (country_code3) та назва країни (country_name). |

### Приклади

**Приклад #1 Приклад використання **geoip_record_by_name()****

Виведе масив, який містить запис про хост example.com.

` <?php$record u003d geoip_record_by_name('www.example.com');if ($record) {   print_r($record);}?> `

Результат виконання цього прикладу:

Array
(
[continent_code] u003d> NA
[country_code] u003d> US
[country_code3] u003d> USA
[country_name] u003d> United States
[region] u003d> CA
[City] u003d> Marina Del Rey
[postal_code] u003d>
[latitude] u003d> 33.9776992798
[longitude] u003d> -118.435096741
[dma_code] u003d> 803
[area_code] u003d> 310
)
