- [«
stream_socket_enable_crypto](function.stream-socket-enable-crypto.md)
- [stream_socket_pair »] (function.stream-socket-pair.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Отримати назву локального або віддаленого сокету

#stream_socket_get_name

(PHP 5, PHP 7, PHP 8)

stream_socket_get_name — Отримати назву локальної або віддаленої
сокету

### Опис

**stream_socket_get_name**(resource `$socket`, bool `$remote`):
string\|false

Повертає локальну або віддалену назву вказаного сокетного
з'єднання.

### Список параметрів

`socket`
Сокет, назву якого потрібно отримати.

`remote`
Якщо встановлено в **`true`**, то буде повернуто `віддалену` назву
сокету, якщо встановлено в **`false`**, то буде повернуто `локальне`
назву.

### Значення, що повертаються

Назва сокету або **`false`** у разі виникнення помилки.

### Дивіться також

- [stream_socket_accept()](function.stream-socket-accept.md) -
Приймати з'єднання в сокеті, створеному за допомогою функції
stream_socket_server
