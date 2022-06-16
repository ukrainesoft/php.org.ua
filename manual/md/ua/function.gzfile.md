- [«gzeof](function.gzeof.md)
- [gzgetc »](function.gzgetc.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Зчитує весь gz-файл у масив

# gzfile

(PHP 4, PHP 5, PHP 7, PHP 8)

gzfile — Зчитує весь gz-файл у масив

### Опис

**gzfile**(string `$filename`, int `$use_include_path` u003d 0):
array\|false

Аналогічна [readgzfile()](function.readgzfile.md), за винятком
те, що вона повертає файл у масиві.

### Список параметрів

`filename`
Ім'я файлу.

`use_include_path`
Якщо ви хочете, щоб також перевірялася наявність файлу в каталогах
[include_path](ini.core.md#ini.include-path), встановіть значення
цього параметра в `1`.

### Значення, що повертаються

Масив рядків файлу, у кожному елементі масиву знаходиться один рядок,
порожні рядки включаються, а переноси рядків, як і раніше, додаються або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gzfile()****

` <?php$lines u003d gzfile('somefile.gz');foreach ($lines as $line) {    echo $line;}?> `

### Дивіться також

- [readgzfile()](function.readgzfile.md) - Виводить вміст
gz-файлу
- [gzopen()](function.gzopen.md) - Відкрити файл gz-файл
