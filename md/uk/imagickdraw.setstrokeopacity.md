- [«
ImagickDraw::setStrokeMiterLimit](imagickdraw.setstrokemiterlimit.md)
- [ImagickDraw::setStrokePatternURL
»](imagickdraw.setstrokepatternurl.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Визначає непрозорість обведення контурів об'єкта

# ImagickDraw::setStrokeOpacity

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeOpacity — Визначає непрозорість обведення
контурів об'єкта

### Опис

public **ImagickDraw::setStrokeOpacity**(float `$stroke_opacity`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Визначає непрозорість обведення контурів об'єкта.

### Список параметрів

`stroke_opacity`
Непрозорість обведення. 1.0 – повністю непрозора.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeOpacity()****

`<?phpfunction setStrokeOpacity($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeWidth(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(10); $draw->setStrokeOpacity(1); $draw->line(100, 80, 400, 125); $draw->rectangle(25, 200, 150, 350); $draw->setStrokeOpacity(0.5); $draw->line(100, 100, 400, 145); $draw->rectangle(200, 200, 325, 350); $draw->setStrokeOpacity(0.2); $draw->line(100, 120, 400, 165); $draw->rectangle(375, 200, 500, 350); $image u003d new \Imagick(); $image->newImage(550, 400, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
