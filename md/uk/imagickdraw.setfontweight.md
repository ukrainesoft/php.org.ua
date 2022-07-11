- [« ImagickDraw::setFontStyle](imagickdraw.setfontstyle.md)
- [ImagickDraw::setGravity »](imagickdraw.setgravity.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює товщину шрифту

# ImagickDraw::setFontWeight

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontWeight — Встановлює товщину шрифту

### Опис

public **ImagickDraw::setFontWeight**(int `$font_weight`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює товщину шрифту для використання при анотуванні
текстом.

### Список параметрів

`font_weight`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFontWeight()****

` <?phpfunction setFontWeight($fillColor, $strokeColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->setFontSize(36); $draw->setFontWeight(100); $draw->annotation(50, 50, "Lorem Ipsum!"); $draw->setFontWeight(200); $draw->annotation(50, 100, "Lorem Ipsum!"); $draw->setFontWeight(400); $draw->annotation(50, 150, "Lorem Ipsum!"); $draw->setFontWeight(800); $draw->annotation(50, 200, "Lorem Ipsum!"); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
