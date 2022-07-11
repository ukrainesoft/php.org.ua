- [« DOMDocument::createElement](domdocument.createelement.md)
- [DOMDocument::createEntityReference
»](domdocument.createentityreference.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Створити новий вузол елемента з відповідним простором імен

# DOMDocument::createElementNS

(PHP 5, PHP 7, PHP 8)

DOMDocument::createElementNS — Створити новий вузол елемента з
відповідним простором імен

### Опис

public **DOMDocument::createElementNS**(?string `$namespace`, string
`$qualifiedName`, string `$value` u003d ""):
[DOMElement](class.domelement.md)\|false

Ця функція створює новий вузол-елемент із відповідним простором
імен. Цей вузол не буде відображатися в документі, доки він не
буде вставлено, наприклад, функцією
[DOMNode::appendChild()](domnode.appendchild.md).

### Список параметрів

`namespace`
URI простір імен.

`qualifiedName`
Кваліфіковане ім'я елемента як `prefix:tagname`.

`value`
Значення елемента. За промовчанням буде створено порожній елемент. Задати
значення також можна пізніше за допомогою
[DOMElement::$nodeValue](class.domnode.md#domnode.props.nodevalue).

### Значення, що повертаються

Новий об'єкт класу [DOMElement](class.domelement.md) або **`false`**
у разі виникнення помилки.

### Помилки

**`DOM_INVALID_CHARACTER_ERR`**
Виникає, якщо `qualifiedName` містить неприпустимі символи.

**`DOM_NAMESPACE_ERR`**
Виникає, якщо `qualifiedName` не правильно сформовано.

### Приклади

**Приклад #1 Створення елемента та вставка в документ як
кореневого**

` <?php$dom u003d new DOMDocument('1.0', 'utf-8');$element u003d $dom->createElementNS('http://www.example.com/XFoo', 'xfoo:test', 'Це кореневий елемент!');// Вставляємо новий елемент як корінь (нащадок документа)$dom->appendChild($element);echo $dom->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<xfoo:test xmlns:xfoou003d"http://www.example.com/XFoo">Це кореневий елемент!</xfoo:test>

**Приклад #2 Приклад префіксу простору імен**

` <?php$doc u003d new DOMDocument('1.0', 'utf-8');$doc->formatOutput u003d true;$root u003d $doc->createElementNS('http://www.w3.org/2005 /Atom', 'element');$doc->appendChild($root);$root->setAttributeNS('http://www.w3.org/2000/xmlns/' ,'xmlns:g', 'http ://base.google.com/ns/1.0');$item u003d $doc->createElementNS('http://base.google.com/ns/1.0', 'g:item_type', 'house') ;$root->appendChild($item);echo $doc->saveXML(), "
";echo $item->namespaceURI, "
"; // Виведе: http://base.google.com/ns/1.0echo $item->prefix, "
";       // Виведе: gecho $item->localName, "
";    // Виведе: item_type?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<element xmlnsu003d"http://www.w3.org/2005/Atom" xmlns:gu003d"http://base.google.com/ns/1.0">
<g:item_type>house</g:item_type>
</element>

http://base.google.com/ns/1.0
g
item_type

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
- [DOMDocument::createEntityReference()](domdocument.createentityreference.md) -
Створити новий вузол посилання на суть
- [DOMDocument::createProcessingInstruction()](domdocument.createprocessinginstruction.md) -
Створити новий PI-вузол
- [DOMDocument::createTextNode()](domdocument.createtextnode.md) -
Створити новий текстовий вузол
