- [«
XMLReader::moveToFirstAttribute](xmlreader.movetofirstattribute.md)
- [XMLReader::next »](xmlreader.next.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Перемістити позицію курсору на наступний атрибут

# XMLReader::moveToNextAttribute

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::moveToNextAttribute — Перемістити позицію курсору на
наступний атрибут

### Опис

public **XMLReader::moveToNextAttribute**(): bool

Переміщує курсор до наступного атрибуту, якщо курсор спозиційний на
атрибут або переміщує позицію на перший атрибут, якщо спозиційний
на елемент.

### Список параметрів

Ця функція не має параметрів.

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
- [XMLReader::moveToAttributeNs()](xmlreader.movetoattributens.md) -
Перемістити курсор до іменованого атрибуту
- [XMLReader::moveToFirstAttribute()](xmlreader.movetofirstattribute.md) -
Перемістити позицію курсору на перший атрибут
