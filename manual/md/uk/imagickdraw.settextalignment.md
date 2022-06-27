- [« ImagickDraw::setStrokeWidth](imagickdraw.setstrokewidth.md)
- [ImagickDraw::setTextAntialias »](imagickdraw.settextantialias.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає вирівнювання тексту

# ImagickDraw::setTextAlignment

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextAlignment — Задає вирівнювання тексту

### Опис

public **ImagickDraw::setTextAlignment**(int `$alignment`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає вирівнювання тексту, яке буде застосовуватись під час анотування
текстом.

### Список параметрів

`alignment`
Одна з констант [ALIGN](imagick.constants.md#imagick.constants.align)
(`imagick::ALIGN_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setTextAlignment()****

` <?phpfunction setTextAlignment($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->setFontSize(36); $draw->setTextAlignment(\Imagick::ALIGN_LEFT); $draw->annotation(250, 75, "Lorem Ipsum!"); $draw->setTextAlignment(\Imagick::ALIGN_CENTER); $draw->annotation(250, 150, "Lorem Ipsum!"); $draw->setTextAlignment(\Imagick::ALIGN_RIGHT); $draw->annotation(250, 225, "Lorem Ipsum!"); $draw->line(250, 0, 250, 500); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
