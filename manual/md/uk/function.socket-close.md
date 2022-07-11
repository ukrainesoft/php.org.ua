- [«socket_clear_error](function.socket-clear-error.md)
- [socket_cmsg_space »](function.socket-cmsg-space.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Закриває екземпляр Socket

# socket_close

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_close - Закриває екземпляр [Socket](class.socket.md)

### Опис

**socket_close**([Socket](class.socket.md) `$socket`): void

Функція **socket_close()** закриває екземпляр
[Socket](class.socket.md), вказаний параметром `socket`.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функцій
[socket_create()](function.socket-create.md) або
[socket_accept()](function.socket-accept.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_bind()](function.socket-bind.md) - Прив'язує ім'я до
сокету
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
