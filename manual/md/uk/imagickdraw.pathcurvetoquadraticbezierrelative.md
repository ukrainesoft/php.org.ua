- [«
ImagickDraw::pathCurveToQuadraticBezierAbsolute](imagickdraw.pathcurvetoquadraticbezierabsolute.md)
- [ImagickDraw::pathCurveToQuadraticBezierSmoothAbsolute
»](imagickdraw.pathcurvetoquadraticbeziersmoothabsolute.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює квадратичну криву Безьє

# ImagickDraw::pathCurveToQuadraticBezierRelative

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToQuadraticBezierRelative — Малює квадратичну
криву Безьє

### Опис

public **ImagickDraw::pathCurveToQuadraticBezierRelative**(
float `$x1`,
float `$y1`,
float `$x`,
float `$y`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює квадратичну криву Безье від поточної точки до (x, y) з (x1, y1)
як контрольну точку, використовуючи відносні координати. В кінці
команди нова поточна точка стає останньою парою координат (x, y),
використовуваної в кривій Безьє.

### Список параметрів

`x1`
Початкова координата x.

`y1`
Початкова координата y.

`x`
Кінцева координата x.

`y`
Кінцева координата y.

### Значення, що повертаються

Функція не повертає значення після виконання.
