- [« DOMNode::replaceChild](domnode.replacechild.md)
- [DOMNodeList::count »](domnodelist.count.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMNodeList

# Клас DOMNodeList

(PHP 5, PHP 7, PHP 8)

## Огляд класів

class **DOMNodeList** implements
[IteratorAggregate](class.iteratoraggregate.md),
[Countable](class.countable.md) {

/\* Властивості \*/

public readonly int `$length`;

/\* Методи \*/

public [count](domnodelist.count.md)(): int

public [item](domnodelist.item.md)(int `$index`):
[DOMNode](class.domnode.md)\|DOMNameSpaceNode\|null

}

## Властивості

`length`
Кількість вузлів у списку. Діапазон дійсних індексів дочірніх
вузлів знаходиться в проміжку від 0 до `length - 1` включно.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | Клас **DOMNodeList** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md). Раніше натомість було реалізовано інтерфейс [Traversable](class.traversable.md). |
| 7.2.0 | Реалізовано інтерфейс [Countable](class.countable.md) та повертає значення властивості [length](class.domnodelist.md#domnodelist.props.length). |

## Дивіться також

- [» Специфікація W3C по
NodeList](http://www.w3.org/TR/2003/WD-DOM-Level-3-Core-20030226/DOM3-Core.md#core-ID-536297177)

## Зміст

- [DOMNodeList::count](domnodelist.count.md) — Отримати кількість
вузлів у списку
- [DOMNodeList::item](domnodelist.item.md) - Отримує вузол з
заданим індексом
