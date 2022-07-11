- [«stream_get_transports](function.stream-get-transports.md)
- [stream_is_local »](function.stream-is-local.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Отримати список зареєстрованих потоків

#stream_get_wrappers

(PHP 5, PHP 7, PHP 8)

stream_get_wrappers — Отримати список зареєстрованих потоків

### Опис

**stream_get_wrappers**(): array

Витягує список зареєстрованих потоків, доступних на запущеній
системі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає індексований масив, що містить назви всіх обгорток
потоків доступних на запущеній системі.

### Приклади

**Приклад #1 Приклад використання **stream_get_wrappers()****

` <?phpprint_r(stream_get_wrappers());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> php
[1] u003d> file
[2] u003d> http
[3] u003d> ftp
[4] u003d> compress.bzip2
[5] u003d> compress.zlib
)

**Приклад #2 Перевірка існування обгортки потоку**

`<?php// Перевіряє існування обгортки потоку bzip2if (in_array('compress.bzip2', stream_get_wrappers())) {   echo 'compress.bzip2:// b>2  підтримка не включена.';}?> `

### Дивіться також

- [stream_wrapper_register()](function.stream-wrapper-register.md) -
Реєструє обгортку URL, реалізовану у вигляді PHP-класу
