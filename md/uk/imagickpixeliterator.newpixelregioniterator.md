- [«
ImagickPixelIterator::newPixelIterator](imagickpixeliterator.newpixeliterator.md)
- [ImagickPixelIterator::resetIterator
»](imagickpixeliterator.resetiterator.md)

- [PHP Manual](index.md)
- [ImagickPixelIterator](class.imagickpixeliterator.md)
- Повертає новий ітератор пікселів

# ImagickPixelIterator::newPixelRegionIterator

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::newPixelRegionIterator — Повертає новий ітератор
пікселів

### Опис

public **ImagickPixelIterator::newPixelRegionIterator**(
[Imagick](class.imagick.md) `$wand`,
int `$x`,
int `$y`,
int `$columns`,
int `$rows`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Повертає новий ітератор пікселів.

### Список параметрів

`wand`

`x`

`y`

`columns`

`rows`

### Значення, що повертаються

Повертає новий об'єкт ImagickPixelIterator у разі успішного
виконання; інакше викидає виняток
ImagickPixelIteratorException.
