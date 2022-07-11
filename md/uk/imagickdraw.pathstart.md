- [«
ImagickDraw::pathMoveToRelative](imagickdraw.pathmovetorelative.md)
- [ImagickDraw::point »](imagickdraw.point.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Оголошує початок відображення контуру

# ImagickDraw::pathStart

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathStart — Оголошує початок відображення контуру

### Опис

public **ImagickDraw::pathStart**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Оголошує початок відображення контуру, яке завершується відповідною
командою DrawPathFinish(). Всі інші команди DrawPath мають бути
укладені між DrawPathStart() та DrawPathFinish(). Це пов'язано з тим,
що команди малювання шляху не працюють власними силами.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::pathStart()****

` <?phpfunction pathStart($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->pathStart(); $draw->pathMoveToAbsolute(50, 50); $draw->pathLineToAbsolute(100, 50); $draw->pathLineToRelative(0, 50); $draw->pathLineToHorizontalRelative(-50); $draw->pathFinish(); $draw->pathStart(); $draw->pathMoveToAbsolute(50, 50); $draw->pathMoveToRelative(300, 0); $draw->pathLineToRelative(50, 0); $draw->pathLineToVerticalRelative(50); $draw->pathLineToHorizontalAbsolute(350); $draw->pathclose(); $draw->pathFinish(); $draw->pathStart(); $draw->pathMoveToAbsolute(50, 300); $draw->pathCurveToAbsolute(50, 300, 100, 200, 300, 300); $draw->pathLineToVerticalAbsolute(350); $draw->pathFinish(); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
