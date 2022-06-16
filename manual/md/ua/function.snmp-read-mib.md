- [« snmp_get_valueretrieval](function.snmp-get-valueretrieval.md)
- [snmp_set_enum_print »](function.snmp-set-enum-print.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Читає та аналізує файл MIB в активному дереві MIB

#snmp_read_mib

(PHP 5, PHP 7, PHP 8)

snmp_read_mib — Читає та аналізує файл MIB в активному дереві MIB

### Опис

**snmp_read_mib**(string `$filename`): bool

Функція використовується для завантаження додаткових, наприклад, специфічних
для постачальника, MIB, щоб можна було використовувати легкочитані OID,
таких як `VENDOR-MIB::foo.1`, замість схильних до помилок числових OID.

Порядок, в якому завантажуються MIB має значення, оскільки базова
бібліотека Net-SNMP друкуватиме попередження, якщо зазначені
об'єкти не можуть бути дозволені.

### Список параметрів

`filename`
Ім'я файлу MIB.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **snmp_read_mib()****

` <?phpprint_r( snmprealwalk('localhost', 'public', '.1.3.6.1.2.1.2.3.4.5') );snmp_read_mib('./FOO-BAR-MIB.txt');print_r( snmpreal localhost', 'public', 'FOO-BAR-MIB::someTable') );?> `

Наведений вище приклад складено, але результати виглядатимуть так:

Array
(
[iso.3.6.1.2.1.2.3.4.5.0] u003d> Gauge32: 6
)
Array
(
[FOO-BAR-MIB::someTable.0] u003d> Gauge32: 6
)
