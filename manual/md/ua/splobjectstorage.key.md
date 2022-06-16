- [« SplObjectStorage::getInfo](splobjectstorage.getinfo.md)
- [SplObjectStorage::next »](splobjectstorage.next.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Повертає індекс поточного становища ітератора

# SplObjectStorage::key

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplObjectStorage::key — Повертає індекс поточного положення ітератора

### Опис

public **SplObjectStorage::key**(): int

Повертає індекс поточного становища ітератора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Індекс поточного становища ітератора.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::key()****

` <?php$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$s->attach($o1, "d1");$s->attach($o2, "d2" );$s->rewind();while($s->valid()) {    $index  u003d $s->key(); $object u003d $s->current(); // аналогічно current($s)   var_dump($index); var_dump($object); $s->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

int(0)
object(stdClass)#2 (0) {
}
int(1)
object(stdClass)#3 (0) {
}

### Дивіться також

- [SplObjectStorage::rewind()](splobjectstorage.rewind.md) -
Переводить ітератор на перший елемент контейнера
- [SplObjectStorage::current()](splobjectstorage.current.md) -
Повертає поточний об'єкт
- [SplObjectStorage::next()](splobjectstorage.next.md) - Перехід до
наступному об'єкту
- [SplObjectStorage::valid()](splobjectstorage.valid.md) -
Визначає, чи допустиме поточне значення ітератора
