- [«gzputs](function.gzputs.md)
- [gzrewind »] (function.gzrewind.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Бінарне читання gz-файлу

# gzread

(PHP 4, PHP 5, PHP 7, PHP 8)

gzread — Бінарне читання gz-файлу

### Опис

**gzread**(resource `$stream`, int `$length`): string\|false

**gzread()** читає (розпаковуючи) до `length` байт з gz-файлу з
переданого покажчика gz-файлу. Читання закінчується при досягненні
максимального розміру `length` розпакованих даних або кінця файлу
(EOF)

### Список параметрів

`stream`
Вказівник на gz-файл, повернутий після його успішного відкриття,
функцією [gzopen()](function.gzopen.md).

`length`
Кількість байт (після розпакування), які слід прочитати.

### Значення, що повертаються

Прочитані дані або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------------------------------------|
| 7.4.0 | У разі виникнення помилки повертається **`false`**; раніше, повертався `0`. |

### Приклади

**Приклад #1 Приклад використання **gzread()****

` <?php// помістити вміст gz-файлу в рядок$filename u003d "/usr/local/something.txt.gz";$zd u003d gzopen($filename, "r");$contents u003d gzread($zd 10000); gzclose ($zd);?> `

### Дивіться також

- [gzwrite()](function.gzwrite.md) - Бінарний запис у gz-файл
- [gzopen()](function.gzopen.md) - Відкрити файл gz-файл
- [gzgets()](function.gzgets.md) - Отримати рядок із покажчика
файлу
- [gzgetss()](function.gzgetss.md) - Повертає рядок із покажчика
gz-файлу та видалити HTML-теги
- [gzfile()](function.gzfile.md) - Зчитує весь gz-файл у масив
- [gzpassthru()](function.gzpassthru.md) - Виведення всіх, що залишилися.
даних із покажчика gz-файлу.
