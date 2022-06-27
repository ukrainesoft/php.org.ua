- [«
DOMDocument::createAttributeNS](domdocument.createattributens.md)
- [DOMDocument::createComment »](domdocument.createcomment.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Створює новий вузол cdata

# DOMDocument::createCDATASection

(PHP 5, PHP 7, PHP 8)

DOMDocument::createCDATASection — Створює новий вузол cdata

### Опис

public **DOMDocument::createCDATASection**(string `$data`):
[DOMCdataSection](class.domcdatasection.md)\|false

Ця функція створює новий об'єкт класу
[DOMCDATASection](class.domcdatasection.md). Цей вузол не буде
відображатися в документі, доки він не буде вставлений,
наприклад, функцією [DOMNode::appendChild()](domnode.appendchild.md).

### Список параметрів

`data`
Вміст cdata.

### Значення, що повертаються

Новий об'єкт класу [DOMCDATASection](class.domcdatasection.md) або
**`false`** у разі виникнення помилки.

### Дивіться також

- [DOMNode::appendChild()](domnode.appendchild.md) - Додає новий
дочірній вузол у кінець списку нащадків
- [DOMDocument::createAttribute()](domdocument.createattribute.md) -
Створити новий атрибут
- [DOMDocument::createAttributeNS()](domdocument.createattributens.md) -
Створює новий атрибут вузла з відповідним простором імен
- [DOMDocument::createComment()](domdocument.createcomment.md) -
Створити новий вузол коментаря
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
