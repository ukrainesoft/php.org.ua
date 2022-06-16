- [«
ImagickDraw::setStrokeLineJoin](imagickdraw.setstrokelinejoin.md)
- [ImagickDraw::setStrokeOpacity »](imagickdraw.setstrokeopacity.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає межу зрізу обведення

# ImagickDraw::setStrokeMiterLimit

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeMiterLimit — Задає межу зрізу обведення

### Опис

public **ImagickDraw::setStrokeMiterLimit**(int `$miterlimit`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає межу зрізу. Коли два відрізки лінії зустрічаються під гострим
кутом і для 'lineJoin' задані кутові стики, зріз може виходити далеко
за межі товщини лінії, що обводить контур. 'miterLimit' накладає
обмеження відношення довжини зрізу до 'lineWidth'.

### Список параметрів

`miterlimit`
Межа зрізу.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
**ImagickDraw::setStrokeMiterLimit()****

` <?phpfunction setStrokeMiterLimit($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setStrokeOpacity(0.6); $draw->setFillColor($fillColor); $draw->setStrokeWidth(10); $yOffset u003d 100; $draw->setStrokeLineJoin(\Imagick::LINEJOIN_MITER); for ($y u003d 0; $y < 3; $y++) {        $draw->setStrokeMiterLimit(40 * $y); $points u003d [            ['x' u003d> 22 * 3, 'y' u003d> 15 * 4 + $y * $yOffset],            ['x' u003d> 20 * 3, 'y' u003d> 20 * 4 + $ y * $yOffset],             ['x' u003d> 70 * 5, 'y' u003d> 45 * 4 + $y * $yOffset], | $draw->polygon($points); }   $image u003d new \Imagick(); $image->newImage(500, 500, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); $image->setImageType(\Imagick::IMGTYPE_PALETTE); $image->setImageCompressionQuality(100); $image->stripImage(); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
