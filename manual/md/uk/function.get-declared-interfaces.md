- [«get_declared_classes](function.get-declared-classes.md)
- [get_declared_traits »](function.get-declared-traits.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Повертає масив усіх оголошених інтерфейсів

#get_declared_interfaces

(PHP 5, PHP 7, PHP 8)

get_declared_interfaces — Повертає масив усіх оголошених інтерфейсів

### Опис

**get_declared_interfaces**(): array

Повертає оголошені інтерфейси.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив імен усіх оголошених інтерфейсів у скрипті.

### Приклади

**Приклад #1 Приклад використання **get_declared_interfaces()****

` <?phpprint_r(get_declared_interfaces());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Traversable
[1] u003d> IteratorAggregate
[2] u003d> Iterator
[3] u003d> ArrayAccess
[4] u003d> reflector
[5] u003d> RecursiveIterator
[6] u003d> SeekableIterator
)

### Дивіться також

- [interface_exists()](function.interface-exists.md) - Перевіряє,
чи визначено інтерфейс
- [get_declared_classes()](function.get-declared-classes.md) -
Повертає масив із іменами оголошених класів
- [class_implements()](function.class-implements.md) - Повертає
список інтерфейсів, реалізованих у заданому класі чи інтерфейсі
