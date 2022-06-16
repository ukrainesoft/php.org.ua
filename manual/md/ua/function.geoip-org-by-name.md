- [«
geoip_netspeedcell_by_name](function.geoip-netspeedcell-by-name.md)
- [geoip_record_by_name »](function.geoip-record-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає назву організації, яка володіє IP-адресою

# geoip_org_by_name

(PECL geoip \>u003d 0.2.0)

geoip_org_by_name — Повертає назву організації, яка володіє
IP-адресою

### Опис

**geoip_org_by_name**(string `$hostname`): string

Функція **geoip_org_by_name()** повертає назву організації, яка
володіє вказаною IP-адресою.

Ця функція доступна лише для тих, хто придбав комерційну версію
GeoIP Organization, ISP або AS. Якщо такої бази немає, виводиться
попередження.

### Список параметрів

`hostname`
Ім'я хоста або IP-адреса.

### Значення, що повертаються

Повертає ім'я організації у разі успішного виконання або
**`false`**, якщо адреса не може бути знайдена у базі даних.

### Приклади

**Приклад #1 Приклад використання**geoip_org_by_name()****

Буде виведено назву організації, якій належить IP-адреса хоста
example.com

` <?php$org u003d geoip_org_by_name('www.example.com');if ($org) {   echo 'Власник даної адреси: ' . $org;}?> `

Результат виконання цього прикладу:

Власник цієї адреси: ICANN c/o Internet Assigned Numbers Authority
