- [« ArrayIterator::uasort](arrayiterator.uasort.md)
- [ArrayIterator::unserialize »](arrayiterator.unserialize.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Сортування за ключами за допомогою заданої функції порівняння

# ArrayIterator::uksort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayIterator::uksort — Сортування за ключами за допомогою заданої функції
порівняння

### Опис

public
**ArrayIterator::uksort**([callable](language.types.callable.md)
`$callback`): bool

Сортує записи в масиві за ключами, використовуючи функцію сортування,
визначену користувачем.

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

### Список параметрів

`callback`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Дивіться також

- [ArrayIterator::asort()](arrayiterator.asort.md) - Сортує
елементи за значеннями
- [ArrayIterator::ksort()](arrayiterator.ksort.md) - Сортує
елементи за ключами
- [ArrayIterator::natcasesort()](arrayiterator.natcasesort.md) -
Сортує елементи "натурально", з урахуванням регістру
- [ArrayIterator::natsort()](arrayiterator.natsort.md) - Сортує
елементи "натурально"
- **ArrayIterator::uksort()**
- [uksort()](function.uksort.md) - Сортує масив за ключами,
використовуючи функцію користувача для порівняння ключів
