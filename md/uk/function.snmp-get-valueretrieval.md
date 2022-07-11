- [« snmp_get_quick_print](function.snmp-get-quick-print.md)
- [snmp_read_mib »](function.snmp-read-mib.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Повертає метод, як буде повернено значення SNMP

#snmp_get_valueretrieval

(PHP 4 \>u003d 4.3.3, PHP 5, PHP 7, PHP 8)

snmp_get_valueretrieval — Повертає метод повернення.
значення SNMP

### Опис

**snmp_get_valueretrieval**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єднання констант (**`SNMP_VALUE_LIBRARY`** або
**`SNMP_VALUE_PLAIN`**) з можливим набором SNMP_VALUE_OBJECT.

### Приклади

**Приклад #1 Приклад використання **snmp_get_valueretrieval()****

` <?php $ret u003d snmpget('localhost', 'public', 'IF-MIB::ifName.1'); if (snmp_get_valueretrieval() & SNMP_VALUE_OBJECT) {   echo $ret->value; } else {   echo $ret; }?> `

### Дивіться також

- [snmp_set_valueretrieval()](function.snmp-set-valueretrieval.md) -
Визначає спосіб повернення значень SNMP
- [Предвизначені константи](snmp.constants.md)
