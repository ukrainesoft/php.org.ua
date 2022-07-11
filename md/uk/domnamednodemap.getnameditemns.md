- [« DOMNamedNodeMap::getNamedItem](domnamednodemap.getnameditem.md)
- [DOMNamedNodeMap::item »](domnamednodemap.item.md)

- [PHP Manual](index.md)
- [DOMNamedNodeMap](class.domnamednodemap.md)
- Отримує вузол із заданим локальним ім'ям та URI простору імен

# DOMNamedNodeMap::getNamedItemNS

(PHP 5, PHP 7, PHP 8)

DOMNamedNodeMap::getNamedItemNS — Отримує вузол із заданим локальним
ім'ям та URI простору імен

### Опис

public **DOMNamedNodeMap::getNamedItemNS**(?string `$namespace`, string
`$localName`): ?[DOMNode](class.domnode.md)

Витягує вузол із заданим локальним ім'ям `localName` та URI
простору імен `namespace`.

### Список параметрів

`namespace`
URI простору імен шуканого вузла.

`localName`
Локальне ім'я вузла, що шукається.

### Значення, що повертаються

Вузол (будь-якого типу) із заданим локальним ім'ям та URI простору імен
або **`null`**, якщо він не знайдений.

### Дивіться також

- [DOMNamedNodeMap::getNamedItem()](domnamednodemap.getnameditem.md) -
Отримує вузол, вказаний на ім'я
