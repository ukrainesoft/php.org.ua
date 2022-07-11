- [« ssh2_send_eof](function.ssh2-send-eof.md)
- [ssh2_sftp_lstat »](function.ssh2-sftp-lstat.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Зміна прав доступу

# ssh2_sftp_chmod

(PECL ssh2 \>u003d 0.12)

ssh2_sftp_chmod — Зміна прав доступу

### Опис

**ssh2_sftp_chmod**(resource `$sftp`, string `$filename`, int `$mode`):
bool

Намагається змінити права доступу вказаного файлу на сервері на `mode`.

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`filename`
Дорога до файлу на сервері.

`mode`
Права доступу до файлу. Для більш детальної інформації дивіться опис
функції [chmod()](function.chmod.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Зміна прав доступу до файлу**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);ssh2_sftp_chmod' somedir/somefile', 0755);?> `

### Дивіться також

- [chmod()](function.chmod.md) - Змінює режим доступу до файлу
- [ssh2_sftp()](function.ssh2-sftp.md) - Ініціалізувати підсистему
SFTP
- [ssh2_connect()](function.ssh2-connect.md) - Підключення до
SSH-серверу
