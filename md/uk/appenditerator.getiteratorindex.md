- [«
AppendIterator::getInnerIterator](appenditerator.getinneriterator.md)
- [AppendIterator::key »](appenditerator.key.md)

- [PHP Manual](index.md)
- [AppendIterator](class.appenditerator.md)
- Повертає індекс ітератора

# AppendIterator::getIteratorIndex

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

AppendIterator::getIteratorIndex — Повертає індекс ітератора

### Опис

public **AppendIterator::getIteratorIndex**(): ?int

Повертає індекс поточного внутрішнього ітератора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає цілий індекс, що починається з нуля поточного
внутрішнього ітератора, якщо він існує, або **`null`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **AppendIterator.getIteratorIndex()****

` <?php$array_a u003d new ArrayIterator(array('a' u003d> 'aardwolf', 'b' u003d> 'bear', 'c' u003d> 'capybara'));$array_b u003d new Array' apple', 'orange', 'lemon'));$iterator u003d new AppendIterator;$iterator->append($array_a);$iterator->append($array_b);foreach ($iterator as $key u003d>  current ) {    echo $iterator->getIteratorIndex() . '  ' . $key . ' ' . $ current . PHP_EOL;}?> `

Результат виконання цього прикладу:

0 a aardwolf
0 b bear
0 c capybara
1 0 apple
1 1 orange
1 2 lemon

### Дивіться також

- [AppendIterator::getInnerIterator()](appenditerator.getinneriterator.md) -
Повертає внутрішній ітератор
- [AppendIterator::getArrayIterator()](appenditerator.getarrayiterator.md) -
Повертає клас ітератора масиву ArrayIterator
