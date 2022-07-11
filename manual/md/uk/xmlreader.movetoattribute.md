- [« XMLReader::lookupNamespace](xmlreader.lookupnamespace.md)
- [XMLReader::moveToAttributeNo »](xmlreader.movetoattributeno.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Перемістити курсор до атрибуту із заданим ім'ям

# XMLReader::moveToAttribute

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::moveToAttribute — Перемістити курсор до атрибута із заданим
ім'ям

### Опис

public **XMLReader::moveToAttribute**(string `$name`): bool

Позиціонує курсор на атрибуті із заданим ім'ям.

### Список параметрів

`name`
Назва атрибута.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [XMLReader::moveToElement()](xmlreader.movetoelement.md) -
Позиціонувати курсор на батьківському елементі поточного атрибуту
- [XMLReader::moveToAttributeNo()](xmlreader.movetoattributeno.md) -
Перемістити курсор на атрибут за індексом
- [XMLReader::moveToAttributeNs()](xmlreader.movetoattributens.md) -
Перемістити курсор до іменованого атрибуту
- [XMLReader::moveToFirstAttribute()](xmlreader.movetofirstattribute.md) -
Перемістити позицію курсору на перший атрибут
