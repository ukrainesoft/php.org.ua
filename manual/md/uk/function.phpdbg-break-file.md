- [« Функції phpdbg](ref.phpdbg.md)
- [phpdbg_break_function »](function.phpdbg-break-function.md)

- [PHP Manual](index.md)
- [Функції phpdbg](ref.phpdbg.md)
- Додати точку переривання на конкретний рядок файлу

# phpdbg_break_file

(PHP 5 \>u003d 5.6.3, PHP 7, PHP 8)

phpdbg_break_file — Додати точку переривання на конкретний рядок файлу

### Опис

**phpdbg_break_file**(string `$file`, int `$line`): void

Додає точку переривання на рядок `line` файлу `file`.

### Список параметрів

`file`
Ім'я файлу.

`line`
Номер рядка.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [phpdbg_break_function()](function.phpdbg-break-function.md) -
Додати точку переривання на виклик функції
- [phpdbg_break_method()](function.phpdbg-break-method.md) -
Додати точку переривання на виклик методу класу
- [phpdbg_break_next()](function.phpdbg-break-next.md) - Додати
точку переривання на наступний опкод
- [phpdbg_clear()](function.phpdbg-clear.md) - Забрати всі точки
переривання
