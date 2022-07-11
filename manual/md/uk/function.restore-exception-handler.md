- [«restore_error_handler](function.restore-error-handler.md)
- [set_error_handler »](function.set-error-handler.md)

- [PHP Manual](index.md)
- [Функції обробки помилок](ref.errorfunc.md)
- Відновлює попередній обробник винятків

# restore_exception_handler

(PHP 5, PHP 7, PHP 8)

restore_exception_handler — Відновлює попередній обробник
винятків

### Опис

**restore_exception_handler**(): bool

Використовується після зміни обробника виключень функцією
[set_exception_handler()](function.set-exception-handler.md), щоб
повернути попередній обробник (який може бути як вбудований
функцією, і визначеною користувачем).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ця функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **restore_exception_handler()****

` <?php    function exception_handler_1(Exception $e)    {       echo '[' . __FUNCTION__ . '] ' . $e->getMessage(); }   function exception_handler_2(Exception $e)    {       echo '[' . __FUNCTION__ . '] ' . $e->getMessage(); }   set_exception_handler('exception_handler_1'); set_exception_handler('exception_handler_2'); restore_exception_handler(); throw new Exception('Викликаний перший обробник виключень...');?> `

Результат виконання цього прикладу:

[exception_handler_1] Викликаний перший обробник винятків...

### Дивіться також

- [set_exception_handler()](function.set-exception-handler.md) -
Задає користувальницький обробник винятків
- [set_error_handler()](function.set-error-handler.md) - Задає
користувальницький обробник помилок
- [restore_error_handler()](function.restore-error-handler.md) -
Відновлює попередній обробник помилок
- [error_reporting()](function.error-reporting.md) - Задає, які
помилки PHP потраплять у звіт
