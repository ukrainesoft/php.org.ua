- [«phpdbg_break_function](function.phpdbg-break-function.md)
- [phpdbg_break_next »](function.phpdbg-break-next.md)

- [PHP Manual](index.md)
- [Функції phpdbg](ref.phpdbg.md)
- Додати точку переривання на виклик методу класу

# phpdbg_break_method

(PHP 5 \>u003d 5.6.3, PHP 7, PHP 8)

phpdbg_break_method — Додати точку переривання на виклик методу класу

### Опис

**phpdbg_break_method**(string `$class`, string `$method`): void

Додає точку переривання на виклик методу `method` класу `class`.

### Список параметрів

`class`
Назва класу.

`method`
Назва методу.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [phpdbg_break_file()](function.phpdbg-break-file.md) - Додати
точку переривання на конкретний рядок файлу
- [phpdbg_break_function()](function.phpdbg-break-function.md) -
Додати точку переривання на виклик функції
- [phpdbg_break_next()](function.phpdbg-break-next.md) - Додати
точку переривання на наступний опкод
- [phpdbg_clear()](function.phpdbg-clear.md) - Забрати всі точки
переривання
