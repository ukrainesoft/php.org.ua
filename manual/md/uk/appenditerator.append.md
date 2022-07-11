- [«AppendIterator](class.appenditerator.md)
- [AppendIterator::\_\_construct »](appenditerator.construct.md)

- [PHP Manual](index.md)
- [AppendIterator](class.appenditerator.md)
- додає ітератор

# AppendIterator::append

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

AppendIterator::append — Додає ітератор

### Опис

public **AppendIterator::append**([Iterator](class.iterator.md)
`$iterator`): void

Додає ітератора.

### Список параметрів

`iterator`
Ітератор для додавання.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання**AppendIterator::append()****

` <?php$array_a u003d new ArrayIterator(array('a', 'b', 'c'));$array_b u003d new ArrayIterator(array('d', 'e', 'f'));$iterator u003d new AppendIterator;$iterator->append($array_a);$iterator->append($array_b);foreach ($iterator as $current) {   echo $current;}?> `

Результат виконання цього прикладу:

abcdef

### Дивіться також

- [AppendIterator::\_\_construct()](appenditerator.construct.md) -
Створює AppendIterator
