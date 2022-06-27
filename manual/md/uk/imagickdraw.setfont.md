- [« ImagickDraw::setFillRule](imagickdraw.setfillrule.md)
- [ImagickDraw::setFontFamily »](imagickdraw.setfontfamily.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює вказаний шрифт для використання при анотуванні
текстом

# ImagickDraw::setFont

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFont — Встановлює вказаний шрифт для використання
при анотуванні текстом

### Опис

public **ImagickDraw::setFont**(string `$font_name`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює вказаний шрифт для використання під час анотування
текстом.

### Список параметрів

`font_name`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFont()****

` <?phpfunction setFont($fillColor, $strokeColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(36); $draw->setFont("../fonts/Arial.ttf"); $draw->annotation(50, 50, "Lorem Ipsum!"); $draw->setFont("../fonts/Consolas.ttf"); $draw->annotation(50, 100, "Lorem Ipsum!"); $draw->setFont("../fonts/CANDY.TTF"); $draw->annotation(50, 150, "Lorem Ipsum!"); $draw->setFont("../fonts/Inconsolata-dz.otf"); $draw->annotation(50, 200, "Lorem Ipsum!"); $imagicku003du003dnewImagick(); $imagick->newImage(500, 300, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
