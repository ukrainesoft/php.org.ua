- [« iterator_apply](function.iterator-apply.md)
- [iterator_to_array »](function.iterator-to-array.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Підраховує кількість елементів в ітераторі

#iterator_count

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

iterator_count — Підраховує кількість елементів в ітераторі

### Опис

**iterator_count**([Traversable](class.traversable.md) `$iterator`):
int

Підраховує кількість елементів в ітераторі. **iterator_count()** не
гарантує збереження поточної позиції `iterator`.

### Список параметрів

`iterator`
Ітератор, у якому провадиться підрахунок.

### Значення, що повертаються

Кількість елементів в ітераторі (iterator).

### Приклади

**Приклад #1 Приклад використання **iterator_count()****

` <?php$iterator u003d new ArrayIterator(array('recipe'u003d>'pancakes', 'egg', 'milk', 'flour'));var_dump(iterator_count($iterator));?> `

Результат виконання цього прикладу:

int(4)

**Приклад #2 **iterator_count()** модифікує позицію**

` <?php$iterator u003d new ArrayIterator(['one', 'two', 'three']);var_dump($iterator->current());var_dump(iterator_count($iterator));var_dump($iterator- >current());?> `

Результат виконання цього прикладу:

string(3) "one"
int(3)
NULL

**Приклад #3 **iterator_count()** у циклі
[foreach](control-structures.foreach.md)**

` <?php$iterator u003d new ArrayIterator(['one', 'two', 'three']);foreach ($iterator as $key u003d> $value) {    echo "$key: $u $iterator), ")
";}?> `

Результат виконання цього прикладу:

0: один (3)
