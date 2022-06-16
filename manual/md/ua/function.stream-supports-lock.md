- [«stream_socket_shutdown](function.stream-socket-shutdown.md)
- [stream_wrapper_register »](function.stream-wrapper-register.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Визначає, чи підтримує потік блокування

#stream_supports_lock

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

stream_supports_lock — Визначає, чи блокування підтримує потік.

### Опис

**stream_supports_lock**(resource `$stream`): bool

Визначає, чи потік підтримує блокування з використанням
[flock()](function.flock.md).

### Список параметрів

`stream`
Потік для перевірки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [flock()](function.flock.md) - Портована консультативна
блокування файлів
