- [« sodium_memzero](function.sodium-memzero.md)
- [sodium_unpad »](function.sodium-unpad.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Доповнює рядок відступами

# sodium_pad

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_pad — Доповнює рядок відступами

### Опис

**sodium_pad**(string `$string`, int `$block_size`): string

Доповнює рядок праворуч до заданої довжини. Безпечна за часом.

### Список параметрів

`string`
Вхідний рядок.

`block_size`
Рядок буде доповнений доти, доки він не стане парною кратною
розмір блоку.

### Значення, що повертаються

Доповнений рядок.
