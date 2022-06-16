- [«DOMCdataSection::\_\_construct](domcdatasection.construct.md)
- [DOMCharacterData::appendData »](domcharacterdata.appenddata.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMCharacterData

# Клас DOMCharacterData

(PHP 5, PHP 7, PHP 8)

## Вступ

Представляє вузли із символьними даними. Не можна створити вузол із цього
класу безпосередньо, вузли створюються з успадкованих від цього класів.

## Огляд класів

class **DOMCharacterData** extends [DOMNode](class.domnode.md)
implements [DOMChildNode](class.domchildnode.md) {

/\* Властивості \*/

public string `$data`;

public readonly int `$length`;

public readonly ?[DOMElement](class.domelement.md)
`$previousElementSibling`;

public readonly ?[DOMElement](class.domelement.md)
`$nextElementSibling`;

/\* Наслідувані властивості \*/

public readonly string `$nodeName`;

public ?string `$nodeValue`;

public readonly int `$nodeType`;

public readonly ?[DOMNode](class.domnode.md) `$parentNode`;

public readonly [DOMNodeList](class.domnodelist.md) `$childNodes`;

public readonly ?[DOMNode](class.domnode.md) `$firstChild`;

public readonly ?[DOMNode](class.domnode.md) `$lastChild`;

public readonly ?[DOMNode](class.domnode.md) `$previousSibling`;

public readonly ?[DOMNode](class.domnode.md) `$nextSibling`;

public readonly ?[DOMNamedNodeMap](class.domnamednodemap.md)
`$attributes`;

public readonly ?[DOMDocument](class.domdocument.md) `$ownerDocument`;

public readonly ?string `$namespaceURI`;

public string `$prefix`;

public readonly ?string `$localName`;

public readonly ?string `$baseURI`;

public string `$textContent`;

/\* Методи \*/

public [appendData](domcharacterdata.appenddata.md)(string `$data`):
bool

public [deleteData](domcharacterdata.deletedata.md)(int `$offset`, int
`$count`): bool

public [insertData](domcharacterdata.insertdata.md)(int `$offset`,
string `$data`): bool

public [replaceData](domcharacterdata.replacedata.md)(int `$offset`,
int `$count`, string `$data`): bool

public [substringData](domcharacterdata.substringdata.md)(int
`$offset`, int `$count`): string\|false

/\* Наслідувані методи \*/

public
[DOMNode::appendChild](domnode.appendchild.md)([DOMNode](class.domnode.md)
`$node`): [DOMNode](class.domnode.md)\|false

public [DOMNode::C14N](domnode.c14n.md)(
bool `$exclusive` u003d **`false`**,
bool `$withComments` u003d **`false`**,
?array `$xpath` u003d **`null`**,
?array `$nsPrefixes` u003d **`null`**
): string\|false

public [DOMNode::C14NFile](domnode.c14nfile.md)(
string `$uri`,
bool `$exclusive` u003d **`false`**,
bool `$withComments` u003d **`false`**,
?array `$xpath` u003d **`null`**,
?array `$nsPrefixes` u003d **`null`**
): int\|false

public [DOMNode::cloneNode](domnode.clonenode.md)(bool `$deep` u003d
**`false`**): [DOMNode](class.domnode.md)\|false

public [DOMNode::getLineNo](domnode.getlineno.md)(): int

public [DOMNode::getNodePath](domnode.getnodepath.md)(): ?string

public [DOMNode::hasAttributes](domnode.hasattributes.md)(): bool

public [DOMNode::hasChildNodes](domnode.haschildnodes.md)(): bool

public
[DOMNode::insertBefore](domnode.insertbefore.md)([DOMNode](class.domnode.md)
`$node`, ?[DOMNode](class.domnode.md) `$child` u003d **`null`**):
[DOMNode](class.domnode.md)\|false

public
[DOMNode::isDefaultNamespace](domnode.isdefaultnamespace.md)(string
`$namespace`): bool

public
[DOMNode::isSameNode](domnode.issamenode.md)([DOMNode](class.domnode.md)
`$otherNode`): bool

public [DOMNode::isSupported](domnode.issupported.md)(string
`$feature`, string `$version`): bool

public
[DOMNode::lookupNamespaceUri](domnode.lookupnamespaceuri.md)(string
`$prefix`): string

public [DOMNode::lookupPrefix](domnode.lookupprefix.md)(string
`$namespace`): ?string

public [DOMNode::normalize](domnode.normalize.md)(): void

public
[DOMNode::removeChild](domnode.removechild.md)([DOMNode](class.domnode.md)
`$child`): [DOMNode](class.domnode.md)\|false

public
[DOMNode::replaceChild](domnode.replacechild.md)([DOMNode](class.domnode.md)
`$node`, [DOMNode](class.domnode.md) `$child`):
[DOMNode](class.domnode.md)\|false

}

## Властивості

`data`
Вміст вузла.

`length`
Довжина вмісту.

`nextElementSibling`
Елемент безпосередньо наступний за даним елементом або **`null`**.

`previousElementSibling`
Елемент попередній елементу або **`null`**.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------|
| 8.0.0 | Додані властивості `nextElementSibling` та `previousElementSibling`. |
| 8.0.0 | Клас **DOMCharacterData** тепер реалізує інтерфейс [DOMChildNode](class.domchildnode.md). |

## Дивіться також

- [» Специфікація W3C символьних
даних](http://www.w3.org/TR/2003/WD-DOM-Level-3-Core-20030226/DOM3-Core.md#core-ID-FF21A306)

## Зміст

- [DOMCharacterData::appendData](domcharacterdata.appenddata.md) -
Додати рядок до кінця символьних даних вузла
- [DOMCharacterData::deleteData](domcharacterdata.deletedata.md) -
Видалити діапазон символів із вузла
- [DOMCharacterData::insertData](domcharacterdata.insertdata.md) -
Вставити рядок у вказану 16-бітну позицію
- [DOMCharacterData::replaceData](domcharacterdata.replacedata.md) -
Замінити підрядок у вузлі типу DOMCharacterData
- [DOMCharacterData::substringData](domcharacterdata.substringdata.md)
— Виймає певний діапазон даних із вузла
