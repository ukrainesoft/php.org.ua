- [« DOMDocument::relaxNGValidate](domdocument.relaxngvalidate.md)
- [DOMDocument::save »](domdocument.save.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Перевіряє документ за допомогою relaxNG

# DOMDocument::relaxNGValidateSource

(PHP 5, PHP 7, PHP 8)

DOMDocument::relaxNGValidateSource — Перевіряє документ за допомогою
relaxNG

### Опис

public **DOMDocument::relaxNGValidateSource**(string `$source`): bool

Застосовує перевірку [»relaxNG](http://www.relaxng.org/) документа на
відповідність заданому джерелу RNG.

### Список параметрів

`source`
Рядок містить RNG-схему.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [DOMDocument::relaxNGValidate()](domdocument.relaxngvalidate.md) -
Здійснює перевірку документа на правильність побудови за допомогою
relaxNG
- [DOMDocument::schemaValidate()](domdocument.schemavalidate.md) -
Перевіряє дійсність документа, ґрунтуючись на заданій схемі.
Підтримується лише XML-схема 1.0.
- [DOMDocument::schemaValidateSource()](domdocument.schemavalidatesource.md) -
Перевіряє дійсність документа, ґрунтуючись на схемі
- [DOMDocument::validate()](domdocument.validate.md) - Перевіряє
документ на відповідність його DTD
