- [« XMLReader::getAttribute](xmlreader.getattribute.md)
- [XMLReader::getAttributeNs »](xmlreader.getattributens.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Отримати значення атрибуту за індексом

# XMLReader::getAttributeNo

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::getAttributeNo — Отримати значення атрибута за індексом

### Опис

public **XMLReader::getAttributeNo**(int `$index`): ?string

Повертає значення атрибута на підставі позиції або порожній рядок,
якщо атрибут не існує або розташований на вузлі елемента.

### Список параметрів

`index`
Позиція атрибуту.

### Значення, що повертаються

Значення атрибуту або **`null`**, якщо атрибут із заданим параметром
`index` не існує чи немає позиції елемента.

### Дивіться також

- [XMLReader::getAttribute()](xmlreader.getattribute.md) - Отримати
значення атрибуту з певним ім'ям
- [XMLReader::getAttributeNs()](xmlreader.getattributens.md) -
Отримати значення атрибуту по localname та URI
