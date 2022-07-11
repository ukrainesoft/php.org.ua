- [« DOMImplementation::hasFeature](domimplementation.hasfeature.md)
- [DOMNamedNodeMap::count »](domnamednodemap.count.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMNamedNodeMap

# Клас DOMNamedNodeMap

(PHP 5, PHP 7, PHP 8)

## Огляд класів

class **DOMNamedNodeMap** implements
[IteratorAggregate](class.iteratoraggregate.md),
[Countable](class.countable.md) {

/\* Властивості \*/

public readonly int `$length`;

/\* Методи \*/

public [count](domnamednodemap.count.md)(): int

public [getNamedItem](domnamednodemap.getnameditem.md)(string
`$qualifiedName`): ?[DOMNode](class.domnode.md)

public [getNamedItemNS](domnamednodemap.getnameditemns.md)(?string
`$namespace`, string `$localName`): ?[DOMNode](class.domnode.md)

public [item](domnamednodemap.item.md)(int `$index`):
?[DOMNode](class.domnode.md)

}

## Властивості

`length`
Кількість вузлів відображається. Діапазон допустимих індексів дочірніх
вузлів від `0` до `length - 1` включно.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | Нереалізовані методи **DOMNamedNodeMap::setNamedItem()**, **DOMNamedNodeMap::removeNamedItem()**, **DOMNamedNodeMap::setNamedItemNS()** і **DOMNamedNodeMap::removeNamedItem()** були видалені. |
| 8.0.0 | Клас **DOMNamedNodeMap** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md). Раніше натомість було реалізовано інтерфейс [Traversable](class.traversable.md). |

## Зміст

- [DOMNamedNodeMap::count](domnamednodemap.count.md) — Кількість
вузлів у відображенні
- [DOMNamedNodeMap::getNamedItem](domnamednodemap.getnameditem.md) -
Отримує вузол, вказаний на ім'я
- [DOMNamedNodeMap::getNamedItemNS](domnamednodemap.getnameditemns.md)
— Отримує вузол із заданим локальним ім'ям та URI простору імен
- [DOMNamedNodeMap::item](domnamednodemap.item.md) — Отримує вузол з
заданим індексом
