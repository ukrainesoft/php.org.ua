- [«stream_set_chunk_size](function.stream-set-chunk-size.md)
- [stream_set_timeout »](function.stream-set-timeout.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Встановити буферизацію читання файлу на вказаному потоці

#stream_set_read_buffer

(PHP 5 \>u003d 5.3.3, PHP 7, PHP 8)

stream_set_read_buffer — Встановити буферизацію читання файлу на
вказаному потоці

### Опис

**stream_set_read_buffer**(resource `$stream`, int `$size`): int

Встановлює буфер для читання. Це еквівалент функції
[stream_set_write_buffer()](function.stream-set-write-buffer.md), але
для операцій читання

### Список параметрів

`stream`
Вказівник файлу.

`size`
Число байт для буферизації. Якщо аргумент `size` дорівнює 0, то операції
Читання не буферизуються. Це гарантує, що всі операції читання при
за допомогою функції [fread()](function.fread.md) будуть завершені до того,
як іншим процесам буде дозволено читати із вхідного потоку.

### Значення, що повертаються

Повертає 0 у разі успішного виконання, або інше значення, якщо
запит може бути виконаний.

### Дивіться також

- [stream_set_write_buffer()](function.stream-set-write-buffer.md) -
Встановлює буферизацію файлу під час запису у вказаний потік
