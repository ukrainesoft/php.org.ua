- [«array_key_exists](function.array-key-exists.md)
- [array_key_last »](function.array-key-last.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Отримує перший ключ масиву

#array_key_first

(PHP 7 \>u003d 7.3.0, PHP 8)

array_key_first — Отримує перший ключ масиву

### Опис

**array_key_first**(array `$array`): int\|string\|null

Отримати перший ключ заданого масиву `array`, не торкаючись внутрішнього
вказівник масиву.

### Список параметрів

`array`
Масив.

### Значення, що повертаються

Повертає перший ключ масиву `array`, якщо він не порожній; **`null`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **array_key_first()****

` <?php$array u003d ['a' u003d> 1, 'b' u003d> 2, 'c' u003d> 3];$firstKey u003d array_key_first($array);var_dump($firstKey);?> `

Результат виконання цього прикладу:

string(1) "a"

### Примітки

**Підказка**

Є кілька способів надати функціональність для версій до PHP
7.3.0. Можна використовувати [array_keys()](function.array-keys.md), але
це може бути досить неефективним. Також можна використовувати
[reset()](function.reset.md) та [key()](function.key.md), але це
може змінити внутрішній покажчик масиву. Ефективне рішення,
яке не змінює внутрішній покажчик масиву, записаний, як
поліфіл:

`<?phpif (!function_exists('array_key_first')) {                                                                              | }     return NULL; }}?> `

### Дивіться також

- [array_key_last()](function.array-key-last.md) - Отримує
останній ключ масиву
- [reset()](function.reset.md) - Встановлює внутрішній покажчик
масиву на його перший елемент
