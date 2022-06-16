- [« ArrayIterator::natsort](arrayiterator.natsort.md)
- [ArrayIterator::offsetExists »](arrayiterator.offsetexists.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Переміщує покажчик за наступний запис

# ArrayIterator::next

(PHP 5, PHP 7, PHP 8)

ArrayIterator::next — Переміщує покажчик за наступний запис

### Опис

public **ArrayIterator::next**(): void

Переміщує покажчик на наступний запис у масиві.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ArrayIterator::next()****

` <?php$arrayobject u003d new ArrayObject();$arrayobject[] u003d 'zero';$arrayobject[] u003d 'one';$iterator u003d $arrayobject->getIterator();while($iterator->valid() ) {    echo $iterator->key() . ' u003d> ' . $iterator->current() . "
";   $iterator->next();}?> `

Результат виконання цього прикладу:

0 u003d> zero
1 u003d> один
