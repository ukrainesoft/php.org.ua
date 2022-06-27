- [« Imagick::getPage](imagick.getpage.md)
- [Imagick::getPixelRegionIterator
»](imagick.getpixelregioniterator.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає MagickPixelIterator

# Imagick::getPixelIterator

(PECL imagick 2, PECL imagick 3)

Imagick::getPixelIterator — Повертає MagickPixelIterator

### Опис

public **Imagick::getPixelIterator**():
[ImagickPixelIterator](class.imagickpixeliterator.md)

Повертає MagickPixelIterator.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ImagickPixelIterator у разі успішного виконання.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::getPixelIterator()****

` <?phpfunction getPixelIterator($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imageIteratoru003du003d$imagick->getPixelIterator(); foreach ($imageIterator as $row u003d> $pixels) { /* Проход по строкам пикселей в цикле */        foreach ($pixels as $column u003d> $pixel) { /* Проход по пикселям в строке (по столбцам) */            / ** @var $pixel \ImagickPixel */            if ($column % 2) {                   $pixel| /* Зафарбовування кожного другого пікселя в чорний колір */            }        } | /* Синхронізація ітератора, це важливо робити на кожній ітерації. */    }    header("Content-Type: image/jpg"); echo $imagick;}?> `
