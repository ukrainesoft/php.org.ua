- [«LimitIterator](class.limititerator.md)
- [LimitIterator::current »](limititerator.current.md)

- [PHP Manual](index.md)
- [LimitIterator](class.limititerator.md)
- Конструктор класу LimitIterator

# LimitIterator::\_\_construct

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

LimitIterator::\_\_construct - Конструктор класу LimitIterator

### Опис

public **LimitIterator::\_\_construct**([Iterator](class.iterator.md)
`$iterator`, int `$offset` u003d 0, int `$limit` u003d -1)

Створює новий об'єкт класу [LimitIterator](class.limititerator.md)
основі заданого об'єкта `iterator`, початкового зміщення `offset` та
максимальної кількості ітерацій `limit`.

### Список параметрів

`iterator`
Об'єкт-ітератор [Iterator](class.iterator.md), число ітерацій якого
потрібно обмежити.

`offset`
Необов'язкове початкове усунення.

`limit`
Необов'язкове обмеження кількості ітерацій.

### Помилки

Викидає виняток [ValueError](class.valueerror.md), якщо
зсув `offset` виявиться менше `0`, або якщо `limit` виявиться менше
`-1`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.0.0 | Тепер викидає виняток [ValueError](class.valueerror.md), якщо зміщення `offset` виявиться меншим за `0`; раніше викидався виняток [RuntimeException](class.runtimeexception.md). |
| 8.0.0 | Тепер викидає виняток [ValueError](class.valueerror.md), якщо зсув `limit` виявиться меншим за `-1`; раніше викидався виняток [RuntimeException](class.runtimeexception.md). |

### Приклади

**Приклад #1 Приклад використання **LimitIterator::\_\_construct()****

` <?php$ait u003d new ArrayIterator(array('a', 'b', 'c', 'd', 'e'));$lit u003d new LimitIterator($ait, 1, 3);foreach ( $lit as $value) {    echo $value . "
";}?> `

Результат виконання цього прикладу:

b
c
d

### Дивіться також

- [Приклади використання
LimitIterator](class.limititerator.md#limititerator.examples)
