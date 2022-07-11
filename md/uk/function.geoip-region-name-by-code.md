- [« geoip_region_by_name](function.geoip-region-by-name.md)
- [geoip_setup_custom_directory
»](function.geoip-setup-custom-directory.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає назву регіону для вибраної країни та код регіону

# geoip_region_name_by_code

(PECL geoip \>u003d 1.0.4)

geoip_region_name_by_code — Повертає назву регіону для вибраної
країни та коду регіону

### Опис

**geoip_region_name_by_code**(string `$country_code`, string
`$region_code`): string

Функція **geoip_region_name_by_code()** повертає назву регіону,
відповідної країни та коду регіону.

У США код регіону відповідає дволітерному скороченню кожному штату.
У Канаді код регіону відповідає дволітерному скороченню імені
провінції або території, наданий поштовою службою Канади.

Для решти світу GeoIP використовує коди FIPS 10-4 для представлення
регіону. Дивіться також
[»http://www.maxmind.com/app/fips10_4](http://www.maxmind.com/app/fips10_4)
- Докладний список кодів FIPS 10-4.

Ця функція завжди доступна під час використання бібліотеки GeoIP версії
1.4.1 та новіший. Дані беруться безпосередньо з бібліотеки GeoIP, а не
з будь-якої бази.

### Список параметрів

`country_code`
Двохлітерний код країни
[geoip_country_code_by_name()](function.geoip-country-code-by-name.md))

`region_code`
Дволітерний (або цифровий) код регіону
[geoip_region_by_name()](function.geoip-region-by-name.md))

### Значення, що повертаються

Повертає назву регіону у разі успіху або **`false`**, якщо країна
і код регіону не знайдено у базі даних.

### Приклади

**Приклад #1 Приклад використання **geoip_region_name_by_code()** (Для
Канади/США)**

Буде виведено назву регіону для країни CA (Канада), регіону QC
(Квебек).

` <?php$region u003d geoip_region_name_by_code('CA', 'QC');if ($region) {    echo 'Назва регіону для CA/QC: ' . $region;}?> `

Результат виконання цього прикладу:

Назва регіону для CA/QC: Quebec

**Приклад #2 Приклад використання **geoip_region_name_by_code()**,
використовуючи коди FIPS**

Буде виведено ім'я регіону для країни JP (Японія), регіону 01
(Префектура Айті).

` <?php$region u003d geoip_region_name_by_code('JP', '01');if ($region) {    echo 'Назва регіону для JP/01: ' . $region;}?> `

Результат виконання цього прикладу:

Назва регіону для JP/01: Aichi
