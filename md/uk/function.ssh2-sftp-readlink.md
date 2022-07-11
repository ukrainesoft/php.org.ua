- [« ssh2_sftp_mkdir](function.ssh2-sftp-mkdir.md)
- [ssh2_sftp_realpath »](function.ssh2-sftp-realpath.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Повертає об'єкт за символічним посиланням

# ssh2_sftp_readlink

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_readlink — Повертає об'єкт за символічним посиланням

### Опис

**ssh2_sftp_readlink**(resource `$sftp`, string `$link`): string

Повертає об'єкт за символічним посиланням.

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`link`
Шлях до символічного посилання.

### Значення, що повертаються

Повертає об'єкт, який дивиться посилання `link`.

### Приклади

**Приклад #1 Читання символічного посилання**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);$target u003d ssh2 , '/tmp/mysql.sock');/* $target тепер такий (наприклад): '/var/run/mysql.sock' */?> `

### Дивіться також

- [readlink()](function.readlink.md) - Повертає файл, на який
вказує символічне посилання
- [ssh2_sftp_symlink()](function.ssh2-sftp-symlink.md) - Створити
символічне посилання
