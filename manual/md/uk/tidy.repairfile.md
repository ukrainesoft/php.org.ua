- [« tidy::parseString](tidy.parsestring.md)
- [tidy::repairString »](tidy.repairstring.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Відновлює розмітку файлу та повертає його у вигляді рядка

# tidy::repairFile

# tidy_repair_file

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.7.0)

tidy::repairFile -- tidy_repair_file — Відновлює розмітку файлу та
повертає його у вигляді рядка

### Опис

Об'єктно-орієнтований стиль

public static **tidy::repairFile**(
string `$filename`,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
): string\|false

Процедурний стиль

**tidy_repair_file**(
string `$filename`,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
): string\|false

Відновлює отриманий файл та повертає його у вигляді рядка.

### Список параметрів

`filename`
Ім'я файлу для відновлення.

`config`
Налаштування `config` можуть бути задані як масив або рядок. Якщо
заданий рядок, то він інтерпретується як ім'я файлу конфігурації,
інакше, параметр інтерпретується як самі налаштування.

Інформацію про кожен параметр можна знайти тут:
http://tidy.sourceforge.net/docs/quickref.md.

`encoding`
Параметр `encoding` встановлює кодування для вхідних/вихідних
документів. Можливі значення: `ascii`, `latin0`, `latin1`, `raw`,
`utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`,
`utf16be`, `big5`, та `shiftjis`.

`useIncludePath`
Пошук файлу в [include_path](ini.core.md#ini.include-path).

### Значення, що повертаються

Повертає відновлений документ у вигляді рядка або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------|
| 8.0.0 | **tidy::repairFile()** тепер статичний метод. |
| 8.0.0 | `config` та `encoding` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **tidy::repairFile()****

` <?php$file u003d 'file.md';$tidy u003d new tidy();$repaired u003d $tidy->repairfile($file);rename($file, $file . '.bak');file_put_contents( $file, $repaired);?> `

### Дивіться також

- [tidy::parseFile()](tidy.parsefile.md) - Розбір розмітки у файлі
або URI
- [tidy::parseString()](tidy.parsestring.md) - Розбір документа,
зберігається у рядку
- [tidy::repairString()](tidy.repairstring.md) - Відновлює
рядок, використовуючи наскільки можна конфігураційний файл
