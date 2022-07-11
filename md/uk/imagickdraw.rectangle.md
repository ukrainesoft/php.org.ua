- [« ImagickDraw::pushPattern](imagickdraw.pushpattern.md)
- [ImagickDraw::render »](imagickdraw.render.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює прямокутник

# ImagickDraw::rectangle

(PECL imagick 2, PECL imagick 3)

ImagickDraw::rectangle — Малює прямокутник

### Опис

public **ImagickDraw::rectangle**(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює прямокутник за двома координатами з використанням поточних
параметрів обведення, ширини обведення та заливки.

### Список параметрів

`x1`
Координата х лівого верхнього кута.

`y1`
Координата у лівого верхнього кута.

`x2`
Координата x правого нижнього кута.

`y2`
Координата y правого нижнього кута.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::rectangle()****

` <?phpfunction rectangle($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $strokeColoru003d new \ImagickPixel($strokeColor); $fillColor u003d new \ImagickPixel($fillColor); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeOpacity(1); $draw->setStrokeWidth(2); $draw->rectangle(200, 200, 300, 300); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
