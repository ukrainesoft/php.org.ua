- [« DOMDocument::xinclude](domdocument.xinclude.md)
- [DOMDocumentFragment::appendXML
»](domdocumentfragment.appendxml.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMDocumentFragment

# Клас DOMDocumentFragment

(PHP 5, PHP 7, PHP 8)

## Огляд класів

class **DOMDocumentFragment** extends [DOMNode](class.domnode.md)
implements [DOMParentNode](class.domparentnode.md) {

/\* Властивості \*/

public readonly ?[DOMElement](class.domelement.md)
`$firstElementChild`;

public readonly ?[DOMElement](class.domelement.md)
`$lastElementChild`;

public readonly int `$childElementCount`;

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

public [\_\_construct](domdocumentfragment.construct.md)()

public [appendXML](domdocumentfragment.appendxml.md)(string `$data`):
bool

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

`childElementCount`
Кількість дочірніх елементів.

`firstElementChild`
Перший дочірній елемент або **`null`**.

`lastElementChild`
Останній дочірній елемент або **`null`**.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------|
| 8.0.0 | Додані властивості `firstElementChild`, `lastElementChild` та `childElementCount`. |
| 8.0.0 | Клас **DOMDocumentFragment** тепер реалізує інтерфейс [DOMParentNode](class.domparentnode.md). |

## Зміст

- [DOMDocumentFragment::appendXML](domdocumentfragment.appendxml.md)
— Додавання необроблених даних XML
- [DOMDocumentFragment::\_\_construct](domdocumentfragment.construct.md)
- Конструктор об'єкта DOMDocumentFragment
