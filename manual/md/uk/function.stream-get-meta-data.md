- [«stream_get_line](function.stream-get-line.md)
- [stream_get_transports »](function.stream-get-transports.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Витягує заголовок/метадані з потоків/файлових покажчиків

#stream_get_meta_data

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_get_meta_data — Витягує заголовок/метадані з
потоків/файлових покажчиків

### Опис

**stream_get_meta_data**(resource `$stream`): array

Отримує інформацію про існуючий потік `stream`.

### Список параметрів

`stream`
Параметр stream може бути будь-яким потоком, створеним за допомогою функцій
[fopen()](function.fopen.md), [fsockopen()](function.fsockopen.md),
[pfsockopen()](function.pfsockopen.md) та
[stream_socket_client()](function.stream-socket-client.md).

### Значення, що повертаються

Отримуваний масив містить такі елементи:

- `timed_out` (bool) - **`true`**, якщо потік перевищив час очікування
даних під час останнього виклику функції
[fread()](function.fread.md) або [fgets()](function.fgets.md).

- `blocked` (bool) - **`true`**, якщо потік перебуває в режимі
блокуючого введення-виводу. Дивіться функцію
[stream_set_blocking()](function.stream-set-blocking.md).

- `eof` (bool) - **`true`**, якщо потік досяг кінця файлу. Зауважте,
що для потоків типу socket цей член може дорівнювати **`true`**,
навіть коли `unread_bytes` не дорівнює нулю. Для того, щоб визначити
є ще дані для читання, використовуйте
[feof()](function.feof.md) замість читання цього елемента.

- `unread_bytes` (int) - кількість байт, що знаходяться зараз у
власному внутрішньому буфері PHP.

> **Примітка**: Ви не повинні використовувати це значення у скрипті.

- `stream_type` (string) - мітка, що описує внутрішню реалізацію
потоку.

- `wrapper_type` (string) - мітка, що описує реалізацію обгортки
протоколу, накладеного потік. Дивіться розділ [Підтримувані
протоколи та обгортки](wrappers.md) для детальної інформації про
обгортках.

- `wrapper_data` (mixed) - специфічні для обгортки дані,
прикріплені до цього потоку. Дивіться розділ [Підтримувані
протоколи та обгортки](wrappers.md) для детальної інформації про
обгортках та їх даних.

- `mode` (string) - тип доступу, необхідний цього потоку (дивіться
таблицю 1 в описі функції [fopen()](function.fopen.md))

- `seekable` (bool) - можна переміщатися по поточному потоку.

- `uri` (string) - URI/ім'я файлу, пов'язане з цим потоком.

- `crypto` (array) – метадані TLS-з'єднання потоку. Примітка:
вказується лише у разі, якщо потік ресурсу використовує TLS.

### Приклади

**Приклад #1 Приклад використання **stream_get_meta_data()** з
використанням [fopen()](function.fopen.md) з http**

` <?php$url u003d 'http://www.example.com/';if (!$fp u003d fopen($url, 'r')) {    trigger_error("Неможливо відкрити URL ($url)", E_US_ );}$meta u003d stream_get_meta_data($fp);var_dump($meta);fclose($fp);?> `

Результатом виконання цього прикладу буде щось подібне:

array(10) {
'timed_out' u003d>
bool(false)
'blocked' u003d>
bool(true)
'eof' u003d>
bool(false)
'wrapper_data' u003d>
array(13) {
[0] u003d>
string(15) "HTTP/1.1 200 OK"
[1] u003d>
string(11) "Age: 244629"
[2] u003d>
string(29) "Cache-Control: max-ageu003d604800"
[3] u003d>
string(38) "Content-Type: text/html; charsetu003dUTF-8"
[4] u003d>
string(35) "Date: Sat, 20 Nov 2021 18:17:57 GMT"
[5] u003d>
string(24) "Etag: "3147526947+ident""
[6] u003d>
string(38) "Expires: Sat, 27 Nov 2021 18:17:57 GMT"
[7] u003d>
string(44) "Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT"
[8] u003d>
string(22) "Server: ECS (chb/0286)"
[9] u003d>
string(21) "Vary: Accept-Encoding"
[10] u003d>
string(12) "X-Cache: HIT"
[11] u003d>
string(20) "Content-Length: 1256"
[12] u003d>
string(17) "Connection: close"
}
'wrapper_type' u003d>
string(4) "http"
'stream_type' u003d>
string(14) "tcp_socket/ssl"
'mode' u003d>
string(1) "r"
'unread_bytes' u003d>
int(1256)
'seekable' u003d>
bool(false)
'uri' u003d>
string(23) "http://www.example.com/"
}

**Приклад #2 Приклад використання **stream_get_meta_data()** з
використанням
[stream_socket_client()](function.stream-socket-client.md) з https**

` <?php$streamContext u003d stream_context_create(    [        'ssl' u003d> [            'capture_peer_cert' u003d> true,            'capture_peer_cert_chain' u003d> true,            'disable_compression' u003d> true,        ],    ]);$client u003d stream_socket_client(    'ssl: //www.example.com:443',   $errorNumber,   $errorDescription,    40,    STREAM_CLIENT_CONNECT,    $streamContext);$meta u003d stream

Результатом виконання цього прикладу буде щось подібне:

array(8) {
'crypto' u003d>
array(4) {
'protocol' u003d>
string(7) "TLSv1.3"
'cipher_name' u003d>
string(22) "TLS_AES_256_GCM_SHA384"
'cipher_bits' u003d>
int(256)
'cipher_version' u003d>
string(7) "TLSv1.3"
}
'timed_out' u003d>
bool(false)
'blocked' u003d>
bool(true)
'eof' u003d>
bool(false)
'stream_type' u003d>
string(14) "tcp_socket/ssl"
'mode' u003d>
string(2) "r+"
'unread_bytes' u003d>
int(0)
'seekable' u003d>
bool(false)
}

### Примітки

> **Примітка**:
>
> Ця функція НЕ працюватиме з сокетами, створеними за допомогою
> [модуля Socket](ref.sockets.md).

### Дивіться також

- [get_headers()](function.get-headers.md) - Повертає все
заголовки з відповіді сервера на HTTP-запит
- [$http_response_header](reserved.variables.httpresponseheader.md)
