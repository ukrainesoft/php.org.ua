- [«
AppendIterator::getArrayIterator](appenditerator.getarrayiterator.md)
- [AppendIterator::getIteratorIndex
»](appenditerator.getiteratorindex.md)

- [PHP Manual](index.md)
- [AppendIterator](class.appenditerator.md)
- Повертає внутрішній ітератор

# AppendIterator::getInnerIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

AppendIterator::getInnerIterator — Повертає внутрішній ітератор

### Опис

public **AppendIterator::getInnerIterator**():
[Iterator](class.iterator.md)

Цей спосіб повертає поточний внутрішній ітератор.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточний внутрішній ітератор або **`null`**, якщо такий відсутній.

### Приклади

**Приклад #1 Приклад використання
**AppendIterator::getInnerIterator()****

` <?php$array_a u003d new ArrayIterator(array('a' u003d> 'aardwolf', 'b' u003d> 'bear', 'c' u003d> 'capybara'));$array_b u003d new Regey '/^[ac]/');$iteratoru003du003dnew AppendIterator;$iterator->append($array_a);$iterator->append($array_b);foreach ($iterator as $current) {    $inner u003d ->getInnerIterator(); if ($inner instanceOf RegexIterator) {       echo 'Відфільтрований: '; } else {        echo 'Оригінальний: '; }   echo $current . PHP_EOL;}?> `

Результат виконання цього прикладу:

Оригінальний: aardwolf
Оригінальний: bear
Оригінальний: capybara
Відфільтрований: aardwolf
Відфільтрований: capybara

### Дивіться також

- [AppendIterator::getIteratorIndex()](appenditerator.getiteratorindex.md) -
Повертає індекс ітератора
