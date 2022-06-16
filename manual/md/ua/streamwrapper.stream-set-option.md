- [« streamWrapper::stream_seek](streamwrapper.stream-seek.md)
- [streamWrapper::stream_stat »](streamwrapper.stream-stat.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Зміна налаштувань потоку

# streamWrapper::stream_set_option

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

streamWrapper::stream_set_option — Зміна настройок потоку

### Опис

public **streamWrapper::stream_set_option**(int `$option`, int `$arg1`,
int `$arg2`): bool

Цей метод викликається під час встановлення параметрів потоку.

### Список параметрів

`option`
Одне із значень:

- **`STREAM_OPTION_BLOCKING`** (Метод викликаний в результаті виклику
функції [stream_set_blocking()](function.stream-set-blocking.md))
- **`STREAM_OPTION_READ_TIMEOUT`** (Метод викликаний в результаті виклику
функції [stream_set_timeout()](function.stream-set-timeout.md))
- **`STREAM_OPTION_WRITE_BUFFER`** (Метод викликаний в результаті виклику
функції
[stream_set_write_buffer()](function.stream-set-write-buffer.md))

`arg1`
Якщо `option` набуває значення:

- **`STREAM_OPTION_BLOCKING`**: запит режиму блокування (1 -
блокувати, 0 – не блокувати).
- **`STREAM_OPTION_READ_TIMEOUT`**: час очікування в секундах.
- **`STREAM_OPTION_WRITE_BUFFER`**: режим буферизації
(**`STREAM_BUFFER_NONE`** або **`STREAM_BUFFER_FULL`**).

`arg2`
Якщо `option` набуває значення:

- **`STREAM_OPTION_BLOCKING`**: це значення ні на що не впливає.
- **`STREAM_OPTION_READ_TIMEOUT`**: час очікування в мілісекундах.
- **`STREAM_OPTION_WRITE_BUFFER`**: потрібний розмір буфера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Якщо `option` не реалізований, метод повинен
повертати **`false`**.

### Дивіться також

- [stream_set_blocking()](function.stream-set-blocking.md) -
Встановити блокуючий/неблокуючий режим у потоці
- [stream_set_timeout()](function.stream-set-timeout.md) -
Встановити час очікування для потоку
- [stream_set_write_buffer()](function.stream-set-write-buffer.md) -
Встановлює буферизацію файлу під час запису у вказаний потік
