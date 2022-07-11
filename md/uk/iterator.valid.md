- [« Iterator::rewind](iterator.rewind.md)
- [IteratorAggregate »](class.iteratoraggregate.md)

- [PHP Manual](index.md)
- [Iterator](class.iterator.md)
- Перевіряє коректність поточної позиції

# Iterator::valid

(PHP 5, PHP 7, PHP 8)

Iterator::valid — Перевіряє правильність поточної позиції.

### Опис

public **Iterator::valid**(): bool

Метод викликається після функцій
[Iterator::rewind()](iterator.rewind.md) та
[Iterator::next()](iterator.next.md) щоб перевірити, чи допустима
Поточна позиція.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення, що повертається, буде приведено до логічного типу (bool) і потім
використано. Повертає **`true`** у разі успішного виконання або
**`false`** у разі виникнення помилки.
