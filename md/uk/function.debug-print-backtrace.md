- [«debug_backtrace](function.debug-backtrace.md)
- [error_clear_last »](function.error-clear-last.md)

- [PHP Manual](index.md)
- [Функції обробки помилок](ref.errorfunc.md)
- Виводить стек викликів функцій

#debug_print_backtrace

(PHP 5, PHP 7, PHP 8)

debug_print_backtrace — Виводить стек викликів функцій

### Опис

**debug_print_backtrace**(int `$options` u003d 0, int `$limit` u003d 0): void

**debug_print_backtrace()** виводить стек викликів функцій. Виводить дзвінки
функцій, імена включених/потрібних файлів та іншу інформацію з
функцій ([eval()](function.eval.md)).

### Список параметрів

`options`
Аргумент є бітовою маскою для наступних налаштувань:

| | |
|-----------------------------|------------------- -------------------------------------------------- -------------------------------------------|
| DEBUG_BACKTRACE_IGNORE_ARGS | Чи потрібно виключити ключ "args", тобто списки аргументів всіх функцій/методів, щоб зменшити витрати пам'яті. |

**Опції **debug_print_backtrace()****

`limit`
Аргумент використовується для обмеження кількості функцій викликів,
які будуть виведені. За умовчанням (`limit`u003d`0`) буде виведено весь
стек викликів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **debug_print_backtrace()****

`<?php//файл include.phpfunction a() {    b();}function b() {    c();}function c(){    debug_print_backtrace();}a();

` <?php// файл test.php// цей файл потрібно запуститиinclude 'include.php';?> `

Результатом виконання цього прикладу буде щось подібне:

#0 c() called at [/tmp/include.php:10]
#1 b() called at [/tmp/include.php:6]
#2 a() called at [/tmp/include.php:17]
#3 include(/tmp/include.php) called at [/tmp/test.php:3]

### Дивіться також

- [debug_backtrace()](function.debug-backtrace.md) - Виводить стек
викликів функцій у масив
