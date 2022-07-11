- [«
DOMDocumentFragment::\_\_construct](domdocumentfragment.construct.md)
- [DOMElement »](class.domelement.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMDocumentType

# Клас DOMDocumentType

(PHP 5, PHP 7, PHP 8)

## Вступ

Кожен об'єкт [DOMDocument](class.domdocument.md) має атрибут
`doctype`, значення якого або **`null`**, або об'єкт класу
**DOMDocumentType**.

## Огляд класів

class **DOMDocumentType** extends [DOMNode](class.domnode.md) {

/\* Властивості \*/

public readonly string `$name`;

public readonly [DOMNamedNodeMap](class.domnamednodemap.md)
$entities;

public readonly [DOMNamedNodeMap](class.domnamednodemap.md)
`$notations`;

public readonly string `$publicId`;

public readonly string `$systemId`;

public readonly ?string `$internalSubset`;

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

`publicId`
Загальнодоступний ідентифікатор зовнішнього підмножини типів.

`systemId`
Системний ідентифікатор зовнішнього підмножини типів. Це може бути
абсолютний URI.

`name`
Ім'я DTD, тобто ім'я, наступне відразу за ключовим словом `DOCTYPE`.

`entities`
Об'єкт класу [DOMNamedNodeMap](class.domnamednodemap.md), що містить
основні елементи, внутрішні та зовнішні, оголошені в DTD.

`notations`
Об'єкт класу [DOMNamedNodeMap](class.domnamednodemap.md), що містить
позначення, оголошені DTD.

`internalSubset`
Внутрішнє підмножина у вигляді рядка або ** `null`**, якщо такого немає.
Воно не повинно містити розділових квадратних дужок.
