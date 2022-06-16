- [« DOMComment::\_\_construct](domcomment.construct.md)
- [DOMDocument::\_\_construct »](domdocument.construct.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMDocument

# Клас DOMDocument

(PHP 5, PHP 7, PHP 8)

## Вступ

Надає весь вміст HTML- або XML-документа; служить коренем
деревини документ.

## Огляд класів

class **DOMDocument** extends [DOMNode](class.domnode.md) implements
[DOMParentNode](class.domparentnode.md) {

/\* Властивості \*/

public readonly ?[DOMDocumentType](class.domdocumenttype.md)
`$doctype`;

public readonly [DOMImplementation](class.domimplementation.md)
`$implementation`;

public readonly ?[DOMElement](class.domelement.md) `$documentElement`;

public readonly ?string `$actualEncoding`;

public ?string `$encoding`;

public readonly ?string `$xmlEncoding`;

public bool `$standalone`;

public bool `$xmlStandalone`;

public ?string `$version`;

public ?string `$xmlVersion`;

public bool `$strictErrorChecking`;

public ?string `$documentURI`;

public readonly
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$config` u003d null;

public bool `$formatOutput`;

public bool `$validateOnParse`;

public bool `$resolveExternals`;

public bool `$preserveWhiteSpace`;

public bool `$recover`;

public bool `$substituteEntities`;

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

public [\_\_construct](domdocument.construct.md)(string `$version` u003d
"1.0", string `$encoding` u003d "")

public [createAttribute](domdocument.createattribute.md)(string
`$localName`): [DOMAttr](class.domattr.md)\|false

public [createAttributeNS](domdocument.createattributens.md)(?string
`$namespace`, string `$qualifiedName`):
[DOMAttr](class.domattr.md)\|false

public [createCDATASection](domdocument.createcdatasection.md)(string
`$data`): [DOMCdataSection](class.domcdatasection.md)\|false

public [createComment](domdocument.createcomment.md)(string `$data`):
[DOMComment](class.domcomment.md)

public
[createDocumentFragment](domdocument.createdocumentfragment.md)():
[DOMDocumentFragment](class.domdocumentfragment.md)

public [createElement](domdocument.createelement.md)(string
`$localName`, string `$value` u003d ""):
[DOMElement](class.domelement.md)\|false

public [createElementNS](domdocument.createelementns.md)(?string
`$namespace`, string `$qualifiedName`, string `$value` u003d ""):
[DOMElement](class.domelement.md)\|false

public
[createEntityReference](domdocument.createentityreference.md)(string
`$name`): [DOMEntityReference](class.domentityreference.md)\|false

public
[createProcessingInstruction](domdocument.createprocessinginstruction.md)(string
`$target`, string `$data` u003d ""):
[DOMProcessingInstruction](class.domprocessinginstruction.md)\|false

public [createTextNode](domdocument.createtextnode.md)(string
`$data`): [DOMText](class.domtext.md)

public [getElementById](domdocument.getelementbyid.md)(string
`$elementId`): ?[DOMElement](class.domelement.md)

public
[getElementsByTagName](domdocument.getelementsbytagname.md)(string
`$qualifiedName`): [DOMNodeList](class.domnodelist.md)

public
[getElementsByTagNameNS](domdocument.getelementsbytagnamens.md)(?string
`$namespace`, string `$localName`):
[DOMNodeList](class.domnodelist.md)

public
[importNode](domdocument.importnode.md)([DOMNode](class.domnode.md)
`$node`, bool `$deep` u003d **`false`**):
[DOMNode](class.domnode.md)\|false

public [load](domdocument.load.md)(string `$filename`, int `$options`
u003d 0): [DOMDocument](class.domdocument.md)\|bool

public [loadHTML](domdocument.loadhtml.md)(string `$source`, int
`$options` u003d 0): [DOMDocument](class.domdocument.md)\|bool

public [loadHTMLFile](domdocument.loadhtmlfile.md)(string `$filename`,
int `$options` u003d 0): [DOMDocument](class.domdocument.md)\|bool

public [loadXML](domdocument.loadxml.md)(string `$source`, int
`$options` u003d 0): [DOMDocument](class.domdocument.md)\|bool

public [normalizeDocument](domdocument.normalizedocument.md)(): void

public [registerNodeClass](domdocument.registernodeclass.md)(string
`$baseClass`, ?string `$extendedClass`): bool

public [relaxNGValidate](domdocument.relaxngvalidate.md)(string
`$filename`): bool

public
[relaxNGValidateSource](domdocument.relaxngvalidatesource.md)(string
`$source`): bool

public [save](domdocument.save.md)(string `$filename`, int `$options`
u003d 0): int \ | false

public
[saveHTML](domdocument.savehtml.md)(?[DOMNode](class.domnode.md)
`$node` u003d **`null`**): string\|false

public [saveHTMLFile](domdocument.savehtmlfile.md)(string
`$filename`): int\|false

public
[saveXML](domdocument.savexml.md)(?[DOMNode](class.domnode.md)
`$node` u003d **`null`**, int `$options` u003d 0): string\|false

public [schemaValidate](domdocument.schemavalidate.md)(string
`$filename`, int `$flags` u003d 0): bool

public
[schemaValidateSource](domdocument.schemavalidatesource.md)(string
`$source`, int `$flags` u003d 0): bool

public [validate](domdocument.validate.md)(): bool

public [xinclude](domdocument.xinclude.md)(int `$options` u003d 0):
int\|false

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

`actualEncoding`
*Застаріло*. Кодування документа є доступним тільки для читання
еквівалентом `encoding`.

`childElementCount`
Кількість дочірніх елементів.

`config`
*Застаріло*. Конфігурація, яка використовується під час виклику
[DOMDocument::normalizeDocument()](domdocument.normalizedocument.md).

`doctype`
Оголошення типу документа, що відповідає цьому документу.

`documentElement`
Об'єкт [DOMElement](class.domelement.md), який є першим
елемент документа. Якщо не знайдено, оцінюється як **`null`**. Зручний
атрибут, що надає прямий доступ до дочірнього вузла як елемента
документа. **`null`**, якщо не існує.

`documentURI`
Розташування документа або **`null`**, якщо воно не визначене.

`encoding`
Кодування документа, як зазначено в оголошенні XML. Цей атрибут
відсутня в останній специфікації DOM Level 3, але є
єдиним способом маніпулювання кодуванням XML-документа в цьому
реалізації.

`firstElementChild`
Перший дочірній елемент або **`null`**.

`formatOutput`
Форматує висновок, додаючи відступи та додаткові прогалини. Не
працює, якщо документ був завантажений із увімкненим параметром
`preserveWhitespace`.

`implementation`
Об'єкт класу [DOMImplementation](class.domimplementation.md),
що обробляє цей документ.

`lastElementChild`
Останній дочірній елемент або **`null`**.

`preserveWhiteSpace`
Вказівка не прибирати зайві прогалини та відступи. За промовчанням **`true`**.
Встановлення цього значення на **`false`** має той самий ефект, що й
передача **`LIBXML_NOBLANKS`** як `option` в
[DOMDocument::load()](domdocument.load.md) і т.д.

`recover`
*Пропрієтарна властивість*. Включає режим відновлення, тобто
намагається розібрати некоректно складені (non-well formed) документи.
Цей атрибут не є частиною специфікації DOM і є специфічним для
libxml.

`resolveExternals`
Встановіть **`true`** для завантаження зовнішніх елементів з оголошення
типу документа. Може бути корисним при включенні елементів з
символьними даними в документі XML.

`standalone`
*Застаріло*. Вказує, що документ не залежить від інших документів XML.
Це можна визначити з оголошення XML. Властивість пов'язана з
`xmlStandalone`.

`strictErrorChecking`
Викидає виняток [DOMException](class.domexception.md) у разі
виникнення помилок. За промовчанням **`true`**.

`substituteEntities`
*Патентована властивість*. Вказує, замінювати чи ні елементи
документа. Цей атрибут не є частиною специфікації DOM та специфічний
для libxml.

**Застереження**
Увімкнення заміщення об'єкта може полегшити атаки на зовнішній об'єкт XML
(XXE).

`validateOnParse`
Завантажує DTD та перевіряє документ на відповідність. За замовчуванням
**`false`**.

`version`
*Застаріло*. Версія XML відповідає `xmlVersion`.

`xmlEncoding`
Атрибут, що визначає, як частина XML-оголошення, кодування це
документа. Має значення **`null`** у випадках, коли атрибут не заданий,
або значення невідоме, якщо, наприклад, документ створено пам'яті.

`xmlStandalone`
Атрибут, який визначає, як частина XML-оголошення, що документ є
автономним. Приймає значення **`false`**, якщо не вказано.

`xmlVersion`
Атрибут, який визначає, як частина XML-оголошення, номер версії цього
документа. Якщо оголошення в документі немає, є підтримка всіх
особливостей "XML", значення одно "1.0".

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---|
| 8.0.0 | Клас **DOMDocument** тепер реалізує інтерфейс [DOMParentNode](class.domparentnode.md). |
| 8.0.0 | Нереалізований метод **DOMDocument::renameNode()** був вилучений. |

## Примітки

> **Примітка**:
>
> Модуль DOM використовує кодування UTF-8. Використовуйте
> [mb_convert_encoding()](function.mb-convert-encoding.md),
> [UConverter::transcode()](uconverter.transcode.md) або
> [iconv()](function.iconv.md) для роботи з іншими кодуваннями.

> **Примітка**:
>
> При використанні [json_encode()](function.json-encode.md) для
> об'єкта **DOMDocument** буде отримано результат кодування порожнього
> об'єкта.

## Дивіться також

- [» Специфікація W3C для
Document](http://www.w3.org/TR/2003/WD-DOM-Level-3-Core-20030226/DOM3-Core.md#core-i-Document)

## Зміст

- [DOMDocument::\_\_construct](domdocument.construct.md) — Створює
новий об'єкт DOMDocument
- [DOMDocument::createAttribute](domdocument.createattribute.md) -
Створити новий атрибут
- [DOMDocument::createAttributeNS](domdocument.createattributens.md)
— Створює новий атрибут вузла з відповідним простором імен
- [DOMDocument::createCDATASection](domdocument.createcdatasection.md)
- Створює новий вузол cdata
- [DOMDocument::createComment](domdocument.createcomment.md) -
Створити новий вузол коментаря
- [DOMDocument::createDocumentFragment](domdocument.createdocumentfragment.md)
- Створити новий фрагмент документа
- [DOMDocument::createElement](domdocument.createelement.md) -
Створити новий вузол елемента
- [DOMDocument::createElementNS](domdocument.createelementns.md) -
Створити новий вузол елемента з відповідним простором імен
- [DOMDocument::createEntityReference](domdocument.createentityreference.md)
- Створити новий вузол посилання на сутність
- [DOMDocument::createProcessingInstruction](domdocument.createprocessinginstruction.md)
- Створити новий PI-вузол
- [DOMDocument::createTextNode](domdocument.createtextnode.md) -
Створити новий текстовий вузол
- [DOMDocument::getElementById](domdocument.getelementbyid.md) -
Шукає елемент із певним ідентифікатором
- [DOMDocument::getElementsByTagName](domdocument.getelementsbytagname.md)
— Шукає всі елементи із заданим локальним ім'ям
- [DOMDocument::getElementsByTagNameNS](domdocument.getelementsbytagnamens.md)
— Шукає всі елементи із заданим ім'ям у вказаному просторі імен
- [DOMDocument::importNode](domdocument.importnode.md) -
Імпортувати вузол у поточний документ
- [DOMDocument::load](domdocument.load.md) — Завантаження XML із файлу
- [DOMDocument::loadHTML](domdocument.loadhtml.md) — Завантаження HTML
з рядка
- [DOMDocument::loadHTMLFile](domdocument.loadhtmlfile.md) -
Завантаження HTML із файлу
- [DOMDocument::loadXML](domdocument.loadxml.md) — Завантаження XML з
рядки
- [DOMDocument::normalizeDocument](domdocument.normalizedocument.md)
- Нормалізує документ
- [DOMDocument::registerNodeClass](domdocument.registernodeclass.md)
— Реєстрація розширеного класу, який використовується для створення типу
базового вузла
- [DOMDocument::relaxNGValidate](domdocument.relaxngvalidate.md) -
Здійснює перевірку документа на правильність побудови за допомогою
relaxNG
- [DOMDocument::relaxNGValidateSource](domdocument.relaxngvalidatesource.md)
- Перевіряє документ за допомогою relaxNG
- [DOMDocument::save](domdocument.save.md) — Зберігає XML-дерево з
внутрішнього представлення у файл
- [DOMDocument::saveHTML](domdocument.savehtml.md) — Зберігає
документ із внутрішнього подання до рядка, використовуючи
форматування HTML
- [DOMDocument::saveHTMLFile](domdocument.savehtmlfile.md) -
Зберігає документ із внутрішнього представлення у файл, використовуючи
форматування HTML
- [DOMDocument::saveXML](domdocument.savexml.md) — Зберігає
XML-дерево з внутрішнього уявлення у вигляді рядка
- [DOMDocument::schemaValidate](domdocument.schemavalidate.md) -
Перевіряє дійсність документа, ґрунтуючись на заданій схемі.
Підтримується лише XML-схема 1.0.
- [DOMDocument::schemaValidateSource](domdocument.schemavalidatesource.md)
— Перевіряє дійсність документа, ґрунтуючись на схемі
- [DOMDocument::validate](domdocument.validate.md) — Перевіряє
документ на відповідність його DTD
- [DOMDocument::xinclude](domdocument.xinclude.md) — Проводить
вставку XInclude в об'єкті DOMDocument
