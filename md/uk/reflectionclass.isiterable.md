- [« ReflectionClass::isInternal](reflectionclass.isinternal.md)
- [ReflectionClass::isIterateable
»](reflectionclass.isiterateable.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевірити, чи клас ітерується

# ReflectionClass::isIterable

(PHP 7 \>u003d 7.2.0, PHP 8)

ReflectionClass::isIterable — Перевірити, чи клас ітерується.

### Опис

public **ReflectionClass::isIterable**(): bool

Перевіряє, чи реалізує клас інтерфейс Iterator (тобто чи можна
використовувати його в [foreach] (control-structures.foreach.md)).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Використання **ReflectionClass::isIterable()****

` <?phpclass IteratorClass implements Iterator {    public function __construct() { }    public function key() { }    public function current() { }    function next() { }    function valid() { }    function rewind() { }}class DerivedClass extends IteratorClass { }class NonIterator { }function dump_iterable($class) {    $reflection u003d new ReflectionClass($class); var_dump($reflection->isIterable());}$classes u003d array("ArrayObject", "IteratorClass", "DerivedClass", "NonIterator");foreach ($classes as $class) { Класи| "; dump_iterable($class);}?> `

Результат виконання цього прикладу:

Клас ArrayObject ітерований? bool(true)
Клас IteratorClass ітерований? bool(true)
Клас DerivedClass ітерований? bool(true)
Клас NonIterator ітерований? bool(false)

### Дивіться також

- [ReflectionClass::\_\_construct()](reflectionclass.construct.md) -
Створює об'єкт класу ReflectionClass
