- [« ImagickDraw::setClipPath](imagickdraw.setclippath.md)
- [ImagickDraw::setClipUnits »](imagickdraw.setclipunits.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює правило заливання багатокутника, яке буде
використовуватися відсічним контуром

# ImagickDraw::setClipRule

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setClipRule — Встановлює правило заливання багатокутника,
яке буде використовуватися відсічним контуром

### Опис

public **ImagickDraw::setClipRule**(int `$fill_rule`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює правило заливання багатокутника, яке буде
використовуватися відсічним контуром.

### Список параметрів

`fill_rule`
Одна з констант
[FILLRULE](imagick.constants.md#imagick.constants.fillrule)
(`imagick::FILLRULE_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setClipRule()****

` <?phpfunction setClipRule($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeOpacity(1); $draw->setStrokeWidth(2); //\Imagick::FILLRULE_EVENODD   //\Imagick::FILLRULE_NONZERO    $clipPathName u003d 'testClipPath'; $draw->pushClipPath($clipPathName); $draw->setClipRule(\Imagick::FILLRULE_EVENODD); $draw->rectangle(0, 0, 300, 500); $draw->rectangle(200, 0, 500, 500); $draw->popClipPath(); $draw->setClipPath($clipPathName); $draw->rectangle(200, 200, 300, 300); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
