- [« ArrayObject::getArrayCopy](arrayobject.getarraycopy.md)
- [ArrayObject::getIterator »](arrayobject.getiterator.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Отримує прапори поведінки

# ArrayObject::getFlags

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

ArrayObject::getFlags — Отримує прапори поведінки

### Опис

public **ArrayObject::getFlags**(): int

Отримує прапори [ArrayObject](class.arrayobject.md). Дивіться
метод [ArrayObject::setFlags](arrayobject.setflags.md) для перегляду
список можливих прапорів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає прапори поведінки ArrayObject.

### Приклади



`<?php// Масив з кількістю фруктів$fruits u003d array("lemons" u003d> 1, "oranges" u003d> 4, "bananas" u003d> 5, "apples" u003d> 10);$fr Ar $fruits);// Одержання поточних прапорів$flags u003d $fruitsArrayObject->getFlags();var_dump($flags);// Установка нових прапорів$fruitsArrayObject->setFlags(ArrayObject u003d $fruitsArrayObject->getFlags();var_dump($flags);?> `

Результат виконання цього прикладу:

int(0)
int(2)

### Дивіться також

- Метод [ArrayObject::setFlags()](arrayobject.setflags.md) -
Встановлює прапори поведінки
