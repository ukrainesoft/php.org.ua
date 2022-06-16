- [« ssh2_auth_agent](function.ssh2-auth-agent.md)
- [ssh2_auth_none »](function.ssh2-auth-none.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Аутентифікація з використанням відкритого ключа хоста

# ssh2_auth_hostbased_file

(PECL ssh2 \>u003d 0.9.0)

ssh2_auth_hostbased_file — Аутентифікація з використанням відкритого
ключа хоста

### Опис

**ssh2_auth_hostbased_file**(
resource `$session`,
string `$username`,
string `$hostname`,
string `$pubkeyfile`,
string `$privkeyfile`,
string `$passphrase` u003d ?,
string `$local_username` u003d ?
): bool

Аутентифікація з використанням відкритого ключа хоста, збереженого в
файл.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`username`

`hostname`

`pubkeyfile`

`privkeyfile`

`passphrase`
Якщо `privkeyfile` зашифрований (як би має), необхідно надати
кодова фраза.

`local_username`
Якщо параметр `local_username` не заданий, буде використано значення з
`username`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Аутентифікація за відкритим ключем**

` <?php$connection u003d ssh2_connect('shell.example.com', 22, array('hostkey'u003d>'ssh-rsa'));if (ssh2_auth_hostbased_file($connection, 'remoteusername', 'myhost.example. com',                             '/usr/local/etc/hostkey_rsa.pub',                             '/usr/local/etc/hostkey_rsa', 'secret',                             'localusername')) {  echo "Успешная Hostbased-аутентификация по открытому ключу
";} else {  die('Невдала Hostbased-аутентифікація по відкритому ключу');}?> `

### Примітки

> **Примітка**:
>
> **ssh2_auth_hostbased_file()** вимагає libssh2 \>u003d 0.7 та PHP/SSH2 \>u003d
> 0.7
