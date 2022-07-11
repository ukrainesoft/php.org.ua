- [« snmp_set_valueretrieval](function.snmp-set-valueretrieval.md)
- [snmp2_getnext »](function.snmp2-getnext.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує об'єкт SNMP

# snmp2_get

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

snmp2_get — Отримує об'єкт SNMP

### Опис

**snmp2_get**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Функція **snmp2_get()** використовується для читання значення об'єкта SNMP,
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

**Приклад #1 Приклад використання **snmp2_get()****

` <?php$syscontact u003d snmp2_get("127.0.0.1", "public", "system.SysContact.0");?> `

### Дивіться також

- [snmp2_set()](function.snmp2-set.md) - Встановлює значення
об'єкта SNMP
