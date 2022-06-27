- [« snmp3_real_walk](function.snmp3-real-walk.md)
- [snmp3_walk »](function.snmp3-walk.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Встановлює значення об'єкта SNMP

# snmp3_set

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp3_set — Встановлює значення об'єкта SNMP

### Опис

**snmp3_set**(
string `$hostname`,
string `$security_name`,
string `$security_level`,
string `$auth_protocol`,
string `$auth_passphrase`,
string `$privacy_protocol`,
string `$privacy_passphrase`,
array\|string `$object_id`,
array\|string `$type`,
array\|string `$value`,
int `$timeout` u003d -1,
int `$retries` u003d -1
): bool

Функція **snmp3_set()** використовується для встановлення значення об'єкта
SNMP, вказаного в `object_id`.

Навіть якщо рівень безпеки не використовує протокол авторизації або
пароль необхідно вказати коректні значення.

### Список параметрів

`hostname`
Ім'я хоста агента (сервера) SNMP.

`security_name`
Ім'я безпеки, зазвичай якесь ім'я користувача.

`security_level`
Рівень безпеки (noAuthNoPriv\|authNoPriv\|authPriv).

`auth_protocol`
Протокол аутентифікації (MD5 чи SHA).

`auth_passphrase`
Пароль для автентифікації.

`privacy_protocol`
Протокол конфіденційності (DES або AES).

`privacy_passphrase`
Пароль конфіденційності.

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

**Приклад #1 Приклад використання **snmp3_set()****

` <?php snmp3_set('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifAlias.3', 's', foo");?> `

**Приклад #2 Приклад використання **snmp3_set()** для встановлення BITS
ідентифікатор об'єкта SNMP**

` <?php snmp3_set('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'FOO-MIB::bar.42', 'b', 0 1 2 3 4');// або snmp3_set('localhost', 'james', 'authPriv', 'SHA','secret007', 'AES', 'secret007', 'FOO-4. ', 'x', 'F0');?> `
