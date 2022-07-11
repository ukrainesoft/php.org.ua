- [«deflate_init](function.deflate-init.md)
- [gzcompress »](function.gzcompress.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Закрити вказівник відкритого gz-файлу

# gzclose

(PHP 4, PHP 5, PHP 7, PHP 8)

gzclose — Закрити покажчик відкритого gz-файлу

### Опис

**gzclose**(resource `$stream`): bool

Закриває відкритий gz-файл за вказаним покажчиком.

### Список параметрів

`stream`
Вказівник на gz-файл. Повинен вказувати на файл, успішно відкритий
[gzopen()](function.gzopen.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gzclose()****

` <?php$gz u003d gzopen('somefile.gz','w9');gzputs ($gz, 'Додано в файл somefile.gz');gzclose($gz);?> `

### Дивіться також

- [gzopen()](function.gzopen.md) - Відкрити файл gz-файл
