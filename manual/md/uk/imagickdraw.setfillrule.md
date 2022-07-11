- [«
ImagickDraw::setFillPatternURL](imagickdraw.setfillpatternurl.md)
- [ImagickDraw::setFont »](imagickdraw.setfont.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює правило заливання для використання під час малювання.
полігонів

# ImagickDraw::setFillRule

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFillRule — Встановлює правило заливання для
використання при малюванні полігонів

### Опис

public **ImagickDraw::setFillRule**(int `$fill_rule`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює правило заливки для малювання полігонів.

### Список параметрів

`fill_rule`
Одна з констант
[FILLRULE](imagick.constants.md#imagick.constants.fillrule)
(`imagick::FILLRULE_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFillRule()****

` <?phpfunction setFillRule($fillColor, $strokeColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeWidth(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $fillRulesu003du003d[\Imagick::FILLRULE_NONZERO, \Imagick::FILLRULE_EVENODD]; $points u003d 11; $size u003d 150; $draw->translate(175, 160); for ($x u003d 0; $x < 2; $x++) {         $draw->setFillRule($fillRules[$x]); $draw->pathStart(); for ($n u003d 0; $n < $points * 2; $n++) {            if ($n >u003d $points) {                $angle u003d fmod($n * 360 * 4 / $points, 360) * pi() / 180; }             else {                 $angle u003d fmod($n * 360 * 3 / $ ; }             $positionX u003d $size * sin($angle); $positionY u003d $size * cos($angle); if ($n u003du003d 0) {                 $draw->pathMoveToAbsolute($positionX, $positionY); }             else {                 $draw->pathLineToAbsolute($positionX, $positionY); }         }         $draw->pathClose(); $draw->pathFinish(); $draw->translate(325, 0); }   $image u003d new \Imagick(); $image->newImage(700, 320, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
