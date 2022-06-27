- [« Функції Bzip2](ref.bzip2.md)
- [bzcompress »](function.bzcompress.md)

- [PHP Manual](index.md)
- [Функції Bzip2](ref.bzip2.md)
- Закриває файл bzip2

#bzclose

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

bzclose — Закриває файл bzip2

### Опис

**bzclose**(resource `$bz`): bool

Закриває вказаний покажчик на файл bzip2.

### Список параметрів

`bz`
Вказівник на файл. Повинен бути коректним і вказувати на файл успішно
відкритий [bzopen()](function.bzopen.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [bzopen()](function.bzopen.md) - Відкриває файл, стислий з
використанням bzip2
