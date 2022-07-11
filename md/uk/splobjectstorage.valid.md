- [« SplObjectStorage::unserialize](splobjectstorage.unserialize.md)
- [Ітератори »](spl.iterators.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Визначає, чи допустиме поточне значення ітератора

# SplObjectStorage::valid

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplObjectStorage::valid — Визначає, чи допустиме поточне значення
ітератора

### Опис

public **SplObjectStorage::valid**(): bool

Визначає, чи допустиме поточне значення ітератора, тобто чи можлива
робота із цим об'єктом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо поточний об'єкт допустимо і **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::valid()****

` <?php$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$s->attach($o1, "d1");$s->attach($o2, "d2" );$s->rewind();while($s->valid()) {   echo $s->key()."
";   $s->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

    0
1

### Дивіться також

- [SplObjectStorage::current()](splobjectstorage.current.md) -
Повертає поточний об'єкт
- [SplObjectStorage::getInfo()](splobjectstorage.getinfo.md) -
Повертає дані, пов'язані з поточним об'єктом
