- [« socket_set_nonblock](function.socket-set-nonblock.md)
- [socket_setopt »](function.socket-setopt.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Встановлює опції для сокету

# socket_set_option

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

socket_set_option — Встановлює опції для сокету

### Опис

**socket_set_option**(
[Socket](class.socket.md) `$socket`,
int `$level`,
int `$option`,
array\|string\|int `$value`
): bool

Функція **socket_set_option()** встановлює опцію, вказану в
параметрі `option`, на рівні протоколу `level`, значення, вказане
параметром `value` для сокету `socket`.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функції
[socket_create()](function.socket-create.md) або
[socket_accept()](function.socket-accept.md).

`level`
Параметр `level` вказує рівень протоколу, на якому використовується
опція. Наприклад, щоб встановити опції на рівні сокету, параметр
`level` має бути встановлений у **`SOL_SOCKET`**. Інші рівні, такі
як TCP можна використовувати, вказавши номер протоколу цього рівня. Номер
протоколів можна знайти за допомогою функції
[getprotobyname()](function.getprotobyname.md).

`option`
Можливі опції для сокету ті самі, як і для функції
[socket_get_option()](function.socket-get-option.md).

`value`
Значення опції.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Приклади

**Приклад #1 Приклад використання **socket_set_option()****

` <?php$socket u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP);if (!is_resource($socket)) {    echo 'Не можу створити сокет: '. socket_strerror(socket_last_error()) . PHP_EOL;}if(!socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1)) {    echo 'Не можу встановити опцію на сокеті: '. socket_strerror(socket_last_error()) . PHP_EOL;}if (!socket_bind($socket, '127.0.0.1', 1223)) {   echo 'Не можу прив'язати сокет: '. socket_strerror(socket_last_error()) . PHP_EOL;}$rval u003d socket_get_option($socket, SOL_SOCKET, SO_REUSEADDR);if ($rval u003du003du003d false) {    echo 'Не можу отримати опцію сокет. socket_strerror(socket_last_error()) . PHP_EOL;} else if ($rval !u003du003d 0) {    echo 'Опція SO_REUSEADDR встановлена на сокеті!' . PHP_EOL;}?> `

### Дивіться також

- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
- [socket_bind()](function.socket-bind.md) - Прив'язує ім'я до
сокету
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
- [socket_last_error()](function.socket-last-error.md) - Повертає
останню помилку на сокеті
- [socket_get_option()](function.socket-get-option.md) - Отримує
опції потоку для сокету
