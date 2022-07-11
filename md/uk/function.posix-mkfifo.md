- [«posix_kill](function.posix-kill.md)
- [posix_mknod »](function.posix-mknod.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Створює спеціальний fifo файл (іменований канал-pipe)

#posix_mkfifo

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_mkfifo - Створює спеціальний fifo файл (іменований канал-pipe)

### Опис

**posix_mkfifo**(string `$filename`, int `$permissions`): bool

**posix_mkfifo()** створює спеціальний `FIFO` файл, який існує в
файлової системи і виступає як двонаправлений зв'язок для
процесів.

### Список параметрів

`filename`
Шлях до FIFO файлу.

`permissions`
Другий параметр `permissions` має бути представлений у восьмеричній
нотації (наприклад, 0644). Це рівень прав для новоствореного `FIFO`
файлу, також залежить від налаштувань поточного
[umask()](function.umask.md). Права на створений файл будуть
визначатися як результат (mode & umask).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
