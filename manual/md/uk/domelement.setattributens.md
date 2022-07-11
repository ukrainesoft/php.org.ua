- [«
DOMElement::setAttributeNodeNS](domelement.setattributenodens.md)
- [DOMElement::setIdAttribute »](domelement.setidattribute.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Додає новий атрибут

# DOMElement::setAttributeNS

(PHP 5, PHP 7, PHP 8)

DOMElement::setAttributeNS — Додає новий атрибут

### Опис

public **DOMElement::setAttributeNS**(?string `$namespace`, string
`$qualifiedName`, string `$value`): void

Встановлює атрибут з простором імен `namespace` та локальним ім'ям
`name`. Якщо атрибут не існує, його буде створено.

### Список параметрів

`namespace`
URI простір імен.

`qualifiedName`
Кваліфіковане ім'я атрибута як `prefix:tagname`.

`value`
Значення атрибуту.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

**`DOM_NAMESPACE_ERR`**
Виникає, якщо значення `qualifiedName` неправильне, або якщо
`qualifiedName` має префікс, а `namespaceURI` - **`null`**.

### Дивіться також

- [DOMElement::hasAttributeNS()](domelement.hasattributens.md) -
Перевіряє, чи існує заданий атрибут
- [DOMElement::getAttributeNS()](domelement.getattributens.md) -
Повертає значення атрибуту
- [DOMElement::removeAttributeNS()](domelement.removeattributens.md) -
Видаляє атрибут
