- [« socket_getsockname](function.socket-getsockname.md)
- [socket_last_error »](function.socket-last-error.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Імпортувати потік

# socket_import_stream

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

socket_import_stream — Імпортувати потік

### Опис

**socket_import_stream**(resource `$stream`):
[Socket](class.socket.md)\|false

Імпортує потік, який інкапсулює сокет ресурс модуля сокету.

### Список параметрів

`stream`
Ресурс потік імпорту.

### Значення, що повертаються

Повертає **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------|
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [Socket](class.socket.md); раніше повертався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **socket_import_stream()****

` <?php$stream u003d stream_socket_server("udp://0.0.0.0:58380", $errno, $errstr, STREAM_SERVER_BIND);$sock   u003d socket_import_stream($stream);?> `

### Дивіться також

- [stream_socket_server()](function.stream-socket-server.md) -
Створює інтернет-сокет або доменний сокет Unix
