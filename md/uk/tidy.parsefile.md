- [« tidy::isXml](tidy.isxml.md)
- [tidy::parseString »](tidy.parsestring.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Розбір розмітки у файлі або URI

# tidy::parseFile

# tidy_parse_file

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::parseFile -- tidy_parse_file — Розбір розмітки у файлі або URI

### Опис

Об'єктно-орієнтований стиль

public **tidy::parseFile**(
string `$filename`,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
): bool

Процедурний стиль

**tidy_parse_file**(
string `$filename`,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
): [tidy](class.tidy.md)\|false

Розбір одержаного файлу.

### Список параметрів

`filename`
Якщо отримано параметр `filename`, то функція прочитає цей файл
ініціалізує об'єкт із цим файлом, так само як робить це функція
**tidy_parse_file()**.

`config`
Налаштування `config` можуть бути задані як масив або рядок. Якщо
заданий рядок, то він інтерпретується як ім'я файлу конфігурації,
інакше, параметр інтерпретується як самі налаштування.

Інформацію про кожен параметр можна знайти тут:
[»http://api.md-tidy.org/#quick-reference](http://api.md-tidy.org/#quick-reference).

`encoding`
Параметр `encoding` встановлює кодування для вхідних/вихідних
документів. Можливі значення: `ascii`, `latin0`, `latin1`, `raw`,
`utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`,
`utf16be`, `big5`, та `shiftjis`.

`useIncludePath`
Пошук файлу в [include_path](ini.core.md#ini.include-path).

### Значення, що повертаються

**tidy::parseFile()** повертає **`true`** у разі успішного
виконання. **tidy_parse_file()** повертає новий екземпляр
[tidy](class.tidy.md) у разі успішного виконання. І метод, і
функція повертають **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------|
| 8.0.0 | `config` та `encoding` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **tidy::parseFile()****

` <?php$tidy u003d new tidy();$tidy->parseFile('file.md');$tidy->cleanRepair();if(!empty($tidy->errorBuffer)) {    echo "Виникли наступні помилки або попередження:
";   echo $tidy->errorBuffer;}?> `

### Дивіться також

- [tidy::parsestring()](tidy.parsestring.md) - Розбір документа,
зберігається у рядку
- [tidy::repairfile()](tidy.repairfile.md) - Відновлює
розмітку файлу та повертає його у вигляді рядка
- [tidy::repairstring()](tidy.repairstring.md) - Відновлює
рядок, використовуючи наскільки можна конфігураційний файл
