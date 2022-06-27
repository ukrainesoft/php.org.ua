- [«socket_last_error](function.socket-last-error.md)
- [socket_read »](function.socket-read.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- прослуховує вхідні з'єднання на сокеті

# socket_listen

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_listen — Прослуховує вхідні з'єднання на сокеті

### Опис

**socket_listen**([Socket](class.socket.md) `$socket`, int `$backlog`
u003d 0): bool

Після того, як сокет `socket` був створений за допомогою функції
[socket_create()](function.socket-create.md) і прив'язаний до імені при
допомогою функції [socket_bind()](function.socket-bind.md), йому можна
вказати слухати вхідні з'єднання на сокеті `socket`.

Функція **socket_listen()** застосовна лише до сокетів типу
**`SOCK_STREAM`** або **`SOCK_SEQPACKET`**.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функцій
[socket_create()](function.socket-create.md) або
[socket_addrinfo_bind()](function.socket-addrinfo-bind.md).

`backlog`
Максимум backlog вхідних з'єднань буде поміщено в чергу на
обробку. Якщо запит на підключення прийде, коли черга заповнена,
клієнт може отримати помилку `ECONNREFUSED`, або якщо базовий протокол
дозволяє повторну передачу, запит буде повторено.

> **Примітка**:
>
> Максимальне значення параметра `backlog` дуже залежить
> використовуваної платформи. У Linux дуже велике значення буде мовчки
> обрізано до **`SOMAXCONN`**. У win32, якщо передано **`SOMAXCONN`**,
> базовий провайдер сервісу, відповідального за сокет, встановить цей
> параметр максимальним *розумним* значенням. Ні стандартного способу
> дізнатися про актуальне значення "backlog" для цієї платформи.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Код помилки може бути отриманий за допомогою
функції [socket_last_error()](function.socket-last-error.md). Цей код
може бути переданий функції
[socket_strerror()](function.socket-strerror.md) для отримання
текстового опису помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_accept()](function.socket-accept.md) - Приймає
з'єднання на сокеті
- [socket_bind()](function.socket-bind.md) - Прив'язує ім'я до
сокету
- [socket_connect()](function.socket-connect.md) - Починає
з'єднання з сокетом
- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
- [socket_addrinfo_bind()](function.socket-addrinfo-bind.md) -
Створити та прив'язати до сокету із зазначеного addrinfo
