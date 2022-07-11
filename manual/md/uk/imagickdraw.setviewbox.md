- [«
ImagickDraw::setVectorGraphics](imagickdraw.setvectorgraphics.md)
- [ImagickDraw::skewX »](imagickdraw.skewx.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює загальний розмір полотна

# ImagickDraw::setViewbox

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setViewbox — Встановлює загальний розмір полотна

### Опис

public **ImagickDraw::setViewbox**(
int `$x1`,
int `$y1`,
int `$x2`,
int `$y2`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює загальний розмір полотна, яке буде записано з векторними
даними малюнка. Зазвичай для цього використовується розмір зображення
полотно. Коли векторні дані зберігаються у форматах SVG або MVG, вікно
перегляду використовується для вказівки розміру зображення полотна,
який засіб перегляду буде відображати векторні дані.

### Список параметрів

`x1`
Ліва координата x.

`y1`
Ліва координата y.

`x2`
Права координата x.

`y2`
Права координата y.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setViewBox()****

` <?phpfunction setViewBox($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); /*    Встановлює загальний розмір полотна, буде записаний з векторними даними малюнку. Зазвичай для цього використовується розмір зображення. Коли векторні дані зберігаються в форматах SVG або MVG, вікно перегляду використовується для вказівки розміру зображення полотня, на якому відображення буде */   $draw->circle(250, 250, 250, 0); $draw->setviewbox(0, 0, 200, 200); $draw->circle(125, 250, 250, 250); $draw->translate(250, 125); $draw->circle(0, 0, 125, 0); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
