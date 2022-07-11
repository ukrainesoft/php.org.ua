- [« streamWrapper::stream_read](streamwrapper.stream-read.md)
- [streamWrapper::stream_set_option
»](streamwrapper.stream-set-option.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Переміщення на задану позицію у потоці

# streamWrapper::stream_seek

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_seek — Переміщення на задану позицію в потоці

### Опис

public **streamWrapper::stream_seek**(int `$offset`, int `$whence` u003d
SEEK_SET): bool

Цей метод викликається у процесі виконання
[fseek()](function.fseek.md).

Позицію читання/запису в потоці необхідно оновлювати відповідно до
аргументами `offset` та `whence`.

### Список параметрів

`offset`
Зміщення у потоці, на яке потрібно переміститися.

`whence`
Можливі значення:

- **`SEEK_SET`** - Переміститися на позицію `offset` байт від початку
файлу.
- **`SEEK_CUR`** - Переміститися на `offset` байт щодо поточної
позиції.
- **`SEEK_END`** - Переміститися на позицію `offset` байт від кінця
файлу.

> **Примітка**: Поточна реалізація ніколи не встановлює для
> `whence` значення **`SEEK_CUR`**; натомість такі пошуки внутрішньо
> перетворюються на пошуки **`SEEK_SET`**.

### Значення, що повертаються

Повертає **`true`**, якщо позиція оновлена, **`false`** до інших
випадках.

### Примітки

> **Примітка**:
>
> Якщо не реалізований, як повертається значення приймається
> **`false`**.

> **Примітка**:
>
> У разі успішного виконання
> [streamWrapper::stream_tell()](streamwrapper.stream-tell.md) буде
> викликана відразу після того, як **streamWrapper::stream_seek()**
> відпрацює. Якщо виконання
> [streamWrapper::stream_tell()](streamwrapper.stream-tell.md)
> завершиться невдачею, то викликаючу функцію буде повернуто значення
> **`false`**

> **Примітка**:
>
> Не всі операції переміщення у потоці призведуть до виклику цієї функції. В
> PHP за замовчуванням увімкнено буферизацію потоків (дивіться також
> [stream_set_read_buffer()](function.stream-set-read-buffer.md)),
> тому переміщення в потоці може означати лише переміщення покажчика
> у буфері.

### Дивіться також

- [fseek()](function.fseek.md) - Встановлює зміщення у файловому
вказівнику
