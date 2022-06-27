- [« snmp3_set](function.snmp3-set.md)
- [snmpget »] (function.snmpget.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує всі об'єкти SNMP із агента

# snmp3_walk

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp3_walk — Отримує всі об'єкти SNMP із агента

### Опис

**snmp3_walk**(
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

Функція **snmp3_walk()** використовується для читання всіх значень агента
SNMP, вказаного в `hostname`.

Навіть якщо рівень безпеки не використовує протокол авторизації або
пароль необхідно вказати коректні значення.

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
Пароль для автентифікації.

`privacy_protocol`
Протокол конфіденційності (DES або AES).

`privacy_passphrase`
Пароль конфіденційності.

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

**Приклад #1 Приклад використання **snmp3_walk()****

` <?php$ret u003d snmp3_walk('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName');var_export($ ret);?> `

Виклик функції поверне всі об'єкти SNMP із агента SNMP, запущеного на
localhost:

array (
0 u003d> 'STRING: lo',
1 u003d> 'STRING: eth0',
2 u003d> 'STRING: eth2',
3 u003d> 'STRING: sit0',
4 u003d> 'STRING: sixxs',
)

### Дивіться також

- [snmp3_real_walk()](function.snmp3-real-walk.md) - Повертає все
об'єкти, включаючи їх ідентифікатор у вказаному об'єкті
