- [«
DOMDocument::registerNodeClass](domdocument.registernodeclass.md)
- [DOMDocument::relaxNGValidateSource
»](domdocument.relaxngvalidatesource.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Здійснює перевірку документа на правильність побудови за допомогою
relaxNG

# DOMDocument::relaxNGValidate

(PHP 5, PHP 7, PHP 8)

DOMDocument::relaxNGValidate — Перевірка документа на
правильність побудови за допомогою relaxNG

### Опис

public **DOMDocument::relaxNGValidate**(string `$filename`): bool

Здійснює [»relaxNG](http://www.relaxng.org/) перевірку документа,
ґрунтуючись на заданій схемі RNG.

### Список параметрів

`filename`
Файл RNG.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [DOMDocument::relaxNGValidateSource()](domdocument.relaxngvalidatesource.md) -
Перевіряє документ за допомогою relaxNG
- [DOMDocument::schemaValidate()](domdocument.schemavalidate.md) -
Перевіряє дійсність документа, ґрунтуючись на заданій схемі.
Підтримується лише XML-схема 1.0.
- [DOMDocument::schemaValidateSource()](domdocument.schemavalidatesource.md) -
Перевіряє дійсність документа, ґрунтуючись на схемі
- [DOMDocument::validate()](domdocument.validate.md) - Перевіряє
документ на відповідність його DTD
