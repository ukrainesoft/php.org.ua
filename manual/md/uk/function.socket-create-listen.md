- [«socket_connect](function.socket-connect.md)
- [socket_create_pair »](function.socket-create-pair.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Відкриває сокет на вказаному порту для прийняття з'єднань

# socket_create_listen

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_create_listen — Відкриває сокет на вказаному порту для прийняття
з'єднань

### Опис

**socket_create_listen**(int `$port`, int `$backlog` u003d 128):
[Socket](class.socket.md)\|false

**socket_create_listen()** створює новий екземпляр
[Socket](class.socket.md) типу **`AF_INET`**, який слухає на *всіх*
локальних інтерфейсах вказаний порт в очікуванні нових з'єднань.

Ця функція призначена для спрощення завдання створення нового сокету,
який лише слухає порт для отримання нових з'єднань.

### Список параметрів

`port`
Порт, який слід слухати на всіх інтерфейсах.

`backlog`
Параметр backlog визначає максимальну довжину, до якої може
зрости черга очікуваних з'єднань. **`SOMAXCONN`** може бути переданий
як параметр `backlog`, дивіться
[socket_listen()](function.socket-listen.md) для повнішої
інформації.

### Значення, що повертаються

**socket_create_listen()** повертає новий екземпляр
[Socket](class.socket.md) у разі успішного виконання або
**`false`** у разі виникнення помилки. Код помилки може бути отриманий
за допомогою функції
[socket_last_error()](function.socket-last-error.md). Цей код може
бути переданий функції [socket_strerror()](function.socket-strerror.md)
для отримання текстового опису помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------|
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [Socket](class.socket.md); раніше повертався ресурс (resource). |

### Примітки

> **Примітка**:
>
> Якщо ви хочете створити сокет, який прослуховуватиме тільки
> певний інтерфейс, потрібно використовувати функції
> [socket_create()](function.socket-create.md),
> [socket_bind()](function.socket-bind.md) та
> [socket_listen()](function.socket-listen.md).

### Дивіться також

- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
- [socket_create_pair()](function.socket-create-pair.md) - Створює
пару невиразних сокетів і зберігає їх у масиві
- [socket_bind()](function.socket-bind.md) - Прив'язує ім'я до
сокету
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
- [socket_last_error()](function.socket-last-error.md) - Повертає
останню помилку на сокеті
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
