- [« ImagickDraw::setStrokeLineCap](imagickdraw.setstrokelinecap.md)
- [ImagickDraw::setStrokeMiterLimit
»](imagickdraw.setstrokemiterlimit.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає форму, яка використовуватиметься в кутах контурів при їх
обведенні

# ImagickDraw::setStrokeLineJoin

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeLineJoin — Задає форму, яка буде
використовуватися в кутах контурів при їх обведенні

### Опис

public **ImagickDraw::setStrokeLineJoin**(int `$linejoin`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає форму, яка використовуватиметься в кутах контурів (або інших)
векторних фігур) при їх обведенні.

### Список параметрів

`linejoin`
Одна з констант
[LINEJOIN](imagick.constants.md#imagick.constants.linejoin)
(`imagick::LINEJOIN_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeLineJoin()****

` <?phpfunction setStrokeLineJoin($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeWidth(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(20); $offset u003d 220; $lineJoinStyleu003du003d [        \Imagick::LINEJOIN_MITER,        \Imagick::LINEJOIN_ROUND,         \Imagick::LINE         for ($x u003d 0; $x < count($lineJoinStyle); $x++) {        $draw->setStrokeLineJoin($lineJoinStyle[$x]); $points u003d [            ['x' u003d> 40 * 5, 'y' u003d> 10 * 5 + $x * $offset],            ['x' u003d> 20 * 5, 'y' u003d> 20 * 5 + $ x * $offset],            ['x' u003d> 70 * 5, 'y' u003d> 50 * 5 + $x * $offset],            ['x' u003d> 40 * 5, 'y' u003d> 10 * 5 + $x * $offset],         ]; $draw->polyline($points); }   $image u003d new \Imagick(); $image->newImage(500, 700, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
