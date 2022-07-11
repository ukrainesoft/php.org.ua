- [«
MessageFormatter::formatMessage](messageformatter.formatmessage.md)
- [MessageFormatter::getErrorCode
»](messageformatter.geterrorcode.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Форматує повідомлення

# MessageFormatter::format

#msgfmt_format

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::format -- msgfmt_format — Форматує повідомлення

### Опис

Об'єктно-орієнтований стиль

public **MessageFormatter::format**(array `$values`): string\|false

Процедурний стиль

**msgfmt_format**([MessageFormatter](class.messageformatter.md)
`$formatter`, array `$values`): string\|false

Форматує повідомлення, підставляючи дані у рядок формату відповідно
із правилами локалі.

### Список параметрів

`formatter`
Об'єкт [MessageFormatter](class.messageformatter.md)

`values`
Аргументи для вставки у рядок формату

### Значення, що повертаються

Відформатований рядок або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **msgfmt_format()****

` <?php$fmt u003d msgfmt_create("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");echo (4560, 123, 4560/123));$fmtu003du003dmsgfmt_create("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,num echo msgfmt_format($fmt, array(4560, 123, 4560/123));?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new MessageFormatter("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree"t)t; (array(4560, 123, 4560/123));$fmt u003d new MessageFormatter("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen s  ");echo $fmt->format(array(4560, 123, 4560/123));?> `

Результат виконання цього прикладу:

4,560 monkeys on 123 trees make 37.073 monkeys per tree
4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum

### Дивіться також

- [msgfmt_create()](messageformatter.create.md) - Створює засіб
форматування повідомлень
- [msgfmt_parse()](messageformatter.parse.md) - Розбирає рядок
згідно шаблону
- [msgfmt_format_message()](messageformatter.formatmessage.md) -
Швидко форматує повідомлення
- [msgfmt_get_error_code()](messageformatter.geterrorcode.md) -
Повертає код помилки останньої операції
- [msgfmt_get_error_message()](messageformatter.geterrormessage.md) -
Повертає текст помилки останньої операції
