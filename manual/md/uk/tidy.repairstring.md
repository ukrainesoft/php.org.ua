- [« tidy::repairFile](tidy.repairfile.md)
- [tidy::root »](tidy.root.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Відновлює рядок, використовуючи наскільки можна конфігураційний
файл

# tidy::repairString

# tidy_repair_string

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.7.0)

tidy::repairString -- tidy_repair_string — Відновлює рядок,
використовуючи наскільки можна конфігураційний файл

### Опис

Об'єктно-орієнтований стиль

public static **tidy::repairString**(string `$string`,
array\|string\|null `$config` u003d **`null`**, ?string `$encoding` u003d
**`null`**): string\|false

Процедурний стиль

**tidy_repair_string**(string `$string`, array\|string\|null `$config` u003d
**`null`**, ?string `$encoding` u003d **`null`**): string\|false

Відновлює отриманий рядок.

### Список параметрів

`string`
Дані відновлення.

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

Повертає відновлений рядок або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------------|
| 8.0.0 | **tidy::repairString()** тепер статичний метод. |
| 8.0.0 | `config` та `encoding` тепер допускають значення null. |
| 8.0.0 | Функція більше не приймає параметр useIncludePath. |

### Приклади

**Приклад #1 Приклад використання **tidy::repairString()****

` <?phpob_start();?><html> <head>   <title>тест</title>  </head>  <body>    <p>помилка</i>  </body></html><?php$ bufferu003du003dob_get_clean();$tidy u003d new tidy();$clean u003d $tidy->repairString($buffer);echo $clean;?> `

Результат виконання цього прикладу:

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
<head>
<title>тест</title>
</head>
<body>
<p>помилка</p>
</body>
</html>

### Дивіться також

- [tidy::parseFile()](tidy.parsefile.md) - Розбір розмітки у файлі
або URI
- [tidy::parseString()](tidy.parsestring.md) - Розбір документа,
зберігається у рядку
- [tidy::repairFile()](tidy.repairfile.md) - Відновлює
розмітку файлу та повертає його у вигляді рядка
