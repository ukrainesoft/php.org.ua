- [« bzdecompress](function.bzdecompress.md)
- [bzerror »](function.bzerror.md)

- [PHP Manual](index.md)
- [Функції Bzip2](ref.bzip2.md)
- Повертає код помилки роботи з bzip2

#bzerrno

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

bzerrno — Повертає код помилки роботи з bzip2

### Опис

**bzerrno**(resource `$bz`): int

Повертає код будь-якої помилки bzip2, що сталася з переданим покажчиком
на файл.

### Список параметрів

`bz`
Вказівник на файл. Повинен бути коректним і вказувати на успішний файл
відкритий [bzopen()](function.bzopen.md).

### Значення, що повертаються

Повертає код помилки як цілого числа.

### Дивіться також

- [bzerror()](function.bzerror.md) - Повертає код та рядок помилки
роботи з bzip2 у вигляді масиву
- [bzerrstr()](function.bzerrstr.md) - Повертає рядок помилки
роботи з bzip2
