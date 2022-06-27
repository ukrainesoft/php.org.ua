- [«SNMP](class.snmp.md)
- [SNMP::\_\_construct »](snmp.construct.md)

- [PHP Manual](index.md)
- [SNMP](class.snmp.md)
- Закриває сесію SNMP

# SNMP::close

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SNMP::close — Закриває сесію SNMP

### Опис

public **SNMP::close**(): bool

Звільняє раніше виділений об'єкт сесії SNMP.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SNMP::close()****

`<?php $sessionu003du003dnew SNMP(SNMP::VERSION_1, "127.0.0.1", "public"); # ...  # отримати, щось зробити і т.д. # ... $session->close();?> `

### Дивіться також

- [SNMP::\_\_construct()](snmp.construct.md) - Створює екземпляр
SNMP, що представляє сесію віддаленого агента SNMP
