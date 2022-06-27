- [« snmp2_set](function.snmp2-set.md)
- [snmp3_get »](function.snmp3-get.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує всі об'єкти SNMP із агента

# snmp2_walk

(PHP \>u003d 5.2.0, PHP 7, PHP 8)

snmp2_walk — Отримує всі об'єкти SNMP із агента

### Опис

**snmp2_walk**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
): array\|false

Функція **snmp2_walk()** використовується для читання всіх значень агента
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

**Приклад #1 Приклад використання **snmp2_walk()****

` <?php$a u003d snmp2_walk("127.0.0.1", "public", "");foreach ($a as $val) {   echo "$val
";}?> `

Виклик функції поверне всі об'єкти SNMP із агента SNMP, що працює на
localhost. Можна пересуватися за значеннями за допомогою циклу.

### Дивіться також

- [snmp2_real_walk()](function.snmp2-real-walk.md) - Повертає все
об'єкти, включаючи їх ідентифікатор
