- [« ssh2_exec](function.ssh2-exec.md)
- [ssh2_fingerprint »](function.ssh2-fingerprint.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- отримання розширеного потоку даних

#ssh2_fetch_stream

(PECL ssh2 \>u003d 0.9.0)

ssh2_fetch_stream — отримання розширеного потоку даних

### Опис

**ssh2_fetch_stream**(resource `$channel`, int `$streamid`): resource

Вибирає альтернативний підпотік, пов'язаний із потоком каналу SSH2. На
на даний момент протокол SSH2 визначає лише один підпотік STDERR,
що має ідентифікатор **`SSH2_STREAM_STDERR`** (визначений як 1).

### Список параметрів

`channel`

`streamid`
Потік каналу SSH2.

### Значення, що повертаються

Повертає запитаний ресурс потоку.

### Приклади

**Приклад #1 Відкриття консолі та отримання пов'язаного з нею потоку
STDERR**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($connection, 'username', 'password');$stdio_stream u003d ssh2_shell($connection);$stderr_stream_femu003du003d , SSH2_STREAM_STDERR);?> `

### Дивіться також

- [ssh2_shell()](function.ssh2-shell.md) - Запитує інтерактивний
термінал
- [ssh2_exec()](function.ssh2-exec.md) - Виконання команди на
віддаленому сервері
- [ssh2_connect()](function.ssh2-connect.md) - Підключення до
SSH-серверу
