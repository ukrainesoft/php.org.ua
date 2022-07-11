- [«posix_mkfifo](function.posix-mkfifo.md)
- [posix_setegid »](function.posix-setegid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Створює спеціальний або звичайний файл (POSIX.1)

#posix_mknod

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

posix_mknod — Створює спеціальний або звичайний файл (POSIX.1)

### Опис

**posix_mknod**(
string `$filename`,
int `$flags`,
int `$major` u003d 0,
int `$minor` u003d 0
): bool

Створює спеціальний чи звичайний файл.

### Список параметрів

`filename`
Шлях та ім'я створюваного файлу

`flags`
Цей параметр виходить за допомогою побітового АБО між типом файлу
(одною з наступних констант: **`POSIX_S_IFREG`**, **`POSIX_S_IFCHR`**,
**`POSIX_S_IFBLK`**, **`POSIX_S_IFIFO`** або **`POSIX_S_IFSOCK`**) та
правами доступу.

`major`
Старший номер пристрою (обов'язковий параметр під час використання
констант **`S_IFCHR`** або **`S_IFBLK`**).

`minor`
Молодший номер.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **posix_mknod()****

`<?php$file u003d '/tmp/tmpfile'; // file name$type u003d POSIX_S_IFBLK; // file type$permissions u003d 0777; // octal$major u003d 1;$minor u003d 8; // /dev/randomif (!posix_mknod($file, $type | $permissions, $major, $minor)) {    die('Error ' . ?> `

### Дивіться також

- [posix_mkfifo()](function.posix-mkfifo.md) - Створює спеціальний
fifo файл (іменований канал-pipe)
