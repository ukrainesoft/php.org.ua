- [«DOMAttr](class.domattr.md)
- [DOMAttr::isId »](domattr.isid.md)

- [PHP Manual](index.md)
- [DOMAttr](class.domattr.md)
- Створює екземпляр класу DOMAttr

# DOMAttr::\_\_construct

(PHP 5, PHP 7, PHP 8)

DOMAttr::\_\_construct — Створює екземпляр класу
[DOMAttr](class.domattr.md)

### Опис

public **DOMAttr::\_\_construct**(string `$name`, string `$value` u003d "")

Створює новий об'єкт класу DOMAttr. Цей об'єкт буде доступний тільки
для читання. Він може бути доданий до документа, але додаткові вузли
не можна додати до цього вузла, доки він приєднаний до документа. Для
створення вузла з можливістю модифікації використовуйте
[DOMDocument::createAttribute](domdocument.createattribute.md).

### Список параметрів

`name`
Назва тега атрибута.

`value`
Значення атрибуту.

### Приклади

**Приклад #1 Створення нового об'єкта класу
[DOMAttr](class.domattr.md)**

` <?php$dom u003d new DOMDocument('1.0', 'iso-8859-1');$element u003d $dom->appendChild(new DOMElement('root'));$attr u003d $element->setAttributeNode new DOMAttr('attr', 'attrvalue'));echo $dom->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<root attru003d"attrvalue" />

### Дивіться також

- [DOMDocument::createAttribute()](domdocument.createattribute.md) -
Створити новий атрибут
