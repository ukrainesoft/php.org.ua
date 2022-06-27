- [«
DOMElement::removeAttributeNode](domelement.removeattributenode.md)
- [DOMElement::setAttribute »](domelement.setattribute.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Видаляє атрибут

# DOMElement::removeAttributeNS

(PHP 5, PHP 7, PHP 8)

DOMElement::removeAttributeNS — Видаляє атрибут

### Опис

public **DOMElement::removeAttributeNS**(?string `$namespace`, string
`$localName`): void

Видаляє атрибут `localName` у просторі імен `namespace` з елемента.

### Список параметрів

`namespace`
URI простір імен.

`localName`
Місцеве ім'я.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

### Дивіться також

- [DOMElement::hasAttributeNS()](domelement.hasattributens.md) -
Перевіряє, чи існує заданий атрибут
- [DOMElement::getAttributeNS()](domelement.getattributens.md) -
Повертає значення атрибуту
- [DOMElement::setAttributeNS()](domelement.setattributens.md) -
Додає новий атрибут
