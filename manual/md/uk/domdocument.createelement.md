- [«
DOMDocument::createDocumentFragment](domdocument.createdocumentfragment.md)
- [DOMDocument::createElementNS »](domdocument.createelementns.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Створити новий вузол елемента

# DOMDocument::createElement

(PHP 5, PHP 7, PHP 8)

DOMDocument::createElement — Створити новий вузол елемента

### Опис

public **DOMDocument::createElement**(string `$localName`, string
`$value` u003d ""): [DOMElement](class.domelement.md)\|false

Ця функція створює екземпляр класу
[DOMElement](class.domelement.md). Цей вузол не відображатиметься в
документі доти, доки він не буде вставлений, наприклад, функцією
[DOMNode::appendChild()](domnode.appendchild.md).

### Список параметрів

`localName`
Назва тега елемент.

`value`
Значення елемента. За промовчанням буде створено порожній елемент. Значення
може бути встановлено пізніше за допомогою
[DOMElement::$nodeValue](class.domnode.md#domnode.props.nodevalue).

Значення використовується дослівно, крім \< і \>, які будуть
екрановані. Зверніть увагу, що & має бути екранований
самостійно, інакше він розглядатиметься як початок
посилання на суть. Також не буде екранований.

### Значення, що повертаються

Повертає новий об'єкт класу [DOMElement](class.domelement.md) або
**`false`** у разі виникнення помилки.

### Помилки

**`DOM_INVALID_CHARACTER_ERR`**
Виникає, якщо `localName` містить неприпустимі символи.

### Приклади

**Приклад #1 Створення нового елемента та вставка його як
кореневого**

` <?php$dom u003d new DOMDocument('1.0', 'utf-8');$element u003d $dom->createElement('test', 'Це кореневий елемент!');// Вставляємо новий еле нащадок документа)$dom->appendChild($element);echo $dom->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<test>Це кореневий елемент!</test>

**Приклад #2 Передача тексту, що містить неекранований & `value`**

` <?php$dom u003d new DOMDocument('1.0', 'utf-8');$element u003d $dom->createElement('foo', 'я & ти');$dom->appendChild($element) ;echo $dom->saveXML();?> `

Результатом виконання цього прикладу буде щось подібне:

Warning: DOMDocument::createElement(): unterminated entity reference you in /in/BjTCg on line 4
<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<foo/>

### Примітки

> **Примітка**:
>
> Значення `value` *не* буде екрановано. Використовуйте функцію
> [DOMDocument::createTextNode()](domdocument.createtextnode.md) для
> створення текстового вузла з підтримкою екранування.

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
- [DOMDocument::createElementNS()](domdocument.createelementns.md) -
Створити новий вузол елемента з відповідним простором імен
- [DOMDocument::createEntityReference()](domdocument.createentityreference.md) -
Створити новий вузол посилання на суть
- [DOMDocument::createProcessingInstruction()](domdocument.createprocessinginstruction.md) -
Створити новий PI-вузол
- [DOMDocument::createTextNode()](domdocument.createtextnode.md) -
Створити новий текстовий вузол
