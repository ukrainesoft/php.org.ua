- [«error_clear_last](function.error-clear-last.md)
- [error_log »](function.error-log.md)

- [PHP Manual](index.md)
- [Функції обробки помилок](ref.errorfunc.md)
- Отримання інформації про останню помилку

#error_get_last

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

error_get_last — Отримання інформації про останню помилку

### Опис

**error_get_last**(): ?array

Отримує інформацію про останню помилку, що відбулася.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив з описом останньої події
помилки. Ключі масиву: "type", "message", "file" та "line". Якщо помилка
відбулася у внутрішній функції PHP, елемент з ключем "message" буде
починатися з імені цієї функції. Повертає **`null`**, якщо помилок ще
не відбулося.

### Приклади

**Приклад #1 Приклад використання **error_get_last()****

` <?phpecho $a;print_r(error_get_last());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[type] u003d> 8
[message] u003d> Undefined variable: a
[file] u003d> C:WWW\index.php
[line] u003d> 2
)

### Дивіться також

- [Константи помилок](errorfunc.constants.md)
- Змінна `$php_errormsg`
- [error_clear_last()](function.error-clear-last.md) - Очистити
останню помилку
- [Директива
`display_errors`](errorfunc.configuration.md#ini.display-errors)
- [Директива
`html_errors`](errorfunc.configuration.md#ini.md-errors)
- [Директива
`xmlrpc_errors`](errorfunc.configuration.md#ini.xmlrpc-errors)
