- [« tidy::getConfig](tidy.getconfig.md)
- [tidy::getOpt »](tidy.getopt.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Отримує виявлену HTML версію для зазначеного документа

# tidy::getHtmlVer

#tidy_get_html_ver

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::getHtmlVer -- tidy_get_html_ver — Отримує виявлену HTML
версію для зазначеного документа

### Опис

Об'єктно-орієнтований стиль

public **tidy::getHtmlVer**(): int

Процедурний стиль

**tidy_get_html_ver**([tidy](class.tidy.md) `$tidy`): int

Повертає виявлену HTML версію для вказаного об'єкту tidy `tidy`.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає виявлену версію HTML.

**Увага**

Функція ще не реалізована в самому Tidylib, тому завжди повертається
`0`.
