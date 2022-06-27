- [«socket_create](function.socket-create.md)
- [socket_get_option »](function.socket-get-option.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Експортувати сокет у потік, що інкапсулює сокет

# socket_export_stream

(PHP 7 \>u003d 7.0.7, PHP 8)

socket_export_stream — Експортувати сокет у потік, що інкапсулює
сокет

### Опис

**socket_export_stream**([Socket](class.socket.md) `$socket`):
resource\|false

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`socket`

### Значення, що повертаються

Повертає ресурс або **false** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |
