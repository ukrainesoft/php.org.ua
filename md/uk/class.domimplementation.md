- [«DOMException](class.domexception.md)
- [DOMImplementation::\_\_construct
»](domimplementation.construct.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMImplementation

# Клас DOMImplementation

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **DOMImplementation** надає ряд методів для виконання
операцій, які не залежать від будь-якого екземпляра об'єктної моделі
документа.

## Огляд класів

class **DOMImplementation** {

/\* Методи \*/

public [createDocument](domimplementation.createdocument.md)(?string
`$namespace` u003d **`null`**, string `$qualifiedName` u003d "",
?[DOMDocumentType](class.domdocumenttype.md) `$doctype` u003d **`null`**):
[DOMDocument](class.domdocument.md)\|false

public
[createDocumentType](domimplementation.createdocumenttype.md)(string
`$qualifiedName`, string `$publicId` u003d "", string `$systemId` u003d ""):
[DOMDocumentType](class.domdocumenttype.md)\|false

public [hasFeature](domimplementation.hasfeature.md)(string
`$feature`, string `$version`): bool

}

## Зміст

- [DOMImplementation::\_\_construct](domimplementation.construct.md)
— Створює новий об'єкт класу DOMImplementation
- [DOMImplementation::createDocument](domimplementation.createdocument.md)
— Створює об'єкт класу DOMDocument заданого типу з його елементом
document
- [DOMImplementation::createDocumentType](domimplementation.createdocumenttype.md)
— Створює порожній об'єкт класу DOMDocumentType
- [DOMImplementation::hasFeature](domimplementation.hasfeature.md) -
Перевірка, чи реалізована певна можливість у реалізації DOM
