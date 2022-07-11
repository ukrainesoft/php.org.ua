- [« socket_addrinfo_lookup](function.socket-addrinfo-lookup.md)
- [socket_clear_error »](function.socket-clear-error.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Прив'язує ім'я до сокету

# socket_bind

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_bind — Прив'язує ім'я до сокету

### Опис

**socket_bind**([Socket](class.socket.md) `$socket`, string
`$address`, int `$port` u003d 0): bool

Прив'язує ім'я, вказане в параметрі address, до сокету, описаному в
параметрі `socket`. Це має бути зроблено до того, як з'єднання
встановлено за допомогою функції
[socket_connect()](function.socket-connect.md) або
[socket_listen()](function.socket-listen.md).

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою функції
[socket_create()](function.socket-create.md).

`address`
Якщо сокет із сімейства **`AF_INET`**, то параметр `address` має бути
IP-адресою запису, розділеною точками (наприклад, `127.0.0.1`).

Якщо сокет із сімейства **`AF_UNIX`**, то параметр `address` - це шлях
до доменного сокету Unix (наприклад, `/tmp/my.sock`).

`port` (Optional)
Параметр `port` використовується, лише коли ім'я прив'язується до сокету
**`AF_INET`**, та вказує порт, на якому будуть слухатися з'єднання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

Код помилки можна отримати за допомогою функції
[socket_last_error()](function.socket-last-error.md). Цей код може
бути переданий функції [socket_strerror()](function.socket-strerror.md)
для отримання текстового опису помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Приклади

**Приклад #1 Використання функції **socket_bind()** для встановлення адреси
джерела**

`<?php// Створюємо новий сокет $ sock u003d socket_create (AF_INET, SOCK_STREAM, SOL_TCP); 'madcoder'] u003d '127.0.0.2';// Прив'язуємо адресу джерела socket_bind($sock, $sourceips['madcoder']);// З'єднуємося з адресою призначення socket_connect($sock,'0| Пишемо в сокет$request u003d 'GET / HTTP/1.1' . "
" .            'Host: example.com' . "

"; socket_write($sock, $request);// Закриваємо сокетsocket_close($sock);?> `

### Примітки

> **Примітка**:
>
> Ця функція повинна бути використана на сокеті перед викликом
> [socket_connect()](function.socket-connect.md).

> **Примітка**:
>
> Примітки щодо сумісності з Windows 9x/ME: Функція
> [socket_last_error()](function.socket-last-error.md) може
> повертати невірний код помилки при спробі зв'язати з сокетом невірний
> адреса, яка не належить вашій машині.

### Дивіться також

- [socket_connect()](function.socket-connect.md) - Починає
з'єднання з сокетом
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
- [socket_create()](function.socket-create.md) - Створює сокет
(кінцеву точку для обміну інформацією)
- [socket_last_error()](function.socket-last-error.md) - Повертає
останню помилку на сокеті
- [socket_strerror()](function.socket-strerror.md) - Повертає
рядок, що описує помилку сокету
