- [« DOMDocumentType](class.domdocumenttype.md)
- [DOMElement::\_\_construct »](domelement.construct.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMElement

# Клас DOMElement

(PHP 5, PHP 7, PHP 8)

## Огляд класів

class **DOMElement** extends [DOMNode](class.domnode.md) implements
[DOMParentNode](class.domparentnode.md),
[DOMChildNode](class.domchildnode.md) {

/\* Властивості \*/

public readonly string `$tagName`;

public readonly
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$schemaTypeInfo` u003d null;

public readonly ?[DOMElement](class.domelement.md)
`$firstElementChild`;

public readonly ?[DOMElement](class.domelement.md)
`$lastElementChild`;

public readonly int `$childElementCount`;

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

public [\_\_construct](domelement.construct.md)(string
`$qualifiedName`, ?string `$value` u003d **`null`**, string `$namespace` u003d
"")

public [getAttribute](domelement.getattribute.md)(string
`$qualifiedName`): string

public [getAttributeNode](domelement.getattributenode.md)(string
`$qualifiedName`):
[DOMAttr](class.domattr.md)\|DOMNameSpaceNode\|false

public [getAttributeNodeNS](domelement.getattributenodens.md)(?string
`$namespace`, string `$localName`):
[DOMAttr](class.domattr.md)\|DOMNameSpaceNode\|null

public [getAttributeNS](domelement.getattributens.md)(?string
`$namespace`, string `$localName`): string

public
[getElementsByTagName](domelement.getelementsbytagname.md)(string
`$qualifiedName`): [DOMNodeList](class.domnodelist.md)

public
[getElementsByTagNameNS](domelement.getelementsbytagnamens.md)(?string
`$namespace`, string `$localName`):
[DOMNodeList](class.domnodelist.md)

public [hasAttribute](domelement.hasattribute.md)(string
`$qualifiedName`): bool

public [hasAttributeNS](domelement.hasattributens.md)(?string
`$namespace`, string `$localName`): bool

public [removeAttribute](domelement.removeattribute.md)(string
`$qualifiedName`): bool

public
[removeAttributeNode](domelement.removeattributenode.md)([DOMAttr](class.domattr.md)
`$attr`): [DOMAttr](class.domattr.md)\|false

public [removeAttributeNS](domelement.removeattributens.md)(?string
`$namespace`, string `$localName`): void

public [setAttribute](domelement.setattribute.md)(string
`$qualifiedName`, string `$value`): [DOMAttr](class.domattr.md)\|bool

public
[setAttributeNode](domelement.setattributenode.md)([DOMAttr](class.domattr.md)
`$attr`): [DOMAttr](class.domattr.md)\|null\|false

public
[setAttributeNodeNS](domelement.setattributenodens.md)([DOMAttr](class.domattr.md)
`$attr`): [DOMAttr](class.domattr.md)\|null\|false

public [setAttributeNS](domelement.setattributens.md)(?string
`$namespace`, string `$qualifiedName`, string `$value`): void

public [setIdAttribute](domelement.setidattribute.md)(string
`$qualifiedName`, bool `$isId`): void

public
[setIdAttributeNode](domelement.setidattributenode.md)([DOMAttr](class.domattr.md)
`$attr`, bool `$isId`): void

public [setIdAttributeNS](domelement.setidattributens.md)(string
`$namespace`, string `$qualifiedName`, bool `$isId`): void

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

`nextElementSibling`
Елемент безпосередньо наступний за даним елементом або **`null`**.

`previousElementSibling`
Елемент попередній елементу або **`null`**.

`schemaTypeInfo`
Поки не реалізовано, завжди повертає **`null`**

`tagName`
Ім'я елемента

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | Додані властивості `firstElementChild`, `lastElementChild`, `childElementCount`, `previousElementSibling` та `nextElementSibling`. |
| 8.0.0 | Клас **DOMElement** тепер реалізує інтерфейс [DOMParentNode](class.domparentnode.md) та [DOMChildNode](class.domchildnode.md). |

## Примітки

> **Примітка**:
>
> Модуль DOM використовує кодування UTF-8. Використовуйте
> [mb_convert_encoding()](function.mb-convert-encoding.md),
> [UConverter::transcode()](uconverter.transcode.md) або
> [iconv()](function.iconv.md) для роботи з іншими кодуваннями.

## Зміст

- [DOMElement::\_\_construct](domelement.construct.md) - Створює
новий екземпляр класу DOMElement
- [DOMElement::getAttribute](domelement.getattribute.md) -
Повертає значення атрибуту
- [DOMElement::getAttributeNode](domelement.getattributenode.md) -
Повертає вузол атрибуту
- [DOMElement::getAttributeNodeNS](domelement.getattributenodens.md)
- Повертає вузол атрибуту
- [DOMElement::getAttributeNS](domelement.getattributens.md) -
Повертає значення атрибуту
- [DOMElement::getElementsByTagName](domelement.getelementsbytagname.md)
— Повертає елементи на ім'я тега
- [DOMElement::getElementsByTagNameNS](domelement.getelementsbytagnamens.md)
— Отримання елементів локального імені в заданому просторі
імен
- [DOMElement::hasAttribute](domelement.hasattribute.md) -
Перевіряє, чи існує атрибут
- [DOMElement::hasAttributeNS](domelement.hasattributens.md) -
Перевіряє, чи існує заданий атрибут
- [DOMElement::removeAttribute](domelement.removeattribute.md) -
Видаляє атрибут
- [DOMElement::removeAttributeNode](domelement.removeattributenode.md)
- Видаляє атрибут
- [DOMElement::removeAttributeNS](domelement.removeattributens.md) -
Видаляє атрибут
- [DOMElement::setAttribute](domelement.setattribute.md) — Додає
новий або змінює існуючий атрибут
- [DOMElement::setAttributeNode](domelement.setattributenode.md) -
Додає новий вузол атрибуту елемент
- [DOMElement::setAttributeNodeNS](domelement.setattributenodens.md)
— Додає новий атрибут елемент
- [DOMElement::setAttributeNS](domelement.setattributens.md) -
Додає новий атрибут
- [DOMElement::setIdAttribute](domelement.setidattribute.md) -
Оголошує атрибут, вказаний ім'ям, з ідентифікатором типу
- [DOMElement::setIdAttributeNode](domelement.setidattributenode.md)
— Оголошує атрибут, вказаний вузлом, з ідентифікатором типу
- [DOMElement::setIdAttributeNS](domelement.setidattributens.md) -
Оголошує атрибут, вказаний локальним ім'ям та URI простору
імен, з ідентифікатором типу
