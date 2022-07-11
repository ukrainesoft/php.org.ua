- [« ssh2_fingerprint](function.ssh2-fingerprint.md)
- [ssh2_forward_listen »](function.ssh2-forward-listen.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- приймає з'єднання, створене слухачем

# ssh2_forward_accept

(PECL ssh2 \>u003d 0.9.0)

ssh2_forward_accept — Приймає з'єднання, створене слухачем

### Опис

**ssh2_forward_accept**(resource `$listener`): resource\|false

Приймає з'єднання, створене слухачем.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`desc`
Ресурс SSH2 Listener, отриманий через виклик
[ssh2_forward_listen()](function.ssh2-forward-listen.md).

### Значення, що повертаються

Повертає ресурс потоку або **`false`** у разі виникнення помилки.
