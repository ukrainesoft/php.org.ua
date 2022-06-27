- [«
xml_set_external_entity_ref_handler](function.xml-set-external-entity-ref-handler.md)
- [xml_set_object »](function.xml-set-object.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- встановлення обробника оголошення умовних позначень

#xml_set_notation_decl_handler

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_notation_decl_handler — Встановлення обробника оголошення
умовних позначень

### Опис

**xml_set_notation_decl_handler**([XMLParser](class.xmlparser.md)
`$parser`, [callable](language.types.callable.md) `$handler`): bool

Задає обробник оголошення позначень для XML-аналізатора `parser`.

Розділ оголошення позначень є частиною DTD документа та має
наступний формат:

`` xmlcode
<!NOTATION <parameter>name</parameter>
{<parameter>systemId</parameter> | <parameter>publicId</parameter>?>
````

Дивіться [» розділ 4.7 специфікації XML
1.0](http://www.w3.org/TR/1998/REC-xml-19980210#Notations) для більш
повного опису позначень (нотацій).

### Список параметрів

`parser`
Посилання на аналізатор XML.

`handler`
`handler` - рядок, що містить ім'я функції, яка повинна бути
визначено на момент виклику функції
[xml_parse()](function.xml-parse.md) з аналізатора `parser`.

Функція з ім'ям handler повинна приймати п'ять аргументів:

handler(
[XMLParser](class.xmlparser.md) `$parser`,
string `$notation_name`,
string `$base`,
string `$system_id`,
string `$public_id`
)

`parser`
Перший аргумент parser є посиланням на XML-аналізатор, що викликає
обробник.

`notation_name`
Ім'я позначення `name` у тому вигляді, як описано вище.

`base`
Це основа для дозволу системного ідентифікатора (system_id)
зовнішньої сутності. На даний момент як цей аргумент завжди
передається порожній рядок.

`system_id`
Системний ідентифікатор оголошення зовнішнього позначення.

`public_id`
Загальнодоступний ідентифікатор об'яви зовнішнього позначення.

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
