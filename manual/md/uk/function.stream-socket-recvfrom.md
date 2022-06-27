- [«stream_socket_pair](function.stream-socket-pair.md)
- [stream_socket_sendto »](function.stream-socket-sendto.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Отримує дані із сокету, підключеного чи ні

#stream_socket_recvfrom

(PHP 5, PHP 7, PHP 8)

stream_socket_recvfrom — Отримує дані із сокету, підключеного або
ні

### Опис

**stream_socket_recvfrom**(
resource `$socket`,
int `$length`,
int `$flags` u003d 0,
?string `&$address` u003d **`null`**
): string\|false

**stream_socket_recvfrom()** приймає дані з віддаленого сокету
розміром до `length` байт.

### Список параметрів

`socket`
Віддалений сокет.

`length`
Кількість байт для отримання параметра `socket`.

`flags`
Значення параметра `flags` може бути будь-якою комбінацією наступного:

| | |
|-------------------|----------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------|
| **`STREAM_OOB`** | Обробляти дані OOB (`out-of-band`). |
| **`STREAM_PEEK`** | Отримувати дані із сокету, але не витрачати буфер. Наступні виклики функцій [fread()](function.fread.md) або **stream_socket_recvfrom()** отримають ті самі дані. |

**Можливі значення для параметра `flags`**

`address`
Якщо вказано параметр address, він буде заповнений адресою віддаленого
сокет.

### Значення, що повертаються

Повертає прочитані дані у вигляді рядка або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання функції **stream_socket_recvfrom()****

` <?php/* Відкриває серверний сокет на 1234-му порту на localhost */$server u003d stream_socket_server('tcp://127.0.0.1:1234')_so ;/* Отримує пакет (звичайний розмір MTU 1500) OOB-даних */echo "Отримані дані OOB (Out-Of-Band): '" . stream_socket_recvfrom($socket, 1500, STREAM_OOB) . "'
";/* Отримати звичайні дані, але не витрачати их. */echo "Дані: '" . stream_socket_recvfrom($socket, 1500, STREAM_PEEK) . "''
";/* Отримати| то|ж| самий пакет знову, а в цього раз видалити його з буфера даних.
";/* Закрити сокет */fclose($socket);fclose($server);?> `

### Примітки

> **Примітка**:
>
> Якщо отримане повідомлення довжиною більше, ніж параметр length, зайві
> байти може бути пропущені залежно від типу сокету, з якого
> отримано повідомлення (наприклад, UDP).

> **Примітка**:
>
> Виклики функції stream_socket_recvfrom()** на потоках, заснованих на
> сокетах після викликів потокових функцій, заснованих на буферах (таких
> як [fread()](function.fread.md) або
> [stream_get_line()](function.stream-get-line.md)) читають дані
> безпосередньо з сокету та пропускають потоковий буфер.

### Дивіться також

- [stream_socket_sendto()](function.stream-socket-sendto.md) -
Відправляє повідомлення до сокету, незалежно від того, під'єднаний він або
ні
- [stream_socket_client()](function.stream-socket-client.md) -
Відкрити з'єднання з інтернет-сокетом або доменним сокетом Unix
- [stream_socket_server()](function.stream-socket-server.md) -
Створює інтернет-сокет або доменний сокет Unix
