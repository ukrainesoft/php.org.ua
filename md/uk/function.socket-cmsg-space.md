- [«socket_close](function.socket-close.md)
- [socket_connect »](function.socket-connect.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Обчислити розмір буфера повідомлення

# socket_cmsg_space

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

socket_cmsg_space — Обчислити розмір буфера повідомлення

### Опис

**socket_cmsg_space**(int `$level`, int `$type`, int `$num` u003d 0): ?int

Обчислює розмір буфера, який має бути виділено для отримання
допоміжні дані.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`level`

`type`

### Значення, що повертаються

### Дивіться також

- [socket_recvmsg()](function.socket-recvmsg.md) - Прочитати
повідомлення
- [socket_sendmsg()](function.socket-sendmsg.md) - Надіслати
повідомлення
