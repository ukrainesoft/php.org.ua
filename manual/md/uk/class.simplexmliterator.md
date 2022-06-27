- [« SimpleXMLElement::xpath](simplexmlelement.xpath.md)
- [SimpleXMLIterator::current »](simplexmliterator.current.md)

- [PHP Manual](index.md)
- [SimpleXML](book.simplexml.md)
- Клас SimpleXMLIterator

# Клас SimpleXMLIterator

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

## Вступ

SimpleXMLIterator забезпечує рекурсивну ітерацію по всіх вузлах
об'єкта [SimpleXMLElement](class.simplexmlelement.md).

## Огляд класів

class **SimpleXMLIterator** extends
[SimpleXMLElement](class.simplexmlelement.md) {

/\* Методи \*/

public [current](simplexmliterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getChildren](simplexmliterator.getchildren.md)():
[SimpleXMLIterator](class.simplexmliterator.md)

public [hasChildren](simplexmliterator.haschildren.md)(): bool

public [key](simplexmliterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](simplexmliterator.next.md)(): void

public [rewind](simplexmliterator.rewind.md)(): void

public [valid](simplexmliterator.valid.md)(): bool

/\* Наслідувані методи \*/

public
[SimpleXMLElement::addAttribute](simplexmlelement.addattribute.md)(string
`$qualifiedName`, string `$value`, ?string `$namespace` u003d **`null`**):
void

public
[SimpleXMLElement::addChild](simplexmlelement.addchild.md)(string
`$qualifiedName`, ?string `$value` u003d **`null`**, ?string `$namespace` u003d
**`null`**): ?[SimpleXMLElement](class.simplexmlelement.md)

public [SimpleXMLElement::asXML](simplexmlelement.asxml.md)(?string
`$filename` u003d **`null`**): string\|bool

public
[SimpleXMLElement::attributes](simplexmlelement.attributes.md)(?string
`$namespaceOrPrefix` u003d **`null`**, bool `$isPrefix` u003d **`false`**):
?[SimpleXMLElement](class.simplexmlelement.md)

public
[SimpleXMLElement::children](simplexmlelement.children.md)(?string
`$namespaceOrPrefix` u003d **`null`**, bool `$isPrefix` u003d **`false`**):
?[SimpleXMLElement](class.simplexmlelement.md)

public [SimpleXMLElement::count](simplexmlelement.count.md)(): int

public
[SimpleXMLElement::getDocNamespaces](simplexmlelement.getdocnamespaces.md)(bool
`$recursive` u003d **`false`**, bool `$fromRoot` u003d **`true`**): array\|false

public [SimpleXMLElement::getName](simplexmlelement.getname.md)():
string

public
[SimpleXMLElement::getNamespaces](simplexmlelement.getnamespaces.md)(bool
`$recursive` u003d **`false`**): array

public
[SimpleXMLElement::registerXPathNamespace](simplexmlelement.registerxpathnamespace.md)(string
`$prefix`, string `$namespace`): bool

public
[SimpleXMLElement::\_\_toString](simplexmlelement.tostring.md)():
string

public [SimpleXMLElement::xpath](simplexmlelement.xpath.md)(string
`$expression`): array\|null\|false

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---|
| 8.0.0 | Клас **SimpleXMLIterator** тепер реалізує інтерфейс [Stringable](class.stringable.md). |

## Зміст

- [SimpleXMLIterator::current](simplexmliterator.current.md)
Повертає поточний елемент
- [SimpleXMLIterator::getChildren](simplexmliterator.getchildren.md)
— Повертає вкладені елементи поточного елемента
- [SimpleXMLIterator::hasChildren](simplexmliterator.haschildren.md)
— Перевіряє, чи поточний елемент має вкладені елементи.
- [SimpleXMLIterator::key](simplexmliterator.key.md) — Повертає
поточний ключ
- [SimpleXMLIterator::next](simplexmliterator.next.md) — Переміщує
ітератор до наступного елементу
- [SimpleXMLIterator::rewind](simplexmliterator.rewind.md)
Повертає ітератор до першого елементу
- [SimpleXMLIterator::valid](simplexmliterator.valid.md) -
Перевіряє, чи є поточний елемент допустимим
