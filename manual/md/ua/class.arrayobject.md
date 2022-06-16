- [« Різні класи та інтерфейси](spl.misc.md)
- [ArrayObject::append »](arrayobject.append.md)

- [PHP Manual](index.md)
- [Різні класи та інтерфейси](spl.misc.md)
- Клас ArrayObject

# Клас ArrayObject

(PHP 5, PHP 7, PHP 8)

## Вступ

Цей клас дозволяє об'єктам працювати як масиви.

## Огляд класів

class **ArrayObject** implements
[IteratorAggregate](class.iteratoraggregate.md),
[ArrayAccess](class.arrayaccess.md),
[Serializable](class.serializable.md),
[Countable](class.countable.md) {

/\* Константи \*/

const int `STD_PROP_LIST` u003d 1;

const int `ARRAY_AS_PROPS` u003d 2;

/\* Методи \*/

public [\_\_construct](arrayobject.construct.md)(array\|object
`$array` u003d \[\], int `$flags` u003d 0, string `$iteratorClass` u003d
ArrayIterator::class)

public
[append](arrayobject.append.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [asort](arrayobject.asort.md)(int `$flags` u003d
**`SORT_REGULAR`**): bool

public [count](arrayobject.count.md)(): int

public [exchangeArray](arrayobject.exchangearray.md)(array\|object
`$array`): array

public [getArrayCopy](arrayobject.getarraycopy.md)(): array

public [getFlags](arrayobject.getflags.md)(): int

public [getIterator](arrayobject.getiterator.md)():
[Iterator](class.iterator.md)

public [getIteratorClass](arrayobject.getiteratorclass.md)(): string

public [ksort](arrayobject.ksort.md)(int `$flags` u003d
**`SORT_REGULAR`**): bool

public [natcasesort](arrayobject.natcasesort.md)(): bool

public [natsort](arrayobject.natsort.md)(): bool

public
[offsetExists](arrayobject.offsetexists.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): bool

public
[offsetGet](arrayobject.offsetget.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[offsetSet](arrayobject.offsetset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[offsetUnset](arrayobject.offsetunset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): void

public [serialize](arrayobject.serialize.md)(): string

public [setFlags](arrayobject.setflags.md)(int `$flags`): void

public [setIteratorClass](arrayobject.setiteratorclass.md)(string
`$iteratorClass`): void

public
[uasort](arrayobject.uasort.md)([callable](language.types.callable.md)
`$callback`): bool

public
[uksort](arrayobject.uksort.md)([callable](language.types.callable.md)
`$callback`): bool

public [unserialize](arrayobject.unserialize.md)(string `$data`): void

}

## Зумовлені константи

## Опції ArrayObject

**`ArrayObject::STD_PROP_LIST`**
Властивості об'єкта набувають стандартної поведінки при доступі у вигляді
списку (var_dump, foreach тощо).

**`ArrayObject::ARRAY_AS_PROPS`**
Записи можуть бути доступні як властивості (для читання та запису).

## Зміст

- [ArrayObject::append](arrayobject.append.md) — Додає значення
в кінець масиву
- [ArrayObject::asort](arrayobject.asort.md) — Сортувати записи за
значенню
- [ArrayObject::\_\_construct](arrayobject.construct.md) - Створює
новий об'єкт масиву
- [ArrayObject::count](arrayobject.count.md) — Отримати кількість
загальнодоступних властивостей ArrayObject
- [ArrayObject::exchangeArray](arrayobject.exchangearray.md) -
Замінити масив на інший
- [ArrayObject::getArrayCopy](arrayobject.getarraycopy.md) — Створює
копію ArrayObject
- [ArrayObject::getFlags](arrayobject.getflags.md) — Отримує прапори
поведінки
- [ArrayObject::getIterator](arrayobject.getiterator.md) — Створити
новий ітератор із екземпляра ArrayObject
- [ArrayObject::getIteratorClass](arrayobject.getiteratorclass.md) -
Отримує ім'я класу ітератора ArrayObject
- [ArrayObject::ksort](arrayobject.ksort.md) — Сортувати записи за
ключам
- [ArrayObject::natcasesort](arrayobject.natcasesort.md) -
Сортувати масив, використовуючи реєстронезалежний алгоритм "natural
order"
- [ArrayObject::natsort](arrayobject.natsort.md) — Сортувати
масив, використовуючи алгоритм "natural order"
- [ArrayObject::offsetExists](arrayobject.offsetexists.md) -
Повертає, чи вказаний індекс існує
- [ArrayObject::offsetGet](arrayobject.offsetget.md) — Повертає
значення за вказаним індексом
- [ArrayObject::offsetSet](arrayobject.offsetset.md) — Встановлює
нове значення за вказаним індексом
- [ArrayObject::offsetUnset](arrayobject.offsetunset.md) — Видаляє
значення за вказаним індексом
- [ArrayObject::serialize](arrayobject.serialize.md) — Серіалізувати
ArrayObject
- [ArrayObject::setFlags](arrayobject.setflags.md) - Встановлює
прапори поведінки
- [ArrayObject::setIteratorClass](arrayobject.setiteratorclass.md) -
Встановлює ім'я класу ітератора ArrayObject
- [ArrayObject::uasort](arrayobject.uasort.md) — Сортувати записи,
використовуючи функцію користувача для порівняння елементів і
зберігаючи при цьому зв'язок ключ/значення
- [ArrayObject::uksort](arrayobject.uksort.md) — Сортувати масив
за ключами, використовуючи функцію користувача для порівняння
- [ArrayObject::unserialize](arrayobject.unserialize.md) -
Десеріалізувати ArrayObject
