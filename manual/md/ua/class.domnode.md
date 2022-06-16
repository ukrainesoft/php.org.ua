- [« DOMNamedNodeMap::item](domnamednodemap.item.md)
- [DOMNode::appendChild »](domnode.appendchild.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMNode

# Клас DOMNode

(PHP 5, PHP 7, PHP 8)

## Огляд класів

class **DOMNode** {

/\* Властивості \*/

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

public
[appendChild](domnode.appendchild.md)([DOMNode](class.domnode.md)
`$node`): [DOMNode](class.domnode.md)\|false

public [C14N](domnode.c14n.md)(
bool `$exclusive` u003d **`false`**,
bool `$withComments` u003d **`false`**,
?array `$xpath` u003d **`null`**,
?array `$nsPrefixes` u003d **`null`**
): string\|false

public [C14NFile](domnode.c14nfile.md)(
string `$uri`,
bool `$exclusive` u003d **`false`**,
bool `$withComments` u003d **`false`**,
?array `$xpath` u003d **`null`**,
?array `$nsPrefixes` u003d **`null`**
): int\|false

public [cloneNode](domnode.clonenode.md)(bool `$deep` u003d **`false`**):
[DOMNode](class.domnode.md)\|false

public [getLineNo](domnode.getlineno.md)(): int

public [getNodePath](domnode.getnodepath.md)(): ?string

public [hasAttributes](domnode.hasattributes.md)(): bool

public [hasChildNodes](domnode.haschildnodes.md)(): bool

public
[insertBefore](domnode.insertbefore.md)([DOMNode](class.domnode.md)
`$node`, ?[DOMNode](class.domnode.md) `$child` u003d **`null`**):
[DOMNode](class.domnode.md)\|false

public [isDefaultNamespace](domnode.isdefaultnamespace.md)(string
`$namespace`): bool

public
[isSameNode](domnode.issamenode.md)([DOMNode](class.domnode.md)
`$otherNode`): bool

public [isSupported](domnode.issupported.md)(string `$feature`, string
`$version`): bool

public [lookupNamespaceUri](domnode.lookupnamespaceuri.md)(string
`$prefix`): string

public [lookupPrefix](domnode.lookupprefix.md)(string `$namespace`):
?string

public [normalize](domnode.normalize.md)(): void

public
[removeChild](domnode.removechild.md)([DOMNode](class.domnode.md)
`$child`): [DOMNode](class.domnode.md)\|false

public
[replaceChild](domnode.replacechild.md)([DOMNode](class.domnode.md)
`$node`, [DOMNode](class.domnode.md) `$child`):
[DOMNode](class.domnode.md)\|false

}

## Властивості

`nodeName`
Повертає найточніше ім'я для поточного типу вузла

`nodeValue`
Значення цього вузла, залежно з його типу. На відміну від
специфікації W3C, значення вузлів [DOMElement](class.domelement.md)
одно
[DOMNode::textContent](class.domnode.md#domnode.props.textcontent), а
не **`null`**.

`nodeType`
Повертає тип вузла. Одна з можливих [констант
XML_xxx_NODE](dom.constants.md)

`parentNode`
Батьківський вузол цього вузла. Якщо такого вузла немає, повертає
**`null`**

`childNodes`
Об'єкт [DOMNodeList](class.domnodelist.md), що містить всіх нащадків
цього вузла. Якщо нащадків немає, повертається порожній
[DOMNodeList](class.domnodelist.md).

`firstChild`
Перший дочірній вузол цього вузла. Якщо такого вузла немає, повертає
**`null`**.

`lastChild`
Останній дочірній вузол цього вузла. Якщо такого вузла немає, повертає
**`null`**.

`previousSibling`
Вузол, що безпосередньо передує цьому вузлу. Якщо такого вузла немає,
повертає **`null`**.

`nextSibling`
Вузол безпосередньо наступний після цього вузла. Якщо такого вузла немає,
повертає **`null`**.

`attributes`
Об'єкт [DOMNamedNodeMap](class.domnamednodemap.md), що містить
атрибути цього вузла (тільки якщо це
[DOMElement](class.domelement.md)), інакше поверне **`null`**.

`ownerDocument`
Об'єкт [DOMDocument](class.domdocument.md), пов'язаний з цим вузлом,
або **`null`**, якщо вузол є
[DOMDocument](class.domdocument.md).

`namespaceURI`
URI - простір імен цього вузла або **`null`**, якщо він не вказаний.

`prefix`
Префікс простору імен цього вузла або **`null`**, якщо він не вказано.

`localName`
Повертає локальну частину кваліфікованого імені цього сайту.

`baseURI`
Абсолютний базовий URI цього вузла або **`null`**, якщо реалізація не
змогла отримати абсолютний URI.

`textContent`
Текстовий вміст цього вузла та його нащадків

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------|
| 8.0.0 | Нереалізовані методи **DOMNode::compareDocumentPosition()**, **DOMNode::isEqualNode()**, **DOMNode::getFeature()**, **DOMNode::setUserData()** і **DOMNode: :getUserData()** було видалено. |

## Примітки

> **Примітка**:
>
> Модуль DOM використовує кодування UTF-8. Використовуйте
> [mb_convert_encoding()](function.mb-convert-encoding.md),
> [UConverter::transcode()](uconverter.transcode.md) або
> [iconv()](function.iconv.md) для роботи з іншими кодуваннями.

## Дивіться також

- [» Специфікація W3C елемента
Node](http://www.w3.org/TR/2003/WD-DOM-Level-3-Core-20030226/DOM3-Core.md#core-ID-1950641247)

## Зміст

- [DOMNode::appendChild](domnode.appendchild.md) — Додає новий
дочірній вузол у кінець списку нащадків
- [DOMNode::C14N](domnode.c14n.md) — Канонізувати вузли в рядок
- [DOMNode::C14NFile](domnode.c14nfile.md) — Канонізувати вузли в
файл
- [DOMNode::cloneNode](domnode.clonenode.md) - Клонує вузол
- [DOMNode::getLineNo](domnode.getlineno.md) — Отримати номер рядка
вузла
- [DOMNode::getNodePath](domnode.getnodepath.md) — Отримання XPath
вузла
- [DOMNode::hasAttributes](domnode.hasattributes.md) — Перевіряє,
чи має цей вузол атрибути
- [DOMNode::hasChildNodes](domnode.haschildnodes.md) — Перевіряє,
чи має цей вузол нащадків
- [DOMNode::insertBefore](domnode.insertbefore.md) — Додає новий
дочірній вузол перед вказаним вузлом
- [DOMNode::isDefaultNamespace](domnode.isdefaultnamespace.md) -
Перевіряє, чи є вказаний URI простору імен вузла
простором імен за замовчуванням чи ні
- [DOMNode::isSameNode](domnode.issamenode.md) — Вказує, є
чи два вузли одним і тим же вузлом
- [DOMNode::isSupported](domnode.issupported.md) — Перевіряє,
чи підтримується можливість у певній версії
- [DOMNode::lookupNamespaceUri](domnode.lookupnamespaceuri.md)
Отримує URI простору імен вузла за префіксом
- [DOMNode::lookupPrefix](domnode.lookupprefix.md) — Повертає
префікс простору імен вузла з URI простору імен
- [DOMNode::normalize](domnode.normalize.md) - Нормалізує вузол
- [DOMNode::removeChild](domnode.removechild.md) — Видаляє дочірній
вузол зі списку нащадків
- [DOMNode::replaceChild](domnode.replacechild.md) — Замінює
дочірній вузол
