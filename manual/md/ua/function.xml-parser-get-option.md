- [« xml_parser_free](function.xml-parser-free.md)
- [xml_parser_set_option »](function.xml-parser-set-option.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Отримання значення налаштування XML-аналізатора

#xml_parser_get_option

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parser_get_option — Отримання значення налаштування XML-аналізатора

### Опис

**xml_parser_get_option**([XMLParser](class.xmlparser.md) `$parser`,
int `$option`): string\|int

Отримує значення налаштування XML-аналізатора.

### Список параметрів

`parser`
Посилання на XML-аналізатор, налаштування якого потрібно отримати.

`option`
Яке налаштування отримати. Доступні такі настройки
**`XML_OPTION_CASE_FOLDING`**, **`XML_OPTION_SKIP_TAGSTART`**,
**`XML_OPTION_SKIP_WHITE`** та **`XML_OPTION_TARGET_ENCODING`**. Їх
опис дивіться у документації до функції
[xml_parser_set_option()](function.xml-parser-set-option.md).

### Значення, що повертаються

Ця функція повертає **`false`**, якщо `parser` посилається на
неприпустимий аналізатор або якщо `option` має неприпустиме значення (у
цьому випадку викидається попередження **`E_WARNING`**). В інших
випадках повертається значення налаштування.

### Список змін

| Версія | Опис |
|-----------------------|------------------------- -------------------------------------------------- -------------------------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |
| 7.1.24, 7.2.12, 7.3.0 | Тепер параметр `options` підтримує **`XML_OPTION_SKIP_TAGSTART`** та **`XML_OPTION_SKIP_WHITE`**. |
