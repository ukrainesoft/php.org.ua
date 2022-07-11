- [« Функції SPL](ref.spl.md)
- [class_parents »](function.class-parents.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Повертає список інтерфейсів, реалізованих у заданому класі або
інтерфейсі

#class_implements

(PHP 5, PHP 7, PHP 8)

class_implements — Повертає список інтерфейсів, реалізованих у
заданому класі або інтерфейсі

### Опис

**class_implements**(object\|string `$object_or_class`, bool `$autoload`
u003d **`true`**): array\|false

Функція повертає масив імен інтерфейсів, реалізованих у заданому
класі `object_or_class` та його батьківських класах.

### Список параметрів

`object_or_class`
Об'єкт (примірник класу) або рядок (ім'я класу чи інтерфейсу).

`autoload`
Чи викликати за промовчанням [\_\_autoload](language.oop5.autoload.md).

### Значення, що повертаються

У разі успішного виконання буде повернено масив, якщо заданий
клас не існує, повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **class_implements()****

`<?phpinterface foo { }class bar implements foo {}print_r(class_implements(new bar));//можна передавати ім'я класу замість об'єктаprint_r(class_implements('bar')); незавантаженого класу 'not_loaded'print_r(class_implements('not_loaded', true));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[foo] u003d> foo
)
Array
(
[foo] u003d> foo
)
Array
(
[interface_of_not_loaded] u003d> interface_of_not_loaded
)

### Дивіться також

- [class_parents()](function.class-parents.md) - Повертає список
батьківських класів заданого класу
- [get_declared_interfaces()](function.get-declared-interfaces.md) -
Повертає масив усіх оголошених інтерфейсів
