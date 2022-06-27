- [«
DOMElement::getAttributeNodeNS](domelement.getattributenodens.md)
- [DOMElement::getElementsByTagName
»](domelement.getelementsbytagname.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Повертає значення атрибуту

# DOMElement::getAttributeNS

(PHP 5, PHP 7, PHP 8)

DOMElement::getAttributeNS — Повертає значення атрибута

### Опис

public **DOMElement::getAttributeNS**(?string `$namespace`, string
`$localName`): string

Отримує значення атрибута у просторі імен `namespace` з локальним
іменем `localName` для поточного вузла.

### Список параметрів

`namespace`
URI простір імен.

`localName`
Місцеве ім'я.

### Значення, що повертаються

Значення атрибуту або порожній рядок, якщо атрибут із заданим локальним
ім'ям `localName` у просторі імен `namespace` не знайдено.

### Дивіться також

- [DOMElement::hasAttributeNS()](domelement.hasattributens.md) -
Перевіряє, чи існує заданий атрибут
- [DOMElement::setAttributeNS()](domelement.setattributens.md) -
Додає новий атрибут
- [DOMElement::removeAttributeNS()](domelement.removeattributens.md) -
Видаляє атрибут
