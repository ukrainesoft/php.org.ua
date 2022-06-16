- [« ssh2_sftp_rmdir](function.ssh2-sftp-rmdir.md)
- [ssh2_sftp_symlink »](function.ssh2-sftp-symlink.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Інформація про файл

# ssh2_sftp_stat

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_stat — Інформація про файл

### Опис

**ssh2_sftp_stat**(resource `$sftp`, string `$path`): array

Інформація про файл на сервері з урахуванням символічних посилань.

Функція працює аналогічно [stat()](function.stat.md) з обгорткою
[ssh2.sftp://](wrappers.ssh2.md) і повертає такі самі значення.

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`path`

### Значення, що повертаються

Список значень, що повертаються дивіться в описі функції
[stat()](function.stat.md).

### Приклади

**Приклад #1 Інформація про файл**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);$statinfo u003d ssh$ , '/path/to/file');$filesize u003d $statinfo['size'];$group u003d $statinfo['gid'];$owner u003d $statinfo['uid'];$atime u003d $statinfo[ 'atime'];$mtime u003d $statinfo['mtime'];$mode u003d $statinfo['mode'];?> `

### Дивіться також

- [ssh2_sftp_lstat()](function.ssh2-sftp-lstat.md) - Інформація про
символічне посилання
- [lstat()](function.lstat.md) - Повертає інформацію про файл або
символічне посилання
- [stat()](function.stat.md) - Повертає інформацію про файл
