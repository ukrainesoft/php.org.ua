- [« Phar::hasMetadata](phar.hasmetadata.md)
- [Phar::isBuffering »](phar.isbuffering.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Вказує phar перехоплювати fopen, file_get_contents, opendir і все
stat-функції

# Phar::interceptFileFuncs

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::interceptFileFuncs — Вказує phar перехоплювати fopen,
file_get_contents, opendir та всі stat-функції

### Опис

final public static **Phar::interceptFileFuncs**(): void

Вказує phar перехоплювати [fopen()](function.fopen.md),
[readfile()](function.readfile.md),
[file_get_contents()](function.file-get-contents.md),
[opendir()](function.opendir.md) та всі stat-функції. Якщо якась
з цих функцій буде викликано з phar-архіву з відносним шляхом, то
виклик буде модифіковано для доступу до вмісту архіву. У випадку з
абсолютними шляхами працюватимуть штатні функції доступу до файлової
системі.

Ця функція дозволяє писати програми, що працюють не прив'язані до
жорсткому диску.

### Список параметрів

No parameters.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Phar::interceptFileFuncs()****

` <?phpPhar::interceptFileFuncs();include 'phar://' . __FILE__ . '/file.php';?> `

Припустимо, що у нас є `/path/to/myphar.phar` і в ньому містяться
файли `file.php` та `file2.txt`. `file.php` містить такий код:

**Приклад #2 Приклад використання **Phar::interceptFileFuncs()****

` <?phpecho file_get_contents('file2.txt');?> `

У звичайному режимі PHP шукатиме `file2.txt` у поточній директорії,
є директорією запуску file.php, або поточною директорією в
у разі використання командного рядка. **Phar::interceptFileFuncs()**
вкаже PHP, що поточна директорія - це `phar:///path/to/myphar.phar/`
і, наприклад, буде відкрито файл
`phar:///path/to/myphar.phar/file2.txt`.
