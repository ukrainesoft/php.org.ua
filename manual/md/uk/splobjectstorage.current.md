- [« SplObjectStorage::count](splobjectstorage.count.md)
- [SplObjectStorage::detach »](splobjectstorage.detach.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Повертає поточний об'єкт

# SplObjectStorage::current

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplObjectStorage::current — Повертає поточний об'єкт

### Опис

public **SplObjectStorage::current**(): object

Повертає поточний об'єкт.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт (object) який вказує ітератор контейнера.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.1.0 | Метод **SplObjectStorage::current()** тепер викидає виняток [Error](class.error.md), якщо ця позиція неприпустима. Раніше натомість поверталося значення **`false`**. |

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::current()****

` <?php$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$s->attach($o1, "d1");$s->attach($o2, "d2" );$s->rewind();while($s->valid()) {    $index  u003d $s->key(); $object u003d $s->current(); // аналогічно current($s)   $data   u003d $s->getInfo(); var_dump($object); var_dump($data); $s->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#2 (0) {
}
string(2) "d1"
object(stdClass)#3 (0) {
}
string(2) "d2"

### Дивіться також

- [SplObjectStorage::rewind()](splobjectstorage.rewind.md) -
Переводить ітератор на перший елемент контейнера
- [SplObjectStorage::key()](splobjectstorage.key.md) - Повертає
індекс поточного положення ітератора
- [SplObjectStorage::next()](splobjectstorage.next.md) - Перехід до
наступному об'єкту
- [SplObjectStorage::valid()](splobjectstorage.valid.md) -
Визначає, чи допустиме поточне значення ітератора
- [SplObjectStorage::getInfo()](splobjectstorage.getinfo.md) -
Повертає дані, пов'язані з поточним об'єктом
