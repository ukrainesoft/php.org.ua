- [«stream_set_read_buffer](function.stream-set-read-buffer.md)
- [stream_set_write_buffer »](function.stream-set-write-buffer.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Встановити значення часу очікування потоку

#stream_set_timeout

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_set_timeout — Встановити час очікування для потоку.

### Опис

**stream_set_timeout**(resource `$stream`, int `$seconds`, int
`$microseconds` u003d 0): bool

Встановлює значення часу очікування в потоці `stream`, що дорівнює сумі
параметрів `seconds` та `microseconds`.

Коли час роботи потоку спливає, ключ 'timed_out' масиву,
повертається функцією
[stream_get_meta_data()](function.stream-get-meta-data.md),
встановлюється в значення **`true`**, хоча помилка чи попередження не
генерується.

### Список параметрів

`stream`
Цільовий потік.

`seconds`
Секунди в установленому часі очікування.

`microseconds`
Мікросекунди в установленому часі очікування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **stream_set_timeout()****

` <?php$fp u003d fsockopen("www.example.com", 80);if (!$fp) {    echo "Неможливо відкрити сокет
";} else {   fwrite($fp, "GET / HTTP/1.0

");    stream_set_timeout($fp, 2);    $res u003d fread($fp, 2000);    $info u003d stream_get_meta_data($fp);    fclose($fp);    if ($info['timed_out']) {        echo ' Закінчився час з'єднання!';

### Примітки

> **Примітка**:
>
> Ця функція не працює з просунутими операціями, такими як
> [stream_socket_recvfrom()](function.stream-socket-recvfrom.md).
> Використовуйте замість неї [stream_select()](function.stream-select.md)
> з параметром часу очікування.

Ця функція раніше викликалася через **set_socket_timeout()** та пізніше
через [socket_set_timeout()](function.socket-set-timeout.md), але це
використання застаріло.

### Дивіться також

- [fsockopen()](function.fsockopen.md) - Відкриває з'єднання з
інтернет-сокетом або доменним сокетом Unix
- [fopen()](function.fopen.md) - Відкриває файл або URL
