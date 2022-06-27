- [«error_reporting](function.error-reporting.md)
- [restore_exception_handler
»](function.restore-exception-handler.md)

- [PHP Manual](index.md)
- [Функції обробки помилок](ref.errorfunc.md)
- Відновлює попередній обробник помилок

# restore_error_handler

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

restore_error_handler — Відновлює попередній обробник помилок

### Опис

**restore_error_handler**(): bool

Використовується після зміни обробника помилок функцією
[set_error_handler()](function.set-error-handler.md), щоб повернути
попередній обробник (який може бути як вбудованою функцією, так і
визначеною користувачем).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ця функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **restore_error_handler()****

Визначення, чи сталася помилка у функції
[unserialize()](function.unserialize.md), а потім відновлення
вихідного обробника помилок.

`<?phpfunction unserialize_handler($errno, $errstr){    echo "Серіалізується значення неприпустимо.
";}$serialized u003d 'foo';set_error_handler('unserialize_handler');$original u003d unserialize($serialized);restore_error_handler();?> `

Результат виконання цього прикладу:

Серіалізується значення неприпустимо.

### Дивіться також

- [error_reporting()](function.error-reporting.md) - Задає, які
помилки PHP потраплять у звіт
- [set_error_handler()](function.set-error-handler.md) - Задає
користувальницький обробник помилок
- [restore_exception_handler()](function.restore-exception-handler.md) -
Відновлює попередній обробник винятків
- [trigger_error()](function.trigger-error.md) - Викликає
помилку користувача/попередження/повідомлення
