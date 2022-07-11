- [«
ImagickPixelIterator::setIteratorLastRow](imagickpixeliterator.setiteratorlastrow.md)
- [ImagickPixelIterator::syncIterator
»](imagickpixeliterator.synciterator.md)

- [PHP Manual](index.md)
- [ImagickPixelIterator](class.imagickpixeliterator.md)
- Встановлює номер ряду в ітераторі пікселів

# ImagickPixelIterator::setIteratorRow

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::setIteratorRow — Встановлює номер ряду в
ітератор пікселів

### Опис

public **ImagickPixelIterator::setIteratorRow**(int `$row`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює номер ряду в ітератор пікселів.

### Список параметрів

`row`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
**ImagickPixelIterator::setIteratorRow()****

`<?phpfunction setIteratorRow($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imageIteratoru003d $imagick->getPixelRegionIterator(200, 100, 200, 200); for ($x u003d 0; $x < 20; $x++) {         $imageIterator->setIteratorRow($x * 5); $pixelsu003du003d$imageIterator->getCurrentIteratorRow(); /* Походим по пикселям в строке (столбцы) */        foreach ($pixels as $pixel) {            /** @var $pixel \ImagickPixel */            /* Красим каждый второй пиксель черным*/            $pixel->setColor("rgba( 0, 0, 0, 0)"); }        /* Синхронізуємо ітератор. Це необхідно для робити на кожній ітерації */        $imageIterator->syncIterator(); }   header("Content-Type:image/jpg"); echo $imagick;}?> `
