- [«
ImagickDraw::pathCurveToQuadraticBezierRelative](imagickdraw.pathcurvetoquadraticbezierrelative.md)
- [ImagickDraw::pathCurveToQuadraticBezierSmoothRelative
»](imagickdraw.pathcurvetoquadraticbeziersmoothrelative.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює квадратичну криву Безьє

# ImagickDraw::pathCurveToQuadraticBezierSmoothAbsolute

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToQuadraticBezierSmoothAbsolute — Малює
квадратичну криву Безьє

### Опис

public **ImagickDraw::pathCurveToQuadraticBezierSmoothAbsolute**(float
`$x`, float `$y`): bool

Малює квадратичну криву Безьє (з використанням абсолютних координат)
від поточної точки до (x, y). Передбачається, що контрольна точка
є відображенням контрольної точки попередньої команди щодо
поточної точки. (Якщо попередня команда відсутня чи не є
DrawPathCurveToQuadraticBezierAbsolute,
DrawPathCurveToQuadraticBezierRelative,
DrawPathCurveToQuadraticBezierSmoothAbsolute або
DrawPathCurveToQuadraticBezierSmoothRelative, то передбачається, що
контрольна точка збігається з поточною). Наприкінці команди нова поточна
точка стає останньою парою координат (x,y), що використовується в кривій
Без'є.

Функцію не можна використовувати для плавного продовження кубічної кривої
Без'є. Вона може плавно продовжувати лише квадратичну криву.

### Список параметрів

`x`
Кінцева координата x.

`y`
Кінцева координата y.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
**ImagickDraw::pathCurveToQuadraticBezierSmoothAbsolute()****

` <?php$draw u003d new \ImagickDraw();$draw->setStrokeOpacity(1);$draw->setStrokeColor("black");$draw->setFillColor("blue");$draw->setStrokeWidth( 2);$draw->setFontSize(72);$draw->pathStart();$draw->pathMoveToAbsolute(50,250); параметра, а конечной - последние два.$draw->pathCurveToQuadraticBezierAbsolute(    150,50,    250,250);// Определение квадратичной кривой Безье с текущей позицией в качестве начальной точки,// контрольная точка зеркально отражается от контрольной точки предыдущей кривой,// а конечная точка определяется значениями x, y.$draw->pathCurveToQuadraticBezierSmoothAbsolute(    450,250);// Определение квадратичной кривой Безье с текущей позицией в качестве начальной точки,// контрольная точка зеркально отражается от контрольной точки предыдущей кривой,// а конечная точка определяется значениями x, y щодо поточної позиції.$draw->pathCurveToQuad raticBezierSmoothRelative(    200,-100);$draw->pathFinish();$imagick u003d new \Imagick();$imagick->newImage(700, 500, $backgroundColor);$imag $imagick->drawImage($draw);header("Content-Type: image/png");echo $imagick->getImageBlob();?> `
