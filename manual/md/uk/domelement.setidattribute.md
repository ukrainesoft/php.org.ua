- [« DOMElement::setAttributeNS](domelement.setattributens.md)
- [DOMElement::setIdAttributeNode
»](domelement.setidattributenode.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- оголошує атрибут, вказаний ім'ям, з ідентифікатором типу

# DOMElement::setIdAttribute

(PHP 5, PHP 7, PHP 8)

DOMElement::setIdAttribute — Оголошує атрибут, вказаний ім'ям, з
ідентифікатор типу

### Опис

public **DOMElement::setIdAttribute**(string `$qualifiedName`, bool
`$isId`): void

Оголошує атрибут `qualifiedName` з ідентифікатором типу.

### Список параметрів

`qualifiedName`
Назва атрибута.

`isId`
Встановіть значення в **`true`** якщо ви хочете, щоб `qualifiedName`
мав ідентифікатор типу, **`false`** інакше.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

**`DOM_NOT_FOUND`**
Виникає, якщо `qualifiedName` не є атрибутом елемента.

### Дивіться також

- [DOMDocument::getElementById()](domdocument.getelementbyid.md) -
Шукає елемент із певним ідентифікатором
- [DOMElement::setIdAttributeNode()](domelement.setidattributenode.md) -
Оголошує атрибут, вказаний вузлом, з ідентифікатором типу
- [DOMElement::setIdAttributeNS()](domelement.setidattributens.md) -
Оголошує атрибут, вказаний локальним ім'ям та URI простору
імен, з ідентифікатором типу
