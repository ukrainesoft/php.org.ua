- [« ssh2_fetch_stream](function.ssh2-fetch-stream.md)
- [ssh2_forward_accept »](function.ssh2-forward-accept.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Отримання відбитка віддаленого сервера

# ssh2_fingerprint

(PECL ssh2 \>u003d 0.9.0)

ssh2_fingerprint — отримання відбитка віддаленого сервера

### Опис

**ssh2_fingerprint**(resource `$session`, int `$flags` u003d
SSH2_FINGERPRINT_MD5 \| SSH2_FINGERPRINT_HEX): string

Повертає хеш ключа хоста з активної сесії.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

`flags`
`flags` може бути **`SSH2_FINGERPRINT_MD5`** або
**`SSH2_FINGERPRINT_SHA1`**, об'єднані логічним АБО (OR) з
**`SSH2_FINGERPRINT_HEX`** або **`SSH2_FINGERPRINT_RAW`**.

### Значення, що повертаються

Повертає хеш ключа хоста у вигляді рядка.

### Приклади

**Приклад #1 Перевірка відбитка з відомим значенням**

` <?php$known_host u003d '6F89C2F0A719B30CC38ABDF90755F2E4';$connection u003d ssh2_connect('shell.example.com', 22);$fingerprint u003d ssh2_fingerprint($connection,               SSH2_FINGERPRINT_MD5 | SSH2_FINGERPRINT_HEX);if ($fingerprint !u003d $known_host) { die("Ключ хоста не збігається!"
" .      "Можливо, атака посередника?");}?> `
