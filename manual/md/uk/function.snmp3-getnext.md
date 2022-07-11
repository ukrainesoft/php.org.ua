- [« snmp3_get](function.snmp3-get.md)
- [snmp3_real_walk »](function.snmp3-real-walk.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує об'єкт SNMP, який слідує за вказаним ідентифікатором
об'єкта

# snmp3_getnext

(PHP 5, PHP 7, PHP 8)

snmp3_getnext — Отримує об'єкт SNMP, який слідує за вказаним
ідентифікатором об'єкта

### Опис

**snmp3_getnext**(
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

Функція **snmp3_getnext()** використовується для читання значення об'єкта
SNMP, який слідує за вказаним `object_id`.

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
**`false`** у разі виникнення помилки. У разі помилки виводить
помилку рівня E_WARNING.

### Приклади

**Приклад #1 Приклад використання **snmp3_getnext()****

` <?php$nameOfSecondInterface u003d snmp3_getnext('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007','IF-MIB::if. > `

### Дивіться також

- [snmp3_get()](function.snmp3-get.md) - Отримує об'єкт SNMP
- [snmp3_walk()](function.snmp3-walk.md) - Отримує всі об'єкти SNMP
з агента
