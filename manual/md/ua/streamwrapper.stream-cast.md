- [« streamWrapper::rmdir](streamwrapper.rmdir.md)
- [streamWrapper::stream_close »](streamwrapper.stream-close.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Отримує ресурс рівнем нижче

# streamWrapper::stream_cast

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

streamWrapper::stream_cast — Отримує ресурс рівнем нижче

### Опис

public **streamWrapper::stream_cast**(int `$cast_as`): resource

Цей метод викликається у процесі виконання
[stream_select()](function.stream-select.md).

### Список параметрів

`cast_as`
Можливо **`STREAM_CAST_FOR_SELECT`**, коли
[stream_select()](function.stream-select.md) викликає
**stream_cast()**, або **`STREAM_CAST_AS_STREAM`**, коли
**stream_cast()** викликається для інших цілей.

### Значення, що повертаються

Повинен повернути ресурс потоку, що лежить рівнем нижче, або "false".

### Дивіться також

- [stream_select()](function.stream-select.md) - Запускає
еквівалент системного виклику select() на заданих масивах потоків
з часом очікування, вказаним параметрами seconds та microseconds
