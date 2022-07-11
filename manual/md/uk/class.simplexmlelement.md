- [« Робота з помилками XML](simplexml.examples-errors.md)
- [SimpleXMLElement::addAttribute
»](simplexmlelement.addattribute.md)

- [PHP Manual](index.md)
- [SimpleXML](book.simplexml.md)
- Клас SimpleXMLElement

# Клас SimpleXMLElement

(PHP 5, PHP 7, PHP 8)

## Вступ

Являє собою елемент у XML-документі.

## Огляд класів

class **SimpleXMLElement** implements
[Stringable](class.stringable.md), [Countable](class.countable.md),
[RecursiveIterator](class.recursiveiterator.md) {

/\* Методи \*/

public [\_\_construct](simplexmlelement.construct.md)(
string `$data`,
int `$options` u003d 0,
bool `$dataIsURL` u003d **`false`**,
string `$namespaceOrPrefix` u003d "",
bool `$isPrefix` u003d **`false`**
)

public [addAttribute](simplexmlelement.addattribute.md)(string
`$qualifiedName`, string `$value`, ?string `$namespace` u003d **`null`**):
void

public [addChild](simplexmlelement.addchild.md)(string
`$qualifiedName`, ?string `$value` u003d **`null`**, ?string `$namespace` u003d
**`null`**): ?[SimpleXMLElement](class.simplexmlelement.md)

public [asXML](simplexmlelement.asxml.md)(?string `$filename` u003d
**`null`**): string\|bool

public [attributes](simplexmlelement.attributes.md)(?string
`$namespaceOrPrefix` u003d **`null`**, bool `$isPrefix` u003d **`false`**):
?[SimpleXMLElement](class.simplexmlelement.md)

public [children](simplexmlelement.children.md)(?string
`$namespaceOrPrefix` u003d **`null`**, bool `$isPrefix` u003d **`false`**):
?[SimpleXMLElement](class.simplexmlelement.md)

public [count](simplexmlelement.count.md)(): int

public [getDocNamespaces](simplexmlelement.getdocnamespaces.md)(bool
`$recursive` u003d **`false`**, bool `$fromRoot` u003d **`true`**): array\|false

public [getName](simplexmlelement.getname.md)(): string

public [getNamespaces](simplexmlelement.getnamespaces.md)(bool
`$recursive` u003d **`false`**): array

public
[registerXPathNamespace](simplexmlelement.registerxpathnamespace.md)(string
`$prefix`, string `$namespace`): bool

public [\_\_toString](simplexmlelement.tostring.md)(): string

public [xpath](simplexmlelement.xpath.md)(string `$expression`):
array\|null\|false

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------------|
| 8.0.0 | Клас **SimpleXMLElement** тепер реалізує інтерфейси [Stringable](class.stringable.md), [Countable](class.countable.md) та [RecursiveIterator](class.recursiveiterator.md). |

## Зміст

- [SimpleXMLElement::addAttribute](simplexmlelement.addattribute.md)
— Додає атрибут до SimpleXML-елементу
- [SimpleXMLElement::addChild](simplexmlelement.addchild.md)
Додає дочірній елемент до сайту XML
- [SimpleXMLElement::asXML](simplexmlelement.asxml.md) — Повертає
сформований XML-документ у вигляді рядка на основі елемента
SimpleXML
- [SimpleXMLElement::attributes](simplexmlelement.attributes.md)
Повертає атрибути елемента
- [SimpleXMLElement::children](simplexmlelement.children.md)
Знаходить дочірні елементи цього вузла
- [SimpleXMLElement::\_\_construct](simplexmlelement.construct.md) -
Створення нового об'єкта SimpleXMLElement
- [SimpleXMLElement::count](simplexmlelement.count.md)
Підраховує кількість дочірніх елементів у поточного елемента
- [SimpleXMLElement::getDocNamespaces](simplexmlelement.getdocnamespaces.md)
— Повертає простір імен, оголошених у документі
- [SimpleXMLElement::getName](simplexmlelement.getname.md)
Отримує ім'я елемента XML
- [SimpleXMLElement::getNamespaces](simplexmlelement.getnamespaces.md)
— Повертає простір імен, які використовуються в документі
- [SimpleXMLElement::registerXPathNamespace](simplexmlelement.registerxpathnamespace.md)
— Створює префікс/простір імен контексту для наступного запиту
XPath
- [SimpleXMLElement::saveXML](simplexmlelement.savexml.md) -
Псевдонім SimpleXMLElement::asXML
- [SimpleXMLElement::\_\_toString](simplexmlelement.tostring.md) -
Повертає вміст рядка
- [SimpleXMLElement::xpath](simplexmlelement.xpath.md) — Запускає
запит XPath до XML-даних
