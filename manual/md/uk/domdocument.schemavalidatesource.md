- [« DOMDocument::schemaValidate](domdocument.schemavalidate.md)
- [DOMDocument::validate »](domdocument.validate.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Перевіряє дійсність документа, ґрунтуючись на схемі

# DOMDocument::schemaValidateSource

(PHP 5, PHP 7, PHP 8)

DOMDocument::schemaValidateSource — Перевіряє дійсність
документа, ґрунтуючись на схемі

### Опис

public **DOMDocument::schemaValidateSource**(string `$source`, int
$flags u003d 0): bool

Перевіряє відповідність документа переданої через рядок схемою.

### Список параметрів

`source`
Рядок, що містить схему.

`flags`
Бітова маска прапори перевірки схеми Libxml. На даний момент
підтримується лише одне значення
[LIBXML_SCHEMA_CREATE](libxml.constants.md). Параметр доступний
починаючи з Libxml 2.6.14.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [DOMDocument::schemaValidate()](domdocument.schemavalidate.md) -
Перевіряє дійсність документа, ґрунтуючись на заданій схемі.
Підтримується лише XML-схема 1.0.
- [DOMDocument::relaxNGValidate()](domdocument.relaxngvalidate.md) -
Здійснює перевірку документа на правильність побудови за допомогою
relaxNG
- [DOMDocument::relaxNGValidateSource()](domdocument.relaxngvalidatesource.md) -
Перевіряє документ за допомогою relaxNG
- [DOMDocument::validate()](domdocument.validate.md) - Перевіряє
документ на відповідність його DTD
