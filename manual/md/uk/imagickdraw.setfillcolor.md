- [« ImagickDraw::setFillAlpha](imagickdraw.setfillalpha.md)
- [ImagickDraw::setFillOpacity »](imagickdraw.setfillopacity.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює колір заливки, який використовується для малювання об'єктів
заливкою

# ImagickDraw::setFillColor

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFillColor — Встановлює колір заливки, що використовується для
малювання об'єктів із заливкою

### Опис

public
**ImagickDraw::setFillColor**([ImagickPixel](class.imagickpixel.md)
`$fill_pixel`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює колір заливки, що використовується для малювання об'єктів
заливкою.

### Список параметрів

`fill_pixel`
Об'єкт ImagickPixel, який використовується для встановлення кольору.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFillColor()****

` <?phpfunction setFillColor($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeOpacity(1); $draw->setStrokeWidth(1.5); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->rectangle(50, 50, 150, 150); $draw->setFillColor("rgb(200, 32, 32)"); $draw->rectangle(200, 50, 300, 150); $image u003d new \Imagick(); $image->newImage(500, 500, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
