- [«
RecursiveFilterIterator::hasChildren](recursivefilteriterator.haschildren.md)
- [RecursiveIteratorIterator::beginChildren
»](recursiveiteratoriterator.beginchildren.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RecursiveIteratorIterator

# Клас RecursiveIteratorIterator

(PHP 5, PHP 7, PHP 8)

## Вступ

Можна використовувати для перебору рекурсивних ітераторів.

## Огляд класів

class **RecursiveIteratorIterator** implements
[OuterIterator](class.outeriterator.md) {

/\* Константи \*/

const int `LEAVES_ONLY` u003d 0;

const int `SELF_FIRST` u003d 1;

const int `CHILD_FIRST` u003d 2;

const int `CATCH_GET_CHILD` u003d 16;

/\* Методи \*/

public
[\_\_construct](recursiveiteratoriterator.construct.md)([Traversable](class.traversable.md)
`$iterator`, int `$mode` u003d RecursiveIteratorIterator::LEAVES_ONLY, int
`$flags` u003d 0)

public [beginChildren](recursiveiteratoriterator.beginchildren.md)():
void

public
[beginIteration](recursiveiteratoriterator.beginiteration.md)(): void

public
[callGetChildren](recursiveiteratoriterator.callgetchildren.md)():
?[RecursiveIterator](class.recursiveiterator.md)

public
[callHasChildren](recursiveiteratoriterator.callhaschildren.md)():
bool

public [current](recursiveiteratoriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [endChildren](recursiveiteratoriterator.endchildren.md)(): void

public [endIteration](recursiveiteratoriterator.enditeration.md)():
void

public [getDepth](recursiveiteratoriterator.getdepth.md)(): int

public
[getInnerIterator](recursiveiteratoriterator.getinneriterator.md)():
[RecursiveIterator](class.recursiveiterator.md)

public [getMaxDepth](recursiveiteratoriterator.getmaxdepth.md)():
int\|false

public
[getSubIterator](recursiveiteratoriterator.getsubiterator.md)(?int
`$level` u003d **`null`**):
?[RecursiveIterator](class.recursiveiterator.md)

public [key](recursiveiteratoriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](recursiveiteratoriterator.next.md)(): void

public [nextElement](recursiveiteratoriterator.nextelement.md)(): void

public [rewind](recursiveiteratoriterator.rewind.md)(): void

public [setMaxDepth](recursiveiteratoriterator.setmaxdepth.md)(int
`$maxDepth` u003d -1): void

public [valid](recursiveiteratoriterator.valid.md)(): bool

}

## Зумовлені константи

**`RecursiveIteratorIterator::LEAVES_ONLY`**

**`RecursiveIteratorIterator::SELF_FIRST`**

**`RecursiveIteratorIterator::CHILD_FIRST`**

**`RecursiveIteratorIterator::CATCH_GET_CHILD`**

## Зміст

- [RecursiveIteratorIterator::beginChildren](recursiveiteratoriterator.beginchildren.md)
— Перехід до першого дочірнього елемента
- [RecursiveIteratorIterator::beginIteration](recursiveiteratoriterator.beginiteration.md)
- Початок ітерації
- [RecursiveIteratorIterator::callGetChildren](recursiveiteratoriterator.callgetchildren.md)
— Отримання дочірніх елементів
- [RecursiveIteratorIterator::callHasChildren](recursiveiteratoriterator.callhaschildren.md)
— Перевірка, чи має елемент дочірні елементи
- [RecursiveIteratorIterator::\_\_construct](recursiveiteratoriterator.construct.md)
- Конструктор класу RecursiveIteratorIterator
- [RecursiveIteratorIterator::current](recursiveiteratoriterator.current.md)
— Отримує значення поточного елемента
- [RecursiveIteratorIterator::endChildren](recursiveiteratoriterator.endchildren.md)
- Закінчення дочірніх елементів
- [RecursiveIteratorIterator::endIteration](recursiveiteratoriterator.enditeration.md)
- Закінчення ітерації
- [RecursiveIteratorIterator::getDepth](recursiveiteratoriterator.getdepth.md)
- Визначає поточну глибину рекурсії
- [RecursiveIteratorIterator::getInnerIterator](recursiveiteratoriterator.getinneriterator.md)
— Отримання посилання на внутрішній ітератор
- [RecursiveIteratorIterator::getMaxDepth](recursiveiteratoriterator.getmaxdepth.md)
— Отримання максимальної глибини рекурсії
- [RecursiveIteratorIterator::getSubIterator](recursiveiteratoriterator.getsubiterator.md)
- Отримання активного вкладеного ітератора
- [RecursiveIteratorIterator::key](recursiveiteratoriterator.key.md)
— Отримання ключа поточного елемента
- [RecursiveIteratorIterator::next](recursiveiteratoriterator.next.md)
— Переміщення ітератора до наступного елементу
- [RecursiveIteratorIterator::nextElement](recursiveiteratoriterator.nextelement.md)
- Наступний елемент
- [RecursiveIteratorIterator::rewind](recursiveiteratoriterator.rewind.md)
— Переміщує ітератор на перший елемент верхнього рівня
вкладеності внутрішнього ітератора
- [RecursiveIteratorIterator::setMaxDepth](recursiveiteratoriterator.setmaxdepth.md)
— Встановлення максимальної глибини вкладення
- [RecursiveIteratorIterator::valid](recursiveiteratoriterator.valid.md)
- Перевірка допустимості поточної позиції
