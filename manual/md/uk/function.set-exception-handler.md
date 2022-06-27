- [«set_error_handler](function.set-error-handler.md)
- [trigger_error »](function.trigger-error.md)

- [PHP Manual](index.md)
- [Функції обробки помилок](ref.errorfunc.md)
- Задає користувальницький обробник винятків

# set_exception_handler

(PHP 5, PHP 7, PHP 8)

set_exception_handler — Задає користувальницький обробник винятків

### Опис

**set_exception_handler**(?[callable](language.types.callable.md)
`$callback`): ?[callable](language.types.callable.md)

Задає стандартний обробник для випадків, коли виняток викинуто
поза блоком try/catch. Після виклику callback виконання буде
зупинено.

### Список параметрів

`callback`
Функція, що викликається у разі неперехопленого виключення. Ця
функція-обробник повинна приймати один параметр, яким буде об'єкт
викинутого виключення [Throwable](class.throwable.md). І
[Error](class.error.md) та [Exception](class.exception.md) реалізують
інтерфейс [Throwable](class.throwable.md). Сигнатура обробника:

handler([Throwable](class.throwable.md) `$ex`): void

Як цей аргумент можна передати **`null`**. В цьому випадку
обробник повернеться до свого первісного стану.

### Значення, що повертаються

Повертає раніше визначений обробник винятків або **`null`**
у разі помилки. Якщо попередніх обробників визначено не було, то також
повертається **`null`**.

### Приклади

**Приклад #1 Приклад використання **set_exception_handler()****

` <?phpfunction exception_handler(Throwable $exception) { echo "Неперехоплене виняток: " , $exception->getMessage(), "
";}set_exception_handler('exception_handler');throw new Exception('Неперехоплене виняток');echo "Не виконано
";?> `

### Дивіться також

- [restore_exception_handler()](function.restore-exception-handler.md) -
Відновлює попередній обробник винятків
- [restore_error_handler()](function.restore-error-handler.md) -
Відновлює попередній обробник помилок
- [error_reporting()](function.error-reporting.md) - Задає, які
помилки PHP потраплять у звіт
- [Виключення PHP 5](language.exceptions.md)
