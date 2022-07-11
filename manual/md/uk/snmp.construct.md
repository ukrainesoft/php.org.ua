- [«SNMP::close](snmp.close.md)
- [SNMP::get »](snmp.get.md)

- [PHP Manual](index.md)
- [SNMP](class.snmp.md)
- Створює екземпляр SNMP, що представляє сесію віддаленого агента SNMP

# SNMP::\_\_construct

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SNMP::\_\_construct — Створює екземпляр SNMP, який представляє сесію
дистанційного агента SNMP

### Опис

public **SNMP::\_\_construct**(
int `$version`,
string `$hostname`,
string `$community`,
int `$timeout` u003d -1,
int `$retries` u003d -1
)

Опис функції

### Список параметрів

`version`
SNMP protocol version: **`SNMP::VERSION_1`**, **`SNMP::VERSION_2C`**,
**`SNMP::VERSION_3`**.

`hostname`
Агент SNMP. `hostname` може мати суфікс із необов'язковим портом
агента SNMP після двокрапки. Адреси IPv6 повинні бути укладені в
квадратні дужки, якщо використовуються портом. Якщо для `hostname`
використовується повне доменне ім'я, воно буде оброблене бібліотекою
php-snmp, а чи не механізмом Net-SNMP. Використання IPv6-адрес при
вказівці повного доменного імені може бути примусово укладено
квадратні дужки. Ось кілька прикладів:

| | |
|------------------------------------------------- ---------------------|----------------------|
| IPv4 з стандартним портом | 127.0.0.1 |
| IPv6 з стандартним портом | ::1 or \[::1\] |
| IPv4 з конкретним портом 127.0.0.1:1161 |
| IPv6 з конкретним портом \[::1\]:1161 |
| FQDN із портом за замовчуванням | host.domain |
| FQDN із конкретним портом | host.domain:1161 |
| FQDN із портом за замовчуванням, примусове використання IPv6-адреси | \[host.domain\] |
| FQDN з конкретним портом, примусове використання IPv6-адреси \[host.domain\]:1161 |

`community`
Призначення `community` залежить від версії SNMP:

| | |
|------------------|---------------------|
| SNMP::VERSION_1 | SNMP community |
| SNMP::VERSION_2C | SNMP community |
| SNMP::VERSION_3 | SNMPv3 securityName |

`timeout`
Кількість мікросекунд до першого часу очікування.

`retries`
Кількість повторних спроб у разі перевищення часу очікування.

### Помилки

**SNMP::\_\_construct()** викидає виняток, коли кількість або
типи параметрів неправильні або невідома версія протоколу SNMP.

### Приклади

**Приклад #1 Отримання sysLocation**

`<?php $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); $sysdescru003du003d$session->get("sysDescr.0"); echo "$sysdescr
";?> `

Результатом виконання цього прикладу буде щось подібне:

STRING: Test server

### Дивіться також

- [SNMP::close()](snmp.close.md) - Закриває сесію SNMP
