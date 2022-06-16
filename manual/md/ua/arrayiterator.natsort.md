- [« ArrayIterator::natcasesort](arrayiterator.natcasesort.md)
- [ArrayIterator::next »](arrayiterator.next.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Сортує елементи "натурально"

# ArrayIterator::natsort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayIterator::natsort — Сортує елементи "натурально"

### Опис

public **ArrayIterator::natsort**(): bool

Сортує записи в масиві за значеннями, використовуючи натуральний алгоритм
сортування.

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
- **ArrayIterator::natsort()**
- [ArrayIterator::uasort()](arrayiterator.uasort.md) - Сортування з
допомогою заданої користувачем функції та збереженням ключів
- [ArrayIterator::uksort()](arrayiterator.uksort.md) - Сортування за
ключам за допомогою заданої функції порівняння
- [natsort()](function.natsort.md) - Сортує масив, використовуючи
алгоритм "natural order"
