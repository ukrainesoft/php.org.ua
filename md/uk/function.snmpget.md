- [« snmp3_walk](function.snmp3-walk.md)
- [snmpgetnext »] (function.snmpgetnext.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує об'єкт SNMP

# snmpget

(PHP 4, PHP 5, PHP 7, PHP 8)

snmpget — Отримує об'єкт SNMP

### Опис

**snmpget**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Функція **snmpget()** використовується для читання значення об'єкта SNMP,
вказаного в `object_id`.

### Список параметрів

`hostname`
Агент SNMP.

`community`
Read-спільнота.

`object_id`
Об'єкт SNMP.

`timeout`
Час очікування у мікросекундах.

`retries`
Кількість повторних спроб після закінчення часу очікування.

### Значення, що повертаються

Повертає значення об'єкта SNMP у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **snmpget()****

` <?php$syscontact u003d snmpget("127.0.0.1", "public", "system.SysContact.0");?> `

### Дивіться також

- [snmpset()](function.snmpset.md) - Встановлює значення об'єкта
SNMP
