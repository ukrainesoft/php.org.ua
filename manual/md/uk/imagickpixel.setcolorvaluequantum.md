- [« ImagickPixel::setColorValue](imagickpixel.setcolorvalue.md)
- [ImagickPixel::setHSL »](imagickpixel.sethsl.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Опис

# ImagickPixel::setColorValueQuantum

(PECL imagick 2 \>u003d2.3.0, PECL imagick 3)

ImagickPixel::setColorValueQuantum — Опис

### Опис

public **ImagickPixel::setColorValueQuantum**(int `$color`, int\|float
`$value`): bool

Встановлює квантове значення кольору ImagickPixel.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`col`
Який колірний елемент встановити, наприклад \Imagick::COLOR_GREEN.

`value`
Квантове значення елемента кольору. Це має бути число з плаваючою
точкою, якщо ImageMagick був скомпільований з HDRI, інакше ціле число
діапазоні від 0 до Imagick::getQuantum().

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
**ImagickPixel::setColorValueQuantum()****

` <?phpfunction setColorValueQuantum() {   $image u003d new \Imagick(); $quantumRangeu003du003d$image->getQuantumRange(); $draw u003d new \ImagickDraw(); $color u003d new \ImagickPixel('blue'); $color->setcolorValueQuantum(\Imagick::COLOR_RED, 128 * $quantumRange['quantumRangeLong'] / 256); $draw->setstrokewidth(1.0); $draw->setStrokeColor($color); $draw->setFillColor($color); $draw->rectangle(200, 200, 300, 300); $image->newImage(500, 500, "SteelBlue2"); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
