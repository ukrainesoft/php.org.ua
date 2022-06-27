- [« Функції SNMP](ref.snmp.md)
- [snmp_get_valueretrieval »](function.snmp-get-valueretrieval.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- отримує поточне значення параметра quick_print бібліотеки NET-SNMP

#snmp_get_quick_print

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp_get_quick_print — Отримує поточне значення параметра quick_print
бібліотеки NET-SNMP

### Опис

**snmp_get_quick_print**(): bool

Повертає поточне значення, що зберігається в бібліотеці NET-SNMP для
quick_print. quick_print за замовчуванням вимкнено.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо quick_print включено або **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **snmp_get_quick_print()****

` <?php$quickprint u003d snmp_get_quick_print();?> `

### Дивіться також

- [snmp_set_quick_print()](function.snmp-set-quick-print.md) -
Встановлює значення enable у бібліотеці NET-SNMP для повного
опис того, що робить quick_print.
