- [« ssh2_sftp_readlink](function.ssh2-sftp-readlink.md)
- [ssh2_sftp_rename »](function.ssh2-sftp-rename.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Визначає повний шлях по даному рядку шляхом

# ssh2_sftp_realpath

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_realpath — Визначає повний шлях по даному рядку з
шляхом

### Опис

**ssh2_sftp_realpath**(resource `$sftp`, string `$filename`): string

Перетворює `filename` на повний шлях до файлу на віддаленому сервері.

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`filename`

### Значення, що повертаються

Повертає повний шлях у вигляді рядка.

### Приклади

**Приклад #1 Визначення повного шляху**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);$realpath u003d ssh , '/home/username/../../../..//./usr/../etc/passwd');/* $realpath тепер: '/etc/passwd' */?> `

### Дивіться також

- [realpath()](function.realpath.md) - Повертає канонізований
абсолютний шлях до файлу
- [ssh2_sftp_symlink()](function.ssh2-sftp-symlink.md) - Створити
символічне посилання
- [ssh2_sftp_readlink()](function.ssh2-sftp-readlink.md) -
Повертає об'єкт за символічним посиланням
