- [«bzerror](function.bzerror.md)
- [bzflush »](function.bzflush.md)

- [PHP Manual](index.md)
- [Функції Bzip2](ref.bzip2.md)
- Повертає рядок помилки роботи з bzip2

#bzerrstr

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

bzerrstr — Повертає рядок помилки роботи з bzip2

### Опис

**bzerrstr**(resource `$bz`): string

Повертає рядок з помилкою bzip2, що сталася з переданим вказівником
на файл.

### Список параметрів

`bz`
Вказівник на файл. Повинен бути коректним і вказувати на файл успішно
відкритий [bzopen()](function.bzopen.md).

### Значення, що повертаються

Повертає рядок, який містить повідомлення про помилку.

### Дивіться також

- [bzerrno()](function.bzerrno.md) - Повертає код помилки роботи з
bzip2
- [bzerror()](function.bzerror.md) - Повертає код та рядок помилки
роботи з bzip2 у вигляді масиву
