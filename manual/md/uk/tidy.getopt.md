- [« tidy::getHtmlVer](tidy.gethtmlver.md)
- [tidy::getOptDoc »](tidy.getoptdoc.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Повертає значення вказаного параметра конфігурації для документа
tidy

# tidy::getOpt

# tidy_getopt

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::getOpt -- tidy_getopt — Повертає значення вказаного параметра
конфігурації для документа tidy

### Опис

Об'єктно-орієнтований стиль

public **tidy::getOpt**(string `$option`): string\|int\|bool

Процедурний стиль

**tidy_getopt**([tidy](class.tidy.md) `$tidy`, string `$option`):
string\|int\|bool

Повертає значення вказаного параметра `option` для вказаного об'єкта
tidy `tidy`.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

`option`
Ви можете знайти список кожної опції конфігурації з типом тут:
[»http://api.md-tidy.org/#quick-reference](http://api.md-tidy.org/#quick-reference).

### Значення, що повертаються

Повертає значення вказаної опції `option`. Тип значення, що повертається
залежить від типу зазначеної опції.

### Приклади

**Приклад #1 Приклад використання **tidy_getopt()****

` <?php$html u003d'<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN"><html><head><title>Заголовок</title></head><body>< p><img srcu003d"img.png"></p></body></html>';$config u003d array('accessibility-check' u003d> 3,               'alt-text' u003d> то текст');$tidy u003d new tidy();$tidy->parseString($html, $config);var_dump($tidy->getOpt('accessibility-check')); //integervar_dump($tidy->getOpt('lower-literals')); //booleanvar_dump($tidy->getOpt('alt-text')); //string?> `

Результат виконання цього прикладу:

int(3)
bool(true)
string(9) "якийсь текст"
