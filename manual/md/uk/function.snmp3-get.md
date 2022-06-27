- [« snmp2_walk](function.snmp2-walk.md)
- [snmp3_getnext »](function.snmp3-getnext.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує об'єкт SNMP

# snmp3_get

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp3_get — Отримує об'єкт SNMP

### Опис

**snmp3_get**(
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
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Функція **snmp3_get()** використовується для читання значення об'єкта SNMP,
вказаного в `object_id`.

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
Ідентифікатор об'єкта SNMP.

`timeout`
Час очікування у мікросекундах.

`retries`
Кількість повторних спроб після закінчення часу очікування.

### Значення, що повертаються

Повертає значення об'єкта SNMP у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **snmp3_get()****

` <?php$nameOfSecondInterface u003d snmp3_get('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName.' > `

### Дивіться також

- [snmp3_set()](function.snmp3-set.md) - Встановлює значення
об'єкта SNMP
