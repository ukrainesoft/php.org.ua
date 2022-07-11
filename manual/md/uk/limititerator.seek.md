- [« LimitIterator::rewind](limititerator.rewind.md)
- [LimitIterator::valid »](limititerator.valid.md)

- [PHP Manual](index.md)
- [LimitIterator](class.limititerator.md)
- Переміщує ітератор на задану позицію

# LimitIterator::seek

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

LimitIterator::seek - Переміщує ітератор на задану позицію

### Опис

public **LimitIterator::seek**(int `$offset`): int

Переміщує покажчик на задану позицію `offset`.

### Список параметрів

`offset`
Позиція, яку потрібно перемістити покажчик.

### Значення, що повертаються

Повертає усунення від початкової позиції після переміщення.

### Помилки

Викидає виняток
[OutOfBoundsException](class.outofboundsexception.md), якщо задана
позиція виходить за межі, передані конструктору
[LimitIterator::\_\_construct()](limititerator.construct.md).

### Дивіться також

- [LimitIterator::current()](limititerator.current.md) - Отримання
поточного елемента
- [LimitIterator::key()](limititerator.key.md) - Отримання поточного
ключа
- [LimitIterator::rewind()](limititerator.rewind.md) - Переміщує
вказівник на початкову позицію
- [LimitIterator::next()](limititerator.next.md) - Переміщення до
наступної позиції
- [LimitIterator::valid()](limititerator.valid.md) - Перевіряє
валідність поточного елемента
