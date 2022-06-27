- [«SNMP::getErrno](snmp.geterrno.md)
- [SNMP::getnext »](snmp.getnext.md)

- [PHP Manual](index.md)
- [SNMP](class.snmp.md)
- Отримує останнє повідомлення про помилку

# SNMP::getError

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SNMP::getError — Отримує останнє повідомлення про помилку

### Опис

public **SNMP::getError**(): string

Повертає рядок помилки з останнього запиту SNMP.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядок, що описує помилку останнього запиту SNMP.

### Приклади

**Приклад #1 Приклад використання **SNMP::getError()****

` <?php$session u003d new SNMP(SNMP::VERSION_2c, '127.0.0.1', 'boguscommunity');var_dump(@$session->get('.1.3.6.1.2.1.1.1.0')); var_dump($session->getError());?> `

Результат виконання цього прикладу:

bool(false)
string(26) "No response from 127.0.0.1"

### Дивіться також

- [SNMP::getErrno()](snmp.geterrno.md) - Отримує код останнього
помилки
