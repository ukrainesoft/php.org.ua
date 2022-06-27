- [«
ImagickDraw::getVectorGraphics](imagickdraw.getvectorgraphics.md)
- [ImagickDraw::matte »](imagickdraw.matte.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює лінію

# ImagickDraw::line

(PECL imagick 2, PECL imagick 3)

ImagickDraw::line — Малює лінію

### Опис

public **ImagickDraw::line**(
float `$sx`,
float `$sy`,
float `$ex`,
float `$ey`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює лінію на зображенні, використовуючи поточний колір обведення, її
прозорість та ширину.

### Список параметрів

`sx`
Початкова координата x.

`sy`
Початкова координата y.

`ex`
Кінцева координата x.

`ey`
Кінцева координата y.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::line()****

` <?phpfunction line($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->line(125, 70, 100, 50); $draw->line(350, 170, 100, 150); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
