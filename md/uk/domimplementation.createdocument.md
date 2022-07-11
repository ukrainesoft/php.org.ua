- [«
DOMImplementation::\_\_construct](domimplementation.construct.md)
- [DOMImplementation::createDocumentType
»](domimplementation.createdocumenttype.md)

- [PHP Manual](index.md)
- [DOMImplementation](class.domimplementation.md)
- Створює об'єкт класу DOMDocument заданого типу з його елементом
document

# DOMImplementation::createDocument

(PHP 5, PHP 7, PHP 8)

DOMImplementation::createDocument — Створює об'єкт класу DOMDocument
заданого типу з його елементом

### Опис

public **DOMImplementation::createDocument**(?string `$namespace` u003d
**`null`**, string `$qualifiedName` u003d "",
?[DOMDocumentType](class.domdocumenttype.md) `$doctype` u003d **`null`**):
[DOMDocument](class.domdocument.md)\|false

Створює об'єкт класу [DOMDocument](class.domdocument.md) заданого
типу з елементом document.

### Список параметрів

`namespace`
URI простору імен створюваного елемента document.

`qualifiedName`
Кваліфіковане ім'я елемента document, що створюється.

`doctype`
Тип створюваного елемента document або **`null`**.

### Значення, що повертаються

Новий об'єкт класу [DOMDocument](class.domdocument.md). Якщо
аргументи `namespace`, `qualifiedName`, та `doctype` мають значення null,
об'єкт, що повертається [DOMDocument](class.domdocument.md) буде порожнім і
без елемента document.

### Помилки

**`DOM_WRONG_DOCUMENT_ERR`**
Виникає, якщо аргумент `doctype` вже використовувався з іншим документом
або був створений в іншій реалізації.

**`DOM_NAMESPACE_ERR`**
Виникає, якщо виявлена помилка в рядках `namespace` та
`qualifiedName`.

До PHP 8.0.0 метод *може* викликатись статично, але викличе помилку
**`E_DEPRECATED`**. Починаючи з PHP 8.0.0, виклик цього методу статично
викидає виняток [Error](class.error.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.3 | `namespace` тепер припускає значення null. |
| 8.0.0 | `doctype` тепер припускає значення null. |

### Дивіться також

- [DOMDocument::\_\_construct()](domdocument.construct.md) - Створює
новий об'єкт DOMDocument
- [DOMImplementation::createDocumentType()](domimplementation.createdocumenttype.md) -
Створює порожній об'єкт класу DOMDocumentType
