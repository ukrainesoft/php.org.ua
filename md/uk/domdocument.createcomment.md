- [«
DOMDocument::createCDATASection](domdocument.createcdatasection.md)
- [DOMDocument::createDocumentFragment
»](domdocument.createdocumentfragment.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Створити новий вузол коментаря

# DOMDocument::createComment

(PHP 5, PHP 7, PHP 8)

DOMDocument::createComment — Створити новий вузол коментаря

### Опис

public **DOMDocument::createComment**(string `$data`):
[DOMComment](class.domcomment.md)

Ця функція створює новий екземпляр класу
[DOMComment](class.domcomment.md). Цей вузол не відображатиметься в
документі доти, доки він не буде вставлений, наприклад, функцією
[DOMNode::appendChild()](domnode.appendchild.md).

### Список параметрів

`data`
Зміст коментаря.

### Значення, що повертаються

Новий об'єкт класу [DOMComment](class.domcomment.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------|
| 8.1.0 | У разі помилки тепер викидає виняток [DomException](class.domexception.md). Раніше натомість поверталося значення **`false`**. |

### Дивіться також

- [DOMNode::appendChild()](domnode.appendchild.md) - Додає новий
дочірній вузол у кінець списку нащадків
- [DOMDocument::createAttribute()](domdocument.createattribute.md) -
Створити новий атрибут
- [DOMDocument::createAttributeNS()](domdocument.createattributens.md) -
Створює новий атрибут вузла з відповідним простором імен
- [DOMDocument::createCDATASection()](domdocument.createcdatasection.md) -
Створює новий вузол cdata
- [DOMDocument::createDocumentFragment()](domdocument.createdocumentfragment.md) -
Створити новий фрагмент документу
- [DOMDocument::createElement()](domdocument.createelement.md) -
Створити новий вузол елемента
- [DOMDocument::createElementNS()](domdocument.createelementns.md) -
Створити новий вузол елемента з відповідним простором імен
- [DOMDocument::createEntityReference()](domdocument.createentityreference.md) -
Створити новий вузол посилання на суть
- [DOMDocument::createProcessingInstruction()](domdocument.createprocessinginstruction.md) -
Створити новий PI-вузол
- [DOMDocument::createTextNode()](domdocument.createtextnode.md) -
Створити новий текстовий вузол
