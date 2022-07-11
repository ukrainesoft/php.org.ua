- [« geoip_isp_by_name](function.geoip-isp-by-name.md)
- [geoip_org_by_name »](function.geoip-org-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Отримати швидкість з'єднання з мережею Інтернет

# geoip_netspeedcell_by_name

(PECL geoip \>u003d 1.1.0)

geoip_netspeedcell_by_name — Отримати швидкість з'єднання з мережею
Інтернет

### Опис

**geoip_netspeedcell_by_name**(string `$hostname`): string

Функція **geoip_netspeedcell_by_name()** повертає тип підключення до
мережі Інтернет та його швидкість щодо заданого імені хоста або
IP-адреси.

Ця функція доступна, лише якщо використовується бібліотека GeoIP версії
1.4.8 та вище.

Зараз ця функція доступна лише користувачам, які купили комерційну
GeoIP Domain Edition. Якщо коректна база даних не
буде знайдено, буде виведено попередження.

Повертається рядок. Стандартні значення:

- Cable/DSL
- Dialup
- Cellular
- Corporate

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса.

### Значення, що повертаються

У разі успішного виконання повертає швидкість з'єднання. Якщо адреса
не знайдено в базі даних, то повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **geoip_netspeedcell_by_name()****

Отримання швидкості підключення до example.com.

` <?php$netspeed u003d geoip_netspeedcell_by_name('www.example.com');if ($netspeed) {    echo 'Тип з'єднання: '. $netspeed;}?> `

Результат виконання цього прикладу:

Тип з'єднання: Corporate
