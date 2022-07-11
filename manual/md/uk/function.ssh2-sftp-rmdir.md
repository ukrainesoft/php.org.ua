- [« ssh2_sftp_rename](function.ssh2-sftp-rename.md)
- [ssh2_sftp_stat »](function.ssh2-sftp-stat.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Видаляє директорію

# ssh2_sftp_rmdir

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_rmdir — Видаляє директорію

### Опис

**ssh2_sftp_rmdir**(resource `$sftp`, string `$dirname`): bool

Видаляє директорію на сервері.

Працює аналогічно [rmdir()](function.rmdir.md) з обгорткою
[ssh2.sftp://](wrappers.ssh2.md).

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`dirname`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Видалення директорії на сервері**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);ssh2_sftp_rmdir home/username/deltodel');/* Або так: rmdir("ssh2.sftp://$sftp/home/username/dirtodel"); */?> `

### Дивіться також

- [rmdir()](function.rmdir.md) - Видаляє директорію
- [ssh2_sftp_mkdir()](function.ssh2-sftp-mkdir.md) - Створити
директорію
