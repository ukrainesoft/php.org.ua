- [« XMLReader::moveToAttributeNo](xmlreader.movetoattributeno.md)
- [XMLReader::moveToElement »](xmlreader.movetoelement.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Перемістити курсор до іменованого атрибуту

# XMLReader::moveToAttributeNs

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::moveToAttributeNs — Перемістити курсор до іменованого
атрибуту

### Опис

public **XMLReader::moveToAttributeNs**(string `$name`, string
`$namespace`): bool

Позиціонує курсор на іменованому атрибуті у вказаному просторі
імен.

### Список параметрів

`name`
Місцеве ім'я.

`namespace`
URI простір імен.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [XMLReader::moveToElement()](xmlreader.movetoelement.md) -
Позиціонувати курсор на батьківському елементі поточного атрибуту
- [XMLReader::moveToAttribute()](xmlreader.movetoattribute.md) -
Перемістити курсор до атрибуту із заданим ім'ям
- [XMLReader::moveToAttributeNo()](xmlreader.movetoattributeno.md) -
Перемістити курсор на атрибут за індексом
- [XMLReader::moveToFirstAttribute()](xmlreader.movetofirstattribute.md) -
Перемістити позицію курсору на перший атрибут
