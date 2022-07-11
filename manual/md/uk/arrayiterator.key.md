- [« ArrayIterator::getFlags](arrayiterator.getflags.md)
- [ArrayIterator::ksort »](arrayiterator.ksort.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Повертає ключ поточного елемента масиву

# ArrayIterator::key

(PHP 5, PHP 7, PHP 8)

ArrayIterator::key — Повертає ключ поточного елемента масиву

### Опис

public **ArrayIterator::key**(): string\|int\|null

Ця функція повертає ключ поточного елемента масиву

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ключ поточного елемента у масиві (array).

### Приклади

**Приклад #1 Приклад використання **ArrayIterator::key()****

` <?php$array u003d array('key' u003d> 'value');$arrayobject u003d new ArrayObject($array);$iterator u003d $arrayobject->getIterator();echo $iterator->key(); //key?> `
