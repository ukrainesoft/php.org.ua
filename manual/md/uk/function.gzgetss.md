- [ gzgets](function.gzgets.md)
- [gzinflate »](function.gzinflate.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Повертає рядок із покажчика gz-файлу та видалити HTML-теги

# gzgetss

(PHP 4, PHP 5, PHP 7)

gzgetss — Повертає рядок із покажчика gz-файлу та видалити HTML-теги

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.3.0 і була *Видалена*
у версії PHP 8.0.0. Використовувати цю функцію не рекомендується.

### Опис

**gzgetss**(resource `$zp`, int `$length`, string `$allowable_tags` u003d
?): string

Аналогічно [gzgets()](function.gzgets.md), за винятком того, що
**gzgetss()** намагається видалити будь-які теги HTML і PHP зі зчитуваної
рядки.

### Список параметрів

`zp`
Вказівник на gz-файл. Він повинен бути коректним і повинен вказувати на
файл успішно відкритий [gzopen()](function.gzopen.md).

`length`
Максимальний розмір даних, що повертаються.

`allowable_tags`
Використовуйте цей параметр, щоб вказати теги, які не
слід видаляти.

### Значення, що повертаються

Нестиснений очищений рядок або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gzgetss()****

` <?php$handle u003d gzopen('somefile.gz', 'r');while (!gzeof($handle)) {   $buffer u003d gzgetss($handle, 4096); echo $buffer;}gzclose($handle);?> `

### Дивіться також

- [gzopen()](function.gzopen.md) - Відкрити файл gz-файл
- [gzgets()](function.gzgets.md) - Отримати рядок із покажчика
файлу
- [strip_tags()](function.strip-tags.md) - Видаляє теги HTML та PHP
з рядка
