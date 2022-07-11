- [« InfiniteIterator](class.infiniteiterator.md)
- [InfiniteIterator::next »](infiniteiterator.next.md)

- [PHP Manual](index.md)
- [InfiniteIterator](class.infiniteiterator.md)
- Конструктор класу InfiniteIterator

# InfiniteIterator::\_\_construct

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

InfiniteIterator::\_\_construct - Конструктор класу InfiniteIterator

### Опис

public
**InfiniteIterator::\_\_construct**([Iterator](class.iterator.md)
`$iterator`)

Створює новий об'єкт класу
[InfiniteIterator](class.infiniteiterator.md) на основі
об'єкта-ітератора [Iterator](class.iterator.md).

### Список параметрів

`iterator`
Нескінченний ітератор.

### Приклади

**Приклад #1 Приклад використання **InfiniteIterator::\_\_construct()****

` <?php$arrayit  u003d new ArrayIterator(array('cat','dog'));$infinite u003d new InfiniteIterator($arrayit);$limit    u003d new LimitIterator($infinite,$0; as $value){    echo "$value
";}?> `

Результат виконання цього прикладу:

cat
dog
cat
dog
cat
dog
cat

### Дивіться також

- [InfiniteIterator::next()](infiniteiterator.next.md) - Переміщує
ітератор однією позицію вперед чи початок
