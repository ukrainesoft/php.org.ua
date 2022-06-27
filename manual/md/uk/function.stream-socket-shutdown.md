- [«stream_socket_server](function.stream-socket-server.md)
- [stream_supports_lock »](function.stream-supports-lock.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Закрити повнодуплексне з'єднання

#stream_socket_shutdown

(PHP 5 \>u003d 5.2.1, PHP 7, PHP 8)

stream_socket_shutdown — Закрити повнодуплексне з'єднання

### Опис

**stream_socket_shutdown**(resource `$stream`, int `$mode`): bool

Закриває (частково чи ні) повнодуплексне з'єднання.

> **Примітка**:
>
> Асоційовані буфери, або буфери, можуть бути закриті, а можуть і ні.

### Список параметрів

`stream`
Відкритий потік (наприклад, відкритий за допомогою функції
[stream_socket_client()](function.stream-socket-client.md))

`mode`
Одна з наступних констант: **`STREAM_SHUT_RD`** (вимикає наступне)
отримання даних), **`STREAM_SHUT_WR`** (відключає подальшу передачу
даних) або **`STREAM_SHUT_RDWR`** (відключає подальші отримання та
передачу даних).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **stream_socket_shutdown()****

` <?php$server u003d stream_socket_server('tcp://127.0.0.1:1337');$client u003d stream_socket_client('tcp://127.0.0.1:1337');var_dump(fputs($client, ));stream_socket_shutdown($client, STREAM_SHUT_WR);var_dump(fputs($client, "привіт")); // не працює зараз?> `

Результатом виконання цього прикладу буде щось подібне:

int(5)

Notice: fputs(): send of 6 bytes failed with errnou003d32 Перекинутий pipe in test.php on line 9
int(0)

### Дивіться також

- [fclose()](function.fclose.md) - Закриває відкритий дескриптор
файлу
