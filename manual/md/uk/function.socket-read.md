- [«socket_listen](function.socket-listen.md)
- [socket_recv »] (function.socket-recv.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Читає рядок максимальну довжину байт із сокету

# socket_read

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_read — Читає рядок максимальну довжину байт із сокету

### Опис

**socket_read**([Socket](class.socket.md) `$socket`, int `$length`,
int `$mode` u003d **`PHP_BINARY_READ`**): string\|false

Функція **socket_read()** читає дані з екземпляра
[Socket](class.socket.md) `socket`, створеного за допомогою функцій
[socket_create()](function.socket-create.md) або
[socket_accept()](function.socket-accept.md).

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функцій
[socket_create()](function.socket-create.md) або
[socket_accept()](function.socket-accept.md).

`length`
Максимальна кількість байт для читання визначена параметром length.
Як варіант ви можете використати **``**, **`
`**, або **` `** для
закінчення читання (залежно від параметра `mode` дивіться нижче).

`mode`
Необов'язковий параметр `mode` - це іменована константа:

- **`PHP_BINARY_READ`** (За замовчуванням) - використовується системна
функція `recv()`. Безпечно для читання бінарних даних.
- **`PHP_NORMAL_READ`** - читання зупиняється на `
або`.

### Значення, що повертаються

**socket_read()** повертає дані у вигляді рядка у разі успішного
виконання, або **`false`** у разі виникнення помилки (включаючи
випадок, коли віддалений хост закрив з'єднання). Код помилки може бути
отримано за допомогою функції
[socket_last_error()](function.socket-last-error.md). Цей код може
бути переданий функції [socket_strerror()](function.socket-strerror.md)
для отримання текстового опису помилки.

> **Примітка**:
>
> **socket_read()** повертає рядок нульової довжини (""), коли більше
> немає даних для читання.

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
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
- [socket_last_error()](function.socket-last-error.md) - Повертає
останню помилку на сокеті
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
- [socket_write()](function.socket-write.md) - Запис у сокет
