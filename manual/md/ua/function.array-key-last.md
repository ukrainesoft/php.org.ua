- [«array_key_first](function.array-key-first.md)
- [array_keys »](function.array-keys.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Отримує останній ключ масиву

#array_key_last

(PHP 7 \>u003d 7.3.0, PHP 8)

array_key_last — Отримує останній ключ масиву

### Опис

**array_key_last**(array `$array`): int\|string\|null

Отримати останній ключ заданого масиву `array`, не торкаючись
внутрішній покажчик масиву.

### Список параметрів

`array`
Масив.

### Значення, що повертаються

Повертає останній ключ масиву `array`, якщо він не порожній; **`null`**
в іншому випадку.

### Дивіться також

- [array_key_first()](function.array-key-first.md) - Отримує перший
ключ масиву
- [end()](function.end.md) - Встановлює внутрішній покажчик
масиву на його останній елемент
