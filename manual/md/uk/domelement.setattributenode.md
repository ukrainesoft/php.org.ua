- [« DOMElement::setAttribute](domelement.setattribute.md)
- [DOMElement::setAttributeNodeNS
»](domelement.setattributenodens.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Додає новий вузол атрибуту елемент

# DOMElement::setAttributeNode

(PHP 5, PHP 7, PHP 8)

DOMElement::setAttributeNode — Додає новий атрибут в елемент

### Опис

public **DOMElement::setAttributeNode**([DOMAttr](class.domattr.md)
`$attr`): [DOMAttr](class.domattr.md)\|null\|false

Додає новий вузол атрибуту 'attr' елемент.

### Список параметрів

`attr`
Вузол атрибуту.

### Значення, що повертаються

Повертає старий вузол, якщо атрибут замінено або **`null`**.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

### Дивіться також

- [DOMElement::hasAttribute()](domelement.hasattribute.md) -
Перевіряє, чи існує атрибут
- [DOMElement::getAttributeNode()](domelement.getattributenode.md) -
Повертає вузол атрибуту
- [DOMElement::removeAttributeNode()](domelement.removeattributenode.md) -
Видаляє атрибут
