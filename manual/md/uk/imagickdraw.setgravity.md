- [« ImagickDraw::setFontWeight](imagickdraw.setfontweight.md)
- [ImagickDraw::setResolution »](imagickdraw.setresolution.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює гравітацію розміщення тексту

# ImagickDraw::setGravity

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setGravity — Встановлює гравітацію розміщення тексту

### Опис

public **ImagickDraw::setGravity**(int `$gravity`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює гравітацію розміщення тексту, що використовується під час його
анотації.

### Список параметрів

`gravity`
Одна з констант
[GRAVITY](imagick.constants.md#imagick.constants.gravity)
(`imagick::GRAVITY_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setGravity()****

` <?phpfunction setGravity($fillColor, $strokeColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->setFontSize(24); $gravitySettings u003d array(        \Imagick::GRAVITY_NORTHWEST u003d> 'NorthWest',        \Imagick::GRAVITY_NORTH u003d> 'North',        \Imagick::GRAVITY_NORTHEAST u003d> 'NorthEast',        \Imagick::GRAVITY_WEST u003d> 'West',        \ Imagick::GRAVITY_CENTER u003d> 'Centre',        \Imagick::GRAVITY_SOUTHWEST u003d> 'SouthWest',        \Imagick::GRAVITY_SOUTH u003d> 'South',        \Imagick::GRAVITY_SOUTHEAST u003d> 'SouthEast',        \Imagick::GRAVITY_EAST u003d> 'East'    ); $draw->setFont("../fonts/Arial.ttf"); foreach ($gravitySettings as $type u003d> $description) {        $draw->setGravity($type); $draw->annotation(50, 50, '"' . $description . '"'); }   $imagick u003d new \Imagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
