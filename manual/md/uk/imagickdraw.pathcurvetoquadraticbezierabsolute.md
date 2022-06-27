- [«
ImagickDraw::pathCurveToAbsolute](imagickdraw.pathcurvetoabsolute.md)
- [ImagickDraw::pathCurveToQuadraticBezierRelative
»](imagickdraw.pathcurvetoquadraticbezierrelative.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює квадратичну криву Безьє

# ImagickDraw::pathCurveToQuadraticBezierAbsolute

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToQuadraticBezierAbsolute — Малює квадратичну
криву Безьє

### Опис

public **ImagickDraw::pathCurveToQuadraticBezierAbsolute**(
float `$x1`,
float `$y1`,
float `$x`,
float `$y`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює квадратичну криву Безье від поточної точки до (x, y) з (x1, y1)
як контрольну точку, використовуючи абсолютні координати. В кінці
команди нова поточна точка стає останньою парою координат (x, y),
використовуваної в кривій Безьє.

### Список параметрів

`x1`
Координата x контрольної точки.

`y1`
Координата у першій контрольній точці.

`x`
Координата x кінцевої точки.

`y`
Координата y кінцевої точки.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
**ImagickDraw::pathCurveToQuadraticBezierAbsolute()****

` <?phpfunction pathCurveToQuadraticBezierAbsolute($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->pathStart(); $draw->pathMoveToAbsolute(50,250); // Визначення квадратичною кривою Безза з поточною позицією в якості початкової точки,    // контрольною точкою є перші два параметри, а кінцевою - . $draw->pathCurveToQuadraticBezierAbsolute(        150,50,        250,250    ); // Визначення квадратичною кривою Без'ї з поточною позицією в якості початкової точки,    // контрольна точка дзеркально відбивається від контрольної точки попередньої                         $draw->pathCurveToQuadraticBezierSmoothAbsolute(        450,250    ); // Определение квадратичной кривой Безье с текущей позицией в качестве начальной точки,    // контрольная точка зеркально отражается от контрольной точки предыдущей кривой,    // а конечная точка определяется значениями x, y относительно текущей позиции. $draw->pathCurveToQuadraticBezierSmoothRelative(        200,-100    ); $draw->pathFinish(); $imagicku003du003dnewImagick(); $imagick->newImage(700, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
