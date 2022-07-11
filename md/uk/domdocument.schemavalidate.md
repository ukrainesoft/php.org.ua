- [« DOMDocument::saveXML](domdocument.savexml.md)
- [DOMDocument::schemaValidateSource
»](domdocument.schemavalidatesource.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Перевіряє дійсність документа, ґрунтуючись на заданій схемі.
Підтримується лише XML-схема 1.0.

# DOMDocument::schemaValidate

(PHP 5, PHP 7, PHP 8)

DOMDocument::schemaValidate — Перевіряє дійсність документа,
ґрунтуючись на заданій схемі. Підтримується лише XML-схема 1.0.

### Опис

public **DOMDocument::schemaValidate**(string `$filename`, int `$flags`
u003d 0): bool

Перевіряє документ на дійсність, виходячи з файлу схеми.

### Список параметрів

`filename`
Шлях до файлу із схемою.

`flags`
Бітова маска прапори перевірки схеми Libxml. На даний момент
підтримується лише одне значення
[LIBXML_SCHEMA_CREATE](libxml.constants.md). Параметр доступний
починаючи з Libxml 2.6.14.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [DOMDocument::schemaValidateSource()](domdocument.schemavalidatesource.md) -
Перевіряє дійсність документа, ґрунтуючись на схемі
- [DOMDocument::relaxNGValidate()](domdocument.relaxngvalidate.md) -
Здійснює перевірку документа на правильність побудови за допомогою
relaxNG
- [DOMDocument::relaxNGValidateSource()](domdocument.relaxngvalidatesource.md) -
Перевіряє документ за допомогою relaxNG
- [DOMDocument::validate()](domdocument.validate.md) - Перевіряє
документ на відповідність його DTD
