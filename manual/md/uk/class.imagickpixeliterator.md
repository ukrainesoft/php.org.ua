- [« ImagickPixel::setIndex](imagickpixel.setindex.md)
- [ImagickPixelIterator::clear »](imagickpixeliterator.clear.md)

- [PHP Manual](index.md)
- [ImageMagick](book.imagick.md)
- Клас ImagickPixelIterator

# Клас [ImagickPixelIterator](class.imagickpixeliterator.md)

(PECL imagick 2, PECL imagick 3)

## Огляд класів

class **ImagickPixelIterator** {

public [clear](imagickpixeliterator.clear.md)(): bool

public
[\_\_construct](imagickpixeliterator.construct.md)([Imagick](class.imagick.md)
`$wand`)

public [destroy](imagickpixeliterator.destroy.md)(): bool

public
[getCurrentIteratorRow](imagickpixeliterator.getcurrentiteratorrow.md)():
array

public [getIteratorRow](imagickpixeliterator.getiteratorrow.md)(): int

public
[getNextIteratorRow](imagickpixeliterator.getnextiteratorrow.md)():
array

public
[getPreviousIteratorRow](imagickpixeliterator.getpreviousiteratorrow.md)():
array

public
[newPixelIterator](imagickpixeliterator.newpixeliterator.md)([Imagick](class.imagick.md)
`$wand`): bool

public
[newPixelRegionIterator](imagickpixeliterator.newpixelregioniterator.md)(
[Imagick](class.imagick.md) `$wand`,
int `$x`,
int `$y`,
int `$columns`,
int `$rows`
): bool

public [resetIterator](imagickpixeliterator.resetiterator.md)(): bool

public
[setIteratorFirstRow](imagickpixeliterator.setiteratorfirstrow.md)():
bool

public
[setIteratorLastRow](imagickpixeliterator.setiteratorlastrow.md)():
bool

public [setIteratorRow](imagickpixeliterator.setiteratorrow.md)(int
`$row`): bool

public [syncIterator](imagickpixeliterator.synciterator.md)(): bool

}

## Зміст

- [ImagickPixelIterator::clear](imagickpixeliterator.clear.md)
Очищає ресурси, пов'язані з PixelIterator
- [ImagickPixelIterator::\_\_construct](imagickpixeliterator.construct.md)
- Конструктор ImagickPixelIterator
- [ImagickPixelIterator::destroy](imagickpixeliterator.destroy.md)
Звільняє ресурси, пов'язані з PixelIterator
- [ImagickPixelIterator::getCurrentIteratorRow](imagickpixeliterator.getcurrentiteratorrow.md)
— Повертає поточний ряд об'єкту ImagickPixel
- [ImagickPixelIterator::getIteratorRow](imagickpixeliterator.getiteratorrow.md)
- Повертає поточний піксель ітератора ряду
- [ImagickPixelIterator::getNextIteratorRow](imagickpixeliterator.getnextiteratorrow.md)
- Повертає наступний ряд ітератора пікселів
- [ImagickPixelIterator::getPreviousIteratorRow](imagickpixeliterator.getpreviousiteratorrow.md)
— Повертає попередній ряд
- [ImagickPixelIterator::newPixelIterator](imagickpixeliterator.newpixeliterator.md)
- Повертає новий ітератор пікселів
- [ImagickPixelIterator::newPixelRegionIterator](imagickpixeliterator.newpixelregioniterator.md)
- Повертає новий ітератор пікселів
- [ImagickPixelIterator::resetIterator](imagickpixeliterator.resetiterator.md)
— скидає ітератор пікселів
- [ImagickPixelIterator::setIteratorFirstRow](imagickpixeliterator.setiteratorfirstrow.md)
- Встановлює ітератор пікселів на перший ряд
- [ImagickPixelIterator::setIteratorLastRow](imagickpixeliterator.setiteratorlastrow.md)
- Встановлює ітератор пікселів на останній ряд
- [ImagickPixelIterator::setIteratorRow](imagickpixeliterator.setiteratorrow.md)
— Встановлює ряд в ітераторі пікселів
- [ImagickPixelIterator::syncIterator](imagickpixeliterator.synciterator.md)
- Синхронізує ітератор пікселів
