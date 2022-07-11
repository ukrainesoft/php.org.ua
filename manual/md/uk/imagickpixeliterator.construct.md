- [« ImagickPixelIterator::clear](imagickpixeliterator.clear.md)
- [ImagickPixelIterator::destroy »](imagickpixeliterator.destroy.md)

- [PHP Manual](index.md)
- [ImagickPixelIterator](class.imagickpixeliterator.md)
- Конструктор ImagickPixelIterator

# ImagickPixelIterator::\_\_construct

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::\_\_construct — Конструктор ImagickPixelIterator

### Опис

public
**ImagickPixelIterator::\_\_construct**([Imagick](class.imagick.md)
`$wand`)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Конструктор ImagickPixelIterator

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickPixelIterator::construct()****

`<?phpfunction construct($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imageIteratoru003du003dnew\ImagickPixelIterator($imagick); /* Походим по строкам пикселей */    foreach ($imageIterator as $pixels) {        /* Походим по пикселям в строке (столбцы) */        foreach ($pixels as $column u003d> $pixel) {            /** @var $pixel \ ImagickPixel */            if ($column % 2) {                /* Красим каждый второй пиксель черным*/                $pixel->setColor("rgba(0, 0, 0, 0)"); }         }         /* Синхронізуємо ітератор. Це необхідно для робити на кожній ітерації */        $imageIterator->syncIterator(); }   header("Content-Type:image/jpg"); echo $imagick;}?> `
