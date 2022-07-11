- [«
ImagickDraw::pathCurveToQuadraticBezierSmoothRelative](imagickdraw.pathcurvetoquadraticbeziersmoothrelative.md)
- [ImagickDraw::pathCurveToSmoothAbsolute
»](imagickdraw.pathcurvetosmoothabsolute.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює кубічну криву Безьє

# ImagickDraw::pathCurveToRelative

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToRelative — Малює кубичну криву Безьє

### Опис

public **ImagickDraw::pathCurveToRelative**(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`,
float `$x`,
float `$y`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює кубичну криву Безьє від поточної точки до (x, y), використовуючи
(x1, y1) в якості контрольної точки на початку кривої і (x2, y2)
як контрольна точка в кінці кривої з використанням відносних
координат. Наприкінці команди нова поточна точка стає останньою
парою координат (x, y), що використовується в кубічній кривій Безье.

### Список параметрів

`x1`
Координата x початкової контрольної точки.

`y1`
Координата y початкової контрольної точки.

`x2`
Координата x кінцевої контрольної точки.

`y2`
Координата y кінцевої контрольної точки.

`x`
Кінцева координата x.

`y`
Кінцева координата y.

### Значення, що повертаються

Функція не повертає значення після виконання.
