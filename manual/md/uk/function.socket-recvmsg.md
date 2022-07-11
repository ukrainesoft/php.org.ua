- [«socket_recvfrom](function.socket-recvfrom.md)
- [socket_select »](function.socket-select.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Прочитати повідомлення

# socket_recvmsg

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

socket_recvmsg — Прочитати повідомлення

### Опис

**socket_recvmsg**([Socket](class.socket.md) `$socket`, array
`&$message`, int `$flags` u003d 0): int\|false

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`socket`

`message`

`flags`

### Значення, що повертаються

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_sendmsg()](function.socket-sendmsg.md) - Надіслати
повідомлення
- [socket_cmsg_space()](function.socket-cmsg-space.md) - Обчислити
розмір буфера повідомлення
