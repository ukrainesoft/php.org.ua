- [« Типи ресурсів](xmlreader.resources.md)
- [XMLReader::close »](xmlreader.close.md)

- [PHP Manual](index.md)
- [XMLReader](book.xmlreader.md)
- Клас XMLReader

# Клас XMLReader

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Модуль XMLReader – синтаксичний аналізатор XML. Клас-читач
виступає як курсор, слідує по потоку документа і
зупиняється на кожному вузлі на цьому шляху.

## Огляд класів

class **XMLReader** {

/\* Константи \*/

const int `NONE` u003d 0;

const int `ELEMENT` u003d 1;

const int `ATTRIBUTE` u003d 2;

const int `TEXT` u003d 3;

const int `CDATA` u003d 4;

const int `ENTITY_REF` u003d 5;

const int `ENTITY` u003d 6;

const int `PI` u003d 7;

const int `COMMENT` u003d 8;

const int `DOC` u003d 9;

const int `DOC_TYPE` u003d 10;

const int `DOC_FRAGMENT` u003d 11;

const int `NOTATION` u003d 12;

const int `WHITESPACE` u003d 13;

const int `SIGNIFICANT_WHITESPACE` u003d 14;

const int `END_ELEMENT` u003d 15;

const int `END_ENTITY` u003d 16;

const int `XML_DECLARATION` u003d 17;

const int `LOADDTD` u003d 1;

const int `DEFAULTATTRS` u003d 2;

const int `VALIDATE` u003d 3;

const int `SUBST_ENTITIES` u003d 4;

/\* Властивості \*/

public int `$attributeCount`;

public string `$baseURI`;

public int `$ depth`;

public bool `$hasAttributes`;

public bool `$hasValue`;

public bool `$isDefault`;

public bool `$isEmptyElement`;

public string `$localName`;

public string `$name`;

public string `$namespaceURI`;

public int `$nodeType`;

public string `$prefix`;

public string `$value`;

public string `$xmlLang`;

/\* Методи \*/

public [close](xmlreader.close.md)(): bool

public [expand](xmlreader.expand.md)(?[DOMNode](class.domnode.md)
`$baseNode` u003d **`null`**): [DOMNode](class.domnode.md)\|false

public [getAttribute](xmlreader.getattribute.md)(string `$name`):
?string

public [getAttributeNo](xmlreader.getattributeno.md)(int `$index`):
?string

public [getAttributeNs](xmlreader.getattributens.md)(string `$name`,
string `$namespace`): ?string

public [getParserProperty](xmlreader.getparserproperty.md)(int
`$property`): bool

public [isValid](xmlreader.isvalid.md)(): bool

public [lookupNamespace](xmlreader.lookupnamespace.md)(string
`$prefix`): ?string

public [moveToAttribute](xmlreader.movetoattribute.md)(string
`$name`): bool

public [moveToAttributeNo](xmlreader.movetoattributeno.md)(int
`$index`): bool

public [moveToAttributeNs](xmlreader.movetoattributens.md)(string
`$name`, string `$namespace`): bool

public [moveToElement](xmlreader.movetoelement.md)(): bool

public [moveToFirstAttribute](xmlreader.movetofirstattribute.md)():
bool

public [moveToNextAttribute](xmlreader.movetonextattribute.md)(): bool

public [next](xmlreader.next.md)(?string `$name` u003d **`null`**): bool

public static [open](xmlreader.open.md)(string `$uri`, ?string
`$encoding` u003d **`null`**, int `$flags` u003d 0):
bool\|[XMLReader](class.xmlreader.md)

public [read](xmlreader.read.md)(): bool

public [readInnerXml](xmlreader.readinnerxml.md)(): string

public [readOuterXml](xmlreader.readouterxml.md)(): string

public [readString](xmlreader.readstring.md)(): string

public [setParserProperty](xmlreader.setparserproperty.md)(int
`$property`, bool `$value`): bool

public [setRelaxNGSchema](xmlreader.setrelaxngschema.md)(?string
`$filename`): bool

public
[setRelaxNGSchemaSource](xmlreader.setrelaxngschemasource.md)(?string
`$source`): bool

public [setSchema](xmlreader.setschema.md)(?string `$filename`): bool

public static [XML](xmlreader.xml.md)(string `$source`, ?string
`$encoding` u003d **`null`**, int `$flags` u003d 0):
bool\|[XMLReader](class.xmlreader.md)

}

## Властивості

`attributeCount`
Кількість атрибутів у вузлі

`baseURI`
Базовий URI вузла

`depth`
Глибина вузла в дереві, починаючи з 0

`hasAttributes`
Показує, чи є у вузла атрибути

`hasValue`
Показує, чи має вузол текстове значення

`isDefault`
Показує, чи є стандартним атрибутом з DTD

`isEmptyElement`
Показує, чи є вузол порожнім тегом

`localName`
Локальне ім'я вузла

`name`
Повністю певне ім'я вузла

`namespaceURI`
URI простору імен пов'язаний із вузлом

`nodeType`
Тип вузла

`prefix`
Префікс простору імен пов'язаний із вузлом

`value`
Текстове значення вузла

`xmlLang`
Контекст xml:lang, де знаходиться вузол

## Зумовлені константи

## Типи вузлів XMLReader

**`XMLReader::NONE`**
Немає типу вузла

**`XMLReader::ELEMENT`**
Початковий елемент

**`XMLReader::ATTRIBUTE`**
Вузол атрибуту

**`XMLReader::TEXT`**
Текстовий вузол

**`XMLReader::CDATA`**
Вузол CDATA

**`XMLReader::ENTITY_REF`**
Вузол посилання на сутність

**`XMLReader::ENTITY`**
Вузол оголошення об'єкту

**`XMLReader::PI`**
Вузол інструкцій обробки

**`XMLReader::COMMENT`**
Вузол коментаря

**`XMLReader::DOC`**
Вузол документа

**`XMLReader::DOC_TYPE`**
Вузол типу документа

**`XMLReader::DOC_FRAGMENT`**
Вузол фрагмента документа

**`XMLReader::NOTATION`**
Вузол нотації

**`XMLReader::WHITESPACE`**
Пробільний вузол

**`XMLReader::SIGNIFICANT_WHITESPACE`**
Істотний пробільний вузол

**`XMLReader::END_ELEMENT`**
Завершення елемента

**`XMLReader::END_ENTITY`**
Завершення об'єкту

**`XMLReader::XML_DECLARATION`**
Вузол XML оголошення

## Опції аналізатора XMLReader

**`XMLReader::LOADDTD`**
Завантажувати DTD, але не перевіряти

**`XMLReader::DEFAULTATTRS`**
Завантажувати DTD та атрибути за замовчуванням, але не перевіряти

**`XMLReader::VALIDATE`**
Завантажувати DTD та перевіряти при розборі

**`XMLReader::SUBST_ENTITIES`**
Замінювати об'єкти та розгортати посилання

## Зміст

- [XMLReader::close](xmlreader.close.md) — Закрити введення XMLReader
- [XMLReader::expand](xmlreader.expand.md) — Повернути копію
поточного вузла у вигляді об'єкта DOM
- [XMLReader::getAttribute](xmlreader.getattribute.md) — Отримати
значення атрибуту з певним ім'ям
- [XMLReader::getAttributeNo](xmlreader.getattributeno.md)
Отримати значення атрибута за індексом
- [XMLReader::getAttributeNs](xmlreader.getattributens.md) -
Отримати значення атрибуту по localname та URI
- [XMLReader::getParserProperty](xmlreader.getparserproperty.md) -
Вказує, чи була певна властивість встановлена
- [XMLReader::isValid](xmlreader.isvalid.md) — Показати, чи є
документ, що розбирається, синтаксично правильним
- [XMLReader::lookupNamespace](xmlreader.lookupnamespace.md) — Знайти
простір імен для префіксу
- [XMLReader::moveToAttribute](xmlreader.movetoattribute.md) -
Перемістити курсор до атрибуту із заданим ім'ям
- [XMLReader::moveToAttributeNo](xmlreader.movetoattributeno.md) -
Перемістити курсор на атрибут за індексом
- [XMLReader::moveToAttributeNs](xmlreader.movetoattributens.md) -
Перемістити курсор до іменованого атрибуту
- [XMLReader::moveToElement](xmlreader.movetoelement.md)
Позиціонувати курсор на батьківському елементі поточного атрибуту
- [XMLReader::moveToFirstAttribute](xmlreader.movetofirstattribute.md)
— Перемістити позицію курсору на перший атрибут
- [XMLReader::moveToNextAttribute](xmlreader.movetonextattribute.md)
— Перемістити позицію курсору на наступний атрибут
- [XMLReader::next](xmlreader.next.md) — Перемістити курсор на
наступний вузол, пропускаючи всі піддерев'я
- [XMLReader::open](xmlreader.open.md) — Встановити URI, що містить
XML-документ для аналізу
- [XMLReader::read](xmlreader.read.md) — Перейти до наступного
вузлу у документі
- [XMLReader::readInnerXml](xmlreader.readinnerxml.md) — Вийняти XML
з поточного вузла
- [XMLReader::readOuterXml](xmlreader.readouterxml.md) — Отримати
XML із поточного вузла, включаючи сам вузол
- [XMLReader::readString](xmlreader.readstring.md) — Прочитати
вміст поточного вузла як рядок
- [XMLReader::setParserProperty](xmlreader.setparserproperty.md) -
Встановлює опцію парсера
- [XMLReader::setRelaxNGSchema](xmlreader.setrelaxngschema.md) -
Встановити ім'я файлу або URI для схеми RelaxNG
- [XMLReader::setRelaxNGSchemaSource](xmlreader.setrelaxngschemasource.md)
- Встановлює дані, що містять схему RelaxNG
- [XMLReader::setSchema](xmlreader.setschema.md) — Перевірити
документ, використовуючи XSD
- [XMLReader::XML](xmlreader.xml.md) — Встановити дані, що містять
XML для розбору
