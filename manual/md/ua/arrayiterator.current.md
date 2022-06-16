- [«ArrayIterator::count](arrayiterator.count.md)
- [ArrayIterator::getArrayCopy »](arrayiterator.getarraycopy.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Повертає поточний елемент у масиві

# ArrayIterator::current

(PHP 5, PHP 7, PHP 8)

ArrayIterator::current — Повертає поточний елемент у масиві

### Опис

public **ArrayIterator::current**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає поточний елемент масиву (array).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає поточний елемент масиву (array).

### Приклади

**Приклад #1 Приклад використання **ArrayIterator::current()****

`<?phu003d$array u003d array('1' u003d> 'one',   y| iteratoru003d $arrayobject->getIterator();   $iterator->valid();   $iterator->next()) {    echo $iterator->key() . ' u003d> ' . $iterator->current() . "
";}?> `

Результат виконання цього прикладу:

1 u003d> один
2 u003d> two
3 u003d> three
