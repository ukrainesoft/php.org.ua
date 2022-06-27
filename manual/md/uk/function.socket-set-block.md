- [«socket_sendto](function.socket-sendto.md)
- [socket_set_nonblock »](function.socket-set-nonblock.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Встановлює блокуючий режим на сокеті

# socket_set_block

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

socket_set_block — Встановлює блокуючий режим на сокеті

### Опис

**socket_set_block**([Socket](class.socket.md) `$socket`): bool

Функція **socket_set_block()** прибирає прапор **`O_NONBLOCK`** із сокету,
вказаного у параметрі `socket`.

Коли операція (наприклад, отримання, надсилання, з'єднання, прийняття
з'єднання, ...) виконується на блокувальному сокеті, скрипт буде
зупиняти своє виконання доти, доки він не отримає сигнал
чи можливість виконати операцію.

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

**Приклад #1 Приклад використання**socket_set_block()****

` <?php$socket u003d socket_create_listen(1223);socket_set_block($socket);socket_accept($socket);?> `

Цей приклад створює сокет, що слухає, на всіх інтерфейсах на порту 1223 і
встановлює сокет у режим **`O_BLOCK`**. Функція
[socket_accept()](function.socket-accept.md) зависне доти, доки
не буде прийнято з'єднання.

### Дивіться також

- [socket_set_nonblock()](function.socket-set-nonblock.md) -
Встановлює неблокуючий режим файлового дескриптора fd
- [socket_set_option()](function.socket-set-option.md) -
Встановлює опції для сокету
