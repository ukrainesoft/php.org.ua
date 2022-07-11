- [« Функції сокету](ref.sockets.md)
- [socket_addrinfo_bind »](function.socket-addrinfo-bind.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- приймає з'єднання на сокеті

# socket_accept

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_accept — Приймає з'єднання на сокеті

### Опис

**socket_accept**([Socket](class.socket.md) `$socket`):
[Socket](class.socket.md)\|false

Після того, як сокет `socket` був створений за допомогою функції
[socket_create()](function.socket-create.md), прив'язаний до імені при
за допомогою функції [socket_bind()](function.socket-bind.md), і йому було
вказано слухати з'єднання за допомогою функції
[socket_listen()](function.socket-listen.md), ця функція буде
приймати вхідні з'єднання на цьому сокеті. Щойно сталося
вдале з'єднання, повертається екземпляр [Socket](class.socket.md),
який може бути використаний для зв'язку. Якщо у черзі сокету є
кілька з'єднань, буде використано першу з них. Якщо ні
очікуючих з'єднань, то функція **socket_accept()** блокуватиме
виконання скрипту доти, доки з'явиться з'єднання. Якщо сокет
`socket` був зроблений неблокуючим за допомогою функції
[socket_set_blocking()](function.socket-set-blocking.md) або
[socket_set_nonblock()](function.socket-set-nonblock.md), буде
повернено **`false`**.

Примірник [Socket](class.socket.md), отриманий за допомогою функції
**socket_accept()** не може бути використаний для прийняття нових
з'єднань. Проте початковий слухаючий сокет `socket` залишається
відкритим та може бути використаний повторно.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функції
[socket_create()](function.socket-create.md).

### Значення, що повертаються

У разі успішного виконання повертає екземпляр
[Socket](class.socket.md) або **`false`** у разі виникнення
помилки. Код помилки можна отримати за допомогою виклику функції
[socket_last_error()](function.socket-last-error.md). Цей код помилки
може бути переданий функції
[socket_strerror()](function.socket-strerror.md) для отримання
текстового опису помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------|
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [Socket](class.socket.md); раніше повертався ресурс (resource). |

### Дивіться також

- [socket_connect()](function.socket-connect.md) - Починає
з'єднання з сокетом
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
- [socket_bind()](function.socket-bind.md) - Прив'язує ім'я до
сокету
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
