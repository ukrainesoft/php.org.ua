- [«tidy::html](tidy.md.md)
- [tidy::isXml »](tidy.isxml.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Визначає, чи є документ XHTML-документом

# tidy::isXhtml

# tidy_is_xhtml

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::isXhtml -- tidy_is_xhtml — Визначає, чи є документ
XHTML-документом

### Опис

Об'єктно-орієнтований стиль

public **tidy::isXhtml**(): bool

Процедурний стиль

**tidy_is_xhtml**([tidy](class.tidy.md) `$tidy`): bool

Визначає, чи є документ XHTML-документом.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Функція повертає **`true`**, якщо вказаний tidy-об'єкт `tidy`
є XHTML-документом, або **`false`** інакше.

**Увага**

Ця функція ще не реалізована в самому Tidylib, тому завжди
повертається **`false`**.
