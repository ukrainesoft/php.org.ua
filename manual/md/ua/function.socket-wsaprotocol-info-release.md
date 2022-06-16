- [«
socket_wsaprotocol_info_import](function.socket-wsaprotocol-info-import.md)
- [Socket »](class.socket.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Вивільняє експортовану структуру WSAPROTOCOL_INFO

# socket_wsaprotocol_info_release

(PHP 7 \>u003d 7.3.0, PHP 8)

socket_wsaprotocol_info_release — Вивільняє експортовану
структуру WSAPROTOCOL_INFO

### Опис

**socket_wsaprotocol_info_release**(string `$info_id`): bool

Вивільняє пам'ять, що розділяється, відповідну заданому `info_id`.

> **Примітка**: Функція доступна лише у Windows.

### Список параметрів

`info_id`
Ідентифікатор, отриманий під час виклику
[socket_wsaprotocol_info_export()](function.socket-wsaprotocol-info-export.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [socket_wsaprotocol_info_export()](function.socket-wsaprotocol-info-export.md) -
Експорт структури WSAPROTOCOL_INFO
