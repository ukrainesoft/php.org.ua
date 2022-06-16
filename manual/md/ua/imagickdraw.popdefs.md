- [« ImagickDraw::popClipPath](imagickdraw.popclippath.md)
- [ImagickDraw::popPattern »](imagickdraw.poppattern.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Завершує список визначень

# ImagickDraw::popDefs

(PECL imagick 2, PECL imagick 3)

ImagickDraw::popDefs — Завершує список визначень

### Опис

public **ImagickDraw::popDefs**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Завершує перелік визначень.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::popDefs()****

` <?phpfunction popDefs($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setstrokeOpacity(1); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->pushDefs(); $draw->setStrokeColor('white'); $draw->rectangle(50, 50, 200, 200); $draw->popDefs(); $draw->rectangle(300, 50, 450, 200); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
