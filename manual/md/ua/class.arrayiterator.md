- [« AppendIterator::valid](appenditerator.valid.md)
- [ArrayIterator::append »](arrayiterator.append.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас ArrayIterator

# Клас ArrayIterator

(PHP 5, PHP 7, PHP 8)

## Вступ

Цей ітератор дозволяє скидати та модифікувати значення та ключі в
процесі ітерації за масивами та об'єктами.

Коли ви хочете перебрати один і той самий масив кілька разів, вам потрібно
створити екземпляр ArrayObject та створити для нього об'єкти ArrayIterator,
посилаються на нього або за допомогою
[foreach](control-structures.foreach.md) або під час виклику методу
getIterator() вручну.

## Огляд класів

class **ArrayIterator** implements
[SeekableIterator](class.seekableiterator.md),
[ArrayAccess](class.arrayaccess.md),
[Serializable](class.serializable.md),
[Countable](class.countable.md) {

/\* Константи \*/

const int `STD_PROP_LIST` u003d 1;

const int `ARRAY_AS_PROPS` u003d 2;

/\* Методи \*/

public [\_\_construct](arrayiterator.construct.md)(array\|object
`$array` u003d \[\], int `$flags` u003d 0)

public
[append](arrayiterator.append.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [asort](arrayiterator.asort.md)(int `$flags` u003d
**`SORT_REGULAR`**): bool

public [count](arrayiterator.count.md)(): int

public [current](arrayiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getArrayCopy](arrayiterator.getarraycopy.md)(): array

public [getFlags](arrayiterator.getflags.md)(): int

public [key](arrayiterator.key.md)(): string\|int\|null

public [ksort](arrayiterator.ksort.md)(int `$flags` u003d
**`SORT_REGULAR`**): bool

public [natcasesort](arrayiterator.natcasesort.md)(): bool

public [natsort](arrayiterator.natsort.md)(): bool

public [next](arrayiterator.next.md)(): void

public
[offsetExists](arrayiterator.offsetexists.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): bool

public
[offsetGet](arrayiterator.offsetget.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[offsetSet](arrayiterator.offsetset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[offsetUnset](arrayiterator.offsetunset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): void

public [rewind](arrayiterator.rewind.md)(): void

public [seek](arrayiterator.seek.md)(int `$offset`): void

public [serialize](arrayiterator.serialize.md)(): string

public [setFlags](arrayiterator.setflags.md)(int `$flags`): void

public
[uasort](arrayiterator.uasort.md)([callable](language.types.callable.md)
`$callback`): bool

public
[uksort](arrayiterator.uksort.md)([callable](language.types.callable.md)
`$callback`): bool

public [unserialize](arrayiterator.unserialize.md)(string `$data`):
void

public [valid](arrayiterator.valid.md)(): bool

}

## Зумовлені константи

## Прапори ArrayIterator

**`ArrayIterator::STD_PROP_LIST`**
Властивості мають звичайну функціональність при доступі у вигляді списку
(var_dump, foreach тощо).

**`ArrayIterator::ARRAY_AS_PROPS`**
Записи можуть бути доступні як властивості (читання та запис).

## Зміст

- [ArrayIterator::append](arrayiterator.append.md) — Додати
елемент
- [ArrayIterator::asort](arrayiterator.asort.md) — Сортує
елементи за значеннями
- [ArrayIterator::\_\_construct](arrayiterator.construct.md) -
Створює ArrayIterator
- [ArrayIterator::count](arrayiterator.count.md) - Порахувати
кількість елементів
- [ArrayIterator::current](arrayiterator.current.md) - Повертає
поточний елемент у масиві
- [ArrayIterator::getArrayCopy](arrayiterator.getarraycopy.md) -
Повертає копію масиву
- [ArrayIterator::getFlags](arrayiterator.getflags.md) — Отримує
прапори поведінки
- [ArrayIterator::key](arrayiterator.key.md) — Повертає ключ
поточного елемента масиву
- [ArrayIterator::ksort](arrayiterator.ksort.md) — Сортує
елементи за ключами
- [ArrayIterator::natcasesort](arrayiterator.natcasesort.md)
Сортує елементи "натурально", з урахуванням регістру
- [ArrayIterator::natsort](arrayiterator.natsort.md) — Сортує
елементи "натурально"
- [ArrayIterator::next](arrayiterator.next.md) — Переміщує
покажчик за наступний запис
- [ArrayIterator::offsetExists](arrayiterator.offsetexists.md) -
Перевіряє, чи існує зсув
- [ArrayIterator::offsetGet](arrayiterator.offsetget.md) — Отримує
значення для зміщення
- [ArrayIterator::offsetSet](arrayiterator.offsetset.md) -
Встановлює значення для зміщення
- [ArrayIterator::offsetUnset](arrayiterator.offsetunset.md) -
Скидає значення зі зміщення
- [ArrayIterator::rewind](arrayiterator.rewind.md) — Переміщує
покажчик на початок масиву
- [ArrayIterator::seek](arrayiterator.seek.md) — Переміщує
вказівник на вибрану позицію
- [ArrayIterator::serialize](arrayiterator.serialize.md)
Серіалізує масив
- [ArrayIterator::setFlags](arrayiterator.setflags.md) -
Встановлює прапори, що змінюють поведінку.
- [ArrayIterator::uasort](arrayiterator.uasort.md) — Сортування з
допомогою заданої користувачем функції та збереженням ключів
- [ArrayIterator::uksort](arrayiterator.uksort.md) — Сортування за
ключам за допомогою заданої функції порівняння
- [ArrayIterator::unserialize](arrayiterator.unserialize.md)
Десеріалізація
- [ArrayIterator::valid](arrayiterator.valid.md) — Перевіряє,
містить масив ще записи
