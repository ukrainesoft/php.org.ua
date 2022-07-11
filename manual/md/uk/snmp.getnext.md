- [«SNMP::getError](snmp.geterror.md)
- [SNMP::set »](snmp.set.md)

- [PHP Manual](index.md)
- [SNMP](class.snmp.md)
- Отримати об'єкт SNMP, який слідує за цим ідентифікатором
об'єкта

# SNMP::getnext

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SNMP::getnext — Отримати об'єкт SNMP, який слідує за даними
ідентифікатором об'єкта

### Опис

public **SNMP::getnext**(array\|string `$objectId`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримайте об'єкт SNMP, наступний за вказаним objectId.

### Список параметрів

Якщо `objectId` є рядком, тоді **SNMP::getnext()** поверне
об'єкт SNMP у вигляді рядка. Якщо `objectId` є масивом, все
запитані об'єкти SNMP будуть повернені як асоціативний масив
ідентифікаторів об'єктів SNMP та їх значень.

`objectId`
Об'єкт SNMP (OID) або об'єкти

### Значення, що повертаються

Повертає запитані об'єкти SNMP у вигляді рядка або масиву
залежно від типу `objectId` або **`false`** у разі виникнення
помилки.

### Помилки

Цей метод за промовчанням не генерує виняток. Щоб включити
генерацію виключення SNMPException у разі виникнення деяких помилок
даної бібліотеки необхідно встановити параметр `exceptions_enabled`
класу SNMP у відповідне значення. Докладніше дивіться в [поясненні
параметра
`SNMP::$exceptions_enabled`](class.snmp.md#snmp.props.exceptions-enabled).

### Приклади

**Приклад #1 Одиночний об'єкт SNMP**

Одиночний об'єкт SNMP може бути запитаний двома способами: як рядкове
повертається рядкове значення або як одноелементний масив з
асоціативним масивом як висновок.

`<?php $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); $nsysdescru003du003d$session->getnext("sysDescr.0"); echo "$nsysdescr
";  $nsysdescr u003d $session->getnext(array("sysDescr.0"));  print_r($nsysdescr);?> `

Результатом виконання цього прикладу буде щось подібне:

OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
Array
(
[SNMPv2-MIB::sysObjectID.0] u003d> OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
)

**Приклад #2 Множинні об'єкти SNMP**

`<?php $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); $resultsu003du003d$session->getnext(array("sysDescr.0", "sysName.0")); print_r($results); $session->close();?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[SNMPv2-MIB::sysObjectID.0] u003d> OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
[SNMPv2-MIB::sysLocation.0] u003d> STRING: Nowhere
)

### Дивіться також

- [SNMP::getErrno()](snmp.geterrno.md) - Отримує код останнього
помилки
- [SNMP::getError()](snmp.geterror.md) - Отримує останнє
повідомлення про помилку
