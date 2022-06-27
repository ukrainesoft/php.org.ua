- [« streamWrapper::stream_flush](streamwrapper.stream-flush.md)
- [streamWrapper::stream_metadata
»](streamwrapper.stream-metadata.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Консультативне блокування файлу

# streamWrapper::stream_lock

(PHP 5, PHP 7, PHP 8)

streamWrapper::stream_lock — Консультативне блокування файлу

### Опис

public **streamWrapper::stream_lock**(int `$operation`): bool

Цей метод викликається у відповідь [flock()](function.flock.md), коли
викликається [file_put_contents()](function.file-put-contents.md) (якщо
`flags` містить **`LOCK_EX`**),
[stream_set_blocking()](function.stream-set-blocking.md) або за
закриття потоку (**`LOCK_UN`**).

### Список параметрів

`operation`
`operation` може приймати одне з наступних значень:

- **`LOCK_SH`** встановити загальне блокування (для читання).
- **`LOCK_EX`** встановити ексклюзивне блокування (для запису).
- **`LOCK_UN`** зняти блокування (загальне або ексклюзивне).
- **`LOCK_NB`**, якщо ви не хочете, щоб
[flock()](function.flock.md) під час роботи не блокувався. (не
підтримується у Windows)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викликає помилку **`E_WARNING`**, якщо виклик методу не вдався (тобто
метод не реалізовано).

### Дивіться також

- [stream_set_blocking()](function.stream-set-blocking.md) -
Встановити блокуючий/неблокуючий режим у потоці
- [flock()](function.flock.md) - Портована консультативна
блокування файлів
