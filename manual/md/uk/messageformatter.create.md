- [«MessageFormatter](class.messageformatter.md)
- [MessageFormatter::formatMessage
»](messageformatter.formatmessage.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Створює засіб форматування повідомлень

# MessageFormatter::create

# MessageFormatter::\_\_construct

#msgfmt_create

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::create -- MessageFormatter::\_\_construct --
msgfmt_create — Створює засіб форматування повідомлень

### Опис

Об'єктно-орієнтований стиль (метод)

public static **MessageFormatter::create**(string `$locale`, string
`$pattern`): ?[MessageFormatter](class.messageformatter.md)

Об'єктно-орієнтований стиль (конструктор):

public **MessageFormatter::\_\_construct**(string `$locale`, string
`$pattern`)

Процедурний стиль

**msgfmt_create**(string `$locale`, string `$pattern`):
?[MessageFormatter](class.messageformatter.md)

Створює засіб форматування повідомлень.

### Список параметрів

`locale`
Локаль, що використовується при форматуванні аргументів

`pattern`
Рядок (string) шаблон для вставлення аргументів. У шаблоні використовується
"дружній до апострофів" синтаксис; перед інтерпретацією він проходить
через
[»umsg_autoQuoteApostrophe](http://www.icu-project.org/apiref/icu4c/umsg_8h.md#9da796210146ff51d395affe4928f0b7).

### Значення, що повертаються

Об'єкт [MessageFormatter](class.messageformatter.md) або **`null`**
у разі виникнення помилки.

### Помилки

При виклику як конструктор у разі виникнення помилки
викидається виняток [IntlException](class.intlexception.md).

### Приклади

**Приклад #1 Приклад використання **msgfmt_create()****

` <?php$fmt u003d msgfmt_create("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");echo (4560, 123, 4560/123));$fmtu003du003dmsgfmt_create("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,num echo msgfmt_format($fmt, array(4560, 123, 4560/123));?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new MessageFormatter("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree"t)t; (array(4560, 123, 4560/123));$fmt u003d new MessageFormatter("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen s  ");echo $fmt->format(array(4560, 123, 4560/123));?> `

Результат виконання цього прикладу:

4,560 monkeys on 123 trees make 37.073 monkeys per tree
4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum

### Дивіться також

- [msgfmt_format()](messageformatter.format.md) - Форматує
повідомлення
- [msgfmt_parse()](messageformatter.parse.md) - Розбирає рядок
згідно шаблону
- [msgfmt_get_error_code()](messageformatter.geterrorcode.md) -
Повертає код помилки останньої операції
- [msgfmt_get_error_message()](messageformatter.geterrormessage.md) -
Повертає текст помилки останньої операції
