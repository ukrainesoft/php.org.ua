- [«gzfile](function.gzfile.md)
- [gzgets »](function.gzgets.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Отримати символ із вказівника на gz-файл

# gzgetc

(PHP 4, PHP 5, PHP 7, PHP 8)

gzgetc — Отримати символ із покажчика на gz-файл

### Опис

**gzgetc**(resource `$stream`): string\|false

Повертає рядок, що містить один символ (несжатий), зчитаний з
заданого покажчика gz-файлу.

### Список параметрів

`stream`
Вказівник на gz-файл. Він повинен бути коректним і повинен вказувати на
файл успішно відкритий [gzopen()](function.gzopen.md).

### Значення, що повертаються

Символ (несжатий) або **`false`** у випадку EOF (на відміну від
[gzeof()](function.gzeof.md)).

### Приклади

**Приклад #1 Приклад використання **gzgetc()****

` <?php$gz u003d gzopen('somefile.gz', 'r');while (!gzeof($gz)) { echo gzgetc($gz);}gzclose($gz);?> `

### Дивіться також

- [gzopen()](function.gzopen.md) - Відкрити файл gz-файл
- [gzgets()](function.gzgets.md) - Отримати рядок із покажчика
файлу
