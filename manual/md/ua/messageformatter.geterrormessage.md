- [«
MessageFormatter::getErrorCode](messageformatter.geterrorcode.md)
- [MessageFormatter::getLocale »](messageformatter.getlocale.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Повертає текст помилки останньої операції

# MessageFormatter::getErrorMessage

#msgfmt_get_error_message

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::getErrorMessage -- msgfmt_get_error_message --
Повертає текст помилки останньої операції

### Опис

Об'єктно-орієнтований стиль

public **MessageFormatter::getErrorMessage**(): string

Процедурний стиль

**msgfmt_get_error_message**([MessageFormatter](class.messageformatter.md)
`$formatter`): string

Повертає текст помилки останньої операції.

### Список параметрів

`formatter`
Об'єкт [MessageFormatter](class.messageformatter.md)

### Значення, що повертаються

Опис останньої помилки.

### Приклади

**Приклад #1 Приклад використання **msgfmt_get_error_message()****

` <?php$fmt u003d msgfmt_create("en_US", "{0, number} monkeys on {1, number} trees");$str u003d msgfmt_format($fmt, array())| echo "ERROR: ".msgfmt_get_error_message($fmt) . " (" . msgfmt_get_error_code($fmt) . ")
";}?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new MessageFormatter("en_US", "{0, number} monkeys on {1, number} trees");$str u003d $fmt->format(array());if(!$str ) {    echo "ERROR: ".$fmt->getErrorMessage() . " (" . $fmt->getErrorCode() . ")
";}?> `

Результат виконання цього прикладу:

ERROR: msgfmt_format: non enough parameters: U_ILLEGAL_ARGUMENT_ERROR (1)

### Дивіться також

- [msgfmt_get_error_code()](messageformatter.geterrorcode.md) -
Повертає код помилки останньої операції
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
