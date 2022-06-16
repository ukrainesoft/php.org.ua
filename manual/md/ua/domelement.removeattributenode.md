- [« DOMElement::removeAttribute](domelement.removeattribute.md)
- [DOMElement::removeAttributeNS »](domelement.removeattributens.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Видаляє атрибут

# DOMElement::removeAttributeNode

(PHP 5, PHP 7, PHP 8)

DOMElement::removeAttributeNode — Видаляє атрибут

### Опис

public **DOMElement::removeAttributeNode**([DOMAttr](class.domattr.md)
`$attr`): [DOMAttr](class.domattr.md)\|false

Видаляє вузол атрибуту `attr` з елемента.

### Список параметрів

`attr`
Вузол атрибуту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

**`DOM_NOT_FOUND_ERROR`**
Виникає, якщо 'attr' не є атрибутом елемента.

### Дивіться також

- [DOMElement::hasAttribute()](domelement.hasattribute.md) -
Перевіряє, чи існує атрибут
- [DOMElement::getAttributeNode()](domelement.getattributenode.md) -
Повертає вузол атрибуту
- [DOMElement::setAttributeNode()](domelement.setattributenode.md) -
Додає новий вузол атрибуту елемент
