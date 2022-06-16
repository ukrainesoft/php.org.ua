- [« tidy::\_\_construct](tidy.construct.md)
- [tidy::$errorBuffer »](tidy.props.errorbuffer.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Запуск налаштованої діагностики для розібраної та відновленої
розмітки

# tidy::diagnose

# tidy_diagnose

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::diagnose -- tidy_diagnose — Запуск настроєної діагностики для
розібраної та відновленої розмітки

### Опис

Об'єктно-орієнтований стиль

public **tidy::diagnose**(): bool

Процедурний стиль

**tidy_diagnose**([tidy](class.tidy.md) `$tidy`): bool

Виконує діагностичні тести отриманого tidy-об'єкту `tidy`,
додаючи деяку інформацію про документ у буфер помилок.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **tidy::diagnose()****

` <?php$html u003d <<<<HTML<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1- strict.dtd"><p>параграф</p>HTML;$tidy u003d tidy_parse_string($html);$tidy->cleanRepair(); "
";$tidy->diagnose();echo $tidy->errorBuffer;?> `

Результат виконання цього прикладу:

line 4 column 1 - Warning: <p> isn't allowed in <head> elements
line 4 column 1 - Warning: inserting missing 'title' element
line 4 column 1 - Warning: <p> isn't allowed in <head> elements
line 4 column 1 - Warning: inserting missing 'title' element
Info: Doctype given is "-//W3C//DTD XHTML 1.0 Strict//EN"
Info: Document content looks like XHTML 1.0 Strict
2 warnings, 0 errors were found!

### Дивіться також

- **tidy::errorBuffer()**
