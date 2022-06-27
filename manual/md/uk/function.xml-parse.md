- [« xml_parse_into_struct](function.xml-parse-into-struct.md)
- [xml_parser_create_ns »](function.xml-parser-create-ns.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Запускає аналіз XML-документа

#xml_parse

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parse — Запускає аналіз XML-документа

### Опис

**xml_parse**([XMLParser](class.xmlparser.md) `$parser`, string
`$data`, bool `$is_final` u003d **`false`**): int

**xml_parse()** розбирає XML-документ. Обробники запрограмовані
подій викликаються стільки разів, скільки необхідно.

### Список параметрів

`parser`
Посилання на використовуваний XML-аналізатор.

`data`
Частина даних для аналізу. Документ можна розбирати частинами, викликаючи
функцію **xml_parse()** кілька разів з новими даними, поки аргумент
`is_final` не буде встановлено в **`true`**, це повідомить аналізатору,
що розуміється остання частина документа.

`is_final`
Якщо заданий та встановлений в **`true`**, `data` вважається останньою частиною
у цьому розборі.

### Значення, що повертаються

Повертає 1 при успішному завершенні, 0 інакше.

У разі невдалого розбору інформацію про помилки можна отримати з
допомогою функцій
[xml_get_error_code()](function.xml-get-error-code.md),
[xml_error_string()](function.xml-error-string.md),
[xml_get_current_line_number()](function.xml-get-current-line-number.md),
[xml_get_current_column_number()](function.xml-get-current-column-number.md)
і
[xml_get_current_byte_index()](function.xml-get-current-byte-index.md).

> **Примітка**:
>
> Деякі помилки (такі як помилки при розборі сутностей) видаються в
> кінці розбору та отримати їх можна тільки коли `is_final` встановлений у
> **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Розбір частин великих XML-документів**

Цей приклад показує, як великі XML-документи можуть бути прочитані та
розібрані частинами, тому немає необхідності тримати весь документ у
пам'яті. Обробка помилок опущена для стислості.

` <?php$stream u003d fopen('large.xml', 'r');$parser u003d xml_parser_create();// встановити обробникиwhile (($data u003dfread($stream, 16384))    , $data); // розібрати поточну часть}xml_parse($parser, '', true); // завершити розбірxml_parser_free($parser);fclose($stream); `
