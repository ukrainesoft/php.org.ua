- [«
xml_set_start_namespace_decl_handler](function.xml-set-start-namespace-decl-handler.md)
- [XmlParser »](class.xmlparser.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- встановлення обробника нерозібраних оголошень сутностей

#xml_set_unparsed_entity_decl_handler

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_unparsed_entity_decl_handler — Встановлення обробника
нерозібраних оголошень сутностей

### Опис

**xml_set_unparsed_entity_decl_handler**([XMLParser](class.xmlparser.md)
`$parser`, [callable](language.types.callable.md) `$handler`): bool

Задає функцію обробник нерозібраних оголошень сутностей для
XML-аналізатора `parser`.

Обробник `handler` буде викликаний, якщо XML-аналізатор виявить
NDATA-оголошення зовнішньої сутності вигляду:

`` xmlcode
<!ENTITY <parameter>name</parameter> {<parameter>publicId</parameter> | <parameter>systemId</parameter>}
NDATA <parameter>notationName</parameter>
````

Дивіться [розділ 4.2.2 XML 1.0
специфікації](http://www.w3.org/TR/1998/REC-xml-19980210#sec-external-ent),
щоб отримати точне визначення позначень зовнішніх сутностей.

### Список параметрів

`parser`
Посилання на аналізатор XML, для якого задається обробник.

`handler`
`handler` - рядок, що містить ім'я функції, яка повинна бути
визначено на момент виклику функції
[xml_parse()](function.xml-parse.md) з аналізатора `parser`.

Функція з ім'ям handler повинна приймати шість аргументів:

handler(
[XMLParser](class.xmlparser.md) `$parser`,
string `$entity_name`,
string `$base`,
string `$system_id`,
string `$public_id`,
string `$notation_name`
)

`parser`
Перший аргумент parser є посиланням на XML-аналізатор, що викликає
обробник.

`entity_name`
Ім'я сутності, яку потрібно дати визначення.

`base`
Це основа для дозволу системного ідентифікатора (system_id)
зовнішньої сутності. На даний момент як цей аргумент завжди
передається порожній рядок.

`system_id`
Системний ідентифікатор зовнішньої сутності.

`public_id`
Загальнодоступний ідентифікатор зовнішньої сутності.

`notation_name`
Ім'я позначення цієї сутності (дивіться
[xml_set_notation_decl_handler()](function.xml-set-notation-decl-handler.md)).

Якщо як обробник передано порожній рядок або **`false`**, цей
обробник вимикається.

> **Примітка**: Як аргумент замість імені функції може бути
> передано масив, що містить посилання на об'єкт та ім'я методу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |
