- [«
DOMProcessingInstruction::\_\_construct](domprocessinginstruction.construct.md)
- [DOMText::\_\_construct »](domtext.construct.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMText

# Клас DOMText

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **DOMText** успадковується від
[DOMCharacterData](class.domcharacterdata.md) і представляє текстове
вміст [DOMElement](class.domelement.md) або
[DOMAttr](class.domattr.md).

## Огляд класів

class **DOMText** extends
[DOMCharacterData](class.domcharacterdata.md) {

/\* Властивості \*/

public readonly string `$wholeText`;

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

public [\_\_construct](domtext.construct.md)(string `$data` u003d "")

public
[isElementContentWhitespace](domtext.iselementcontentwhitespace.md)():
bool

public
[isWhitespaceInElementContent](domtext.iswhitespaceinelementcontent.md)():
bool

public [splitText](domtext.splittext.md)(int `$offset`):
[DOMText](class.domtext.md)\|false

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

## Властивості

`wholeText`
Містить весь текст суміжних (не розділені іншими елементами,
коментарями чи інструкціями) текстових вузлів.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------|
| 8.0.0 | Нереалізований метод **DOMText::replaceWholeText()** був вилучений. |

## Зміст

- [DOMText::\_\_construct](domtext.construct.md) — Створює об'єкт
класу DOMText
- [DOMText::isElementContentWhitespace](domtext.iselementcontentwhitespace.md)
— Повертає, чи містить текстовий вузол пробіл у вмісті
елемента
- [DOMText::isWhitespaceInElementContent](domtext.iswhitespaceinelementcontent.md)
— Визначає, чи містить текстовий вузол пробіли у вмісті
- [DOMText::splitText](domtext.splittext.md) — розділяє вузол на
два, починаючи із заданої позиції
