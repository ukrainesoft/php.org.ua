- [« MultipleIterator::valid](multipleiterator.valid.md)
- [NoRewindIterator::\_\_construct »](norewinditerator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас NoRewindIterator

# Клас NoRewindIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Ітератор ігнорує операції перемотування. Це дозволяє обробляти
ітератор в декількох часткових циклах начому.

## Огляд класів

class **NoRewindIterator** extends
[IteratorIterator](class.iteratoriterator.md) {

/\* Методи \*/

public
[\_\_construct](norewinditerator.construct.md)([Iterator](class.iterator.md)
`$iterator`)

public [current](norewinditerator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getInnerIterator](norewinditerator.getinneriterator.md)():
[iterator](class.iterator.md)

public [key](norewinditerator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](norewinditerator.next.md)(): void

public [rewind](norewinditerator.rewind.md)(): void

public [valid](norewinditerator.valid.md)(): bool

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

## Зміст

- [NoRewindIterator::\_\_construct](norewinditerator.construct.md) -
Створює новий об'єкт NoRewindIterator
- [NoRewindIterator::current](norewinditerator.current.md)
Отримує поточне значення
- [NoRewindIterator::getInnerIterator](norewinditerator.getinneriterator.md)
— Отримує внутрішній ітератор
- [NoRewindIterator::key](norewinditerator.key.md) — Отримує
поточний ключ
- [NoRewindIterator::next](norewinditerator.next.md) — Переміщує
ітератор до наступного елементу
- [NoRewindIterator::rewind](norewinditerator.rewind.md)
Запобігає поверненню внутрішнього ітератора на початок
- [NoRewindIterator::valid](norewinditerator.valid.md) — Перевіряє
ітератор
