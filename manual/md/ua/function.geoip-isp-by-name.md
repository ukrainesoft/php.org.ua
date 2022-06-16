- [« geoip_id_by_name](function.geoip-id-by-name.md)
- [geoip_netspeedcell_by_name
»](function.geoip-netspeedcell-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає ім'я інтернет-провайдера (ISP)

# geoip_isp_by_name

(PECL geoip \>u003d 1.0.2)

geoip_isp_by_name — Повертає ім'я інтернет-провайдера (ISP)

### Опис

**geoip_isp_by_name**(string `$hostname`): string

Функція **geoip_isp_by_name()** повертає ім'я інтернет-провайдера (ISP)
вказаної IP-адреси.

Ця функція доступна лише для тих, хто придбав комерційну версію
GeoIP ISP. Якщо такої бази немає, виводиться попередження.

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса.

### Значення, що повертаються

Повертає ім'я ISP у разі успішного виконання або **`false`**, якщо
адресу не знайдено у базі даних.

### Приклади

**Приклад #1 Приклад використання **geoip_isp_by_name()****

Відобразить ім'я ISP для хоста example.com.

` <?php$isp u003d geoip_isp_by_name('www.example.com');if ($isp) {   echo 'Ця IP-адреса керується провайдером: ' . $isp;}?> `

Результат виконання цього прикладу:

Адреса керується провайдером: ICANN c/o Internet Assigned Numbers Authority
