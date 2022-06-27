- [«socket_getpeername](function.socket-getpeername.md)
- [socket_import_stream »](function.socket-import-stream.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- запитує локальну сторону зазначеного сокету, в результаті можна
отримати хост/порт або шлях у файловій системі Unix, залежно
від типу сокету

# socket_getsockname

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_getsockname — Запитує локальну сторону зазначеного сокету,
результаті можна отримати хост/порт або шлях у файловій системі Unix,
залежно від типу сокету

### Опис

**socket_getsockname**([Socket](class.socket.md) `$socket`, string
`&$address`, int `&$port` u003d **`null`**): bool

> **Примітка**: Функція **socket_getsockname()** не повинна
> використовувати із сокетами **`AF_UNIX`**, створеними за допомогою функції
> [socket_connect()](function.socket-connect.md). Тільки сокети,
> створені функцією [socket_accept()](function.socket-accept.md) та
> первинні серверні сокети після виклику
> [socket_bind()](function.socket-bind.md) дозволяють отримати
> осмислена відповідь під час виклику цієї функції.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений функцією
[socket_create()](function.socket-create.md) або
[socket_accept()](function.socket-accept.md).

`address`
Якщо заданий сокет має тип **`AF_INET`** або **`AF_INET6`**,
[socket_getpeername()](function.socket-getpeername.md) поверне
локальна *IP-адреса* у відповідному форматі (наприклад, `127.0.0.1`
або `fe80::1`) у параметрі `address` і, якщо необов'язковий параметр
`port` присутній також зв'язаний порт.

Якщо заданий сокет має тип **`AF_UNIX`**,
[socket_getpeername()](function.socket-getpeername.md) поверне шлях до
файлової системи Unix (тобто `/var/run/daemon.sock`) у параметр
`address`.

`port`
Якщо вказано, буде містити відповідний порт.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. **socket_getsockname()** може також
повертати **`false`**, якщо тип сокету не є одним із
**`AF_INET`**, **`AF_INET6`**, або **`AF_UNIX`**, у цьому випадку код
останньої помилки сокету *не* оновлюється.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_getpeername()](function.socket-getpeername.md) -
Запитує віддалену сторону зазначеного сокету, в результаті може
бути повернутий хост/порт або шлях у файловій системі Unix,
залежно від типу сокету
- [socket_last_error()](function.socket-last-error.md) - Повертає
останню помилку на сокеті
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
