- [« ArrayObject::exchangeArray](arrayobject.exchangearray.md)
- [ArrayObject::getFlags »](arrayobject.getflags.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Створює копію ArrayObject

# ArrayObject::getArrayCopy

(PHP 5, PHP 7, PHP 8)

ArrayObject::getArrayCopy — Створює копію ArrayObject

### Опис

public **ArrayObject::getArrayCopy**(): array

Експортує [ArrayObject](class.arrayobject.md) у масив.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає копію масиву. Якщо [ArrayObject](class.arrayobject.md)
посилається на об'єкт, то буде повернено масив властивостей даного об'єкта.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::getArrayCopy()****

`<?php// Масив з кількістю фруктів$fruits u003d array("lemons" u003d> 1, "oranges" u003d> 4, "bananas" u003d> 5, "apples" u003d> 10);$fr Ar $fruits);$fruitsArrayObject['pears'] u003d 4;// Створити копію масиву$copy u003d $fruitsArrayObject->getArrayCopy();print_r($copy);?> `

Результат виконання цього прикладу:

Array
(
[lemons] u003d> 1
[oranges] u003d> 4
[bananas] u003d> 5
[apples] u003d> 10
[pears] u003d> 4
)
