- [« ImagickDraw::setViewbox](imagickdraw.setviewbox.md)
- [ImagickDraw::skewY »](imagickdraw.skewy.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Нахиляє поточну систему координат по горизонталі

# ImagickDraw::skewX

(PECL imagick 2, PECL imagick 3)

ImagickDraw::skewX — Нахиляє поточну систему координат по горизонталі

### Опис

public **ImagickDraw::skewX**(float `$degrees`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Нахиляє поточну систему координат по горизонталі.

### Список параметрів

`degrees`
Градус нахилу.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::skewX()****

? <?phpfunction skewX($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor,                $startX, $$, $draw->setStrokeColor($strokeColor); $draw->setStrokeWidth(2); $draw->setFillColor($fillColor); $draw->rectangle($startX, $startY, $endX, $endY); $draw->setFillColor($fillModifiedColor); $draw->skewX($skew); $draw->rectangle($startX, $startY, $endX, $endY); $image u003d new \Imagick(); $image->newImage(500, 500, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
