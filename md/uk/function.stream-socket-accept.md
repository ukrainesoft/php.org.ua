- [«stream_set_write_buffer](function.stream-set-write-buffer.md)
- [stream_socket_client »](function.stream-socket-client.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Приймати з'єднання в сокеті, створеному за допомогою функції
stream_socket_server

#stream_socket_accept

(PHP 5, PHP 7, PHP 8)

stream_socket_accept — Приймати з'єднання в сокеті, створеному c
допомогою функції
[stream_socket_server()](function.stream-socket-server.md)

### Опис

**stream_socket_accept**(resource `$socket`, ?float `$timeout` u003d
**`null`**, string `&$peer_name` u003d **`null`**): resource\|false

Приймати з'єднання в сокеті, попередньо створеному за допомогою
функції [stream_socket_server()](function.stream-socket-server.md).

### Список параметрів

`socket`
Серверний сокет для ухвалення з'єднання.

`timeout`
Перевизначити час очікування підключення за замовчуванням. Час
має бути вказано за секунди. За замовчуванням використовується значення
[default_socket_timeout](filesystem.configuration.md#ini.default-socket-timeout).

`peer_name`
Буде присвоєно ім'я (адресу) клієнта, який приєднався, якщо воно
міститься та доступно з обраного транспорту.

> **Примітка**:
>
> Можливо пізніше, використовуючи функцію
> [stream_socket_get_name()](function.stream-socket-get-name.md).

### Значення, що повертаються

Повертає потік прийнятого з'єднання із сокетом або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---|
| 8.0.0 | `timeout` тепер допускає значення null. |

### Примітки

**Увага**

Ця функція не повинна використовуватись із серверними сокетами UDP. Замість
цього використовуйте
[stream_socket_recvfrom()](function.stream-socket-recvfrom.md) та
[stream_socket_sendto()](function.stream-socket-sendto.md).

### Дивіться також

- [stream_socket_server()](function.stream-socket-server.md) -
Створює інтернет-сокет або доменний сокет Unix
- [stream_socket_get_name()](function.stream-socket-get-name.md) -
Отримати назву локального або віддаленого сокету
- [stream_set_blocking()](function.stream-set-blocking.md) -
Встановити блокуючий/неблокуючий режим у потоці
- [stream_set_timeout()](function.stream-set-timeout.md) -
Встановити час очікування для потоку
- [fgets()](function.fgets.md) - Читає рядок із файлу
- [fgetss()](function.fgetss.md) - Читає рядок з файлу та видаляє
HTML-теги
- [fwrite()](function.fwrite.md) - Бінарно-безпечний запис у файл
- [fclose()](function.fclose.md) - Закриває відкритий дескриптор
файлу
- [feof()](function.feof.md) - Перевіряє, чи кінець файлу досягнуто
- [Функції cURL](ref.curl.md)
