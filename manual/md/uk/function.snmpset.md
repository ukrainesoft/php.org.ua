- [« snmprealwalk](function.snmprealwalk.md)
- [snmpwalk »] (function.snmpwalk.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Встановлює значення об'єкта SNMP

# snmpset

(PHP 4, PHP 5, PHP 7, PHP 8)

snmpset — Встановлює значення об'єкта SNMP

### Опис

**snmpset**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
array\|string `$type`,
array\|string `$value`,
int `$timeout` u003d -1,
int `$retries` u003d -1
): bool

**snmpset()** використовується для встановлення значення об'єкта SNMP,
вказаного у параметрі `object_id`.

### Список параметрів

`hostname`
Ім'я хоста агента (сервера) SNMP.

`community`
Write-спільнота.

`object_id`
Ідентифікатор об'єкта SNMP.

`type`
MIB визначає тип ідентифікатора кожного об'єкта. Він має бути вказаний
як один символ з наступного списку.

| | |
|-----|----------------------|
| u003d | Тип, що приймається MIB |
| i | INTEGER |
| u | INTEGER |
| s | STRING |
| x | HEX STRING |
| d | DECIMAL STRING |
| n | NULLOBJ |
| o | OBJID |
| t | TIMETICKS |
| a | IPADDRESS |
| b | BITS |

**types**

Якщо при компіляції бібліотеки SNMP було визначено опцію
**`OPAQUE_SPECIAL_TYPES`**, то також можуть бути використані такі
типи:

| | |
|-----|----------------|
| U | unsigned int64 |
| I | signed int64 |
| F | float |
| D | double |

**types**

Більшість цих значень використовують явний тип ASN.1. 's', 'x', 'd'
і 'b' - це різні способи вказівки значення OCTET STRING, а
беззнаковий тип u також використовується для обробки значень Gauge32.

Якщо MIB-файли були завантажені в MIB-дерево за допомогою "snmp_read_mib" або
були вказані у конфігураційному файлі libsnmp, то для вказівки параметра
`type` можна використовувати нотацію 'u003d', т.к. тип усіх ідентифікаторів
об'єктів буде автоматично рахований з MIB.

Зверніть увагу, що є два способи встановлення змінної типу BITS,
наприклад, "SYNTAX BITS {telnet(0), ftp(1), http(2), icmp(3), snmp(4),
ssh(5), https(6)}":

- За допомогою типу "b" та списку бітових чисел. Не рекомендується
використовувати цей спосіб, т.к. GET-запит для того ж OID поверне, до
Наприклад, 0xF8.
- За допомогою типу "x" та шістнадцяткового числа, але без (!) звичайного
префіксу "0x".

Докладніше дивіться у розділі з прикладами.

`value`
Нове значення.

`timeout`
Час очікування у мікросекундах.

`retries`
Кількість повторних спроб після закінчення часу очікування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

Якщо хост SNMP відхиляє тип даних, виводиться помилка рівня E_WARNING
на кшталт "Warning: Error in packet. Reason: (badValue) The value given has
the wrong type or length.". Якщо вказано невідоме або неприпустиме
OID, ймовірно, виведе попередження "Could not add variable".

### Приклади

**Приклад #1 Приклад використання **snmpset()****

` <?php  snmpset("localhost", "public", "IF-MIB::ifAlias.3", "s", "foo");?> `

**Приклад #2 Приклад використання **snmpset()** для встановлення BITS
ідентифікатор об'єкта SNMP**

`<?php  snmpset("localhost", "public", 'FOO-MIB::bar.42', 'b', '0 1 2 3 4');//or? snmpset("localhost", "public" , 'FOO-MIB::bar.42', 'x', 'F0');?> `

### Дивіться також

- [snmpget()](function.snmpget.md) - Отримує об'єкт SNMP
