- [« Шифруючі фільтри](filters.encryption.md)
- [Інтернет-сокети: TCP, UDP, SSL та TLS »](transports.inet.md)

- [PHP Manual](index.md)
- [Appendices](appendices.md)
- Список підтримуваних транспортних протоколів

# Список транспортних протоколів, що підтримуються

## Зміст

- [Інтернет-сокети: TCP, UDP, SSL та TLS](transports.inet.md)
- [Unix-сокети: UNIX та UDG](transports.unix.md)

Нижченаведений список містить інформацію про протоколи передачі,
вбудованих у PHP та готових для використання функціями роботи з
сокетами, такими як [fsockopen()](function.fsockopen.md) та
[stream_socket_client()](function.stream-socket-client.md). Ці
протоколи *не* застосовуються в [модулях для роботи з
Сокетами] (ref.sockets.md).

Для отримання списку підтримуваних протоколів передачі, вбудованих у
вашу версію PHP, використовуйте функцію
[stream_get_transports()](function.stream-get-transports.md).
