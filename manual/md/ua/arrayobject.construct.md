- [« ArrayObject::asort](arrayobject.asort.md)
- [ArrayObject::count »](arrayobject.count.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Створює новий об'єкт масиву

# ArrayObject::\_\_construct

(PHP 5, PHP 7, PHP 8)

ArrayObject::\_\_construct — Створює новий об'єкт масиву

### Опис

public **ArrayObject::\_\_construct**(array\|object `$array` u003d \[\], int
`$flags` u003d 0, string `$iteratorClass` u003d ArrayIterator::class)

Створює новий об'єкт масиву.

### Список параметрів

`array`
Параметр array приймає значення типу array або Object.

`flags`
Прапори для керування поведінкою об'єкта
[ArrayObject](class.arrayobject.md). Дивіться
[ArrayObject::setFlags()](arrayobject.setflags.md).

`iteratorClass`
Вказує клас, який використовуватиметься як ітератор
об'єкта [ArrayObject](class.arrayobject.md). Клас повинен реалізувати
інтерфейс [Iterator](class.iterator.md).

### Приклади

**Приклад #1 Приклад використання **ArrayObject::\_\_construct()****

`<?phu003d$array u003d array('1' u003d> 'one',  | arrayobject);?> `

Результат виконання цього прикладу:

object(ArrayObject)#1 (3) {
[1]u003d>
string(3) "one"
[2]u003d>
string(3) "two"
[3]u003d>
string(5) "three"
}

### Дивіться також

- [ArrayObject::setflags()](arrayobject.setflags.md) - Встановлює
прапори поведінки
