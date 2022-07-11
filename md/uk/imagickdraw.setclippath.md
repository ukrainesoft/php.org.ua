- [« ImagickDraw::scale](imagickdraw.scale.md)
- [ImagickDraw::setClipRule »](imagickdraw.setcliprule.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- пов'язує іменований контур відсічного контуру із зображенням

# ImagickDraw::setClipPath

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setClipPath — Зв'язує іменований контур відсічного
контур із зображенням

### Опис

public **ImagickDraw::setClipPath**(string `$clip_mask`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Зв'язує іменований контур відсічного контуру із зображенням. Тільки
області, намальовані відсічний контур, будуть змінені, поки він
залишається в силі.

### Список параметрів

`clip_mask`
ім'я відсічного контуру

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setClipPath()****

` <?phpfunction setClipPath($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeOpacity(1); $draw->setStrokeWidth(2); $clipPathName u003d 'testClipPath'; $draw->pushClipPath($clipPathName); $draw->rectangle(0, 0, 250, 250); $draw->popClipPath(); $draw->setClipPath($clipPathName); $draw->rectangle(100, 100, 400, 400); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
