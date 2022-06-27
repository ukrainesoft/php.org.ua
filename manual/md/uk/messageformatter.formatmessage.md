- [«MessageFormatter::create](messageformatter.create.md)
- [MessageFormatter::format »](messageformatter.format.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Швидко форматує повідомлення

# MessageFormatter::formatMessage

#msgfmt_format_message

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::formatMessage -- msgfmt_format_message -- Швидко
форматує повідомлення

### Опис

Об'єктно-орієнтований стиль

public static **MessageFormatter::formatMessage**(string `$locale`,
string `$pattern`, array `$values`): string\|false

Процедурний стиль

**msgfmt_format_message**(string `$locale`, string `$pattern`, array
`$values`): string\|false

Функція швидкого форматування, яка форматує рядок без
необхідності явно створювати об'єкт форматування. Використовуйте цю
функцію, коли операція форматування виконується лише один раз і не
вимагає збереження параметрів чи стану.

### Список параметрів

`locale`
Локаль, що використовується для форматування елементів, що залежать від локалі

`pattern`
Рядок (string) шаблон для вставлення аргументів. У шаблоні використовується
"дружній до апострофів" синтаксис; перед інтерпретацією він проходить
через
[»umsg_autoQuoteApostrophe](http://www.icu-project.org/apiref/icu4c/umsg_8h.md#9da796210146ff51d395affe4928f0b7).

`values`
Масив значень (array) для вставлення у рядок формату (string).

### Значення, що повертаються

Рядок відформатованого шаблону або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **msgfmt_format_message()****

` <?phpecho msgfmt_format_message("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree
", array(4560, 123, 4560/123));echo msgfmt_format_message("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind  
", array(4560, 123, 4560/123));?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?phpecho MessageFormatter::formatMessage("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree
", array(4560, 123, 4560/123));echo MessageFormatter::formatMessage("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen Baum
", array(4560, 123, 4560/123));?> `

Результат виконання цього прикладу:

4,560 monkeys on 123 trees make 37.073 monkeys per tree
4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum

### Дивіться також

- [msgfmt_create()](messageformatter.create.md) - Створює засіб
форматування повідомлень
- [msgfmt_parse()](messageformatter.parse.md) - Розбирає рядок
згідно шаблону
- [msgfmt_get_error_code()](messageformatter.geterrorcode.md) -
Повертає код помилки останньої операції
- [msgfmt_get_error_message()](messageformatter.geterrormessage.md) -
Повертає текст помилки останньої операції
