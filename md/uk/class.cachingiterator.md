- [« ArrayIterator::valid](arrayiterator.valid.md)
- [CachingIterator::\_\_construct »](cachingiterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас CachingIterator

# Клас CachingIterator

(PHP 5, PHP 7, PHP 8)

## Вступ

Цей об'єкт підтримує кешування ітерації над іншим ітератором.

## Огляд класів

class **CachingIterator** extends
[IteratorIterator](class.iteratoriterator.md) implements
[ArrayAccess](class.arrayaccess.md),
[Countable](class.countable.md), [Stringable](class.stringable.md) {

/\* Константи \*/

const int `CALL_TOSTRING` u003d 1;

const int `CATCH_GET_CHILD` u003d 16;

const int `TOSTRING_USE_KEY` u003d 2;

const int `TOSTRING_USE_CURRENT` u003d 4;

const int `TOSTRING_USE_INNER` u003d 8;

const int `FULL_CACHE` u003d 256;

/\* Методи \*/

public
[\_\_construct](cachingiterator.construct.md)([Iterator](class.iterator.md)
`$iterator`, int `$flags` u003d CachingIterator::CALL_TOSTRING)

public [count](cachingiterator.count.md)(): int

public [current](cachingiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getCache](cachingiterator.getcache.md)(): array

public [getFlags](cachingiterator.getflags.md)(): void

public [getInnerIterator](cachingiterator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [hasNext](cachingiterator.hasnext.md)(): bool

public [key](cachingiterator.key.md)(): scalar

public [next](cachingiterator.next.md)(): void

public [offsetExists](cachingiterator.offsetexists.md)(string `$key`):
bool

public [offsetGet](cachingiterator.offsetget.md)(string `$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [offsetSet](cachingiterator.offsetset.md)(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [offsetUnset](cachingiterator.offsetunset.md)(string `$key`):
void

public [rewind](cachingiterator.rewind.md)(): void

public [setFlags](cachingiterator.setflags.md)(int `$flags`): void

public [\_\_toString](cachingiterator.tostring.md)(): string

public [valid](cachingiterator.valid.md)(): bool

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

## Зумовлені константи

**`CachingIterator::CALL_TOSTRING`**
Перетворює кожен елемент на рядок.

**`CachingIterator::CATCH_GET_CHILD`**
Не викидати виключення під час доступу до дочірніх елементів.

**`CachingIterator::TOSTRING_USE_KEY`**
Використовувати [ключ](cachingiterator.key.md) при перетворенні на
рядок.

**`CachingIterator::TOSTRING_USE_CURRENT`**
Використовувати [поточний елемент](cachingiterator.current.md) при
перетворення в рядок.

**`CachingIterator::TOSTRING_USE_INNER`**
Використати [внутрішній
ітератор](cachingiterator.getinneriterator.md) при перетворенні на
рядок.

**`CachingIterator::FULL_CACHE`**
Кешування всієї прочитаної інформації.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -|
| 8.0.0 | Клас **CachingIterator** тепер реалізує інтерфейс [Stringable](class.stringable.md). |

## Зміст

- [CachingIterator::\_\_construct](cachingiterator.construct.md) -
Створює новий об'єкт CachingIterator для ітератора
- [CachingIterator::count](cachingiterator.count.md) - Повертає
кількість елементів в ітераторі
- [CachingIterator::current](cachingiterator.current.md) -
Повертає поточний елемент
- [CachingIterator::getCache](cachingiterator.getcache.md) -
Отримання вмісту кешу
- [CachingIterator::getFlags](cachingiterator.getflags.md) -
Отримує прапори, що використовуються
- [CachingIterator::getInnerIterator](cachingiterator.getinneriterator.md)
- Повертає внутрішній ітератор
- [CachingIterator::hasNext](cachingiterator.hasnext.md) -
Перевіряє, чи внутрішній ітератор має допустимий наступний елемент
- [CachingIterator::key](cachingiterator.key.md) — Повертає ключ
для поточного елемента
- [CachingIterator::next](cachingiterator.next.md) — Переміщує
ітератор до наступного елементу
- [CachingIterator::offsetExists](cachingiterator.offsetexists.md)
Призначення offsetExists
- [CachingIterator::offsetGet](cachingiterator.offsetget.md) -
Призначення offsetGet
- [CachingIterator::offsetSet](cachingiterator.offsetset.md) -
Призначення offsetSet
- [CachingIterator::offsetUnset](cachingiterator.offsetunset.md) -
Призначення offsetUnset
- [CachingIterator::rewind](cachingiterator.rewind.md) - Повертає
ітератор на початок
- [CachingIterator::setFlags](cachingiterator.setflags.md)
Встановлює прапори для об'єкту CachingIterator
- [CachingIterator::\_\_toString](cachingiterator.tostring.md) -
Повертає строкове представлення поточного елемента
- [CachingIterator::valid](cachingiterator.valid.md) — Перевіряє,
чи є поточний елемент допустимим
