- [« ImagickPixelIterator](class.imagickpixeliterator.md)
- [ImagickPixelIterator::\_\_construct
»](imagickpixeliterator.construct.md)

- [PHP Manual](index.md)
- [ImagickPixelIterator](class.imagickpixeliterator.md)
- Очищає ресурси, пов'язані з PixelIterator

# ImagickPixelIterator::clear

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::clear — Очищає ресурси, пов'язані з PixelIterator

### Опис

public **ImagickPixelIterator::clear**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Очищає ресурси, пов'язані з PixelIterator.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickPixelIterator::clear()****

`<?phpfunction clear($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imageIteratoru003du003d$imagick->getPixelRegionIterator(100, 100, 250, 200); /* Походим по строкам пикселей */    foreach ($imageIterator as $pixels) {        /** @var $pixel \ImagickPixel */        /* Походим по пикселям в строке (столбцы) */        foreach ($pixels as $column u003d> $ pixel) {            if ($column % 2) {                /* Красим каждый второй пиксель черным*/                $pixel->setColor("rgba(0, 0, 0, 0)"); }         }         /* Синхронізуємо ітератор. Це необхідно для робити на кожній ітерації */        $imageIterator->syncIterator(); }   $imageIterator->clear(); header("Content-Type: image/jpg"); echo $imagick;}?> `
