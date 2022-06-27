- [« ImagickDraw::setTextAlignment](imagickdraw.settextalignment.md)
- [ImagickDraw::setTextDecoration
»](imagickdraw.settextdecoration.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- керує згладжуванням тексту

# ImagickDraw::setTextAntialias

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextAntialias — Керує згладжуванням тексту

### Опис

public **ImagickDraw::setTextAntialias**(bool `$antiAlias`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Керує згладжуванням тексту. За промовчанням текст згладжується.

### Список параметрів

`antiAlias`

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setTextAntialias()****

` <?phpfunction setTextAntialias($fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor('none'); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->setFontSize(32); $draw->setTextAntialias(false); $draw->annotation(5, 30, "Lorem Ipsum!"); $draw->setTextAntialias(true); $draw->annotation(5, 65, "Lorem Ipsum!"); $imagicku003du003dnewImagick(); $imagick->newImage(220, 80, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); //Scale the image so that people can see the aliasing. $imagick->scaleImage(220 * 6, 80 * 6); $imagick->cropImage(640, 480, 0, 0); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
