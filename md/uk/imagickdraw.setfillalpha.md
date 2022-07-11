- [« ImagickDraw::setClipUnits](imagickdraw.setclipunits.md)
- [ImagickDraw::setFillColor »](imagickdraw.setfillcolor.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює непрозорість під час малювання з використанням кольору.
або текстури заливки

# ImagickDraw::setFillAlpha

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFillAlpha — Встановлює непрозорість при малюванні з
використанням кольору або текстури заливки

### Опис

public **ImagickDraw::setFillAlpha**(float `$opacity`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює непрозорість при малюванні за допомогою кольору або
заливки текстури. Повністю непрозорий – 1.0.

### Список параметрів

`opacity`
Непрозорість заливання.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFillAlpha()****

` <?phpfunction setFillAlpha($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeOpacity(1); $draw->setStrokeWidth(2); $draw->rectangle(100, 200, 200, 300); @$draw->setFillAlpha(0.4); $draw->rectangle(300, 200, 400, 300); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
