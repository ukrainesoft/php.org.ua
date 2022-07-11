- [« DOMElement::removeAttributeNS](domelement.removeattributens.md)
- [DOMElement::setAttributeNode »](domelement.setattributenode.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Додає новий або змінює наявний атрибут

# DOMElement::setAttribute

(PHP 5, PHP 7, PHP 8)

DOMElement::setAttribute — Додає новий або змінює наявний
атрибут

### Опис

public **DOMElement::setAttribute**(string `$qualifiedName`, string
`$value`): [DOMAttr](class.domattr.md)\|bool

Встановлює атрибут під назвою `qualifiedName`. Якщо атрибут не
існує, він буде створено.

### Список параметрів

`qualifiedName`
Назва атрибута.

`value`
Значення атрибуту.

### Значення, що повертаються

Створений або змінений об'єкт класу [DOMAttr](class.domattr.md) або
**`false`** у разі виникнення помилки.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

### Приклади

**Приклад #1 Встановлення атрибуту**

` <?php$doc u003d new DOMDocument("1.0");$node u003d $doc->createElement("para");$newnode u003d $doc->appendChild($node);$newnode->setAttribute("align ", "left");?> `

### Дивіться також

- [DOMElement::hasAttribute()](domelement.hasattribute.md) -
Перевіряє, чи існує атрибут
- [DOMElement::getAttribute()](domelement.getattribute.md) -
Повертає значення атрибуту
- [DOMElement::removeAttribute()](domelement.removeattribute.md) -
Видаляє атрибут
