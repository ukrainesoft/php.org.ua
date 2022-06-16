- [« tidy::parseFile](tidy.parsefile.md)
- [tidy::repairFile »](tidy.repairfile.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Розбір документа, що зберігається у рядку

# tidy::parseString

# tidy_parse_string

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::parseString -- tidy_parse_string — Розбір документа, що зберігається в
рядку

### Опис

Об'єктно-орієнтований стиль

public **tidy::parseString**(string `$string`, array\|string\|null
`$config` u003d **`null`**, ?string `$encoding` u003d **`null`**): bool

Процедурний стиль

**tidy_parse_string**(string `$string`, array\|string\|null `$config` u003d
**`null`**, ?string `$encoding` u003d **`null`**):
[tidy](class.tidy.md)\|false

Розбирає документ, що зберігається в рядку.

### Список параметрів

`string`
Дані для аналізу.

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

### Значення, що повертаються

**tidy::parseString()** повертає **`true`** у разі успішного
виконання. **tidy_parse_string()** повертає новий екземпляр
[tidy](class.tidy.md) у разі успішного виконання. І метод, і
функція повертають **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------|
| 8.0.0 | `config` та `encoding` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **tidy::parseString()****

` <?phpob_start();?><html>  <head>   <title>тест</title>  </head>  <body>   <p>помилка<br>інша лінія</i>  </body></html ><?php$buffer u003d ob_get_clean();$config u003d array('indent' u003d> TRUE,                'output-xhtml' u003d> TRUE,                'wrap' u003d> 200);$tidy u003d tidy_parse_string($buffer, $config , 'UTF8');$tidy->cleanRepair();echo $tidy;?> `

Результат виконання цього прикладу:

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlnsu003d"http://www.w3.org/1999/xhtml">
<head>
<title>
тест
</title>
</head>
<body>
<p>
помилка<br />
інша лінія
</p>
</body>
</html>

### Дивіться також

- [tidy::parseFile()](tidy.parsefile.md) - Розбір розмітки у файлі
або URI
- [tidy::repairFile()](tidy.repairfile.md) - Відновлює
розмітку файлу та повертає його у вигляді рядка
- [tidy::repairString()](tidy.repairstring.md) - Відновлює
рядок, використовуючи наскільки можна конфігураційний файл
