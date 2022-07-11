- [«
socket_wsaprotocol_info_export](function.socket-wsaprotocol-info-export.md)
- [socket_wsaprotocol_info_release
»](function.socket-wsaprotocol-info-release.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- імпортує сокет з іншого процесу

# socket_wsaprotocol_info_import

(PHP 7 \>u003d 7.3.0, PHP 8)

socket_wsaprotocol_info_import — Імпортує сокет з іншого процесу

### Опис

**socket_wsaprotocol_info_import**(string `$info_id`):
[Socket](class.socket.md)\|false

Імпортує сокет, експортований в іншому процесі.

> **Примітка**: Функція доступна лише у Windows.

### Список параметрів

`info_id`
Ідентифікатор, отриманий під час виклику
[socket_wsaprotocol_info_export()](function.socket-wsaprotocol-info-export.md).

### Значення, що повертаються

Повертає екземпляр [Socket](class.socket.md) у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------|
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [Socket](class.socket.md); раніше повертався ресурс (resource). |

### Дивіться також

- [socket_wsaprotocol_info_export()](function.socket-wsaprotocol-info-export.md) -
Експорт структури WSAPROTOCOL_INFO
