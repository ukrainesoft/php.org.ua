- [« ssh2_scp_recv](function.ssh2-scp-recv.md)
- [ssh2_send_eof »](function.ssh2-send-eof.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Надсилання файлу через SCP

#ssh2_scp_send

(PECL ssh2 \>u003d 0.9.0)

ssh2_scp_send — Надсилання файлу через SCP

### Опис

**ssh2_scp_send**(
resource `$session`,
string `$local_file`,
string `$remote_file`,
int `$create_mode` u003d 0644
): bool

Копіювання файлу з клієнта на сервер за допомогою протоколу SCP.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`local_file`
Шлях до локального файлу.

`remote_file`
Шлях на сервері, куди буде збережено файл.

`create_mode`
Файл буде створено з правами доступу, вказаними в create_mode.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Завантаження файлу на сервер через SCP**

` <?php$connection u003dssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');ssh2_scp_send($connection, '/local/filename', '/remote filename', 0644);?> `

### Дивіться також

- [ssh2_scp_recv()](function.ssh2-scp-recv.md) - Запит файлу через
SCP
- [copy()](function.copy.md) - Копіює файл
