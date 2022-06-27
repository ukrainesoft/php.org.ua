- [« ssh2_sftp_symlink](function.ssh2-sftp-symlink.md)
- [ssh2_sftp »](function.ssh2-sftp.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Видалити файл на сервері

# ssh2_sftp_unlink

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_unlink — Видалити файл на сервері

### Опис

**ssh2_sftp_unlink**(resource `$sftp`, string `$filename`): bool

Видаляє файл на сервері.

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`filename`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Видалення файлу**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);ssh2_sftp_unlink('$ home/username/stale_file');?> `

### Дивіться також

- [unlink()](function.unlink.md) - Видаляє файл
