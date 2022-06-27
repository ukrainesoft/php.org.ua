- [« ssh2_shell](function.ssh2-shell.md)
- [Stomp »](book.stomp.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Відкрити тунель через віддалений сервер

# ssh2_tunnel

(PECL ssh2 \>u003d 0.9.0)

ssh2_tunnel — Відкрити тунель через віддалений сервер

### Опис

**ssh2_tunnel**(resource `$session`, string `$host`, int `$port`):
resource

Відкриває потік сокету до довільного хосту/порту за допомогою
підключеного сервера SSH.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`host`

`port`

### Значення, що повертаються

### Приклади

**Приклад #1 Відкриття тунелю по довільному хосту**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);ssh2_auth_pubkey_file($connection, 'username', 'id_dsa.pub', 'id_dsa');$tunnel u003d ssh2_tunnel .0.101', 12345);?> `

### Дивіться також

- [ssh2_connect()](function.ssh2-connect.md) - Підключення до
SSH-серверу
- [fsockopen()](function.fsockopen.md) - Відкриває з'єднання з
інтернет-сокетом або доменним сокетом Unix
