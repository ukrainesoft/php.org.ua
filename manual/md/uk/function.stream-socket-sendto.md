- [«stream_socket_recvfrom](function.stream-socket-recvfrom.md)
- [stream_socket_server »](function.stream-socket-server.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Надсилає повідомлення до сокету, незалежно від того, під'єднаний він або
ні

#stream_socket_sendto

(PHP 5, PHP 7, PHP 8)

stream_socket_sendto — Надсилає повідомлення до сокету, незалежно від того,
під'єднаний він чи ні

### Опис

**stream_socket_sendto**(
resource `$socket`,
string `$data`,
int `$flags` u003d 0,
string `$address` u003d ""
): int\|false

Відправляє зазначені дані `data` через сокет `socket`.

### Список параметрів

`socket`
Сокет для надсилання даних `data`.

`data`
Надані дані.

`flags`
Значення параметра `flags` може бути будь-якою з наступних комбінацій:

| | |
|------------------|------------------------------ -----------------------|
| **`STREAM_OOB`** | Обробляти OOB (out-of-band, позасмугові) дані. |

**можливі значення для параметра `flags`**

`address`
Адреса, вказана при створенні потокового сокету, буде використовуватися до
доки не вказано альтернативну адресу в параметрі `address`.

Якщо вказано, він має бути у форматі ipv4 або ipv6.

### Значення, що повертаються

Повертає код результату, як ціле число або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **stream_socket_sendto()****

` <?php/* Відкрити сокет на 1234-му порту на localhost */$socket u003d stream_socket_client('tcp://127.0.0.1:1234');/* Відправити звичайні  */fwrite($socket, "Передача звичайних даних.");/* Відправляємо внесмугові дані. */stream_socket_sendto($socket, "Позасмугові дані.", STREAM_OOB);/* Закрити сокет */fclose($socket);?> `

### Дивіться також

- [stream_socket_recvfrom()](function.stream-socket-recvfrom.md) -
Отримує дані із сокету, підключеного чи ні
- [stream_socket_client()](function.stream-socket-client.md) -
Відкрити з'єднання з інтернет-сокетом або доменним сокетом Unix
- [stream_socket_server()](function.stream-socket-server.md) -
Створює інтернет-сокет або доменний сокет Unix
