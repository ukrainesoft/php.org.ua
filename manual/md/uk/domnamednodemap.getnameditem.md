- [« DOMNamedNodeMap::count](domnamednodemap.count.md)
- [DOMNamedNodeMap::getNamedItemNS
»](domnamednodemap.getnameditemns.md)

- [PHP Manual](index.md)
- [DOMNamedNodeMap](class.domnamednodemap.md)
- Отримує вузол, вказаний на ім'я

# DOMNamedNodeMap::getNamedItem

(PHP 5, PHP 7, PHP 8)

DOMNamedNodeMap::getNamedItem — Отримує вузол, вказаний на ім'я

### Опис

public **DOMNamedNodeMap::getNamedItem**(string `$qualifiedName`):
?[DOMNode](class.domnode.md)

Витягує вузол по заданому `nodeName`.

### Список параметрів

`qualifiedName`
Ім'я `nodeName` шуканого вузла.

### Значення, що повертаються

Вузол (будь-якого типу) із заданим значенням тега `nodeName` або **`null`**,
якщо їх не знайдено.

### Дивіться також

- [DOMNamedNodeMap::getNamedItemNS()](domnamednodemap.getnameditemns.md) -
Отримує вузол із заданим локальним ім'ям та URI простору імен
