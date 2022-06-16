- [« ssh2_forward_accept](function.ssh2-forward-accept.md)
- [ssh2_methods_negotiated »](function.ssh2-methods-negotiated.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Зв'язує порт на віддаленому сервері та прослуховує з'єднання

# ssh2_forward_listen

(PECL ssh2 \>u003d 0.9.0)

ssh2_forward_listen — Зв'язує порт на віддаленому сервері та прослуховує
з'єднання

### Опис

**ssh2_forward_listen**(
resource `$session`,
int `$port`,
string `$host` u003d ?,
int `$max_connections` u003d 16
): resource \ | false

Зв'язує порт на віддаленому сервері та прослуховує з'єднання.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`session`
Ресурс SSH Session, отриманий через виклик
[ssh2_connect()](function.ssh2-connect.md).

`port`
Порт віддаленого сервера.

`host`

`max_connections`

### Значення, що повертаються

Повертає SSH2 Listener або **`false`** у разі виникнення помилки.

### Дивіться також

- [ssh2_forward_accept()](function.ssh2-forward-accept.md) -
Приймає з'єднання, створене слухачем
