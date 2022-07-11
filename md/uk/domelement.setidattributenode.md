- [« DOMElement::setIdAttribute](domelement.setidattribute.md)
- [DOMElement::setIdAttributeNS »](domelement.setidattributens.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Оголошує атрибут, вказаний вузлом, з ідентифікатором типу

# DOMElement::setIdAttributeNode

(PHP 5, PHP 7, PHP 8)

DOMElement::setIdAttributeNode — Оголошує атрибут, вказаний вузлом, з
ідентифікатор типу

### Опис

public **DOMElement::setIdAttributeNode**([DOMAttr](class.domattr.md)
`$attr`, bool `$isId`): void

Оголошує атрибут, який визначається вузлом `attr`, ідентифікатором типу.

### Список параметрів

`attr`
Вузол атрибуту.

`isId`
Встановіть значення в **`true`** якщо ви хочете, щоб `name` мав
ідентифікатор типу, **`false`** інакше.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

**`DOM_NOT_FOUND`**
Виникає, якщо `name` не є атрибутом елемента.

### Дивіться також

- [DOMDocument::getElementById()](domdocument.getelementbyid.md) -
Шукає елемент із певним ідентифікатором
- [DOMElement::setIdAttribute()](domelement.setidattribute.md) -
Оголошує атрибут, вказаний ім'ям, з ідентифікатором типу
- [DOMElement::setIdAttributeNS()](domelement.setidattributens.md) -
Оголошує атрибут, вказаний локальним ім'ям та URI простору
імен, з ідентифікатором типу
