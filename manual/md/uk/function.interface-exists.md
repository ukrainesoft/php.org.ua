- [«get_parent_class](function.get-parent-class.md)
- [is_a »](function.is-a.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Перевіряє, чи визначено інтерфейс

# interface_exists

(PHP 5 \>u003d 5.0.2, PHP 7, PHP 8)

interface_exists — Перевіряє, чи визначено інтерфейс

### Опис

**interface_exists**(string `$interface`, bool `$autoload` u003d
**`true`**): bool

Перевіряє, чи вказаний інтерфейс.

### Список параметрів

`interface`
Ім'я інтерфейсу

`autoload`
Визначає, чи використовувати за промовчанням
[\_\_autoload](language.oop5.autoload.md) чи ні

### Значення, що повертаються

Повертає **`true`**, якщо інтерфейс c заданим ім'ям `interface` був
визначений або **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **interface_exists()****

<<php// Перевіряємо існування інтерфейсу перед його використаннямif (interface_exists('MyInterface')) {    class MyClass implements MyInterface /                 

### Дивіться також

- [get_declared_interfaces()](function.get-declared-interfaces.md) -
Повертає масив усіх оголошених інтерфейсів
- [class_implements()](function.class-implements.md) - Повертає
список інтерфейсів, реалізованих у заданому класі чи інтерфейсі
- [class_exists()](function.class-exists.md) - Перевіряє, чи був він
оголошено клас
- [enum_exists()](function.enum-exists.md) - Перевіряє, чи визначено
чи перерахування
