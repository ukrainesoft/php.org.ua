- [«DOMElement::\_\_construct](domelement.construct.md)
- [DOMElement::getAttributeNode »](domelement.getattributenode.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Повертає значення атрибуту

# DOMElement::getAttribute

(PHP 5, PHP 7, PHP 8)

DOMElement::getAttribute — Повертає значення атрибута

### Опис

public **DOMElement::getAttribute**(string `$qualifiedName`): string

Повертає значення атрибута під назвою `qualifiedName` для поточного вузла.

### Список параметрів

`qualifiedName`
Назва атрибута.

### Значення, що повертаються

Значення атрибута або порожнє значення, якщо атрибут із зазначеним ім'ям
`qualifiedName` не знайдено.

### Дивіться також

- [DOMElement::hasAttribute()](domelement.hasattribute.md) -
Перевіряє, чи існує атрибут
- [DOMElement::setAttribute()](domelement.setattribute.md) -
Додає новий або змінює існуючий атрибут
- [DOMElement::removeAttribute()](domelement.removeattribute.md) -
Видаляє атрибут
