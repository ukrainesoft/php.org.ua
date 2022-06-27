- [« DOMElement::getAttribute](domelement.getattribute.md)
- [DOMElement::getAttributeNodeNS
»](domelement.getattributenodens.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Повертає вузол атрибуту

# DOMElement::getAttributeNode

(PHP 5, PHP 7, PHP 8)

DOMElement::getAttributeNode — Повертає вузол атрибута

### Опис

public **DOMElement::getAttributeNode**(string `$qualifiedName`):
[DOMAttr](class.domattr.md)\|DOMNameSpaceNode\|false

Повертає вузол атрибута з ім'ям `qualifiedName` для поточного елемента.

### Список параметрів

`qualifiedName`
Назва атрибута.

### Значення, що повертаються

Вузол атрибуту. Зверніть увагу, що для оголошень просторів імен
XML (атрибути `xmlns` та `xmlns:*`) повертається екземпляр
**DOMNameSpaceNode**, а не [DOMAttr](class.domattr.md).

### Дивіться також

- [DOMElement::hasAttribute()](domelement.hasattribute.md) -
Перевіряє, чи існує атрибут
- [DOMElement::setAttributeNode()](domelement.setattributenode.md) -
Додає новий вузол атрибуту елемент
- [DOMElement::removeAttributeNode()](domelement.removeattributenode.md) -
Видаляє атрибут
