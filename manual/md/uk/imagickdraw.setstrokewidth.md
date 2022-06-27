- [«
ImagickDraw::setStrokePatternURL](imagickdraw.setstrokepatternurl.md)
- [ImagickDraw::setTextAlignment »](imagickdraw.settextalignment.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює ширину обведення, що використовується для малювання контурів.
об'єкта

# ImagickDraw::setStrokeWidth

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeWidth — Встановлює ширину обведення, що використовується
для малювання контурів об'єкта

### Опис

public **ImagickDraw::setStrokeWidth**(float `$stroke_width`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює ширину обведення, яка використовується для малювання контурів.
об'єкт.

### Список параметрів

`stroke_width`
Ширина обведення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeWidth()****

` <?phpfunction setStrokeWidth($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeWidth(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->line(100, 100, 400, 145); $draw->rectangle(100, 200, 225, 350); $draw->setStrokeWidth(5); $draw->line(100, 120, 400, 165); $draw->rectangle(275, 200, 400, 350); $image u003d new \Imagick(); $image->newImage(500, 400, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
