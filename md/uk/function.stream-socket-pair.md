- [«stream_socket_get_name](function.stream-socket-get-name.md)
- [stream_socket_recvfrom »](function.stream-socket-recvfrom.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Створює пару підключених, невиразних потоків сокетів

#stream_socket_pair

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

stream_socket_pair — Створює пару підключених, невиразних потоків
сокетів

### Опис

**stream_socket_pair**(int `$domain`, int `$type`, int `$protocol`):
array\|false

**stream_socket_pair()** створює пару підключених, невиразних потоків
сокетів. Ця функція зазвичай використовується в IPC (міжпроцесному
взаємодії).

### Список параметрів

`domain`
Використовуване сімейство протоколів: **`STREAM_PF_INET`**,
**`STREAM_PF_INET6`** або **`STREAM_PF_UNIX`**

`type`
Тип взаємодії, що використовується: **`STREAM_SOCK_DGRAM`**,
**`STREAM_SOCK_RAW`**, **`STREAM_SOCK_RDM`**,
**`STREAM_SOCK_SEQPACKET`** або **`STREAM_SOCK_STREAM`**

`protocol`
Протокол, що використовується: **`STREAM_IPPROTO_ICMP`**,
**`STREAM_IPPROTO_IP`**, **`STREAM_IPPROTO_RAW`**,
**`STREAM_IPPROTO_TCP`** or **`STREAM_IPPROTO_UDP`**

> **Примітка**: Будь ласка, зверніться до розділу [Список потоковых
> констант](stream.constants.md) за детальною інформацією по кожній
> константі.

### Значення, що повертаються

Повертає масив (array) з двома потоковими ресурсами у разі
успішного виконання, або **`false`** у разі невдачі.

### Приклади

**Приклад #1 Приклад використання **stream_socket_pair()****

Цей приклад демонструє основи використання функції
**stream_socket_pair()** у міжпроцесній взаємодії.

`<?php$sockets u003d stream_socket_pair(STREAM_PF_UNIX, STREAM_SOCK_STREAM, STREAM_IPPROTO_IP);$pid    u003d pcntl_fork();if|    | {     /* батьківський процесс */    fclose($sockets[0]); fwrite($sockets[1], "дочірній PID: $pid
");   echo fgets($sockets[1]);   fclose($sockets[1]);} else {    /* дочірній процесс */    fclose($sockets[ s| від дочірнього процесу
");   echo fgets($sockets[0]);   fclose($sockets[0]);}?> `

Результатом виконання цього прикладу буде щось подібне:

дочірній PID: 1378
повідомлення від дочірнього процесу
