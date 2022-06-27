- [« DOMElement::getAttributeNS](domelement.getattributens.md)
- [DOMElement::getElementsByTagNameNS
»](domelement.getelementsbytagnamens.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Повертає елементи на ім'я тега

# DOMElement::getElementsByTagName

(PHP 5, PHP 7, PHP 8)

DOMElement::getElementsByTagName — Повертає елементи на ім'я тега

### Опис

public **DOMElement::getElementsByTagName**(string `$qualifiedName`):
[DOMNodeList](class.domnodelist.md)

Ця функція повертає новий екземпляр класу
[DOMNodeList](class.domnodelist.md) - список всіх елементів-нащадків
поточного вузла з вказаним ім'ям тега `qualifiedName`, в тому порядку,
якому вони зустрічаються під час обходу дерева.

### Список параметрів

`qualifiedName`
Назва тега. Використовуйте символ * для повернення всіх елементів дерева.

### Значення, що повертаються

Ця функція повертає новий об'єкт класу
[DOMNodeList](class.domnodelist.md) - список усіх відповідних
елементів.

### Дивіться також

- [DOMElement::getElementsByTagNameNS()](domelement.getelementsbytagnamens.md) -
Отримання елементів по локальному імені у заданому просторі імен
