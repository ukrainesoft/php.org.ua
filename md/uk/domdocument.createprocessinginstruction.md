- [«
DOMDocument::createEntityReference](domdocument.createentityreference.md)
- [DOMDocument::createTextNode »](domdocument.createtextnode.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Створити новий PI-вузол

# DOMDocument::createProcessingInstruction

(PHP 5, PHP 7, PHP 8)

DOMDocument::createProcessingInstruction — Створити новий PI-сайт

### Опис

public **DOMDocument::createProcessingInstruction**(string `$target`,
string `$data` u003d ""):
[DOMProcessingInstruction](class.domprocessinginstruction.md)\|false

Ця функція створює екземпляр класу
[DOMProcessingInstruction](class.domprocessinginstruction.md). Цей
вузол не буде відображатися в документі, доки він не буде
вставлений, наприклад, функцією
[DOMNode::appendChild()](domnode.appendchild.md).

### Список параметрів

`target`
Ціль інструкції для обробника документа.

`data`
Вміст інструкції обробника.

### Значення, що повертаються

Новий об'єкт класу
[DOMProcessingInstruction](class.domprocessinginstruction.md) або
**`false`** у разі виникнення помилки.

### Помилки

**`DOM_INVALID_CHARACTER_ERR`**
Виникає, якщо target містить неприпустимі символи.

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
- [DOMDocument::createTextNode()](domdocument.createtextnode.md) -
Створити новий текстовий вузол
