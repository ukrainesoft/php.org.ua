- [«socket_send](function.socket-send.md)
- [socket_sendto »](function.socket-sendto.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
-   Надіслати повідомлення

# socket_sendmsg

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

socket_sendmsg — Надіслати повідомлення

### Опис

**socket_sendmsg**([Socket](class.socket.md) `$socket`, array
`$message`, int `$flags` u003d 0): int\|false

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`socket`

`message`

`flags`

### Значення, що повертаються

Повертає кількість відправлених байтів або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_recvmsg()](function.socket-recvmsg.md) - Прочитати
повідомлення
- [socket_cmsg_space()](function.socket-cmsg-space.md) - Обчислити
розмір буфера повідомлення
