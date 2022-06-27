- [«socket_shutdown](function.socket-shutdown.md)
- [socket_write »] (function.socket-write.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Повертає рядок, що описує помилку сокету

# socket_strerror

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_strerror — Повертає рядок, що описує помилку сокету

### Опис

**socket_strerror**(int `$error_code`): string

**socket_strerror()** отримує як параметр `error_code` код
помилки сокету, що повертається функцією
[socket_last_error()](function.socket-last-error.md) і повертає
відповідний текст із роз'ясненням.

> **Примітка**:
>
> Хоча повідомлення про помилки, створювані модулем socket, англійською
> мові, системні повідомлення, отримані цією функцією, з'являтимуться
> залежно від поточної локалі (**`LC_MESSAGES`**).

### Список параметрів

`error_code`
Допустимий код помилки сокету, швидше за все, повернутий функцією
[socket_last_error()](function.socket-last-error.md).

### Значення, що повертаються

Повертає повідомлення про помилку, пов'язане з параметром error_code.

### Приклади

**Приклад #1 Приклад використання **socket_strerror()****

` <?phpif (false u003du003d ($socket u003d @socket_create(AF_INET, SOCK_STREAM, SOL_TCP))) {   echo "socket_create() не виконана: причина: " . socket_strerror(socket_last_error()) . "
";}if(false u003du003d (@socket_bind($socket, '127.0.0.1', 80))) {   echo "socket_bind() не виконано: причина: "socket_strerror( . . socket_strerror
";}?> `

Очікуваний висновок з прикладу вище (маю на увазі, що скрипт не запущено
з привілеями суперкористувача root):

socket_bind() не виконано: причина: Доступ заборонено

### Дивіться також

- [socket_accept()](function.socket-accept.md) - Приймає
з'єднання на сокеті
- [socket_bind()](function.socket-bind.md) - Прив'язує ім'я до
сокету
- [socket_connect()](function.socket-connect.md) - Починає
з'єднання з сокетом
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
