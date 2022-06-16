- [« xml_set_element_handler](function.xml-set-element-handler.md)
- [xml_set_external_entity_ref_handler
»](function.xml-set-external-entity-ref-handler.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Установка обробника виходу межі простору імен

#xml_set_end_namespace_decl_handler

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

xml_set_end_namespace_decl_handler — Встановлення обробника виходу за
межі простору імен

### Опис

**xml_set_end_namespace_decl_handler**([XMLParser](class.xmlparser.md)
`$parser`, [callable](language.types.callable.md) `$handler`): bool

Задає обробник, який викликається під час виходу за межі оголошення
простору імен. Цей обробник буде викликатись для кожного
оголошення простору імен після того як відпрацює обробник
закінчення елемента, у якому цей простір імен було оголошено.

**Застереження**

Ця подія не підтримується LibXML, тому зареєстрована
обробник не називатиметься.

### Список параметрів

`parser`
Посилання на аналізатор XML.

`handler`
`handler` - рядок, що містить ім'я функції, яка повинна бути
визначено на момент виклику функції
[xml_parse()](function.xml-parse.md) з аналізатора `parser`.

Функція з ім'ям `handler` повинна приймати два аргументи та повертати
цілий результат. Якщо обробник поверне **`false`** (як і
нічого не поверне), XML аналізатор припинить роботу, а функція
[xml_get_error_code()](function.xml-get-error-code.md) буде
повертати константу **`XML_ERROR_EXTERNAL_ENTITY_HANDLING`**.

handler([XMLParser](class.xmlparser.md) `$parser`, string `$prefix`)

`parser`
Перший аргумент parser є посиланням на XML-аналізатор, що викликає
обробник.

`prefix`
Префікс - рядок, що використовується як посилання на простір імен
межах XML об'єкта.

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

### Дивіться також

- [xml_set_start_namespace_decl_handler()](function.xml-set-start-namespace-decl-handler.md) -
Установка обробника входу в межі простору імен
