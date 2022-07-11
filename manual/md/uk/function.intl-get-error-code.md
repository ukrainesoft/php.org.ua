- [« intl_error_name](function.intl-error-name.md)
- [intl_get_error_message »](function.intl-get-error-message.md)

- [PHP Manual](index.md)
- [Функції intl](ref.intl.md)
- Отримати код останньої помилки

# intl_get_error_code

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

intl_get_error_code — Отримати код останньої помилки

### Опис

**intl_get_error_code**(): int

Корисно для обробки помилок статичних методів, коли відсутня
об'єкт для отримання помилки з нього.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Код помилки, повернутий останнім викликом API.

### Приклади

**Приклад #1 Приклад використання **intl_get_error_code()****

` <?php$coll u003d collator_create( '<bad_param>' );if( !$coll ) {   handle_error( intl_get_error_code() );}?> `

### Дивіться також

- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
- [intl_error_name()](function.intl-error-name.md) - Отримати ім'я
помилки за її кодом
- [intl_get_error_message()](function.intl-get-error-message.md) -
Отримати опис помилки
- [collator_get_error_code()](collator.geterrorcode.md) - Отримує
останній код помилки Collator
- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
