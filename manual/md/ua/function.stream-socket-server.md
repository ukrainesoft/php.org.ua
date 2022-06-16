- [«stream_socket_sendto](function.stream-socket-sendto.md)
- [stream_socket_shutdown »](function.stream-socket-shutdown.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Створює інтернет-сокет або доменний сокет Unix

#stream_socket_server

(PHP 5, PHP 7, PHP 8)

stream_socket_server — Створює інтернет-сокет або доменний сокет Unix

### Опис

**stream_socket_server**(
string `$address`,
int `&$error_code` u003d **`null`**,
string `&$error_message` u003d **`null`**,
int `$flags` u003d STREAM_SERVER_BIND \| STREAM_SERVER_LISTEN,
?resource `$context` u003d **`null`**
): resource \ | false

Створює сокет потоку або датаграми на вказаному address.

Ця функція створює тільки сокет. Щоб почати приймати з'єднання
використовуйте
[stream_socket_accept()](function.stream-socket-accept.md).

### Список параметрів

`address`
Тип сокету, що створюється, визначається по транспорту, вказаному з
використанням стандартного форматування URL: `transport://target`.

Для доменних сокетів інтернету (**`AF_INET`**), таких як TCP та UDP,
частина `target` параметра `remote_socket` повинна складатися з імені хоста
або IP-адреси з наступним двокрапкою та номери порту. Для доменних
сокетів Unix частина `target` повинна вказувати на файл сокету у файловій
системі.

В залежності від оточення, доменні сокети Unix можуть бути недоступними.
Список доступних транспортів можна отримати за допомогою функції
[stream_get_transports()](function.stream-get-transports.md). Дивіться
[Список підтримуваних транспортних протоколів](transports.md) для
переліку вбудованих транспортів.

`error_code`
Якщо необов'язкові аргументи `error_code` та `error_message`
присутні, то вони будуть встановлені для вказівки дійсного
рівня системної помилки, що відбувається при системних викликах
`socket()`, `bind()` та `listen()`. Якщо значення, що повертається в
`error_code`, одно `0` і функція повернула **`false`**, це означає,
що помилка відбулася до виклику `bind()`. Швидше за все це сталося
через проблему ініціалізації сокету. Зверніть увагу, що аргументи
`error_code` та `error_message` повинні завжди передаватися за посиланням.

`error_message`
Дивіться опис параметра `error_code`.

`flags`
Бітова маска, яка може бути встановлена в будь-якій комбінації прапорів
створення сокету.

> **Примітка**:
>
> Для UDP-сокетів ви повинні використовувати **`STREAM_SERVER_BIND`** у
> Якість параметра `flags`.

`context`

### Значення, що повертаються

Повертає створений потік або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------|
| 8.0.0 | Параметр `context` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання серверних сокетів TCP**

` <?php$socket u003d stream_socket_server("tcp://0.0.0.0:8000", $errno, $errstr);if (!$socket) { echo "$errstr ($errno)<br />
";} else {  while ($conn u003d stream_socket_accept($socket)) {   fwrite($conn, 'Локальний час ' . date('n/j/Y g:i a' ')
");   fclose($conn);  } fclose($socket);}?> `

Приклад нижче показує, як працювати як сервер часу, який
може відповідати на запити часу, як показано на прикладі функції
[stream_socket_client()](function.stream-socket-client.md).

> **Примітка**: Більшість систем вимагають доступу з правами root для
> створення серверного сокету на порту нижче 1024.

**Приклад #2 Приклад використання серверних сокетів UDP**

` <?php$socket u003d stream_socket_server("udp://127.0.0.1:1113", $errno, $errstr, STREAM_SERVER_BIND);if (!$socket) {    die("$errstr do {   $$ktu003du003dstream_socket_recvfrom($socket, 1, 0, $peer); echo "$peer
";    stream_socket_sendto($socket, date("D M j H:i:s Y
"), 0, $peer);} while ($pkt !u003du003d false);?> `

### Примітки

> **Примітка**: Якщо вказувати числову адресу IPv6 (наприклад,
> `fe80::1`) ви повинні укладати його у квадратні дужки. Наприклад,
> `tcp://[fe80::1]:80`.

### Дивіться також

- [stream_socket_client()](function.stream-socket-client.md) -
Відкрити з'єднання з інтернет-сокетом або доменним сокетом Unix
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
- [Модуль curl](ref.curl.md)
