- [« InfiniteIterator::next](infiniteiterator.next.md)
- [IteratorIterator::\_\_construct »](iteratoriterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас IteratorIterator

# Клас IteratorIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Цей ітератор-обгортка дозволяє перетворювати все, що є
"обхідним" ([Traversable](class.traversable.md)) в ітератор. Важливо
розуміти, що більшість класів, які не реалізують ітератори, мають
на те причини, оскільки, швидше за все, вони не дозволяють реалізувати
повний набір можливостей ітератора. Якщо так, то маємо бути
вжито заходів для запобігання неправильному використанню, інакше
очікується винятків або фатальних помилок.

## Огляд класів

class **IteratorIterator** implements
[OuterIterator](class.outeriterator.md) {

/\* Методи \*/

public
[\_\_construct](iteratoriterator.construct.md)([Traversable](class.traversable.md)
`$iterator`, ?string `$class` u003d **`null`**)

public [current](iteratoriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getInnerIterator](iteratoriterator.getinneriterator.md)():
?[Iterator](class.iterator.md)

public [key](iteratoriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](iteratoriterator.next.md)(): void

public [rewind](iteratoriterator.rewind.md)(): void

public [valid](iteratoriterator.valid.md)(): bool

}

## Примітки

> **Примітка**:
>
> Цей клас дозволяє доступ до методів внутрішнього ітератора через
> магічний метод \_\_call.

## Зміст

- [IteratorIterator::\_\_construct](iteratoriterator.construct.md)
Створює ітератор із чогось, що є обхідним (traversable)
- [IteratorIterator::current](iteratoriterator.current.md)
Отримує поточне значення
- [IteratorIterator::getInnerIterator](iteratoriterator.getinneriterator.md)
— Отримує внутрішній ітератор
- [IteratorIterator::key](iteratoriterator.key.md) — Отримує ключ
поточного елемента
- [IteratorIterator::next](iteratoriterator.next.md) — Переміщує
ітератор до наступного елементу
- [IteratorIterator::rewind](iteratoriterator.rewind.md)
Повертає ітератор до першого елементу
- [IteratorIterator::valid](iteratoriterator.valid.md) — Перевіряє,
чи є ітератор допустимим
