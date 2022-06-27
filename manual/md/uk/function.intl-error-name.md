- [« Функції intl](ref.intl.md)
- [intl_get_error_code »](function.intl-get-error-code.md)

- [PHP Manual](index.md)
- [Функції intl](ref.intl.md)
- Отримати ім'я помилки за її кодом

# intl_error_name

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

intl_error_name — Отримати ім'я помилки за її кодом

### Опис

**intl_error_name**(int `$errorCode`): string

Повертає ім'я помилки ICU.

### Список параметрів

`errorCode`
Код помилки ICU.

### Значення, що повертаються

Повертається рядок матиме ім'я аналогічне відповідному
константі.

### Приклади

**Приклад #1 Приклад використання **intl_error_name()****

` <?php$coll     u003d collator_create( 'en_RU' );$err_code u003d collator_get_error_code( $coll );printf( "Символічне ім'я для %d - %s
.", $err_code, intl_error_name( $err_code ) );?> `

Результатом виконання цього прикладу буде щось подібне:

Ім'я для -128 - U_USING_FALLBACK_WARNING.

### Дивіться також

- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_get_error_message()](function.intl-get-error-message.md) -
Отримати опис помилки
