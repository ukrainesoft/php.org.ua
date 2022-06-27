- [« ReflectionClass::getFileName](reflectionclass.getfilename.md)
- [ReflectionClass::getInterfaces
»](reflectionclass.getinterfaces.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає імена інтерфейсів

# ReflectionClass::getInterfaceNames

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ReflectionClass::getInterfaceNames — Повертає імена інтерфейсів

### Опис

public **ReflectionClass::getInterfaceNames**(): array

Повертає імена.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив імен інтерфейсів.

### Приклади

**Приклад #1 Приклад використання
**ReflectionClass::getInterfaceNames()****

`<?phpinterface Foo { }interface Bar { }class Baz implements Foo, Bar { }$rc1 u003d new ReflectionClass("Baz");print_r($rc1->getInterfaceNames());?>

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Foo
[1] u003d> Bar
)

### Дивіться також

- [ReflectionClass::getInterfaces()](reflectionclass.getinterfaces.md) -
Повертає інтерфейси
