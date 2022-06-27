- [«Ds\Hashable::hash](ds-hashable.hash.md)
- [Ds\Sequence::allocate »](ds-sequence.allocate.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Інтерфейс Sequence

# Інтерфейс Sequence

(No version information available, might only be in Git)

## Вступ

Послідовність описує поведінку, у якій значення
розподілені в одному, лінійному порядку. У деяких мовах це
поведінка описується як "List". Це схоже на масив, в якому
використовуються цілі ключі, за винятком декількох моментів:

- Значення завжди проіндексовані по порядку [0, 1, 2, …, size -
1].
- Можна звертатися лише до значень індексованих у діапазоні \[0,
size – 1\].

У яких випадках використовується:

- Якщо ви хочете використовувати масив як список (не звертаючи уваги
на ключі).
- Більш ефективна альтернатива для
[SplDoublyLinkedList](class.spldoublylinkedlist.md) та
[SplFixedArray](class.splfixedarray.md).

## Огляд інтерфейсів

class **Ds\Sequence** implements **Ds\Collection**,
[ArrayAccess](class.arrayaccess.md) {

/\* Методи \*/

abstract public [allocate](ds-sequence.allocate.md)(int `$capacity`):
void

abstract public
[apply](ds-sequence.apply.md)([callable](language.types.callable.md)
`$callback`): void

abstract public [capacity](ds-sequence.capacity.md)(): int

abstract public
[contains](ds-sequence.contains.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): bool

abstract public
[filter](ds-sequence.filter.md)([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Sequence](class.ds-sequence.md)

abstract public
[find](ds-sequence.find.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public [first](ds-sequence.first.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public [get](ds-sequence.get.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public [insert](ds-sequence.insert.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

abstract public [join](ds-sequence.join.md)(string `$glue` u003d ?):
string

abstract public [last](ds-sequence.last.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public
[map](ds-sequence.map.md)([callable](language.types.callable.md)
`$callback`): [Ds\Sequence](class.ds-sequence.md)

abstract public
[merge](ds-sequence.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Sequence](class.ds-sequence.md)

abstract public [pop](ds-sequence.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public
[push](ds-sequence.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

abstract public
[reduce](ds-sequence.reduce.md)([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public [remove](ds-sequence.remove.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public [reverse](ds-sequence.reverse.md)(): void

abstract public [reversed](ds-sequence.reversed.md)():
[Ds\Sequence](class.ds-sequence.md)

abstract public [rotate](ds-sequence.rotate.md)(int `$rotations`):
void

abstract public [set](ds-sequence.set.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

abstract public [shift](ds-sequence.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public [slice](ds-sequence.slice.md)(int `$index`, int
`$length` u003d ?): [Ds\Sequence](class.ds-sequence.md)

abstract public
[sort](ds-sequence.sort.md)([callable](language.types.callable.md)
`$comparator` u003d ?): void

abstract public
[sorted](ds-sequence.sorted.md)([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Sequence](class.ds-sequence.md)

abstract public [sum](ds-sequence.sum.md)(): int\|float

abstract public
[unshift](ds-sequence.unshift.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
$values u003d ?): void

}

## Список змін

| Версія | Опис |
|---------------|--------------------------------- ------------------------------|
| PECL DS 1.3.0 | Тепер клас продає [ArrayAccess](class.arrayaccess.md). |

## Зміст

- [Ds\Sequence::allocate](ds-sequence.allocate.md) — Виділення
пам'яті під зазначену місткість
- [Ds\Sequence::apply](ds-sequence.apply.md) — Оновлення всіх
значень застосуванням до них переданої callback-функції
- [Ds\Sequence::capacity](ds-sequence.capacity.md) - Повертає
поточну місткість
- [Ds\Sequence::contains](ds-sequence.contains.md) — Перевіряє,
чи містяться в колекції задані значення
- [Ds\Sequence::filter](ds-sequence.filter.md) — Створює нову
послідовність елементів, вибраних за допомогою заданої
callback-функції
- [Ds\Sequence::find](ds-sequence.find.md) — Пошук індексу з
значенню
- [Ds\Sequence::first](ds-sequence.first.md) - Повертає перший
елемент колекції
- [Ds\Sequence::get](ds-sequence.get.md) — Повертає значення за
індексу
- [Ds\Sequence::insert](ds-sequence.insert.md) — Вставляє значення
за вказаним індексом
- [Ds\Sequence::join](ds-sequence.join.md) — Склеює всі значення
у рядок
- [Ds\Sequence::last](ds-sequence.last.md) - Повертає останнє
значення колекції
- [Ds\Sequence::map](ds-sequence.map.md) — Повертає результат
застосування callback-функції до всіх значень колекції
- [Ds\Sequence::merge](ds-sequence.merge.md) — Повертає результат
додавання всіх заданих значень до колекції
- [Ds\Sequence::pop](ds-sequence.pop.md) — Видаляє та повертає
останнє значення
- [Ds\Sequence::push](ds-sequence.push.md) — Додає значення до
кінець послідовності
- [Ds\Sequence::reduce](ds-sequence.reduce.md) - Сплескує
колекцію до одного значення використовуючи callback-функцію
- [Ds\Sequence::remove](ds-sequence.remove.md) — Видаляє та
повертає значення за індексом
- [Ds\Sequence::reverse](ds-sequence.reverse.md) - Перевертає
поточну колекцію
- [Ds\Sequence::reversed](ds-sequence.reversed.md) - Повертає
перегорнуту копію колекції
- [Ds\Sequence::rotate](ds-sequence.rotate.md) - Перемотує
послідовність на задану кількість значень
- [Ds\Sequence::set](ds-sequence.set.md) — Замінює значення за
зазначеному індексу
- [Ds\Sequence::shift](ds-sequence.shift.md) — Видаляє та повертає
перше значення
- [Ds\Sequence::slice](ds-sequence.slice.md) - Повертає
під-колекцію із заданого діапазону
- [Ds\Sequence::sort](ds-sequence.sort.md) — Сортує колекцію
- [Ds\Sequence::sorted](ds-sequence.sorted.md) — Повертає
відсортовану за значенням копію колекції
- [Ds\Sequence::sum](ds-sequence.sum.md) — Повертає суму всіх
значень колекції
- [Ds\Sequence::unshift](ds-sequence.unshift.md) — Додає
значення на початок послідовності
