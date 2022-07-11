- [« ssh2_sftp_stat](function.ssh2-sftp-stat.md)
- [ssh2_sftp_unlink »](function.ssh2-sftp-unlink.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Створити символічне посилання

# ssh2_sftp_symlink

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp_symlink — Створити символічне посилання

### Опис

**ssh2_sftp_symlink**(resource `$sftp`, string `$target`, string
`$link`): bool

Створює символічне посилання з ім'ям `link`, що вказує на об'єкт
`target`.

### Список параметрів

`sftp`
Ресурс SSH2 SFTP, відкритий за допомогою
[ssh2_sftp()](function.ssh2-sftp.md).

`target`
Об'єкт, на який вказуватиметься посилання.

`link`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Створення символічного посилання**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);ssh2_sftp_sym| var/run/mysql.sock', '/tmp/mysql.sock');?> `

### Дивіться також

- [ssh2_sftp_readlink()](function.ssh2-sftp-readlink.md) -
Повертає об'єкт за символічним посиланням
- [symlink()](function.symlink.md) - Створює символічне посилання
