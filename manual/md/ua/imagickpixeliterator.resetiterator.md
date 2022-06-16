- [«
ImagickPixelIterator::newPixelRegionIterator](imagickpixeliterator.newpixelregioniterator.md)
- [ImagickPixelIterator::setIteratorFirstRow
»](imagickpixeliterator.setiteratorfirstrow.md)

- [PHP Manual](index.md)
- [ImagickPixelIterator](class.imagickpixeliterator.md)
- скидає ітератор пікселів

# ImagickPixelIterator::resetIterator

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::resetIterator — Скидає ітератор пікселів

### Опис

public **ImagickPixelIterator::resetIterator**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Скидає ітератор пікселів. Використовуйте спільно з
ImagickPixelIterator::getNextIteratorRow() для перебору всіх пікселів у
контейнер пікселів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
**ImagickPixelIterator::resetIterator()****

` <?phpfunction resetIterator($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imageIteratoru003du003d$imagick->getPixelIterator(); /* Походим по строкам пикселей */    foreach ($imageIterator as $pixels) {        /* Походим по пикселям в строке (столбцы) */        foreach ($pixels as $column u003d> $pixel) {            /** @var $pixel \ ImagickPixel */            if ($column % 2) {                /* Делаем каждый второй пиксель на 25% красным*/                $pixel->setColorValue(\Imagick::COLOR_RED, 64); }         }         /* Синхронізуємо ітератор. Це необхідно для робити на кожній ітерації */        $imageIterator->syncIterator(); }   $imageIterator->resetiterator(); /* Походим по строкам пикселей */    foreach ($imageIterator as $pixels) {        /* Походим по пикселям в строке (столбцы) */        foreach ($pixels as $column u003d> $pixel) {            /** @var $pixel \ ImagickPixel */            if ($column % 3) {               |$pixel->setColorValue(|ImagickPixel: /* Робимо кожний другий піксель трохи синім*/                  //$pixel->setColor("rgba(0, 0, 128, 0)"); /* Paint every second pixel black*/           }        } }      |$imageIterator->syncIterator(); /* Синхронізуємо ітератор. Це необхідно для робити на кожній ітерації */    }   $imageIterator->clear(); header("Content-Type: image/jpg"); echo $imagick;}?> `
