- [«
DOMNamedNodeMap::getNamedItemNS](domnamednodemap.getnameditemns.md)
- [DOMNode »](class.domnode.md)

- [PHP Manual](index.md)
- [DOMNamedNodeMap](class.domnamednodemap.md)
- Отримує вузол із заданим індексом

# DOMNamedNodeMap::item

(PHP 5, PHP 7, PHP 8)

DOMNamedNodeMap::item — Отримує вузол із заданим індексом

### Опис

public **DOMNamedNodeMap::item**(int `$index`):
?[DOMNode](class.domnode.md)

Витягує вузол із заданим індексом `index` з об'єкта класу
[DOMNamedNodeMap](class.domnamednodemap.md).

### Список параметрів

`index`
Індекс вузла відображається.

### Значення, що повертаються

Вузол з індексом `index` у відображенні або **`null`**, якщо індекс має
неприпустиме значення (більше або дорівнює кількості вузлів у відображенні).
