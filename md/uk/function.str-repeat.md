- [«str_pad](function.str-pad.md)
- [str_replace »](function.str-replace.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає рядок, що повторюється.

#str_repeat

(PHP 4, PHP 5, PHP 7, PHP 8)

str_repeat — Повертає рядок, що повторюється.

### Опис

**str_repeat**(string `$string`, int `$times`): string

Повертає рядок `string`, повторений `times` раз.

### Список параметрів

`string`
Повторюваний рядок.

`times`
Кількість разів, які потрібно повторити рядок `string`.

`times` повинен бути більшим або дорівнює нулю. Якщо `times` дорівнює нулю,
повертається порожній рядок.

### Значення, що повертаються

Повертає рядок, що повторюється.

### Приклади

**Приклад #1 Приклад використання **str_repeat()****

`<?phpecho str_repeat("-u003d", 10);?> `

Результат виконання цього прикладу:

-u003d-u003d-u003d-u003d-u003d-u003d-u003d-u003d-u003d-u003d

### Дивіться також

- [for](control-structures.for.md)
- [str_pad()](function.str-pad.md) - Доповнює рядок іншим рядком
до заданої довжини
- [substr_count()](function.substr-count.md) - Повертає число
входжень підрядки
