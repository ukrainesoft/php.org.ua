- [« XMLReader::close](xmlreader.close.md)
- [XMLReader::getAttribute »](xmlreader.getattribute.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Повернути копію поточного вузла як об'єкт DOM

# XMLReader::expand

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::expand — Повернути копію поточного сайту як об'єкт DOM

### Опис

public **XMLReader::expand**(?[DOMNode](class.domnode.md) `$baseNode`
u003d **`null`**): [DOMNode](class.domnode.md)\|false

Цей метод копіює поточний вузол та повертає відповідний об'єкт
DOM.

### Список параметрів

`baseNode`
[DOMNode](class.domnode.md) визначає цільовий
[DOMDocument](class.domdocument.md) створеного об'єкта DOM.

### Значення, що повертаються

Результуючий [DOMNode](class.domnode.md) або **`false`** у разі
виникнення помилки.
