- [« ImagickDraw::setClipRule](imagickdraw.setcliprule.md)
- [ImagickDraw::setFillAlpha »](imagickdraw.setfillalpha.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює інтерпретацію одиниць траєкторії відсічного контуру

# ImagickDraw::setClipUnits

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setClipUnits — Встановлює інтерпретацію одиниць
траєкторії відсічного контуру

### Опис

public **ImagickDraw::setClipUnits**(int `$clip_units`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює інтерпретацію одиниць траєкторії відсічного контуру.

### Список параметрів

`clip_units`
кількість одиниць відсічного контуру

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setClipUnits()****

` <?phpfunction setClipUnits($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeOpacity(1); $draw->setStrokeWidth(2); $clipPathName u003d 'testClipPath'; $draw->setClipUnits(\Imagick::RESOLUTION_PIXELSPERINCH); $draw->pushClipPath($clipPathName); $draw->rectangle(0, 0, 250, 250); $draw->popClipPath(); $draw->setClipPath($clipPathName); //RESOLUTION_PIXELSPERINCH/RESOLUTION_PIXELSPERCENTIMETER   $draw->rectangle(200, 200, 300, 300); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
