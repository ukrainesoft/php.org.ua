- [«socket_cmsg_space](function.socket-cmsg-space.md)
- [socket_create_listen »](function.socket-create-listen.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Починає з'єднання із сокетом

# socket_connect

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_connect — починає з'єднання з сокетом

### Опис

**socket_connect**([Socket](class.socket.md) `$socket`, string
`$address`, ?int `$port` u003d **`null`**): bool

Ініціалізує з'єднання з адресою address, використовуючи екземпляр
[Socket](class.socket.md) `socket`, який має бути екземпляром
[Socket](class.socket.md), створеним за допомогою функції
[socket_create()](function.socket-create.md).

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою
[socket_create()](function.socket-create.md).

`address`
Параметр address може бути IPv4-адресою в запису, розділеною точками
(наприклад, `127.0.0.1`), якщо параметр `socket` дорівнює **`AF_INET`**,
правильна IPv6-адреса (наприклад, `::1`), якщо включена підтримка IPv6 та
параметр `socket` дорівнює **`AF_INET6`** або шлях до файлу доменного сокету
Unix, якщо використовується сімейство сокетів **`AF_UNIX`**.

`port`
Параметр `port` використовується і обов'язковий лише в тому випадку, якщо
відбувається з'єднання з сокетом **`AF_INET`** або **`AF_INET6`**, і він
вказує порт на віддаленому хості, до якого має бути створено
з'єднання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Код помилки може бути отриманий за допомогою
функції [socket_last_error()](function.socket-last-error.md). Цей код
може бути потім переданий функції
[socket_strerror()](function.socket-strerror.md) для отримання
текстового опису помилки.

> **Примітка**:
>
> Якщо неблокуючий сокет, то ця функція повертає **`false`** з
> помилкою `Operation now in progress`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |
| 8.0.0 | `port` тепер припускає значення null. |

### Дивіться також

- [socket_bind()](function.socket-bind.md) - Прив'язує ім'я до
сокету
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
- [socket_last_error()](function.socket-last-error.md) - Повертає
останню помилку на сокеті
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
