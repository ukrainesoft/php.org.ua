- [«
DOMElement::getElementsByTagNameNS](domelement.getelementsbytagnamens.md)
- [DOMElement::hasAttributeNS »](domelement.hasattributens.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Перевіряє, чи існує атрибут

# DOMElement::hasAttribute

(PHP 5, PHP 7, PHP 8)

DOMElement::hasAttribute — Перевіряє, чи існує атрибут

### Опис

public **DOMElement::hasAttribute**(string `$qualifiedName`): bool

Перевіряє наявність атрибута з ім'ям, зазначеним у параметрі
`qualifiedName` поточного елемента.

### Список параметрів

`qualifiedName`
Назва атрибута.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [DOMElement::hasAttributeNS()](domelement.hasattributens.md) -
Перевіряє, чи існує заданий атрибут
- [DOMElement::getAttribute()](domelement.getattribute.md) -
Повертає значення атрибуту
- [DOMElement::setAttribute()](domelement.setattribute.md) -
Додає новий або змінює існуючий атрибут
- [DOMElement::removeAttribute()](domelement.removeattribute.md) -
Видаляє атрибут
