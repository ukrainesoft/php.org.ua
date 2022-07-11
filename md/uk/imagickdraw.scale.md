- [« ImagickDraw::roundRectangle](imagickdraw.roundrectangle.md)
- [ImagickDraw::setClipPath »](imagickdraw.setclippath.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- регулює коефіцієнт масштабування

# ImagickDraw::scale

(PECL imagick 2, PECL imagick 3)

ImagickDraw::scale — Регулює коефіцієнт масштабування

### Опис

public **ImagickDraw::scale**(float `$x`, float `$y`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Регулює коефіцієнт масштабування для застосування у горизонтальному та
вертикальному напрямку до поточного координатного простору.

### Список параметрів

`x`
Горизонтальний коефіцієнт масштабування.

`y`
Вертикальний коефіцієнт масштабування.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::scale()****

`<?phpfunction scale($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setStrokeWidth(4); $draw->setFillColor($fillColor); $draw->rectangle(200, 200, 300, 300); $draw->setFillColor($fillModifiedColor); $draw->scale(1.4, 1.4); $draw->rectangle(200, 200, 300, 300); $image u003d new \Imagick(); $image->newImage(500, 500, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
