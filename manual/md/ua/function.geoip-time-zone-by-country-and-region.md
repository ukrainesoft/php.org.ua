- [«
geoip_setup_custom_directory](function.geoip-setup-custom-directory.md)
- [FANN »](book.fann.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає часовий пояс для коду країни та регіону

# geoip_time_zone_by_country_and_region

(PECL geoip \>u003d 1.0.4)

geoip_time_zone_by_country_and_region — Повертає часовий пояс для коду
країни та регіону

### Опис

**geoip_time_zone_by_country_and_region**(string `$country_code`, string
`$region_code` u003d ?): string

Функція **geoip_time_zone_by_country_and_region()** поверне часовий пояс
та код регіону відповідної країни.

У США код регіону відповідає дволітерному скороченню кожного штату.
У Канаді код регіону відповідає дволітерному скороченню провінції
або територіальний код, який відповідає канадській пошті.

Для решти світу, для представлення регіонів GeoIP використовує
коди FIPS 10-4. Ви можете переглянути
[»http://www.maxmind.com/app/fips10_4](http://www.maxmind.com/app/fips10_4)
для отримання повного переліку FIPS 10-4 кодів.

Ця функція завжди доступна під час використання бібліотеки GeoIP версії
1.4.1 чи новіше. Дані беруться безпосередньо з бібліотеки GeoIP, а
не з будь-якої бази даних.

### Список параметрів

`country_code`
Двохлітерний код країни (дивіться
[geoip_country_code_by_name()](function.geoip-country-code-by-name.md))

`region_code`
Дволітерний (або цифровий) код регіону (дивіться
[geoip_region_by_name()](function.geoip-region-by-name.md))

### Значення, що повертаються

Повертає часовий пояс у разі успішного виконання або **`false`**,
якщо країна та одночасно код регіону не можуть бути знайдені.

### Приклади

**Приклад #1 Приклад використання
**geoip_time_zone_by_country_and_region()** для коду регіону US/Canada**

Надрукує часовий пояс країни CA (Канада), регіону QC (Квебек).

` <?php$timezone u003d geoip_time_zone_by_country_and_region('CA', 'QC');if ($timezone) {    echo 'Годинний пояс для CA/QC: ' . $timezone;}?> `

Результат виконання цього прикладу:

Часовий пояс для CA/QC: America/Montreal

**Приклад #2 Використання **geoip_time_zone_by_country_and_region()**,
використовуючи коди FIPS**

Виводить часовий пояс для країни JP (Японія), регіон 01 (Aichi).

` <?php$timezone u003d geoip_time_zone_by_country_and_region('JP', '01');if ($timezone) {    echo 'Годинний пояс для JP/01: ' . $timezone;}?> `

Результат виконання цього прикладу:

Часовий пояс для JP/01: Asia/Tokyo
