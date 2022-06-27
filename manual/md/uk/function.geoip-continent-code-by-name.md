- [« geoip_asnum_by_name](function.geoip-asnum-by-name.md)
- [geoip_country_code_by_name
»](function.geoip-country-code-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Отримати двосимвольний код континенту

# geoip_continent_code_by_name

(PECL geoip \>u003d 1.0.3)

geoip_continent_code_by_name — Отримати двосимвольний код континенту

### Опис

**geoip_continent_code_by_name**(string `$hostname`): string

Функція **geoip_continent_code_by_name()** повертає двосимвольний код
континенту, який відповідає імені хоста або IP-адреси.

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса, за якою вестиметься пошук.

### Значення, що повертаються

Повертає два символи, що містять код континенту, при знаходженні адреси
у базі даних, інакше **`false`**.

| Код | Ім'я континенту
|------|------------------|
| `AF` | Африка
| `AN` | Антарктика
| `AS` | Азія
| 'EU' | Європа |
| `NA` | Північна Америка
| `OC` | Океанія |
| `SA` | Південна Америка

**Константи кодів**

### Приклади

**Приклад #1 Приклад використання **geoip_continent_code_by_name()****

Цей приклад виведе розташування хоста example.com.

` <?php$continent u003d geoip_continent_code_by_name('www.example.com');if ($continent) {    echo 'Даний хост розташований в ' . $continent;}?> `

Результат виконання цього прикладу:

Цей хост розташований у NA

### Дивіться також

- [geoip_country_code_by_name()](function.geoip-country-code-by-name.md) -
Отримати двосимвольний код країни
