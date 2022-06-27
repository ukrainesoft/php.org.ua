- [« ImagickDraw::setTextKerning](imagickdraw.settextkerning.md)
- [ImagickDraw::setVectorGraphics
»](imagickdraw.setvectorgraphics.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає колір прямокутника фону

# ImagickDraw::setTextUnderColor

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextUnderColor — Задає колір прямокутника фону

### Опис

public
**ImagickDraw::setTextUnderColor**([ImagickPixel](class.imagickpixel.md)
`$under_color`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає колір прямокутника для розміщення під текстовими
анотаціями.

### Список параметрів

`under_color`
Фоновий колір.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setTextUnderColor()****

` <?phpfunction setTextUnderColor($strokeColor, $fillColor, $backgroundColor, $textUnderColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->annotation(50, 75, "Lorem Ipsum!"); $draw->setTextUnderColor($textUnderColor); $draw->annotation(50, 175, "Lorem Ipsum!"); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
