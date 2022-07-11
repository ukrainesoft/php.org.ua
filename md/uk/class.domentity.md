- [« DOMElement::setIdAttributeNS](domelement.setidattributens.md)
- [DOMEntityReference »](class.domentityreference.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMEntity

# Клас DOMEntity

(PHP 5, PHP 7, PHP 8)

## Вступ

Цей інтерфейс є відомою сутністю, вже розібраною чи ні,
у документі XML.

## Огляд класів

class **DOMEntity** extends [DOMNode](class.domnode.md) {

/\* Властивості \*/

public readonly ?string `$publicId`;

public readonly ?string `$systemId`;

public readonly ?string `$notationName`;

public readonly ?string `$actualEncoding` u003d null;

public readonly ?string `$encoding` u003d null;

public readonly ?string `$version` u003d null;

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
Загальнодоступний ідентифікатор, що відповідає сутності або **`null`**,
якщо не задано.

`systemId`
Системний ідентифікатор відповідний сутності або **`null`**, якщо не
заданий. Це може бути абсолютний URI.

`notationName`
Для нерозібраних об'єктів - найменування умовного позначення для
сутності. Для розібраних – **`null`**.

`actualEncoding`
Атрибут, що задає кодування, яке використовувалося при розборі
сутності, для випадків, коли аналіз проводився зовнішніми способами.
Атрибут має значення **`null`**, якщо сутність знаходиться у внутрішньому
підмножині або цей факт не відомий.

`encoding`
Атрибут, що задає кодування сутності, так само як і в оголошенні, коли
сутність розібрано зовнішніми засобами. В іншому випадку атрибут має
значення **`null`**.

`version`
Атрибут, що задає версію елемента, якщо він розібраний зовнішніми
засобами. Інакше **`null`**.
