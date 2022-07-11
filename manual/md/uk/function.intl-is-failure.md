- [« intl_get_error_message](function.intl-get-error-message.md)
- [Багатобайтові рядки»] (book.mbstring.md)

- [PHP Manual](index.md)
- [Функції intl](ref.intl.md)
- Перевірити, чи є код помилки ознакою збою

# intl_is_failure

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

intl_is_failure — Перевірити, чи є код помилки ознакою збою

### Опис

**intl_is_failure**(int `$errorCode`): bool

### Список параметрів

`errorCode`
Значення, повернене функціями:
[intl_get_error_code()](function.intl-get-error-code.md),
[collator_get_error_code()](collator.geterrorcode.md) .

### Значення, що повертаються

**`true`**, якщо стався збій, і **`false`**, якщо все успішно, або
просто попередження.

### Приклади

**Приклад #1 Приклад використання **intl_is_failure()****

`<?phpfunction check( $err_code ){    var_export( intl_is_failure( $err_code ) )); echo "
";}check( U_ZERO_ERROR );check( U_USING_FALLBACK_WARNING );check( U_ILLEGAL_ARGUMENT_ERROR );?> `

Результатом виконання цього прикладу буде щось подібне:

false
false
true

### Дивіться також

- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [collator_get_error_code()](collator.geterrorcode.md) - Отримує
останній код помилки Collator
- [Collator-getErrorCode()](collator.geterrorcode.md) - Отримує
останній код помилки Collator
