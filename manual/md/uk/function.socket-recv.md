- [«socket_read](function.socket-read.md)
- [socket_recvfrom »](function.socket-recvfrom.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Отримує дані із приєднаного сокету

# socket_recv

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

socket_recv — Отримує дані з приєднаного сокету

### Опис

**socket_recv**(
[Socket](class.socket.md) `$socket`,
?string `&$data`,
int `$length`,
int `$flags`
): int\|false

Функція **socket_recv()** отримує `length` байт даних у буфер `data`
із сокету `socket`. функція **socket_recv()** може бути використана
для отримання даних із приєднаних сокетів. Додатково до цього,
один або більше прапорів можуть бути вказані для зміни поведінки
функції.

Параметр `data` передається за посиланням, так що він має бути вказаний у
вигляді змінної у списку аргументів. Дані, прочитані із сокету
`socket` функцією **socket_recv()**, буде повернено в параметрі
`data`.

### Список параметрів

`socket`
Параметр `socket` має бути екземпляром [Socket](class.socket.md),
попередньо створеним з допомогою функції socket_create().

`data`
Отримані дані будуть передані до змінної, вказаної у параметрі
`data`. Якщо відбувається помилка, якщо з'єднання скинуто, або якщо
дані недоступні, параметр `data` буде встановлений у **`null`**.

`length`
До length байт буде отримано з віддаленого хоста.

`flags`
Значення параметра `flags` може бути будь-якою комбінацією наступних
прапорів, з'єднаних за допомогою бінарного оператора OR (`|`).

| Підкреслити | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------|
| **`MSG_OOB`** | Обробляти позасмугові (out-of-band) дані. |
| **`MSG_PEEK`** | Отримувати дані з початку черги отримання без видалення їх із черги. |
| **`MSG_WAITALL`** | Функція блокуватиме виконання скрипту доти, доки щонайменше `length` байт не буде отримано. Однак, якщо отриманий сигнал або віддалений хост від'єднався, функція може повернути менше даних. |
| **`MSG_DONTWAIT`** | Якщо цей прапор встановлений, то функція повернеться навіть у тому випадку, якщо вона зазвичай блокувала виконання скрипта. |

**Possible values for `flags`**

### Значення, що повертаються

**socket_recv()** повертає кількість отриманих байтів або
**`false`** у разі виникнення помилки. Фактичний код помилки може
бути отриманий за допомогою функції
[socket_last_error()](function.socket-last-error.md). Цей код помилки
може бути переданий функції
[socket_strerror()](function.socket-strerror.md) для отримання
текстового опису помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Приклади

**Приклад #1 Приклад використання **socket_recv()****

Цей приклад - просто варіант першого прикладу статті
[Приклади](sockets.examples.md) за допомогою **socket_recv()**.

` <?phperror_reporting(E_ALL);echo "<h2>З'єднанняTCP/IP</h2>
";/* Отримати порт сервісу WWW. */$service_port u003d getservbyname('www', 'tcp');/* Отримати IP-адресу цільового хоста. */$address u003d gethostbyname('www; /* Створити сокет TCP/IP. */$socket u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP);if ($socket u003du003du003d false) {                                                   … )) . "
";} else {    echo "OK.
";}echo "Спроба з'єднатися з хостом '$address' по порту '$service_port'...";$result u003d socket_connect($socket, $address, $service_port);if ($result u003du003du003d false "Не вийшло виконати функцію socket_connect().
Причина: ($result) " . socket_strerror(socket_last_error($socket)) . "
";} else {    echo "OK.
";}$in u003d "HEAD / HTTP/1.1
";$in .u003d "Host: www.example.com
";$in .u003d "Connection: Close

";$out u003d '';echo "Відправка запиту HTTP HEAD...";socket_write($socket, $in, strlen($in));echo "OK.
";echo "Отримання відповіді:

";$buf u003d 'Це мій буфер.';if (false !u003du003d ($bytes u003d socket_recv($socket, $buf, 2048, MSG_WAITALL))) {  про про про Закриваємо сокет...";} else {    echo "Не вийшло виконати socket_recv(); причина: " . socket_strerror(socket_last_error($socket)) . "
";}socket_close($socket);echo $buf . "
";echo "OK.

";?> `

Приклад вище виведе щось на кшталт наступного:

<h2>З'єднання TCP/IP</h2>
Добре.
Спроба з'єднатися із хостом '208.77.188.166' on port '80'...OK.
Надсилання запиту HTTP HEAD...OK.
Отримання відповіді:

Прочитано 123 байта із функції socket_recv(). Закриваємо сокет...HTTP/1.1 200 OK
Date: Mon, 14 Sep 2009 08:56:36 GMT
Server: Apache/2.2.3 (Red Hat)
Last-Modified: Tue, 15 Nov 2005 13:24:10 GMT
ETag: "b80f4-1b6-80bfd280"
Accept-Ranges: bytes
Content-Length: 438
Connection: close
Content-Type: text/html; charsetu003dUTF-8

Добре.
