- [«
DOMDocument::createProcessingInstruction](domdocument.createprocessinginstruction.md)
- [DOMDocument::getElementById »](domdocument.getelementbyid.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Створити новий текстовий вузол

# DOMDocument::createTextNode

(PHP 5, PHP 7, PHP 8)

DOMDocument::createTextNode — Створити новий текстовий вузол

### Опис

public **DOMDocument::createTextNode**(string `$data`):
[DOMText](class.domtext.md)

Ця функція створює екземпляр класу [DOMText](class.domtext.md). Цей
вузол не буде відображатися в документі, доки він не буде
вставлений, наприклад, функцією
[DOMNode::appendChild()](domnode.appendchild.md).

### Список параметрів

`data`
Вміст вузла.

### Значення, що повертаються

Повертає новий об'єкт класу [DOMText](class.domtext.md).

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
