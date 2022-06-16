- [« ssh2_publickey_remove](function.ssh2-publickey-remove.md)
- [ssh2_scp_send »](function.ssh2-scp-send.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Запит файлу через SCP

# ssh2_scp_recv

(PECL ssh2 \>u003d 0.9.0)

ssh2_scp_recv — Запит файлу через SCP

### Опис

**ssh2_scp_recv**(resource `$session`, string `$remote_file`, string
`$local_file`): bool

Копіювання файлу з сервера на клієнт за допомогою протоколу SCP.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`remote_file`
Дорога до файлу на сервері.

`local_file`
Локальний шлях для збереження.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Завантаження файлу через SCP**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');ssh2_scp_recv($connection, '/remote/filename', '/local filename');?> `

### Дивіться також

- [ssh2_scp_send()](function.ssh2-scp-send.md) - Надсилання файлу
через SCP
- [copy()](function.copy.md) - Копіює файл
