- [« tidy::isXhtml](tidy.isxhtml.md)
- [tidy::parseFile »](tidy.parsefile.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Визначає, чи документ є спільним XML-документом (не
HTML/XHTML)

# tidy::isXml

# tidy_is_xml

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::isXml -- tidy_is_xml — Визначає, чи є документ спільним
XML-документом (не HTML/XHTML)

### Опис

Об'єктно-орієнтований стиль

public **tidy::isXml**(): bool

Процедурний стиль

**tidy_is_xml**([tidy](class.tidy.md) `$tidy`): bool

Визначає, чи документ є спільним XML-документом (не HTML/XHTML).

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Ця функція повертає **`true`**, якщо вказаний tidy-об'єкт `tidy`
є загальним XML-документом (не HTML/XHTML), або **`false`**
інакше.

**Увага**

Ця функція ще не реалізована в самому Tidylib, тому завжди
повертається **`false`**.
