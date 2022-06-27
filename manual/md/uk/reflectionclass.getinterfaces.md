- [«
ReflectionClass::getInterfaceNames](reflectionclass.getinterfacenames.md)
- [ReflectionClass::getMethod »](reflectionclass.getmethod.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає інтерфейси

# ReflectionClass::getInterfaces

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getInterfaces — Повертає інтерфейси

### Опис

public **ReflectionClass::getInterfaces**(): array

Повертає інтерфейси.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Асоціативний масив (array) інтерфейсів, у якому ключами є
імена інтерфейсів, а значеннями – об'єкти
[ReflectionClass](class.reflectionclass.md).

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getInterfaces()****

`<?phpinterface Foo { }interface Bar { }class Baz implements Foo, Bar { }$rc1 u003d new ReflectionClass("Baz");print_r($rc1->getInterfaces());?>

Результатом виконання цього прикладу буде щось подібне:

Array
(
[Foo] u003d> ReflectionClass Object
(
[name] u003d> Foo
)

[Bar] u003d> ReflectionClass Object
(
[name] u003d> Bar
)

)

### Дивіться також

- [ReflectionClass::getInterfaceNames()](reflectionclass.getinterfacenames.md) -
Повертає імена інтерфейсів
