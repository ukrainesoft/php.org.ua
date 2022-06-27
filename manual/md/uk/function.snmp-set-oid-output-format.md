- [«
snmp_set_oid_numeric_print](function.snmp-set-oid-numeric-print.md)
- [snmp_set_quick_print »](function.snmp-set-quick-print.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Встановлює вихідний формат OID

# snmp_set_oid_output_format

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

snmp_set_oid_output_format — Встановлює вихідний формат OID

### Опис

**snmp_set_oid_output_format**(int `$format`): bool

**snmp_set_oid_output_format()** встановлює повний або числовий
формат виводу.

### Список параметрів

`format`
| | |
|-------------------------------|----------------- -------------------------------------------------- --|
| **`SNMP_OID_OUTPUT_FULL`** | .iso.org.dod.internet.mgmt.mib-2.system.sysUpTime.sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_NUMERIC`** | .1.3.6.1.2.1.1.3.0 |
| **`SNMP_OID_OUTPUT_MODULE`** | DISMAN-EVENT-MIB::sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_SUFFIX`** | sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_UCD`** | system.sysUpTime.sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_NONE`** | Undefined |

**OID .1.3.6.1.2.1.1.3.0 представлення для різних значень `format`**

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
[snmprealwalk()](function.snmprealwalk.md)**

` <?php snmp_read_mib("/usr/share/mibs/netsnmp/NET-SNMP-TC"); // default or SNMP_OID_OUTPUT_MODULE print_r( snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') ); snmp_set_oid_output_format(SNMP_OID_OUTPUT_NUMERIC); print_r(snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') ); snmp_set_oid_output_format(SNMP_OID_OUTPUT_FULL); print_r(snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') );?> `

Приклад вище повинен повернути:

Array
(
[RFC1213-MIB::sysObjectID.0] u003d> OID: NET-SNMP-TC::linux
)
Array
(
[.1.3.6.1.2.1.1.2.0] u003d> OID: .1.3.6.1.4.1.8072.3.2.10
)
Array
(
[.iso.org.dod.internet.mgmt.mib-2.system.sysObjectID.0] u003d> OID: .iso.org.dod.internet.private.enterprises.netSnmp.netSnmpEnumerations.netSnmpAgentOIDs.linux
)
