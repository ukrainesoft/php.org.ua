- [« snmpset](function.snmpset.md)
- [snmpwalkoid »](function.snmpwalkoid.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує всі об'єкти SNMP із агента

# snmpwalk

(PHP 4, PHP 5, PHP 7, PHP 8)

snmpwalk — Отримує всі об'єкти SNMP із агента

### Опис

**snmpwalk**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
): array\|false

Функція **snmpwalk()** використовується для читання всіх значень агента
SNMP, вказаного в `hostname`.

### Список параметрів

`hostname`
Агент SNMP (сервер).

`community`
Read-спільнота.

`object_id`
Якщо **`null`**, `object_id` береться як корінь дерева об'єктів
SNMP та всі об'єкти цього дерева повертаються у вигляді масиву.

Якщо вказано `object_id`, повертаються всі об'єкти SNMP нижче цього
`object_id`.

`timeout`
Час очікування у мікросекундах.

`retries`
Кількість повторних спроб після закінчення часу очікування.

### Значення, що повертаються

Повертає масив значень об'єкта SNMP, починаючи з object_id
як корінь або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **snmpwalk()****

` <?php$a u003d snmpwalk("127.0.0.1", "public", "");foreach ($a as $val) {    echo "$val
";}?> `

Виклик функції поверне всі об'єкти SNMP із агента SNMP, що працює на
localhost. Можна пересуватися за значеннями за допомогою циклу.

### Дивіться також

- [snmprealwalk()](function.snmprealwalk.md) - Повертає все
об'єкти, включаючи їх ідентифікатор
