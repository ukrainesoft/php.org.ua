- [« snmp2_getnext](function.snmp2-getnext.md)
- [snmp2_set »](function.snmp2-set.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Повертає всі об'єкти, включаючи їхній ідентифікатор

# snmp2_real_walk

(PHP \>u003d 5.2.0, PHP 7, PHP 8)

snmp2_real_walk — Повертає всі об'єкти, включаючи їх ідентифікатор

### Опис

**snmp2_real_walk**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
): array\|false

Функція **snmp2_real_walk()** використовується для обходу об'єктів SNMP,
починаючи з `object_id` і повертає як їх значення, а й
ідентифікатори об'єктів.

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

Повертає асоціативний масив ідентифікаторів об'єктів SNMP та їх
значень у разі успішного виконання або **`false`** у разі
виникнення помилки. У разі виникнення помилки виводить помилку
рівня E_WARNING.

### Приклади

**Приклад #1 Приклад використання **snmp2_real_walk()****

` <?php print_r(snmp2_real_walk("localhost", "public", "IF-MIB::ifName"));?> `

Вищезгаданий приклад виведе щось на кшталт:

Array
(
[IF-MIB::ifName.1] u003d> STRING: lo
[IF-MIB::ifName.2] u003d> STRING: eth0
[IF-MIB::ifName.3] u003d> STRING: eth2
[IF-MIB::ifName.4] u003d> STRING: sit0
[IF-MIB::ifName.5] u003d> STRING: sixxs
)

### Дивіться також

- [snmp2_walk()](function.snmp2-walk.md) - Отримує всі об'єкти SNMP
з агента
