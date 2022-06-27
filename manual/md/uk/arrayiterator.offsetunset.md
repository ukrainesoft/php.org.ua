- [« ArrayIterator::offsetSet](arrayiterator.offsetset.md)
- [ArrayIterator::rewind »](arrayiterator.rewind.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- скидає значення зі зміщення

# ArrayIterator::offsetUnset

(PHP 5, PHP 7, PHP 8)

ArrayIterator::offsetUnset — Скидає значення усунення

### Опис

public
**ArrayIterator::offsetUnset**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): void

Скидає значення зі зміщення.

Якщо ітерація виконується і **ArrayIterator::offsetUnset()**
використовується для скидання поточного індексу ітерації, позиція ітерації
буде зміщено до наступного індексу. Оскільки позиція ітерації також
зміщується в кінці [foreach](control-structures.foreach.md) у тілі
циклу, використання **ArrayIterator::offsetUnset()** всередині циклу
[`foreach`](control-structures.foreach.md) може призвести до пропуску
індексів

### Список параметрів

`key`
Зміщення для скидання.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [ArrayIterator::offsetGet()](arrayiterator.offsetget.md) -
Отримує значення для зміщення
- [ArrayIterator::offsetSet()](arrayiterator.offsetset.md) -
Встановлює значення для зміщення
