- [«socket_write](function.socket-write.md)
- [socket_wsaprotocol_info_import
»](function.socket-wsaprotocol-info-import.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Експорт структури WSAPROTOCOL_INFO

# socket_wsaprotocol_info_export

(PHP 7 \>u003d 7.3.0, PHP 8)

socket_wsaprotocol_info_export — Експорт структури WSAPROTOCOL_INFO

### Опис

**socket_wsaprotocol_info_export**([Socket](class.socket.md)
`$socket`, int `$process_id`): string\|false

Експортує структуру `WSAPROTOCOL_INFO` в роздільну пам'ять та
повертає ідентифікатор, який можна використовувати в
[socket_wsaprotocol_info_import()](function.socket-wsaprotocol-info-import.md).
Цей ідентифікатор придатний лише для використання з PID,
вказаним у `process_id`.

> **Примітка**: Функція доступна лише у Windows.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md).

`process_id`
Ідентифікатор процесу, який імпортуватиме сокет.

### Значення, що повертаються

Повертає ідентифікатор, який можна використовувати для імпорту або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_wsaprotocol_info_import()](function.socket-wsaprotocol-info-import.md) -
Імпортує сокет з іншого процесу
- [socket_wsaprotocol_info_release()](function.socket-wsaprotocol-info-release.md) -
Вивільняє експортовану структуру WSAPROTOCOL_INFO
