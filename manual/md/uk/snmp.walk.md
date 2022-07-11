- [«SNMP::setSecurity](snmp.setsecurity.md)
- [SNMPException »](class.snmpexception.md)

- [PHP Manual](index.md)
- [SNMP](class.snmp.md)
- Отримує піддерево об'єкта SNMP

# SNMP::walk

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SNMP::walk — Отримує піддерево об'єкта SNMP

### Опис

public **SNMP::walk**(
array\|string `$objectId`,
bool `$suffixAsKey` u003d **`false`**,
int `$maxRepetitions` u003d -1,
int `$nonRepeaters` u003d -1
): array\|false

**SNMP::walk()** використовується для читання піддерева SNMP з коренем в
вказаному `objectId`.

### Список параметрів

`objectId`
Корінь видобувного піддерева

`suffixAsKey`
За замовчуванням для ключів у вихідному масиві використовується повна нотація
OID. Якщо встановлено значення **`true`**, префікс піддерева буде
видалено з ключів, залишиться лише суфікс object_id.

`nonRepeaters`
Визначає кількість наданих змінних, які слід
повторювати. За замовчуванням використовується значення об'єкта SNMP.

`maxRepetitions`
Визначає максимальну кількість ітерацій за змінними, що повторюються.
За замовчуванням використовується значення об'єкта SNMP.

### Значення, що повертаються

Повертає асоціативний масив ідентифікаторів об'єктів SNMP та їх
значень у разі успішного виконання або **`false`** у разі
виникнення помилки. Коли виникає помилка SNMP,
[SNMP::getErrno()](snmp.geterrno.md) та
[SNMP::getError()](snmp.geterror.md) можуть використовуватись для
отримання номера помилки (специфічно для модуля SNMP, дивіться константи
класу) та повідомлення про помилку відповідно.

### Помилки

Цей метод за промовчанням не генерує виняток. Щоб включити
генерацію виключення SNMPException у разі виникнення деяких помилок
даної бібліотеки необхідно встановити параметр `exceptions_enabled`
класу SNMP у відповідне значення. Докладніше дивіться в [поясненні
параметра
`SNMP::$exceptions_enabled`](class.snmp.md#snmp.props.exceptions-enabled).

### Приклади

**Приклад #1 Приклад використання **SNMP::walk()****

`<?php $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); $fulltree u003d $session->walk("."); print_r($fulltree); $session->close();?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[SNMPv2-MIB::sysDescr.0] u003d> STRING: Test server
[SNMPv2-MIB::sysObjectID.0] u003d> OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
[DISMAN-EVENT-MIB::sysUpTimeInstance] u003d> Timeticks: (1150681750) 133 days, 4:20:17.50
[SNMPv2-MIB::sysContact.0] u003d> STRING: Nobody
[SNMPv2-MIB::sysName.0] u003d> STRING: server.localdomain
...
)

**Приклад #2 Приклад використання `suffixAsKey`**

`suffixAsKey` може використовуватися при об'єднанні кількох
піддерев SNMP в одне. У цьому прикладі імена інтерфейсів порівнюються
з їх типом.

`<?php $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); $session->valueretrieval u003d SNMP_VALUE_PLAIN; $ifDescru003du003d$session->walk(".1.3.6.1.2.1.2.2.1.2", TRUE); $session->valueretrieval u003d SNMP_VALUE_LIBRARY; $ifTypeu003du003d$session->walk(".1.3.6.1.2.1.2.2.1.3", TRUE); print_r($ifDescr); print_r($ifType); $resultu003du003d array(); foreach($ifDescr as $i u003d> $n) {    $result[$n] u003d $ifType[$i]; }  print_r($result);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[1] u003d> igb0
[2] u003d> igb1
[3] u003d> ipfw0
[4] u003d> lo0
[5] u003d> lagg0
)
Array
(
[1] u003d> INTEGER: ieee8023adLag(161)
[2] u003d> INTEGER: ieee8023adLag(161)
[3] u003d> INTEGER: ethernetCsmacd(6)
[4] u003d> INTEGER: softwareLoopback(24)
[5] u003d> INTEGER: ethernetCsmacd(6)
)
Array
(
[igb0] u003d> INTEGER: ieee8023adLag(161)
[igb1] u003d> INTEGER: ieee8023adLag(161)
[ipfw0] u003d> INTEGER: ethernetCsmacd(6)
[lo0] u003d> INTEGER: softwareLoopback(24)
[lagg0] u003d> INTEGER: ethernetCsmacd(6)
)

### Дивіться також

- [SNMP::getErrno()](snmp.geterrno.md) - Отримує код останнього
помилки
- [SNMP::getError()](snmp.geterror.md) - Отримує останнє
повідомлення про помилку
