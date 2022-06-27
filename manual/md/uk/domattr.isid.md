- [« DOMAttr::\_\_construct](domattr.construct.md)
- [DOMCdataSection »](class.domcdatasection.md)

- [PHP Manual](index.md)
- [DOMAttr](class.domattr.md)
- Перевіряє, чи є атрибут певним ідентифікатором

# DOMAttr::isId

(PHP 5, PHP 7, PHP 8)

DOMAttr::isId — Перевіряє, чи є атрибут певним
ідентифікатором

### Опис

public **DOMAttr::isId**(): bool

Ця функція перевіряє, чи є певним ідентифікатором.

Відповідно до стандарту DOM для цього потрібний DTD, який
визначає ідентифікатор атрибута бути ідентифікатором типу. Перед
використанням цієї функції необхідно перевіряти документ на
дійсність за допомогою
[DOMDocument::validate](domdocument.validate.md) або
`DOMDocument::validateOnParse`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання DOMAttr::isId()**

`<?php$doc u003d new DomDocument;// Необхідно перевірити документ на дійсність перед тем як посилатися за ідентифікатором$doc->validateOnParse ем> с>| іменем ідентифікатора chapter$attr u003d $doc->getElementsByTagName('chapter')->item(0)->getAttributeNode('id');var_dump($attr->isId()); //bool(true)?> `
