- [« snmpget](function.snmpget.md)
- [snmprealwalk »](function.snmprealwalk.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує об'єкт SNMP, який слідує за цим ідентифікатором
об'єкта

# snmpgetnext

(PHP 5, PHP 7, PHP 8)

snmpgetnext — Отримує об'єкт SNMP, який слідує за даними
ідентифікатором об'єкта

### Опис

**snmpgetnext**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Функція **snmpgetnext()** використовується для читання значення об'єкта SNMP,
який слідує за вказаним `object_id`.

### Список параметрів

`hostname`
Ім'я хоста агента (сервера) SNMP.

`community`
Read-спільнота.

`object_id`
Ідентифікатор об'єкта SNMP, який передує бажаному.

`timeout`
Час очікування у мікросекундах.

`retries`
Кількість повторних спроб після закінчення часу очікування.

### Значення, що повертаються

Повертає значення об'єкта SNMP у разі успішного виконання або
**`false`** у разі виникнення помилки. У разі виникнення помилки
виводиться помилка рівня E_WARNING.

### Приклади

**Приклад #1 Приклад використання **snmpgetnext()****

` <?php$nameOfSecondInterface u003d snmpgetnetxt('localhost', 'public', 'IF-MIB::ifName.1');?> `

### Дивіться також

- [snmpget()](function.snmpget.md) - Отримує об'єкт SNMP
- [snmpwalk()](function.snmpwalk.md) - Отримує всі об'єкти SNMP з
агента
