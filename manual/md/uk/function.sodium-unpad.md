- [« sodium_pad](function.sodium-pad.md)
- [SodiumException »](class.sodiumexception.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Видалення даних відступів

# sodium_unpad

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_unpad — Видалення даних відступів

### Опис

**sodium_unpad**(string `$string`, int `$block_size`): string

Видаляє дані відступів у доповненого рядка. Безпечна за часом.

### Список параметрів

`string`
Доповнений рядок.

`block_size`
Розмір блоку для заповнення.

### Значення, що повертаються

Стоку з віддаленими відступами.
