- [« ssh2_disconnect](function.ssh2-disconnect.md)
- [ssh2_fetch_stream »](function.ssh2-fetch-stream.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Виконання команди на віддаленому сервері

# ssh2_exec

(PECL ssh2 \>u003d 0.9.0)

ssh2_exec — Виконання команди на віддаленому сервері

### Опис

**ssh2_exec**(
resource `$session`,
string `$command`,
string `$pty` u003d ?,
array `$env` u003d ?,
int `$width` u003d 80,
int `$height` u003d 25,
int `$width_height_type` u003d SSH2_TERM_UNIT_CHARS
): resource \ | false

Запуск команди на віддаленому сервері та виділення для неї каналу.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`command`

`pty`

`env`
`env` може передаватися як асоціативний масив пар ім'я/значення,
що представляють змінні оточення, які потрібно встановити перед
запуск команди.

`width`
Ширина віртуального терміналу.

`height`
Висота віртуального терміналу.

`width_height_type`
`width_height_type` має бути **`SSH2_TERM_UNIT_CHARS`** або
**`SSH2_TERM_UNIT_PIXELS`**.

### Значення, що повертаються

Повертає потік у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Виконання команди**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$stream u003d ssh2_exec($connection, '/usr/local/bin/ php -i');?> `

### Дивіться також

- [ssh2_connect()](function.ssh2-connect.md) - Підключення до
SSH-серверу
- [ssh2_shell()](function.ssh2-shell.md) - Запитує інтерактивний
термінал
- [ssh2_tunnel()](function.ssh2-tunnel.md) - Відкрити тунель через
віддалений сервер
