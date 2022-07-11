- [« LimitIterator::valid](limititerator.valid.md)
- [MultipleIterator::attachIterator
»](multipleiterator.attachiterator.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас MultipleIterator

# Клас MultipleIterator

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Ітератор, який послідовно перебирає по всіх приєднаних
ітераторам

## Огляд класів

class **MultipleIterator** implements [Iterator](class.iterator.md) {

/\* Константи \*/

const int `MIT_NEED_ANY` u003d 0;

const int `MIT_NEED_ALL` u003d 1;

const int `MIT_KEYS_NUMERIC` u003d 0;

const int `MIT_KEYS_ASSOC` u003d 2;

/\* Методи \*/

public [\_\_construct](multipleiterator.construct.md)(int `$flags` u003d
MultipleIterator::MIT_NEED_ALL \| MultipleIterator::MIT_KEYS_NUMERIC)

public
[attachIterator](multipleiterator.attachiterator.md)([Iterator](class.iterator.md)
`$iterator`, string\|int\|null `$info` u003d **`null`**): void

public
[containsIterator](multipleiterator.containsiterator.md)([Iterator](class.iterator.md)
`$iterator`): bool

public [countIterators](multipleiterator.countiterators.md)(): int

public [current](multipleiterator.current.md)(): array

public
[detachIterator](multipleiterator.detachiterator.md)([Iterator](class.iterator.md)
`$iterator`): void

public [getFlags](multipleiterator.getflags.md)(): int

public [key](multipleiterator.key.md)(): array

public [next](multipleiterator.next.md)(): void

public [rewind](multipleiterator.rewind.md)(): void

public [setFlags](multipleiterator.setflags.md)(int `$flags`): void

public [valid](multipleiterator.valid.md)(): bool

}

## Зумовлені константи

**`MultipleIterator::MIT_NEED_ANY`**
Не вимагати, щоб усі підитератори були дійсними в ітерації.

**`MultipleIterator::MIT_NEED_ALL`**
Вимагати, щоб усі підитератори були дійсними в ітерації.

**`MultipleIterator::MIT_KEYS_NUMERIC`**
Ключі створюються з позиції підітераторів.

**`MultipleIterator::MIT_KEYS_ASSOC`**
Ключі створюються із пов'язаної з підитераторами інформації.

## Зміст

- [MultipleIterator::attachIterator](multipleiterator.attachiterator.md)
- Приєднує ітератор
- [MultipleIterator::\_\_construct](multipleiterator.construct.md) -
Створює новий MultipleIterator
- [MultipleIterator::containsIterator](multipleiterator.containsiterator.md)
— Перевіряє, чи приєднано ітератора
- [MultipleIterator::countIterators](multipleiterator.countiterators.md)
— Отримує кількість приєднаних ітераторів
- [MultipleIterator::current](multipleiterator.current.md) -
Отримує зареєстровані ітератори
- [MultipleIterator::detachIterator](multipleiterator.detachiterator.md)
- Від'єднує ітератор
- [MultipleIterator::getFlags](multipleiterator.getflags.md) -
Отримує інформацію про прапори
- [MultipleIterator::key](multipleiterator.key.md) - Отримує
зареєстровані ітератори
- [MultipleIterator::next](multipleiterator.next.md) — Переміщує
всі приєднані ітератори до наступних елементів
- [MultipleIterator::rewind](multipleiterator.rewind.md)
Повертає на початок усі приєднані ітератори
- [MultipleIterator::setFlags](multipleiterator.setflags.md)
Встановлює прапори
- [MultipleIterator::valid](multipleiterator.valid.md) — Перевіряє
коректність підитераторів
