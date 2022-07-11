- [« ArrayIterator::ksort](arrayiterator.ksort.md)
- [ArrayIterator::natsort »](arrayiterator.natsort.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Сортує елементи "натурально", з урахуванням регістру

# ArrayIterator::natcasesort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayIterator::natcasesort — Сортує елементи "натурально", з урахуванням
регістру

### Опис

public **ArrayIterator::natcasesort**(): bool

Сортує записи в масиві за значеннями, використовуючи натуральний алгоритм
сортування з урахуванням регістру.

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Дивіться також

- [ArrayIterator::asort()](arrayiterator.asort.md) - Сортує
елементи за значеннями
- [ArrayIterator::ksort()](arrayiterator.ksort.md) - Сортує
елементи за ключами
- [ArrayIterator::natsort()](arrayiterator.natsort.md) - Сортує
елементи "натурально"
- [ArrayIterator::uasort()](arrayiterator.uasort.md) - Сортування з
допомогою заданої користувачем функції та збереженням ключів
- [ArrayIterator::uksort()](arrayiterator.uksort.md) - Сортування за
ключам за допомогою заданої функції порівняння
- [natcasesort()](function.natcasesort.md) - Сортує масив,
використовуючи алгоритм "natural order" без урахування регістру символів
