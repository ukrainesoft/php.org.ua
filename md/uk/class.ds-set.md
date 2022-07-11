- [« Ds\Pair::toArray](ds-pair.toarray.md)
- [Ds\Set::add »](ds-set.add.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас Set

# Клас Set

(No version information available, might only be in Git)

## Вступ

Set – це послідовність унікальних значень. Реалізація використовує
ту ж хеш-таблицю, що і **Ds\Map**, в якій значення використовуються в
як ключі, а пов'язані значення ігноруються.

## Сильні сторони

- Значення можуть бути будь-якого типу, включаючи об'єкти.
- Підтримує синтаксис масиву (квадратні дужки).
- Зберігається порядок вставки.
- Автоматично звільняє пам'ять, коли кількість елементів
значно зменшується.
- **add()**, **remove()** та **contains()** мають складність O(1).

## Слабкі сторони

- Не підтримує **push()**, **pop()**, **insert()**, **shift()** та
**unshift()**.
- **get()** має складність O(n), якщо є віддалені значення
буфері, до значення, якого відбувається доступ. Інакше O(1).

## Огляд класів

class **Ds\Set** implements **Ds\Collection**,
[ArrayAccess](class.arrayaccess.md) {

/\* Константи \*/

const int `MIN_CAPACITY` u003d 16;

/\* Методи \*/

public
[add](ds-set.add.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public [allocate](ds-set.allocate.md)(int `$capacity`): void

public [capacity](ds-set.capacity.md)(): int

public [clear](ds-set.clear.md)(): void

public
[contains](ds-set.contains.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): bool

public [copy](ds-set.copy.md)(): [Ds\Set](class.ds-set.md)

public [diff](ds-set.diff.md)([Ds\Set](class.ds-set.md) `$set`):
[Ds\Set](class.ds-set.md)

public
[filter](ds-set.filter.md)([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Set](class.ds-set.md)

public [first](ds-set.first.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [get](ds-set.get.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [intersect](ds-set.intersect.md)([Ds\Set](class.ds-set.md)
`$set`): [Ds\Set](class.ds-set.md)

public [isEmpty](ds-set.isempty.md)(): bool

public [join](ds-set.join.md)(string `$glue` u003d ?): string

public [last](ds-set.last.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[merge](ds-set.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Set](class.ds-set.md)

public
[reduce](ds-set.reduce.md)([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[remove](ds-set.remove.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public [reverse](ds-set.reverse.md)(): void

public [reversed](ds-set.reversed.md)(): [Ds\Set](class.ds-set.md)

public [slice](ds-set.slice.md)(int `$index`, int `$length` u003d ?):
[Ds\Set](class.ds-set.md)

public [sort](ds-set.sort.md)([callable](language.types.callable.md)
`$comparator` u003d ?): void

public
[sorted](ds-set.sorted.md)([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Set](class.ds-set.md)

public [sum](ds-set.sum.md)(): int\|float

public [toArray](ds-set.toarray.md)(): array

public [union](ds-set.union.md)([Ds\Set](class.ds-set.md) `$set`):
[Ds\Set](class.ds-set.md)

public [xor](ds-set.xor.md)([Ds\Set](class.ds-set.md) `$set`):
[Ds\Set](class.ds-set.md)

}

## Зумовлені константи

**`Ds\Set::MIN_CAPACITY`**

## Список змін

| Версія | Опис |
|---------------|--------------------------------- ------------------------------|
| PECL DS 1.3.0 | Тепер клас продає [ArrayAccess](class.arrayaccess.md). |

## Зміст

- [Ds\Set::add](ds-set.add.md) — Додає значення до набору
- [Ds\Set::allocate](ds-set.allocate.md) — Виділяє пам'ять під
зазначену місткість
- [Ds\Set::capacity](ds-set.capacity.md) — Повертає поточну
місткість
- [Ds\Set::clear](ds-set.clear.md) — Видаляє всі значення з
колекції
- [Ds\Set::\_\_construct](ds-set.construct.md) - Створює новий
екземпляр класу
- [Ds\Set::contains](ds-set.contains.md) — Перевіряє, чи міститься
у колекції задані значення
- [Ds\Set::copy](ds-set.copy.md) — Повертає поверхневу копію
колекції
- [Ds\Set::count](ds-set.count.md) — Повертає кількість елементів
колекції
- [Ds\Set::diff](ds-set.diff.md) — Створення нового набору з елементами,
яких немає в іншому наборі
- [Ds\Set::filter](ds-set.filter.md) — Створення нового списку з
елементів, вибраних за допомогою заданої callback-функції
- [Ds\Set::first](ds-set.first.md) — Повертає перший елемент
колекції
- [Ds\Set::get](ds-set.get.md) — Повертає значення за індексом
- [Ds\Set::intersect](ds-set.intersect.md) — Створення нового набору,
створений перетином з іншим набором
- [Ds\Set::isEmpty](ds-set.isempty.md) — Перевіряє, чи порожня
колекція
- [Ds\Set::join](ds-set.join.md) — Склеює всі значення в рядок
- [Ds\Set::jsonSerialize](ds-set.jsonserialize.md) — Повертає
колекцію в JSON-представленні
- [Ds\Set::last](ds-set.last.md) — Повертає останнє значення
колекції
- [Ds\Set::merge](ds-set.merge.md) — Повертає результат додавання
всіх заданих значень у набір
- [Ds\Set::reduce](ds-set.reduce.md) — Зменшує колекцію до одного
значення, використовуючи callback-функцію
- [Ds\Set::remove](ds-set.remove.md) — Видалення всіх заданих значень
з набору
- [Ds\Set::reverse](ds-set.reverse.md) — Перевертає поточну
колекцію
- [Ds\Set::reversed](ds-set.reversed.md) — Повертає перевернуту
копію колекції
- [Ds\Set::slice](ds-set.slice.md) — Повертає підбір з
заданого діапазону
- [Ds\Set::sort](ds-set.sort.md) — Сортує колекцію
- [Ds\Set::sorted](ds-set.sorted.md) — Повертає відсортовану за
значенням копію колекції
- [Ds\Set::sum](ds-set.sum.md) — Повертає суму всіх значень
колекції
- [Ds\Set::toArray](ds-set.toarray.md) — Перетворює колекцію на
масив (array)
- [Ds\Set::union](ds-set.union.md) — Створення нового набору з
елементів поточного та переданого наборів
- [Ds\Set::xor](ds-set.xor.md) — Створення нового набору значень,
які є в одному з наборів, але не в обох одночасно
