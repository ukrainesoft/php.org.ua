- [« snmp_read_mib](function.snmp-read-mib.md)
- [snmp_set_oid_numeric_print
»](function.snmp-set-oid-numeric-print.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Повертає всі значення, які є перерахуваннями, з їх
значенням перерахування замість необробленого цілого числа

#snmp_set_enum_print

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

snmp_set_enum_print — Повертає всі значення, які є
перерахуваннями, з їх значенням перерахування замість необробленого
цілого числа

### Опис

**snmp_set_enum_print**(bool `$enable`): bool

Функція перемикає, якщо snmpwalk/snmpget тощо. повинні автоматично
шукати значення перерахування в MIB і повертати їх разом з їх
зручним рядком.

### Список параметрів

`enable`
Оскільки значення інтерпретується бібліотекою Net-SNMP як логічне
значення, воно може бути лише "0" або "1".

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **snmp_set_enum_print()****

` <?php snmp_set_enum_print(0); echo snmpget('localhost', 'public', 'IF-MIB::ifOperStatus.3') . "
"; snmp_set_enum_print(1); echo snmpget('localhost', 'public', 'IF-MIB::ifOperStatus.3') . "
";?> `

Приклад вище повинен повернути:

INTEGER: up(1)
INTEGER: 1
