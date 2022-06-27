- [« ssh2_sftp_realpath](function.ssh2-sftp-realpath.md)
- [ssh2_sftp_rmdir »](function.ssh2-sftp-rmdir.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Перейменовує файл

#ssh2_sftp_rename

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_rename — Перейменовує файл

### Опис

**ssh2_sftp_rename**(resource `$sftp`, string `$from`, string `$to`):
bool

Перейменує файл на сервер.

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`from`
Початковий файл.

`to`
Нове ім'я, яке замінить `from`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Перейменування файлу**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);ssh2_sftp_rename('$ home/username/oldname', '/home/username/newname');?> `

### Дивіться також

- [rename()](function.rename.md) - Перейменовує файл або
директорію
