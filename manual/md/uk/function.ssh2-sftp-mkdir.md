- [« ssh2_sftp_lstat](function.ssh2-sftp-lstat.md)
- [ssh2_sftp_readlink »](function.ssh2-sftp-readlink.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Створити директорію

# ssh2_sftp_mkdir

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_mkdir — Створити директорію

### Опис

**ssh2_sftp_mkdir**(
resource `$sftp`,
string `$dirname`,
int `$mode` u003d 0777,
bool `$recursive` u003d **`false`**
): bool

Створює директорію на сервері із заданими в `mode` правами доступу.

Функція подібна до використання [mkdir()](function.mkdir.md) з
обгорткою [ssh2.sftp://](wrappers.ssh2.md).

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`dirname`
Дорога до нової директорії.

`mode`
Маска прав доступу. Фактичний режим залежить від поточного umask.

`recursive`
Якщо `recursive` заданий як **`true`**, створюються всі батьківські
директорії `dirname`, якщо їх немає.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Створення директорії на віддаленому сервері**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);ssh2_sftp_mkdir home/username/newdir');/* Або так: mkdir("ssh2.sftp://$sftp/home/username/newdir"); */?> `

### Дивіться також

- [mkdir()](function.mkdir.md) - Створює директорію
- [ssh2_sftp_rmdir()](function.ssh2-sftp-rmdir.md) - Видаляє
директорію
