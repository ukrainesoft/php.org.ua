- [«Countable](class.countable.md)
- [OuterIterator »](class.outeriterator.md)

- [PHP Manual](index.md)
- [Countable](class.countable.md)
- Кількість елементів об'єкту

# Countable::count

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

Countable::count — Кількість елементів об'єкта

### Опис

public **Countable::count**(): int

Цей метод виконується під час використання [count()](function.count.md)
на об'єкті, що реалізує інтерфейс [Countable](class.countable.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення користувача типу int.

> **Примітка**:
>
> Значення, що повертається, наводиться до типу int.

### Приклади

**Приклад #1 Приклад використання **Countable::count()****

`<?phpclass myCounter implements Countable {    private $count u003d 0; public function count() {         return ++$this->count; }}$counter u003d new myCounter;for($iu003d0; $i<10; ++$i) {   echo "Я порахований " . count($counter) . "Раз
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Я порахований 1 раз
Я порахований 2 раз
Я порахований 3 рази
Я порахований 4 рази
Я порахований 5 разів
Я порахований 6 разів
Я порахований 7 разів
Я порахований 8 разів
Я порахований 9 разів
Я порахований 10 разів
