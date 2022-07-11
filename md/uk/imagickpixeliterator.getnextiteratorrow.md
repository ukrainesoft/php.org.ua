- [«
ImagickPixelIterator::getIteratorRow](imagickpixeliterator.getiteratorrow.md)
- [ImagickPixelIterator::getPreviousIteratorRow
»](imagickpixeliterator.getpreviousiteratorrow.md)

- [PHP Manual](index.md)
- [ImagickPixelIterator](class.imagickpixeliterator.md)
- Повертає наступний ряд ітератора пікселів

# ImagickPixelIterator::getNextIteratorRow

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::getNextIteratorRow — Повертає наступний ряд
ітератора пікселів

### Опис

public **ImagickPixelIterator::getNextIteratorRow**(): array

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Повертає наступний ряд як масиву пікселів з ітератора пікселів.

### Значення, що повертаються

Повертає наступний ряд у вигляді масиву об'єктів ImagickPixel, у випадку
Виникнення помилки видасть виключення ImagickPixelIteratorException.

### Приклади

**Приклад #1 Приклад використання
**ImagickPixelIterator::getNextIteratorRow()****

`<?phpfunction getNextIteratorRow($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imageIteratoru003du003d$imagick->getPixelIterator(); $countu003du003d0; while ($pixels u003d $imageIterator->getNextIteratorRow()) {        if (($count % 3) u003du003d 0) {            /* Походим по пикселям в строке (столбцы) */            foreach ($pixels as $column u003d> $pixel ) {                /** @var $pixel \ImagickPixel */                if ($column % 2) {                    /* Красим каждый второй пиксель черным*/                    $pixel->setColor("rgba(0, 0, 0, 0)"); }              }             /* Синхронізуємо ітератор. Це необхідно для робити на кожній ітерації */            $imageIterator->syncIterator(); }        $count +u003d 1; }   header("Content-Type:image/jpg"); echo $imagick;}?> `
