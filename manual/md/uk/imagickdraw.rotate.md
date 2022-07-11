- [«
ImagickDraw::resetVectorGraphics](imagickdraw.resetvectorgraphics.md)
- [ImagickDraw::roundRectangle »](imagickdraw.roundrectangle.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Застосовує зазначений поворот до поточного координатного простору

# ImagickDraw::rotate

(PECL imagick 2, PECL imagick 3)

ImagickDraw::rotate — Застосовує вказаний поворот до поточного
координатному простору

### Опис

public **ImagickDraw::rotate**(float `$degrees`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Застосовує зазначений поворот до координатного простору.

### Список параметрів

`degrees`
Кут повороту.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::rotate()****

`<?phpfunction rotate($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setStrokeOpacity(1); $draw->setFillColor($fillColor); $draw->rectangle(200, 200, 300, 300); $draw->setFillColor($fillModifiedColor); $draw->rotate(15); $draw->rectangle(200, 200, 300, 300); $image u003d new \Imagick(); $image->newImage(500, 500, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
