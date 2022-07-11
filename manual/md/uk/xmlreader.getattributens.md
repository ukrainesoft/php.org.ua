- [« XMLReader::getAttributeNo](xmlreader.getattributeno.md)
- [XMLReader::getParserProperty »](xmlreader.getparserproperty.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Отримати значення атрибуту по localname та URI

# XMLReader::getAttributeNs

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::getAttributeNs — Отримати значення атрибуту по localname та
URI

### Опис

public **XMLReader::getAttributeNs**(string `$name`, string
`$namespace`): ?string

Повертає значення атрибуту по імені та URI простору імен або порожню
рядок, якщо атрибут не існує або розташований на вузлі елемента.

### Список параметрів

`name`
Місцеве ім'я.

`namespace`
URI простір імен.

### Значення, що повертаються

Значення атрибуту або **`null`**, якщо атрибут із заданим `name` та
`namespace` не знайдено чи немає позиції елемента.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.0.0 | Функція більше не може повертати **`false`**. |

### Дивіться також

- [XMLReader::getAttribute()](xmlreader.getattribute.md) - Отримати
значення атрибуту з певним ім'ям
- [XMLReader::getAttributeNo()](xmlreader.getattributeno.md) -
Отримати значення атрибута за індексом
