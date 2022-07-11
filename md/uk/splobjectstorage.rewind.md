- [«
SplObjectStorage::removeAllExcept](splobjectstorage.removeallexcept.md)
- [SplObjectStorage::serialize »](splobjectstorage.serialize.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Переводить ітератор на перший елемент контейнера

# SplObjectStorage::rewind

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplObjectStorage::rewind - Перекладає ітератор на перший елемент
контейнера

### Опис

public **SplObjectStorage::rewind**(): void

Ітератор перекладає на перший елемент контейнера.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::rewind()****

` <?php$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$s->attach($o1, "d1");$s->attach($o2, "d2" );$s->rewind();while($s->valid()) {    $index  u003d $s->key(); $object u003d $s->current(); // аналогічно current($s)   $data   u003d $s->getInfo(); var_dump($object); var_dump($data); $s->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)
int(0)

### Дивіться також

- [SplObjectStorage::next()](splobjectstorage.next.md) - Перехід до
наступному об'єкту
