- [«preg_grep](function.preg-grep.md)
- [preg_last_error »](function.preg-last-error.md)

- [PHP Manual](index.md)
- [Функції PCRE](ref.pcre.md)
- Повертає повідомлення про помилку останньої запущеної функції PCRE

# preg_last_error_msg

(PHP 8)

preg_last_error_msg — Повертає повідомлення про помилку останньої
запущеної функції PCRE

### Опис

**preg_last_error_msg**(): string

Повертає повідомлення про помилку останньої запущеної функції PCRE.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішного виконання повертає повідомлення про помилку. Якщо
помилки не було, повертає рядок "No error".

### Приклади

**Приклад #1 Приклад використання **preg_last_error_msg()****

` <?phppreg_match('/(?:\D+|<\d+>)*[!?]/', 'foobar foobar foobar');if (preg_last_error() !u003du003d PREG_NO_ERROR) {    echo }; ?> `

Результат виконання цього прикладу:

Backtrack limit exhausted

### Дивіться також

- [preg_last_error()](function.preg-last-error.md) - Повертає код
помилки виконання останнього регулярного вираження PCRE
