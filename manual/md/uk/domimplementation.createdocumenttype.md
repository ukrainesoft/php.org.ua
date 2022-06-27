- [«
DOMImplementation::createDocument](domimplementation.createdocument.md)
- [DOMImplementation::hasFeature »](domimplementation.hasfeature.md)

- [PHP Manual](index.md)
- [DOMImplementation](class.domimplementation.md)
- Створює порожній об'єкт класу DOMDocumentType

# DOMImplementation::createDocumentType

(PHP 5, PHP 7, PHP 8)

DOMImplementation::createDocumentType — Створює порожній об'єкт класу
DOMDocumentType

### Опис

public **DOMImplementation::createDocumentType**(string
`$qualifiedName`, string `$publicId` u003d "", string `$systemId` u003d ""):
[DOMDocumentType](class.domdocumenttype.md)\|false

Створює порожній об'єкт класу
[DOMDocumentType](class.domdocumenttype.md). Оголошення сутностей та
позначення будуть недоступні. Посилання на сутності не замінятимуться та
додавання атрибутів за промовчанням не відбуватиметься.

### Список параметрів

`qualifiedName`
Кваліфікована назва типу документа для створення.

`publicId`
Загальнодоступний ідентифікатор зовнішнього підмножини.

`systemId`
Системний ідентифікатор зовнішнього підмножини.

### Значення, що повертаються

Новий об'єкт класу [DOMDocumentType](class.domdocumenttype.md) з
атрибутом `ownerDocument`, встановленим у **`null`**.

### Помилки

**`DOM_NAMESPACE_ERR`**
Виникає, якщо виявлено помилку в рядку `qualifiedName`.

До PHP 8.0.0 метод *може* викликатись статично, але викличе помилку
**`E_DEPRECATED`**. Починаючи з PHP 8.0.0, виклик цього методу статично
викидає виняток [Error](class.error.md).

### Приклади

**Приклад #1 Створення документа з прикріпленим DTD**

`<?php//Створює екземпляр класу DOMImplementation$imp u003d new DOMImplementation;// Створює примірник класу DOMDocumentType$dtd u003d $imp->createDocumentType('graph', | $dom u003d $imp->createDocument("", "", $dtd);// Установка інших параметрів$dom->encoding u003d 'UTF-8';$dom->standalone u003d false;// Створення порожнього element u003d $dom->createElement('graph');// Додавання елемента$dom->appendChild($element);// Отримання і друк  документаecho $dom->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"UTF-8" standaloneu003d"no"?>
<!DOCTYPE graph SYSTEM "graph.dtd">
<graph/>

### Дивіться також

- [DOMImplementation::createDocument()](domimplementation.createdocument.md) -
Створює об'єкт класу DOMDocument заданого типу з його елементом
document
