- [« geoip_db_get_all_info](function.geoip-db-get-all-info.md)
- [geoip_id_by_name »](function.geoip-id-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Отримати ім'я домену другого рівня

# geoip_domain_by_name

(PECL geoip \>u003d 1.1.0)

geoip_domain_by_name — Отримати ім'я домену другого рівня

### Опис

**geoip_domain_by_name**(string `$hostname`): string

Функція **geoip_domain_by_name()** повертає імена доменів другого
рівня, пов'язаних з ім'ям хоста або IP-адресою.

Зараз ця функція доступна лише користувачам, які купили комерційну
GeoIP Domain Edition. Якщо коректна база даних не
буде знайдено, буде виведено попередження.

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса.

### Значення, що повертаються

У разі успішного виконання повертає ім'я домену. Якщо адреса не
знайдений у базі, то повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **geoip_domain_by_name()****

Знайдемо домен, пов'язаний із IP 61.106.139.1.

` <?php$domain u003d geoip_domain_by_name('61.106.139.1');if ($domain) {   echo 'Домен: '. $domain;}?> `

Результат виконання цього прикладу:

Домен: von.co.kr
