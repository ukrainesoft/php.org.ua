- [« IteratorIterator::valid](iteratoriterator.valid.md)
- [LimitIterator::\_\_construct »](limititerator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас LimitIterator

# Клас LimitIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Клас **LimitIterator** дозволяє зробити перебір обмеженого
кількості елементів у [Iterator](class.iterator.md).

## Огляд класів

class **LimitIterator** extends
[IteratorIterator](class.iteratoriterator.md) {

/\* Методи \*/

public
[\_\_construct](limititerator.construct.md)([Iterator](class.iterator.md)
`$iterator`, int `$offset` u003d 0, int `$limit` u003d -1)

public [current](limititerator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getInnerIterator](limititerator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [getPosition](limititerator.getposition.md)(): int

public [key](limititerator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](limititerator.next.md)(): void

public [rewind](limititerator.rewind.md)(): void

public [seek](limititerator.seek.md)(int `$offset`): int

public [valid](limititerator.valid.md)(): bool

/\* Наслідувані методи \*/

public [IteratorIterator::current](iteratoriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[IteratorIterator::getInnerIterator](iteratoriterator.getinneriterator.md)():
?[Iterator](class.iterator.md)

public [IteratorIterator::key](iteratoriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [IteratorIterator::next](iteratoriterator.next.md)(): void

public [IteratorIterator::rewind](iteratoriterator.rewind.md)(): void

public [IteratorIterator::valid](iteratoriterator.valid.md)(): bool

}

## Приклади

**Приклад #1 Приклад використання **LimitIterator****

` <?php// Создать итератор для ограничения$fruits u003d new ArrayIterator(array(    'apple',    'banana',    'cherry',    'damson',    'elderberry'));// Цикл только по первым трём фруктамforeach (new LimitIterator($fruits, 0, 3) as $fruit) {   var_dump($fruit);}echo "
";// Цикл, починаючи з третього фрукта і до кінця// Примітка: зміщення починається з нуля для яблукаforeach (new LimitIterator($fruits, 2)                 ¦¦¦

Результат виконання цього прикладу:

string(5) "apple"
string(6) "banana"
string(6) "cherry"

string(6) "cherry"
string(6) "damson"
string(10) "elderberry"

## Зміст

- [LimitIterator::\_\_construct](limititerator.construct.md) -
Конструктор класу LimitIterator
- [LimitIterator::current](limititerator.current.md) - Отримання
поточного елемента
- [LimitIterator::getInnerIterator](limititerator.getinneriterator.md)
— Отримання внутрішнього об'єкта-ітератора
- [LimitIterator::getPosition](limititerator.getposition.md) -
Повертає поточну позицію
- [LimitIterator::key](limititerator.key.md) — Отримання поточного
ключа
- [LimitIterator::next](limititerator.next.md) - Переміщення до
наступної позиції
- [LimitIterator::rewind](limititerator.rewind.md) — Переміщує
вказівник на початкову позицію
- [LimitIterator::seek](limititerator.seek.md) - Переміщує ітератор
на задану позицію
- [LimitIterator::valid](limititerator.valid.md) — Перевіряє
валідність поточного елемента
