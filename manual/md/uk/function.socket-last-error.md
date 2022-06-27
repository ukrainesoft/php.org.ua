- [«socket_import_stream](function.socket-import-stream.md)
- [socket_listen »](function.socket-listen.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Повертає останню помилку на сокеті

# socket_last_error

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_last_error — Повертає останню помилку на сокеті

### Опис

**socket_last_error**(?[Socket](class.socket.md) `$socket` u003d
**`null`**): int

Якщо екземпляр [Socket](class.socket.md) передано цієї функції, то
повертається остання помилка, що сталася на цьому конкретному
сокет. Якщо `socket` не вказано, повертається код помилки останньої
невдалої функції сокетів. Останнє особливо корисне для таких
функцій, як [socket_create()](function.socket-create.md), яка не
повертає сокет у разі невдачі та
[socket_select()](function.socket-select.md), яка може
закінчитися невдало з причин, не пов'язаних безпосередньо з
будь-яким конкретним сокетом. Код помилки підходить для передачі функції
[socket_strerror()](function.socket-strerror.md), яка повертає
рядок, що описує вказаний код помилки.

Якщо помилок немає або вони були очищені функцією
[socket_clear_error()](function.socket-clear-error.md), функція поверне
`0`.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функції
[socket_create()](function.socket-create.md).

### Значення, що повертаються

Ця функція повертає код помилки сокету.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |
| 8.0.0 | `socket` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **socket_last_error()****

` <?php$socket u003d @socket_create(AF_INET, SOCK_STREAM, SOL_TCP);if ($socket u003du003du003d false) {    $errorcode u003d socket_last_error(); $errormsgu003du003dsocket_strerror($errorcode); die("Не можу створити сокет: [$errorcode] $errormsg");}?> `

### Примітки

> **Примітка**:
>
> **socket_last_error()** не очищає код помилки, використовуйте
> [socket_clear_error()](function.socket-clear-error.md) для цієї
> Цілі.
