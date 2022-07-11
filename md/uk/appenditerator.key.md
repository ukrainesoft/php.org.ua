- [«
AppendIterator::getIteratorIndex](appenditerator.getiteratorindex.md)
- [AppendIterator::next »](appenditerator.next.md)

- [PHP Manual](index.md)
- [AppendIterator](class.appenditerator.md)
- Повертає поточний ключ

# AppendIterator::key

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

AppendIterator::key — Повертає поточний ключ

### Опис

public **AppendIterator::key**(): scalar

Повертає ключ.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточний ключ, якщо він є дійсним, або **`null`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **AppendIterator::key()****

` <?php$array_a u003d new ArrayIterator(array('a' u003d> 'aardwolf', 'b' u003d> 'bear', 'c' u003d> 'capybara'));$array_b u003d new Array' apple', 'orange', 'lemon'));$iteratoru003du003dnew AppendIterator;$iterator->append($array_a);$iterator->append($array_b);// Ручна ітерація$iterator->rewind() ;while($iterator->valid()) {    echo $iterator->key() . ' ' . $iterator->current() . PHP_EOL; $iterator->next();}echo PHP_EOL;// З конструкцією foreachforeach ($iterator as $key u003d> $current) {   echo $key . ' ' . $ current . PHP_EOL;}?> `

Результат виконання цього прикладу:

a aardwolf
b bear
з capybara
0 apple
1 orange
2 lemon

a aardwolf
b bear
з capybara
0 apple
1 orange
2 lemon

### Дивіться також

- [Iterator::key()](iterator.key.md) - Повертає ключ поточного
елемента
- [AppendIterator::current()](appenditerator.current.md) -
Повертає поточне значення
- [AppendIterator::valid()](appenditerator.valid.md) - Перевіряє
термін дії поточного елемента
- [AppendIterator::next()](appenditerator.next.md) - Переходить до
наступному елементу
- [AppendIterator::rewind()](appenditerator.rewind.md) -
Перемотує ітератор
