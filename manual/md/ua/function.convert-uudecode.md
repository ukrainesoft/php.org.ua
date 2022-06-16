- [«convert_cyr_string](function.convert-cyr-string.md)
- [convert_uuencode »](function.convert-uuencode.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Декодує рядок з формату uuencode у звичайний вигляд

#convert_uudecode

(PHP 5, PHP 7, PHP 8)

convert_uudecode — Декодує рядок із формату uuencode у звичайний вигляд

### Опис

**convert_uudecode**(string `$string`): string\|false

**convert_uudecode()** декодує рядок з формату uuencode у звичайний
вигляд.

> **Примітка**: **convert_uudecode()** не приймає жодної початкової
> (`begin`), ні кінцевого (`end`) рядка, який є частиною файлів
> (*files*) uuencoded.

### Список параметрів

`string`
Дані у форматі uuencode.

### Значення, що повертаються

Повертає декодовані дані у вигляді рядка або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **convert_uudecode()****

``<?phpecho convert_uudecode("+22!L;W9E(%!(4\"$`)
``);?> ``

Результат виконання цього прикладу:

I love PHP!

### Дивіться також

- [convert_uuencode()](function.convert-uuencode.md) - Кодує
рядок у формат uuencode
