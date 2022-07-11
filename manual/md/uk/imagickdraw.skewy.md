- [« ImagickDraw::skewX](imagickdraw.skewx.md)
- [ImagickDraw::translate »](imagickdraw.translate.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- нахиляє поточну систему координат по вертикалі

# ImagickDraw::skewY

(PECL imagick 2, PECL imagick 3)

ImagickDraw::skewY — Нахиляє поточну систему координат по вертикалі

### Опис

public **ImagickDraw::skewY**(float `$degrees`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Нахиляє поточну систему координат по вертикалі.

### Список параметрів

`degrees`
Градус нахилу.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::skewY()****

`<?phpfunction skewY($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor,                $startX, $$, $$, $draw->setStrokeColor($strokeColor); $draw->setStrokeWidth(2); $draw->setFillColor($fillColor); $draw->rectangle($startX, $startY, $endX, $endY); $draw->setFillColor($fillModifiedColor); $draw->skewY($skew); $draw->rectangle($startX, $startY, $endX, $endY); $image u003d new \Imagick(); $image->newImage(500, 500, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
