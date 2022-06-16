- [« ArrayIterator::unserialize](arrayiterator.unserialize.md)
- [CachingIterator »](class.cachingiterator.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Перевіряє, чи містить масив ще запису

# ArrayIterator::valid

(PHP 5, PHP 7, PHP 8)

ArrayIterator::valid — Перевіряє, чи масив ще запису

### Опис

public **ArrayIterator::valid**(): bool

Перевіряє, чи містить масив array ще записи.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо ітератор дійсний та **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **ArrayIterator::valid()****

` <?php$array u003d array('1' u003d> 'one');$arrayobject u003d new ArrayObject($array);$iterator u003d $arrayobject->getIterator();var_dump($iterator->valid()) ; //bool(true)$iterator->next(); // переміщуємо вказівник на наступний елемент//bool(false) потому що в масиві тільки один елементvar_dump($iterator->valid());?> `
