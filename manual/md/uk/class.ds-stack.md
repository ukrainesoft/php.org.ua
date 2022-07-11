- [« Ds\Set::xor](ds-set.xor.md)
- [Ds\Stack::allocate »](ds-stack.allocate.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас Stack

# Клас Stack

(No version information available, might only be in Git)

## Вступ

Стек – це колекція типу "Останній увійшов, перший вийшов" (Last In,
First Out або LIFO), яка дозволяє працювати тільки з найвищим
(Останнім) значенням. Ітерація походить від кінця до початку з видаленням
взятого елемента.

Всередині використовує клас **Ds\Vector**.

## Огляд класів

class **Ds\Stack** implements **Ds\Collection**,
[ArrayAccess](class.arrayaccess.md) {

/\* Методи \*/

public [allocate](ds-stack.allocate.md)(int `$capacity`): void

public [capacity](ds-stack.capacity.md)(): int

public [clear](ds-stack.clear.md)(): void

public [copy](ds-stack.copy.md)(): [Ds\Stack](class.ds-stack.md)

public [isEmpty](ds-stack.isempty.md)(): bool

public [peek](ds-stack.peek.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [pop](ds-stack.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[push](ds-stack.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public [toArray](ds-stack.toarray.md)(): array

}

## Список змін

| Версія | Опис |
|---------------|--------------------------------- ------------------------------|
| PECL DS 1.3.0 | Тепер клас продає [ArrayAccess](class.arrayaccess.md). |

## Зміст

- [Ds\Stack::allocate](ds-stack.allocate.md) — Виділяє пам'ять під
зазначену місткість
- [Ds\Stack::capacity](ds-stack.capacity.md) — Повертає поточну
місткість
- [Ds\Stack::clear](ds-stack.clear.md) — Видаляє всі значення з
колекції
- [Ds\Stack::\_\_construct](ds-stack.construct.md) — Створює новий
екземпляр класу
- [Ds\Stack::copy](ds-stack.copy.md) — Повертає поверхневу
копію колекції
- [Ds\Stack::count](ds-stack.count.md) — Повертає кількість
елементів колекції
- [Ds\Stack::isEmpty](ds-stack.isempty.md) — Перевіряє, чи пуста
колекція
- [Ds\Stack::jsonSerialize](ds-stack.jsonserialize.md) — Повертає
колекцію в JSON-представленні
- [Ds\Stack::peek](ds-stack.peek.md) — Повертає значення з вершини
стеку
- [Ds\Stack::pop](ds-stack.pop.md) — Видаляє та повертає значення з
вершини стеку
- [Ds\Stack::push](ds-stack.push.md) — Додає значення до стек
- [Ds\Stack::toArray](ds-stack.toarray.md) — Перетворює колекцію на
масив (array)
