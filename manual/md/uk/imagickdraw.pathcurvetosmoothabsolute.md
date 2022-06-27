- [«
ImagickDraw::pathCurveToRelative](imagickdraw.pathcurvetorelative.md)
- [ImagickDraw::pathCurveToSmoothRelative
»](imagickdraw.pathcurvetosmoothrelative.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює кубічну криву Безьє

# ImagickDraw::pathCurveToSmoothAbsolute

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToSmoothAbsolute — Малює кубичну криву Безьє

### Опис

public **ImagickDraw::pathCurveToSmoothAbsolute**(
float `$x2`,
float `$y2`,
float `$x`,
float `$y`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює кубичну криву Безьє від поточної точки до (x, y) з
використанням абсолютних координат. Передбачається, що перша
контрольна точка є відображенням другої контрольної точки
попередньої команди щодо поточної точки. (Якщо попередня команда
відсутня чи не є DrawPathCurveToAbsolute,
DrawPathCurveToRelative, DrawPathCurveToSmoothAbsolute або
DrawPathCurveToSmoothRelative, то передбачається, що перша контрольна
точка збігається з поточною точкою). (x2, y2) - друга контрольна точка
(Тобто контрольна точка в кінці кривої). Наприкінці команди нова поточна
точка стає останньою парою координат (x,y), що використовується в кривій
Без'є.

### Список параметрів

`x2`
Координата x другої контрольної точки.

`y2`
Координата у другої контрольної точки.

`x`
Координата x кінцевої точки.

`y`
Координата y кінцевої точки.

### Значення, що повертаються

Функція не повертає значення після виконання.
