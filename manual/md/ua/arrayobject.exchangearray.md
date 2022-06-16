- [«ArrayObject::count](arrayobject.count.md)
- [ArrayObject::getArrayCopy »](arrayobject.getarraycopy.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Замінити масив на інший

# ArrayObject::exchangeArray

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

ArrayObject::exchangeArray — Замінити масив на інший

### Опис

public **ArrayObject::exchangeArray**(array\|object `$array`): array

Замінює поточний масив (array) на інший масив (array) чи об'єкт
(object).

### Список параметрів

`array`
Новий масив (array) чи об'єкт (object) для заміни поточного масиву.

### Значення, що повертаються

Повертає старий масив.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::exchangeArray()****

` <?php// Масив з кількістю фруктів$fruits u003d array("lemons" u003d> 1, "oranges" u003d> 4, "bananas" u003d> 5, "apples" u003d> 10); $locations u003d array('Amsterdam', 'Paris', 'London');$fruitsArrayObject u003d new ArrayObject($fruits);// Зараз замінимо фрукти на місця$old u003d $fruitsArrayObject $old);print_r($fruitsArrayObject);?> `

Результат виконання цього прикладу:

Array
(
[lemons] u003d> 1
[oranges] u003d> 4
[bananas] u003d> 5
[apples] u003d> 10
)
ArrayObject Object
(
[0] u003d> Amsterdam
[1] u003d> Paris
[2] u003d> London
)
