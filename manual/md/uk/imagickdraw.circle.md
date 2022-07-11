- [« ImagickDraw::bezier](imagickdraw.bezier.md)
- [ImagickDraw::clear »](imagickdraw.clear.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює коло

# ImagickDraw::circle

(PECL imagick 2, PECL imagick 3)

ImagickDraw::circle — Малює коло

### Опис

public **ImagickDraw::circle**(
float `$ox`,
float `$oy`,
float `$px`,
float `$py`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює коло на зображенні.

### Список параметрів

`ox`
Вихідна координата X

`oy`
Вихідна координата Y

`px`
Координата X периметра

`py`
Координата Y периметра

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::circle()****

` <?phpfunction circle($strokeColor, $fillColor, $backgroundColor, $originX, $originY, $endX, $endY) {    //Створення об'єкту ImagickDraw . $draw u003d new \ImagickDraw(); $strokeColoru003d new \ImagickPixel($strokeColor); $fillColor u003d new \ImagickPixel($fillColor); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->circle($originX, $originY, $endX, $endY); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
