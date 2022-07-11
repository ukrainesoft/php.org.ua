- [« ssh2_sftp_unlink](function.ssh2-sftp-unlink.md)
- [ssh2_shell »](function.ssh2-shell.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Ініціалізувати підсистему SFTP

# ssh2_sftp

(PECL ssh2 \>u003d 0.9.0)

ssh2_sftp — Ініціалізувати підсистему SFTP

### Опис

**ssh2_sftp**(resource `$session`): resource\|false

Запитує підсистему SFTP із вже відкритого з'єднання SSH2.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

### Значення, що повертаються

Цей метод повертає ресурс `SSH2 SFTP` для використання в інших
функціях ssh2_sftp\_\*() та обгортці [ssh2.sftp://](wrappers.ssh2.md)
для fopen або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Відкриття файлу через SFTP**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$sftp u003d ssh2_sftp($connection);$stream u003d fopen('fopen(' .sftp://' . intval($sftp) . '/path/to/file', 'r');?> `

### Дивіться також

- [ssh2_scp_recv()](function.ssh2-scp-recv.md) - Запит файлу через
SCP
- [ssh2_scp_send()](function.ssh2-scp-send.md) - Надсилання файлу
через SCP
