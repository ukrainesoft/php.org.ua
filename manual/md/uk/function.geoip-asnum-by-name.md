- [« Функції GeoIP](ref.geoip.md)
- [geoip_continent_code_by_name
»](function.geoip-continent-code-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Отримати номер автономної системи (ASN)

# geoip_asnum_by_name

(PECL geoip \>u003d 1.1.0)

geoip_asnum_by_name — Отримати номер автономної системи (ASN)

### Опис

**geoip_asnum_by_name**(string `$hostname`): string

Функція **geoip_asnum_by_name()** повертає номери автономної системи,
пов'язані з IP-адресою.

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса.

### Значення, що повертаються

У разі успішного виконання, повертає ASN. Якщо адреса не знайдена в
базі, то повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **geoip_asnum_by_name()****

Отримання ASN для хоста www.example.com.

` <?php$asn u003d geoip_asnum_by_name('www.example.com');if ($asn) {   echo 'ASN рівний: '. $asn;}?> `

Результат виконання цього прикладу:

ASN дорівнює: AS15133 EdgeCast Networks, Inc
