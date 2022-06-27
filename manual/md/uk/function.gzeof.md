- [«gzencode](function.gzencode.md)
- [gzfile »] (function.gzfile.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Перевіряє, чи є поточна позиція в кінці (EOF) gz-файлу

# gzeof

(PHP 4, PHP 5, PHP 7, PHP 8)

gzeof — Перевіряє, чи є поточна позиція в кінці (EOF) gz-файлу

### Опис

**gzeof**(resource `$stream`): bool

Перевіряє, чи відповідає позиція покажчика у GZ-файлі позиції EOF
(end-of-file, кінець файлу).

### Список параметрів

`stream`
Вказівник на gz-файл. Він повинен бути коректним і повинен вказувати на
файл успішно відкритий [gzopen()](function.gzopen.md).

### Значення, що повертаються

Повертає **`true`**, якщо позиція покажчика gz-файлу відповідає EOF
або виникає помилка; інакше повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gzeof()****

` <?php$gz u003d gzopen('somefile.gz', 'r');while (!gzeof($gz)) { echo gzgetc($gz);}gzclose($gz);?> `
