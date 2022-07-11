- [« ImagickDraw::setFontStretch](imagickdraw.setfontstretch.md)
- [ImagickDraw::setFontWeight »](imagickdraw.setfontweight.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює стиль шрифту для використання під час анотування
текстом

# ImagickDraw::setFontStyle

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontStyle — Встановлює стиль шрифту для використання
при анотуванні текстом

### Опис

public **ImagickDraw::setFontStyle**(int `$style`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює стиль шрифту, який буде використовуватись при
анотування тексту. Використання AnyStyle діє як "будь-який".

### Список параметрів

`style`
Одна з констант
[STYLE](imagick.constants.md#imagick.constants.styles)
(`imagick::STYLE_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFontStyle()****

` <?phpfunction setFontStyle($fillColor, $strokeColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->setFontSize(36); $draw->setFontStyle(\Imagick::STYLE_NORMAL); $draw->annotation(50, 50, "Lorem Ipsum!"); $draw->setFontStyle(\Imagick::STYLE_ITALIC); $draw->annotation(50, 100, "Lorem Ipsum!"); $draw->setFontStyle(\Imagick::STYLE_OBLIQUE); $draw->annotation(50, 150, "Lorem Ipsum!"); $imagicku003du003dnewImagick(); $imagick->newImage(350, 300, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
