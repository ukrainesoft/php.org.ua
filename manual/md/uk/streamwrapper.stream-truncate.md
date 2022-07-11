- [« streamWrapper::stream_tell](streamwrapper.stream-tell.md)
- [streamWrapper::stream_write »](streamwrapper.stream-write.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Усічення потоку

# streamWrapper::stream_truncate

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

streamWrapper::stream_truncate — Усічення потоку

### Опис

public **streamWrapper::stream_truncate**(int `$new_size`): bool

Спрацьовуватиме при усіченні потоку функцією
[ftruncate()](function.ftruncate.md).

### Список параметрів

`new_size`
Новий розмір.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ftruncate()](function.ftruncate.md) - Урізує файл до вказаного
довжини
