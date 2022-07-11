- [« intl_get_error_code](function.intl-get-error-code.md)
- [intl_is_failure »](function.intl-is-failure.md)

- [PHP Manual](index.md)
- [Функції intl](ref.intl.md)
- Отримати опис помилки

# intl_get_error_message

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

intl_get_error_message — Отримати опис помилки

### Опис

**intl_get_error_message**(): string

Отримати опис останньої помилки у функціях ICU.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Опис останньої помилки у функціях ICU.

### Приклади

**Приклад #1 Приклад використання **intl_get_error_message()****

` <?phpif( Collator::getAvailableLocales() u003du003du003du003dfalse ) {    show_error( intl_get_error_message() );}?> `

### Дивіться також

- [intl_error_name()](function.intl-error-name.md) - Отримати ім'я
помилки за її кодом
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
- [collator_get_error_message()](collator.geterrormessage.md) -
Отримує текст для останньої помилки Collator
- [numfmt_get_error_message()](numberformatter.geterrormessage.md) -
Отримує останнє повідомлення про помилку засобу форматування
