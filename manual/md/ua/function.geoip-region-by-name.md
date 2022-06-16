- [« geoip_record_by_name](function.geoip-record-by-name.md)
- [geoip_region_name_by_code
»](function.geoip-region-name-by-code.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає коди країни та регіону

# geoip_region_by_name

(PECL geoip \>u003d 0.2.0)

geoip_region_by_name — Повертає коди країни та регіону

### Опис

**geoip_region_by_name**(string `$hostname`): array

Функція**geoip_region_by_name()** повертає коди країни та регіону,
відповідних імені хоста або IP-адреси.

Ця функція доступна лише для тих, хто придбав комерційну версію
GeoIP регіон. Якщо такої бази немає, виводиться попередження.

Наступні імена ключів асоціативного масиву, що повертається:

- "country_code" -- Двохлітерний код країни (дивіться
[geoip_country_code_by_name()](function.geoip-country-code-by-name.md))
- "region" -- Код регіону (наприклад, CA для Каліфорнії)

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса, дані про країну та регіон, якого необхідно
знайти.

### Значення, що повертаються

Повертає асоціативний масив у разі успішного виконання або
**`false`**, якщо адреса не буде знайдена у базі даних.

### Приклади

**Приклад #1 Приклад використання **geoip_region_by_name()****

Виведе масив, що складається з коду країни та коду регіону для хоста
example.com

` <?php$region u003d geoip_region_by_name('www.example.com');if ($region) {   print_r($region);}?> `

Результат виконання цього прикладу:

Array
(
[country_code] u003d> US
[region] u003d> CA
)
