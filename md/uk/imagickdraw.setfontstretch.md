- [« ImagickDraw::setFontSize](imagickdraw.setfontsize.md)
- [ImagickDraw::setFontStyle »](imagickdraw.setfontstyle.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює розтягування шрифту для використання під час анотування
текстом

# ImagickDraw::setFontStretch

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontStretch — Встановлює розтягування шрифту для
використання при анотуванні текстом

### Опис

public **ImagickDraw::setFontStretch**(int `$fontStretch`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює розтягування шрифту для використання під час анотування
текстом. Використання AnyStretch діє як будь-яке.

### Список параметрів

`fontStretch`
Одна з констант
[STRETCH](imagick.constants.md#imagick.constants.stretch)
(`imagick::STRETCH_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFontStretch()****

` <?phpfunction setFontStretch($fillColor, $strokeColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(36); $fontStretchTypes u003d [        \Imagick::STRETCH_ULTRACONDENSED,        \Imagick::STRETCH_CONDENSED,        \Imagick::STRETCH_SEMICONDENSED,        \Imagick::STRETCH_SEMIEXPANDED,        \Imagick::STRETCH_EXPANDED,        \Imagick::STRETCH_EXTRAEXPANDED,        \Imagick::STRETCH_ULTRAEXPANDED,        \Imagick:: STRETCH_ANY    ]; $offset u003d 0; foreach ($fontStretchTypes as $fontStretch) {        $draw->setFontStretch($fontStretch); $draw->annotation(50, 75 + $offset, "Lorem Ipsum!"); $offset+u003du003d50; }   $imagick u003d new \Imagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
