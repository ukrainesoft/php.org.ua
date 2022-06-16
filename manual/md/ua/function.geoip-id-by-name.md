- [« geoip_domain_by_name](function.geoip-domain-by-name.md)
- [geoip_isp_by_name »](function.geoip-isp-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає тип інтернет-з'єднання

# geoip_id_by_name

(PECL geoip \>u003d 0.2.0)

geoip_id_by_name — Повертає тип інтернет-з'єднання

### Опис

**geoip_id_by_name**(string `$hostname`): int

Функція **geoip_id_by_name()** повертає тип Інтернет-з'єднання
відповідного імені хоста або IP-адреси.

Повертає числове значення, яке можна порівняти з константами:

- GEOIP_UNKNOWN_SPEED
- GEOIP_DIALUP_SPEED
- GEOIP_CABLEDSL_SPEED
- GEOIP_CORPORATE_SPEED

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса, з'єднання з якими перевіряється.

### Значення, що повертаються

Повертає тип з'єднання.

### Приклади

**Приклад #1 Приклад використання **geoip_id_by_name()****

Відображає тип з'єднання для хоста example.com.

` <?php$netspeed u003d geoip_id_by_name('www.example.com');echo 'Тип Інтернет-з'єднання: ';switch ($netspeed) {    case GEOIP_DIALUP_SPEED:              break; case GEOIP_CABLEDSL_SPEED:        echo 'cable or DSL'; break; case GEOIP_CORPORATE_SPEED:        echo 'corporate'; break; case GEOIP_UNKNOWN_SPEED:    default:        echo 'unknown';}?> `

Результат виконання цього прикладу:

Тип Інтернет-з'єднання: corporate
