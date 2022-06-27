- [Ds\Vector::unshift](ds-vector.unshift.md)
- [Ds\Deque::allocate »](ds-deque.allocate.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас Deque

# Клас Deque

(No version information available, might only be in Git)

## Вступ

Двостороння черга - це послідовність значень у безперервному
буфер, який росте і зменшується автоматично. Deque (вимовляється
як "deck") є абревіатурою від "double-ended queue" та
використовується всередині **Ds\Queue**.

Два вказівники використовуються для відстеження початку та кінця. Вказівники
можуть "обернути" кінець черги, що дозволяє уникнути переміщення
значень для визволення місця. Це робить операції shift та unshift
такими швидкими, що **Ds\Vector** не може з цим змагатися.

Доступ до елемента за індексом вимагає перерахунку залежно від нього
індексу у буфері: `((head + position) % capacity)`.

## Сильні сторони

- Підтримує синтаксис масиву (квадратні дужки).
- вимагає менше пам'яті, ніж масив (array) з тією ж кількістю
значень.
- Автоматично звільняє пам'ять, коли кількість елементів
зменшується.
- **get()**, **set()**, **push()**, **pop()**, **shift()** та
**unshift()** мають складність O(1).

## Слабкі сторони

- Місткість обмежена ступенями двійки.
- **insert()** і **remove()** мають складність O(n).

## Огляд класів

class **Ds\Deque** implements **Ds\Sequence**,
[ArrayAccess](class.arrayaccess.md) {

/\* Константи \*/

const int `MIN_CAPACITY` u003d 8;

/\* Методи \*/

public [allocate](ds-deque.allocate.md)(int `$capacity`): void

public
[apply](ds-deque.apply.md)([callable](language.types.callable.md)
`$callback`): void

public [capacity](ds-deque.capacity.md)(): int

public [clear](ds-deque.clear.md)(): void

public
[contains](ds-deque.contains.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): bool

public [copy](ds-deque.copy.md)(): [Ds\Deque](class.ds-deque.md)

public
[filter](ds-deque.filter.md)([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Deque](class.ds-deque.md)

public
[find](ds-deque.find.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [first](ds-deque.first.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [get](ds-deque.get.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [insert](ds-deque.insert.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public [isEmpty](ds-deque.isempty.md)(): bool

public [join](ds-deque.join.md)(string `$glue` u003d ?): string

public [last](ds-deque.last.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [map](ds-deque.map.md)([callable](language.types.callable.md)
`$callback`): [Ds\Deque](class.ds-deque.md)

public
[merge](ds-deque.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Deque](class.ds-deque.md)

public [pop](ds-deque.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[push](ds-deque.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public
[reduce](ds-deque.reduce.md)([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [remove](ds-deque.remove.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [reverse](ds-deque.reverse.md)(): void

public [reversed](ds-deque.reversed.md)():
[Ds\Deque](class.ds-deque.md)

public [rotate](ds-deque.rotate.md)(int `$rotations`): void

public [set](ds-deque.set.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [shift](ds-deque.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [slice](ds-deque.slice.md)(int `$index`, int `$length` u003d ?):
[Ds\Deque](class.ds-deque.md)

public
[sort](ds-deque.sort.md)([callable](language.types.callable.md)
`$comparator` u003d ?): void

public
[sorted](ds-deque.sorted.md)([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Deque](class.ds-deque.md)

public [sum](ds-deque.sum.md)(): int\|float

public [toArray](ds-deque.toarray.md)(): array

public
[unshift](ds-deque.unshift.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
$values u003d ?): void

}

## Зумовлені константи

**`Ds\Deque::MIN_CAPACITY`**

## Список змін

| Версія | Опис |
|---------------|--------------------------------- ------------------------------|
| PECL DS 1.3.0 | Тепер клас продає [ArrayAccess](class.arrayaccess.md). |

## Зміст

- [Ds\Deque::allocate](ds-deque.allocate.md) — Виділяє пам'ять під
зазначену місткість
- [Ds\Deque::apply](ds-deque.apply.md) — Оновлює всі значення,
застосовуючи callback-функцію до кожного значення
- [Ds\Deque::capacity](ds-deque.capacity.md) — Повертає поточну
місткість
- [Ds\Deque::clear](ds-deque.clear.md) — Видаляє всі значення з
двосторонньої черги
- [Ds\Deque::\_\_construct](ds-deque.construct.md) — Створює новий
екземпляр
- [Ds\Deque::contains](ds-deque.contains.md) — Перевіряє, чи міститься
чи у двосторонній черзі задані значення
- [Ds\Deque::copy](ds-deque.copy.md) — Повертає поверхневу
копію колекції
- [Ds\Deque::count](ds-deque.count.md) — Повертає кількість
елементів двосторонньої черги
- [Ds\Deque::filter](ds-deque.filter.md) — Створює нову
двосторонню чергу з елементів, вибраних за допомогою заданої
callback-функції
- [Ds\Deque::find](ds-deque.find.md) — Пошук індексу за значенням
- [Ds\Deque::first](ds-deque.first.md) — Повертає перший елемент
двосторонньої черги
- [Ds\Deque::get](ds-deque.get.md) — Повертає значення за індексом
- [Ds\Deque::insert](ds-deque.insert.md) — Вставляє значення за
зазначеному індексу
- [Ds\Deque::isEmpty](ds-deque.isempty.md) — Перевіряє, чи пуста
двостороння черга
- [Ds\Deque::join](ds-deque.join.md) — Склеює всі значення в
рядок
- [Ds\Deque::jsonSerialize](ds-deque.jsonserialize.md) — Повертає
колекцію в JSON-представленні
- [Ds\Deque::last](ds-deque.last.md) — Повертає останнє значення
двосторонньої черги
- [Ds\Deque::map](ds-deque.map.md) — Повертає результат застосування
callback-функції до всіх значень двосторонньої черги
- [Ds\Deque::merge](ds-deque.merge.md) — Повертає результат
додавання всіх заданих значень у двосторонню чергу
- [Ds\Deque::pop](ds-deque.pop.md) — Видаляє та повертає останнє
значення
- [Ds\Deque::push](ds-deque.push.md) — Додає значення до кінця
двосторонньої черги
- [Ds\Deque::reduce](ds-deque.reduce.md) — Зменшує колекцію до
одного значення, використовуючи callback-функцію
- [Ds\Deque::remove](ds-deque.remove.md) — Видаляє та повертає
значення за індексом
- [Ds\Deque::reverse](ds-deque.reverse.md) — Перевертає поточну
двосторонню чергу
- [Ds\Deque::reversed](ds-deque.reversed.md) - Повертає
перегорнуту копію двосторонньої черги
- [Ds\Deque::rotate](ds-deque.rotate.md) — Перемотує
двосторонню чергу на задану кількість значень
- [Ds\Deque::set](ds-deque.set.md) — Замінює значення вказаного
індексу
- [Ds\Deque::shift](ds-deque.shift.md) — Видаляє та повертає перше
значення
- [Ds\Deque::slice](ds-deque.slice.md) — Повертає почергово з
заданого діапазону
- [Ds\Deque::sort](ds-deque.sort.md) — Сортує двосторонню
черга
- [Ds\Deque::sorted](ds-deque.sorted.md) — Повертає
відсортовану за значенням копію двосторонньої черги
- [Ds\Deque::sum](ds-deque.sum.md) — Повертає суму всіх значень
двосторонньої черги
- [Ds\Deque::toArray](ds-deque.toarray.md) - Перетворює
двосторонню чергу в масив (array)
- [Ds\Deque::unshift](ds-deque.unshift.md) — Додає значення до
початок двосторонньої черги
