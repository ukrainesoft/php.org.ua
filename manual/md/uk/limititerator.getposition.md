- [«
LimitIterator::getInnerIterator](limititerator.getinneriterator.md)
- [LimitIterator::key »](limititerator.key.md)

- [PHP Manual](index.md)
- [LimitIterator](class.limititerator.md)
- Повертає поточну позицію

# LimitIterator::getPosition

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

LimitIterator::getPosition — Повертає поточну позицію

### Опис

public **LimitIterator::getPosition**(): int

Повертає поточну позицію (починаючи з 0) внутрішнього об'єкта-ітератора
[Iterator](class.iterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточна позиція.

### Приклади

**Приклад #1 Приклад використання **LimitIterator::getPosition()****

` <?php$fruits u003d array(    'a' u003d> 'apple',   'b' u003d> 'banana',    'c' u003d> 'cherry' ' ' ' '       'elderberry');$array_it u003d new ArrayIterator($fruits);$limit_it u003d new LimitIterator($array_it, 2, 3);foreach ($limit_it as $item) {  | ' ' . $item . "
";}?> `

Результат виконання цього прикладу:

2 cherry
3 damson
4 elderberry

### Дивіться також

- [FilterIterator::key()](filteriterator.key.md) - Отримує поточний
ключ
