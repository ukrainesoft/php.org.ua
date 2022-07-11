- [« Ds\Deque::unshift](ds-deque.unshift.md)
- [Ds\Map::allocate »](ds-map.allocate.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас Map

# Клас Map

(No version information available, might only be in Git)

## Вступ

Колекція пар - це послідовна колекція, що містить пари
ключ-значення, практично ідентична масиву і використовується для тих же
цілей. Ключі можуть бути будь-якого типу, але мають бути унікальними. Якщо
додати пару з вже існуючим ключем, вона буде замінена.

## Сильні сторони

- Ключі та значення можуть бути будь-якого типу, включаючи об'єкти.
- Підтримує синтаксис масиву (квадратні дужки).
- Зберігається порядок вставки.
- Швидкість та споживання пам'яті можна порівняти з використанням масиву.
- Автоматично звільняє пам'ять, коли кількість елементів
зменшується.

## Слабкі сторони

- Не може бути конвертована в масив, якщо як ключі
використовуються об'єкти.

## Огляд класів

class **Ds\Map** implements **Ds\Collection**,
[ArrayAccess](class.arrayaccess.md) {

/\* Константи \*/

const int `MIN_CAPACITY` u003d 16;

/\* Методи \*/

public [allocate](ds-map.allocate.md)(int `$capacity`): void

public
[apply](ds-map.apply.md)([callable](language.types.callable.md)
`$callback`): void

public [capacity](ds-map.capacity.md)(): int

public [clear](ds-map.clear.md)(): void

public [copy](ds-map.copy.md)(): [Ds\Map](class.ds-map.md)

public [diff](ds-map.diff.md)([Ds\Map](class.ds-map.md) `$map`):
[Ds\Map](class.ds-map.md)

public
[filter](ds-map.filter.md)([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Map](class.ds-map.md)

public [first](ds-map.first.md)(): [Ds\Pair](class.ds-pair.md)

public
[get](ds-map.get.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[hasKey](ds-map.haskey.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): bool

public
[hasValue](ds-map.hasvalue.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

public [intersect](ds-map.intersect.md)([Ds\Map](class.ds-map.md)
`$map`): [Ds\Map](class.ds-map.md)

public [isEmpty](ds-map.isempty.md)(): bool

public [keys](ds-map.keys.md)(): [Ds\Set](class.ds-set.md)

public
[ksort](ds-map.ksort.md)([callable](language.types.callable.md)
`$comparator` u003d ?): void

public
[ksorted](ds-map.ksorted.md)([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Map](class.ds-map.md)

public [last](ds-map.last.md)(): [Ds\Pair](class.ds-pair.md)

public [map](ds-map.map.md)([callable](language.types.callable.md)
`$callback`): [Ds\Map](class.ds-map.md)

public
[merge](ds-map.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Map](class.ds-map.md)

public [pairs](ds-map.pairs.md)():
[Ds\Sequence](class.ds-sequence.md)

public
[put](ds-map.put.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[putAll](ds-map.putall.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$pairs`): void

public
[reduce](ds-map.reduce.md)([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[remove](ds-map.remove.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [reverse](ds-map.reverse.md)(): void

public [reversed](ds-map.reversed.md)(): [Ds\Map](class.ds-map.md)

public [skip](ds-map.skip.md)(int `$position`):
[Ds\Pair](class.ds-pair.md)

public [slice](ds-map.slice.md)(int `$index`, int `$length` u003d ?):
[Ds\Map](class.ds-map.md)

public [sort](ds-map.sort.md)([callable](language.types.callable.md)
`$comparator` u003d ?): void

public
[sorted](ds-map.sorted.md)([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Map](class.ds-map.md)

public [sum](ds-map.sum.md)(): int\|float

public [toArray](ds-map.toarray.md)(): array

public [union](ds-map.union.md)([Ds\Map](class.ds-map.md) `$map`):
[Ds\Map](class.ds-map.md)

public [values](ds-map.values.md)():
[Ds\Sequence](class.ds-sequence.md)

public [xor](ds-map.xor.md)([Ds\Map](class.ds-map.md) `$map`):
[Ds\Map](class.ds-map.md)

}

## Зумовлені константи

**`Ds\Map::MIN_CAPACITY`**

## Список змін

| Версія | Опис |
|---------------|--------------------------------- ------------------------------|
| PECL DS 1.3.0 | Тепер клас продає [ArrayAccess](class.arrayaccess.md). |

## Зміст

- [Ds\Map::allocate](ds-map.allocate.md) — Виділяє потрібне
кількість пам'яті під необхідну місткість
- [Ds\Map::apply](ds-map.apply.md) — Оновлення всіх значень
застосуванням до них переданої callback-функції
- [Ds\Map::capacity](ds-map.capacity.md) — Повертає поточну
місткість
- [Ds\Map::clear](ds-map.clear.md) — Видаляє всі значення з
колекції
- [Ds\Map::\_\_construct](ds-map.construct.md) — Створює новий
екземпляр
- [Ds\Map::copy](ds-map.copy.md) — Повертає поверхневу копію
колекції
- [Ds\Map::count](ds-map.count.md) — Повертає кількість елементів
колекції
- [Ds\Map::diff](ds-map.diff.md) — Створює нову колекцію пар з
елементами, ключів яких немає в іншій колекції пар
- [Ds\Map::filter](ds-map.filter.md) — Створює нову колекцію пар
з елементів, вибраних за допомогою заданої callback-функції
- [Ds\Map::first](ds-map.first.md) — Повертає перший елемент
колекції
- [Ds\Map::get](ds-map.get.md) — Повертає значення за ключем
- [Ds\Map::hasKey](ds-map.haskey.md) — Перевіряє, чи міститься
колекція заданий ключ
- [Ds\Map::hasValue](ds-map.hasvalue.md) — Перевіряє, чи міститься
колекція задане значення
- [Ds\Map::intersect](ds-map.intersect.md) — Створює нову колекцію
пар, створену перетином з іншою колекцією пар
- [Ds\Map::isEmpty](ds-map.isempty.md) — Перевіряє, чи пуста
колекція
- [Ds\Map::jsonSerialize](ds-map.jsonserialize.md) — Повертає
колекцію в JSON-представленні
- [Ds\Map::keys](ds-map.keys.md) — Повертає набір ключів колекції
- [Ds\Map::ksort](ds-map.ksort.md) — Сортує поточну колекцію за
ключам
- [Ds\Map::ksorted](ds-map.ksorted.md) — Повертає копію колекції,
відсортованою за ключами
- [Ds\Map::last](ds-map.last.md) — Повертає останню пару
колекції
- [Ds\Map::map](ds-map.map.md) — Повертає результат застосування
callback-функції до всіх значень колекції
- [Ds\Map::merge](ds-map.merge.md) — Повертає результат додавання
всіх заданих елементів у колекцію
- [Ds\Map::pairs](ds-map.pairs.md) — Повертає послідовність,
містить всі пари колекції
- [Ds\Map::put](ds-map.put.md) — Встановлення значення за заданим
ключу
- [Ds\Map::putAll](ds-map.putall.md) — Зв'язує з колекцією все
пари ключ-значення з об'єкту класу traversable або масиву
- [Ds\Map::reduce](ds-map.reduce.md) — Зменшує колекцію до одного
значення, використовуючи callback-функцію
- [Ds\Map::remove](ds-map.remove.md) — Видаляє та повертає значення
по ключу
- [Ds\Map::reverse](ds-map.reverse.md) — Перевертає поточну
колекцію
- [Ds\Map::reversed](ds-map.reversed.md) — Повертає перевернуту
копію колекції
- [Ds\Map::skip](ds-map.skip.md) — Повертає пару за індексом
позиції
- [Ds\Map::slice](ds-map.slice.md) — Повертає підмножину
колекції із заданого діапазону
- [Ds\Map::sort](ds-map.sort.md) — Сортує колекцію за значеннями
- [Ds\Map::sorted](ds-map.sorted.md) — Повертає відсортовану за
значенням копію колекції
- [Ds\Map::sum](ds-map.sum.md) — Повертає суму всіх значень
колекції
- [Ds\Map::toArray](ds-map.toarray.md) — Перетворює колекцію на
array
- [Ds\Map::union](ds-map.union.md) — Створює нову колекцію пар з
елементів двох колекцій
- [Ds\Map::values](ds-map.values.md) — Повертає послідовність
значень колекції
- [Ds\Map::xor](ds-map.xor.md) — Створює нову колекцію пар з
елементів, які є в одній із колекцій, але не в обох
одночасно
