- [«
xml_set_character_data_handler](function.xml-set-character-data-handler.md)
- [xml_set_element_handler »](function.xml-set-element-handler.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Установка за замовчуванням обробника

#xml_set_default_handler

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_default_handler — Установка стандартного обробника

### Опис

**xml_set_default_handler**([XMLParser](class.xmlparser.md) `$parser`,
[callable](language.types.callable.md) `$handler`): bool

Задає стандартний обробник для XML-аналізатора `parser`.

### Список параметрів

`parser`
Посилання на аналізатор XML.

`handler`
`handler` - рядок, що містить ім'я функції, яка повинна бути
визначено на момент виклику функції
[xml_parse()](function.xml-parse.md) з аналізатора `parser`.

Функція з ім'ям handler повинна приймати два аргументи:

handler([XmlParser](class.xmlparser.md) `$parser`, string `$data`)

`parser`
Перший аргумент parser є посиланням на XML-аналізатор, що викликає
обробник.

`data`
Другий аргумент `data` має містити символьні дані. Це може бути
XML-оголошення, оголошення типу документа, сутності або інші дані,
для яких ще немає оброблювача.

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
