- [« ImagickDraw::setResolution](imagickdraw.setresolution.md)
- [ImagickDraw::setStrokeAntialias
»](imagickdraw.setstrokeantialias.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Визначає непрозорість обведення контурів об'єкта

# ImagickDraw::setStrokeAlpha

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeAlpha — Визначає непрозорість обведення контурів.
об'єкта

### Опис

public **ImagickDraw::setStrokeAlpha**(float `$opacity`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Визначає непрозорість обведення контурів об'єкта.

### Список параметрів

`opacity`
Непрозорість.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeAlpha()****

` <?phpfunction setStrokeAlpha($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(4); $draw->line(100, 100, 400, 145); $draw->rectangle(100, 200, 225, 350); $draw->setStrokeOpacity(0.1); $draw->line(100, 120, 400, 165); $draw->rectangle(275, 200, 400, 350); $image u003d new \Imagick(); $image->newImage(500, 400, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
