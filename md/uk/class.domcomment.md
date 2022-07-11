- [« DOMChildNode::replaceWith](domchildnode.replacewith.md)
- [DOMComment::\_\_construct »](domcomment.construct.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMComment

# Клас DOMComment

(PHP 5, PHP 7, PHP 8)

## Вступ

Представляє вузли коментарів, символи, позначені `<!--` та `-->`.

## Огляд класів

class **DOMComment** extends
[DOMCharacterData](class.domcharacterdata.md) {

/\* Наслідувані властивості \*/

public string `$data`;

public readonly int `$length`;

public readonly ?[DOMElement](class.domelement.md)
`$previousElementSibling`;

public readonly ?[DOMElement](class.domelement.md)
`$nextElementSibling`;

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

public [\_\_construct](domcomment.construct.md)(string `$data` u003d "")

/\* Наслідувані методи \*/

public
[DOMCharacterData::appendData](domcharacterdata.appenddata.md)(string
`$data`): bool

public
[DOMCharacterData::deleteData](domcharacterdata.deletedata.md)(int
`$offset`, int `$count`): bool

public
[DOMCharacterData::insertData](domcharacterdata.insertdata.md)(int
`$offset`, string `$data`): bool

public
[DOMCharacterData::replaceData](domcharacterdata.replacedata.md)(int
`$offset`, int `$count`, string `$data`): bool

public
[DOMCharacterData::substringData](domcharacterdata.substringdata.md)(int
`$offset`, int `$count`): string\|false

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

## Дивіться також

- [» Специфікація W3C
коментарів](http://www.w3.org/TR/2003/WD-DOM-Level-3-Core-20030226/DOM3-Core.md#core-ID-1728279322)

## Зміст

- [DOMComment::\_\_construct](domcomment.construct.md) — Створює
новий екземпляр класу DOMComment
