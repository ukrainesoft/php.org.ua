- [«socket_set_block](function.socket-set-block.md)
- [socket_set_option »](function.socket-set-option.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Встановлює неблокуючий режим файлового дескриптора fd

# socket_set_nonblock

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_set_nonblock — Встановлює неблокуючий режим для файлового
дескриптора fd

### Опис

**socket_set_nonblock**([Socket](class.socket.md) `$socket`): bool

Функція **socket_set_nonblock()** встановлює прапор **`O_NONBLOCK`** на
сокеті, вказаному у параметрі `socket`.

Коли операція (наприклад, отримання, надсилання, з'єднання, прийняття
з'єднання, ...) виконується на неблокуючому сокеті, скрипт не буде
призупиняти своє виконання до отримання сигналу чи можливості
виконати операцію. Якщо операція, що виконується, повинна привести до
блокування виконання скрипта, то замість цього функція, що викликається
поверне помилку.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функції
[socket_create()](function.socket-create.md) або
[socket_accept()](function.socket-accept.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Приклади

**Приклад #1 Приклад використання **socket_set_nonblock()****

` <?php$socket u003d socket_create_listen(1223);socket_set_nonblock($socket);socket_accept($socket);?> `

Цей приклад створює сокет, що слухає, на всіх інтерфейсах на порту 1223 і
встановлює сокет у режим **`O_NONBLOCK`**.
[socket_accept()](function.socket-accept.md) буде негайно
повертати помилку, якщо тільки саме в цей момент немає очікуваного
з'єднання.

### Дивіться також

- [socket_set_block()](function.socket-set-block.md) - Встановлює
блокуючий режим на сокеті
- [socket_set_option()](function.socket-set-option.md) -
Встановлює опції для сокету
- [stream_set_blocking()](function.stream-set-blocking.md) -
Встановити блокуючий/неблокуючий режим у потоці
