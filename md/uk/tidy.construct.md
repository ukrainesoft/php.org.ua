- [« tidy::cleanRepair](tidy.cleanrepair.md)
- [tidy::diagnose »](tidy.diagnose.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- створює новий tidy-об'єкт

# tidy::\_\_construct

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::\_\_construct — створює новий [tidy](class.tidy.md)-об'єкт

### Опис

public **tidy::\_\_construct**(
?string `$filename` u003d **`null`**,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
)

Створює нову [tidy](class.tidy.md)-об'єкт.

### Список параметрів

`filename`
Якщо заданий параметр `filename`, ця функція прочитає файл і
ініціалізує об'єкт із цим файлом, діючи як функція
[tidy_parse_file()](tidy.parsefile.md).

`config`
Налаштування `config` можуть бути задані як масив або рядок. Якщо
заданий рядок, то це інтерпретується як ім'я файлу конфігурації,
інакше, параметр інтерпретується як самі налаштування.

Опис кожного параметра можна знайти тут:
[»http://api.md-tidy.org/#quick-reference](http://api.md-tidy.org/#quick-reference).

`encoding`
Параметр `encoding` встановлює кодування для вхідних/вихідних
документів. Можливі значення: `ascii`, `latin0`, `latin1`, `raw`,
`utf8`, `iso2022`, `mac`, `win1252`, `ibm858`, `utf16`, `utf16le`,
`utf16be`, `big5`, та `shiftjis`.

`useIncludePath`
Пошук файлу в [include_path](ini.core.md#ini.include-path).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------------------|
| 8.0.0 | `filename`, `config`, `encoding` та `useIncludePath` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **tidy::\_\_construct()****

` <?php$html u003d <<<<HTML<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1- strict.dtd"><html xmlnsu003d"http://www.w3.org/1999/xhtml" xml:langu003d"en" langu003d"en"><head><title>title</title></ head><body><p>параграф <bt />текст</p></body></html>HTML;$tidy u003d new tidy();$tidy->ParseString($html);$tidy-> cleanRepair();if($tidy->errorBuffer) {   echo "Були виявлені наступні помилки:
";   echo $tidy->errorBuffer;}?> `

Результат виконання цього прикладу:

Виявлено такі помилки:
line 8 column 14 - Error: <bt> is not recognized!
line 8 column 14 - Warning: discarding unexpected <bt>

### Дивіться також

- [tidy::parseFile()](tidy.parsefile.md) - Розбір розмітки у файлі
або URI
- [tidy::parseString()](tidy.parsestring.md) - Розбір документа,
зберігається у рядку
