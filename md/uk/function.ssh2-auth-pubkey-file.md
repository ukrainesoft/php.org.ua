- [« ssh2_auth_password](function.ssh2-auth-password.md)
- [ssh2_connect »](function.ssh2-connect.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Аутентифікація з відкритим ключем

# ssh2_auth_pubkey_file

(PECL ssh2 \>u003d 0.9.0)

ssh2_auth_pubkey_file — Аутентифікація з відкритим ключем

### Опис

**ssh2_auth_pubkey_file**(
resource `$session`,
string `$username`,
string `$pubkeyfile`,
string `$privkeyfile`,
string `$passphrase` u003d ?
): bool

Аутентифікація з відкритим ключем, збереженим у файлі.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`username`

`pubkeyfile`
Відкритий ключ у форматі OpenSSH. Має виглядати приблизно так:

ssh-rsa AAAAB3NzaC1yc2EAAA....NX6sqSnHA8u003d rsa-key-20121110

`privkeyfile`

`passphrase`
Якщо `privkeyfile` зашифрований (як би має), то необхідно
надати `passphrase`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Аутентифікація з відкритим ключем**

`<?php$connection u003d ssh2_connect('shell.example.com', 22, array('hostkey'u003d>'ssh-rsa'));if (ssh2_auth_pubkey_file($connection, 'username',                /.ssh/id_rsa.pub',                            '/home/username/.ssh/id_rsa', 'secret')укомплектація|
";} else {  die('Невдала аутентифікація з відкритим ключом');}?> `

### Примітки

> **Примітка**:
>
> Основна бібліотека libssh не підтримує часткові автентифікації
> дуже чисто. Тобто, якщо вам потрібно надати як відкритий ключ,
> так і пароль, він виглядатиме так, як якщо б ця функція
> зазнала невдачі. У цьому конкретному випадку невдалий виклик може
> означати, що автентифікація не завершена. Вам потрібно ігнорувати це
> невдале виконання, продовжити роботу та викликати
> [ssh2_auth_password()](function.ssh2-auth-password.md) для
> завершення автентифікації.
