- [«
ImagickDraw::setStrokeAntialias](imagickdraw.setstrokeantialias.md)
- [ImagickDraw::setStrokeDashArray
»](imagickdraw.setstrokedasharray.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює колір, який використовується для обведення контурів об'єкта

# ImagickDraw::setStrokeColor

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeColor — Встановлює колір, який використовується для
обведення контурів об'єкта

### Опис

public
**ImagickDraw::setStrokeColor**([ImagickPixel](class.imagickpixel.md)
`$stroke_pixel`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює колір для обведення контурів об'єкта.

### Список параметрів

`stroke_pixel`
Колір обведення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeColor()****

` <?phpfunction setStrokeColor($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(5); $draw->line(100, 100, 400, 145); $draw->rectangle(100, 200, 225, 350); $draw->setStrokeOpacity(0.1); $draw->line(100, 120, 400, 165); $draw->rectangle(275, 200, 400, 350); $image u003d new \Imagick(); $image->newImage(500, 400, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
