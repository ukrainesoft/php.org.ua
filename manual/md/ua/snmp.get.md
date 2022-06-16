- [«SNMP::\_\_construct](snmp.construct.md)
- [SNMP::getErrno »](snmp.geterrno.md)

- [PHP Manual](index.md)
- [SNMP](class.snmp.md)
- Отримує об'єкт SNMP

# SNMP::get

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SNMP::get — Отримує об'єкт SNMP

### Опис

public **SNMP::get**(array\|string `$objectId`, bool `$preserveKeys` u003d
**`false`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує об'єкт SNMP, вказаний в objectId, за допомогою запиту GET.

### Список параметрів

Якщо `objectId` є рядком, то **SNMP::get()** поверне об'єкт SNMP
у вигляді рядка. Якщо `objectId` є масивом, всі запитані
об'єкти SNMP будуть повернені як асоціативний масив ідентифікаторів
об'єктів SNMP та їх значень.

`objectId`
Об'єкт SNMP (OID) або об'єкти

`preserveKeys`
Коли `objectId` є масивом і для параметра `preserveKeys`
встановлено значення **`true`** ключі у результатах будуть взяті точно
так само, як в `objectId`, інакше властивість
`SNMP::oid_output_format` використовується для визначення форми ключів.

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

`<?php $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); $sysdescru003du003d$session->get("sysDescr.0"); echo "$sysdescr
";  $sysdescr u003d $session->get(array("sysDescr.0")); print_r($sysdescr);?> `

Результатом виконання цього прикладу буде щось подібне:

STRING: Test server
Array
(
[SNMPv2-MIB::sysDescr.0] u003d> STRING: Test server
)

**Приклад #2 Множинні об'єкти SNMP**

` $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); $resultsu003du003d$session->get(array("sysDescr.0", "sysName.0")); print_r($results); $session->close();`

Результатом виконання цього прикладу буде щось подібне:

Array
(
[SNMPv2-MIB::sysDescr.0] u003d> STRING: Test server
[SNMPv2-MIB::sysName.0] u003d> STRING: myhost.nodomain
)

### Дивіться також

- [SNMP::getErrno()](snmp.geterrno.md) - Отримує код останнього
помилки
- [SNMP::getError()](snmp.geterror.md) - Отримує останнє
повідомлення про помилку
