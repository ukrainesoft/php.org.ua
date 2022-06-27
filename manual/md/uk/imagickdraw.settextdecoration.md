- [« ImagickDraw::setTextAntialias](imagickdraw.settextantialias.md)
- [ImagickDraw::setTextEncoding »](imagickdraw.settextencoding.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- визначає оформлення

# ImagickDraw::setTextDecoration

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextDecoration — Визначає оформлення

### Опис

public **ImagickDraw::setTextDecoration**(int `$decoration`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає оформлення, яке застосовуватиметься при анотуванні текстом.

### Список параметрів

`decoration`
Одна з констант
[DECORATION](imagick.constants.md#imagick.constants.decoration)
(`imagick::DECORATION_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setTextDecoration()****

` <?phpfunction setTextDecoration($strokeColor, $fillColor, $backgroundColor, $textDecoration) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->setTextDecoration($textDecoration); $draw->annotation(50, 75, "Lorem Ipsum!"); $imagicku003du003dnewImagick(); $imagick->newImage(500, 200, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
