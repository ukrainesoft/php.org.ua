- [«stream_set_blocking](function.stream-set-blocking.md)
- [stream_set_read_buffer »](function.stream-set-read-buffer.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- встановити розмір фрагмента даних потоку

#stream_set_chunk_size

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

stream_set_chunk_size — встановити розмір фрагмента даних потоку

### Опис

**stream_set_chunk_size**(resource `$stream`, int `$size`): int

Встановити розмір фрагмента даних потоку.

### Список параметрів

`stream`
Потік.

`size`
Бажаний розмір фрагмента.

### Значення, що повертаються

Повертає попередній розмір фрагмента у разі успішного виконання.

Поверне **`false`**, якщо `size` менше 1 або більше **`PHP_INT_MAX`**.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо `size` менше 1 або більше
**`PHP_INT_MAX`**.
