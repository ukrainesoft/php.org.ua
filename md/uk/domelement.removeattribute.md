- [« DOMElement::hasAttributeNS](domelement.hasattributens.md)
- [DOMElement::removeAttributeNode
»](domelement.removeattributenode.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Видаляє атрибут

# DOMElement::removeAttribute

(PHP 5, PHP 7, PHP 8)

DOMElement::removeAttribute — Видаляє атрибут

### Опис

public **DOMElement::removeAttribute**(string `$qualifiedName`): bool

Видаляє атрибут з ім'ям `qualifiedName` з елемента.

### Список параметрів

`qualifiedName`
Назва атрибута.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо атрибут доступний лише читання.

### Дивіться також

- [DOMElement::hasAttribute()](domelement.hasattribute.md) -
Перевіряє, чи існує атрибут
- [DOMElement::getAttribute()](domelement.getattribute.md) -
Повертає значення атрибуту
- [DOMElement::setAttribute()](domelement.setattribute.md) -
Додає новий або змінює існуючий атрибут
