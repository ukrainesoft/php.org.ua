- [« snmp3_getnext](function.snmp3-getnext.md)
- [snmp3_set »](function.snmp3-set.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Повертає всі об'єкти, включаючи їхній ідентифікатор у зазначеному об'єкті

# snmp3_real_walk

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp3_real_walk — Повертає всі об'єкти, включаючи їх ідентифікатор у
вказаному об'єкті

### Опис

**snmp3_real_walk**(
string `$hostname`,
string `$security_name`,
string `$security_level`,
string `$auth_protocol`,
string `$auth_passphrase`,
string `$privacy_protocol`,
string `$privacy_passphrase`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
): array\|false

Функція **snmp3_real_walk()** використовується для обходу об'єктів SNMP,
починаючи з `object_id` і повертає як їх значення, а й
ідентифікатори об'єктів.

### Список параметрів

`hostname`
Ім'я хоста агента (сервера) SNMP.

`security_name`
Ім'я безпеки, зазвичай якесь ім'я користувача.

`security_level`
Рівень безпеки (noAuthNoPriv\|authNoPriv\|authPriv).

`auth_protocol`
Протокол аутентифікації (MD5 чи SHA).

`auth_passphrase`
Пароль аутентифікації.

`privacy_protocol`
Протокол конфіденційності (DES або AES).

`privacy_passphrase`
Пароль конфіденційності.

`object_id`
Ідентифікатор об'єкта SNMP.

`timeout`
Час очікування у мікросекундах.

`retries`
Кількість повторних спроб після закінчення часу очікування.

### Значення, що повертаються

Повертає асоціативний масив ідентифікаторів об'єктів SNMP та їх
значень у разі успішного виконання або **`false`** у разі
виникнення помилки. У разі помилки виводить помилку рівня E_WARNING.

### Приклади

**Приклад #1 Приклад використання **snmp3_real_walk()****

` <?php var_export(snmp3_real_walk('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName'));

Приклад вище виведе щось на зразок:

array (
'IF-MIB::ifName.1' u003d> 'STRING: lo',
'IF-MIB::ifName.2' u003d> 'STRING: eth0',
'IF-MIB::ifName.3' u003d> 'STRING: eth2',
'IF-MIB::ifName.4' u003d> 'STRING: sit0',
'IF-MIB::ifName.5' u003d> 'STRING: sixxs',
)

### Дивіться також

- [snmpwalk()](function.snmpwalk.md) - Отримує всі об'єкти SNMP з
агента
