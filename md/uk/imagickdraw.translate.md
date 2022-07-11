- [« ImagickDraw::skewY](imagickdraw.skewy.md)
- [ImagickPixel »](class.imagickpixel.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Застосовує перенесення до поточної системи координат

# ImagickDraw::translate

(PECL imagick 2, PECL imagick 3)

ImagickDraw::translate — Застосовує перенесення до поточної системи координат

### Опис

public **ImagickDraw::translate**(float `$x`, float `$y`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Застосовує перенесення до поточної системи координат, що переміщує початок
системи координат у зазначену координату.

### Список параметрів

`x`
Горизонтальне перенесення.

`y`
Вертикальне перенесення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::translate()****

` <?phpfunction translate($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor,                   $startX, $startY, $endX, $endY, $translateX, $translateY) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->rectangle($startX, $startY, $endX, $endY); $draw->setFillColor($fillModifiedColor); $draw->translate($translateX, $translateY); $draw->rectangle($startX, $startY, $endX, $endY); $image u003d new \Imagick(); $image->newImage(500, 500, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
