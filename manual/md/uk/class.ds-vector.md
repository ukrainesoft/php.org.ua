- [« Ds\Sequence::unshift](ds-sequence.unshift.md)
- [Ds\Vector::allocate »](ds-vector.allocate.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас Vector

# Клас Vector

(No version information available, might only be in Git)

## Вступ

Вектор - це послідовність значень у безперервному буфері, який
зростає та обрізається автоматично. Це найбільш ефективна
послідовна структура, оскільки індекси значень прямо
відображаються на їх індекс у буфері, і фактор зростання не впливає на
складність доступу.

## Сильні сторони

- Підтримує синтаксис масиву (квадратні дужки).
- Використовує менше пам'яті, ніж масив (array) з тією самою кількістю
елементів.
- Автоматично звільняє пам'ять, коли кількість елементів
зменшується.
- Місткість не обмежена ступенями двійки.
- **get()**, **set()**, **push()** та **pop()** мають складність O(1).

## Слабкі сторони

- **shift()**, **unshift()**, **insert()** і **remove()** мають
складність O(n).

## Огляд класів

class **Ds\Vector** implements **Ds\Sequence**,
[ArrayAccess](class.arrayaccess.md) {

/\* Константи \*/

const int `MIN_CAPACITY` u003d 10;

/\* Методи \*/

public [allocate](ds-vector.allocate.md)(int `$capacity`): void

public
[apply](ds-vector.apply.md)([callable](language.types.callable.md)
`$callback`): void

public [capacity](ds-vector.capacity.md)(): int

public [clear](ds-vector.clear.md)(): void

public
[contains](ds-vector.contains.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): bool

public [copy](ds-vector.copy.md)(): [Ds\Vector](class.ds-vector.md)

public
[filter](ds-vector.filter.md)([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Vector](class.ds-vector.md)

public
[find](ds-vector.find.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [first](ds-vector.first.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [get](ds-vector.get.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [insert](ds-vector.insert.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public [isEmpty](ds-vector.isempty.md)(): bool

public [join](ds-vector.join.md)(string `$glue` u003d ?): string

public [last](ds-vector.last.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[map](ds-vector.map.md)([callable](language.types.callable.md)
`$callback`): [Ds\Vector](class.ds-vector.md)

public
[merge](ds-vector.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Vector](class.ds-vector.md)

public [pop](ds-vector.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[push](ds-vector.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public
[reduce](ds-vector.reduce.md)([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [remove](ds-vector.remove.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [reverse](ds-vector.reverse.md)(): void

public [reversed](ds-vector.reversed.md)():
[Ds\Vector](class.ds-vector.md)

public [rotate](ds-vector.rotate.md)(int `$rotations`): void

public [set](ds-vector.set.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [shift](ds-vector.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [slice](ds-vector.slice.md)(int `$index`, int `$length` u003d ?):
[Ds\Vector](class.ds-vector.md)

public
[sort](ds-vector.sort.md)([callable](language.types.callable.md)
`$comparator` u003d ?): void

public
[sorted](ds-vector.sorted.md)([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Vector](class.ds-vector.md)

public [sum](ds-vector.sum.md)(): int\|float

public [toArray](ds-vector.toarray.md)(): array

public
[unshift](ds-vector.unshift.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
$values u003d ?): void

}

## Зумовлені константи

**`Ds\Vector::MIN_CAPACITY`**

## Список змін

| Версія | Опис |
|---------------|--------------------------------- ------------------------------|
| PECL DS 1.3.0 | Тепер клас продає [ArrayAccess](class.arrayaccess.md). |

## Зміст

- [Ds\Vector::allocate](ds-vector.allocate.md) — Виділяє пам'ять під
зазначену місткість
- [Ds\Vector::apply](ds-vector.apply.md) — Оновлює всі значення,
застосовуючи до них передану callback-функцію
- [Ds\Vector::capacity](ds-vector.capacity.md) — Повертає поточну
місткість
- [Ds\Vector::clear](ds-vector.clear.md) — Видалення всіх значень
- [Ds\Vector::\_\_construct](ds-vector.construct.md) - Створює новий
екземпляр
- [Ds\Vector::contains](ds-vector.contains.md) — Перевіряє,
чи у векторі задані значення
- [Ds\Vector::copy](ds-vector.copy.md) — Повертає поверхневу
копію вектора
- [Ds\Vector::count](ds-vector.count.md) — Повертає кількість
елементів векторного
- [Ds\Vector::filter](ds-vector.filter.md) — Створює новий вектор з
елементів, вибраних за допомогою заданої callback-функції
- [Ds\Vector::find](ds-vector.find.md) — Пошук індексу за значенням
- [Ds\Vector::first](ds-vector.first.md) — Повертає перший елемент
вектора
- [Ds\Vector::get](ds-vector.get.md) — Повертає значення за
індексу
- [Ds\Vector::insert](ds-vector.insert.md) — Вставляє значення за
зазначеному індексу
- [Ds\Vector::isEmpty](ds-vector.isempty.md) — Перевіряє, чи порожній
вектор
- [Ds\Vector::join](ds-vector.join.md) — Склеює всі значення в
рядок
- [Ds\Vector::jsonSerialize](ds-vector.jsonserialize.md) -
Повертає вектор у JSON-виставі
- [Ds\Vector::last](ds-vector.last.md) - Повертає останнє
значення вектора
- [Ds\Vector::map](ds-vector.map.md) — Повертає результат
застосування callback-функції до всіх значень вектора
- [Ds\Vector::merge](ds-vector.merge.md) — Повертає результат
додавання всіх заданих значень у вектор
- [Ds\Vector::pop](ds-vector.pop.md) — Видаляє та повертає
останнє значення
- [Ds\Vector::push](ds-vector.push.md) — Додає значення до кінця
вектора
- [Ds\Vector::reduce](ds-vector.reduce.md) — Зменшує вектор до
одного значення, використовуючи callback-функцію
- [Ds\Vector::remove](ds-vector.remove.md) — Видаляє та повертає
значення за індексом
- [Ds\Vector::reverse](ds-vector.reverse.md) - Перевертає
поточний вектор
- [Ds\Vector::reversed](ds-vector.reversed.md) - Повертає
перегорнуту копію вектора
- [Ds\Vector::rotate](ds-vector.rotate.md) — Перемотує вектор на
задане число значень
- [Ds\Vector::set](ds-vector.set.md) — Замінює значення за
зазначеному індексу
- [Ds\Vector::shift](ds-vector.shift.md) — Видаляє та повертає
перше значення
- [Ds\Vector::slice](ds-vector.slice.md) — Повертає підвектор із
заданого діапазону
- [Ds\Vector::sort](ds-vector.sort.md) — Сортує вектор
- [Ds\Vector::sorted](ds-vector.sorted.md) — Повертає
відсортовану за значенням копію колекції
- [Ds\Vector::sum](ds-vector.sum.md) — Повертає суму всіх
значень колекції
- [Ds\Vector::toArray](ds-vector.toarray.md) — Перетворює колекцію
масив (array)
- [Ds\Vector::unshift](ds-vector.unshift.md) — Додає значення до
початок вектору
