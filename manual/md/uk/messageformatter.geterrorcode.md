- [« MessageFormatter::format](messageformatter.format.md)
- [MessageFormatter::getErrorMessage
»](messageformatter.geterrormessage.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Повертає код помилки останньої операції

# MessageFormatter::getErrorCode

# msgfmt_get_error_code

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::getErrorCode -- msgfmt_get_error_code — Повертає код
помилки останньої операції

### Опис

Об'єктно-орієнтований стиль

public **MessageFormatter::getErrorCode**(): int

Процедурний стиль

**msgfmt_get_error_code**([MessageFormatter](class.messageformatter.md)
`$formatter`): int

Повертає код помилки останньої операції.

### Список параметрів

`formatter`
Об'єкт [MessageFormatter](class.messageformatter.md)

### Значення, що повертаються

Код помилки є одним із значень UErrorCode. Початкове значення -
U_ZERO_ERROR.

### Дивіться також

- [msgfmt_get_error_message()](messageformatter.geterrormessage.md) -
Повертає текст помилки останньої операції
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
