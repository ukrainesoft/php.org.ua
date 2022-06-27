- [«
ImagickDraw::pathEllipticArcAbsolute](imagickdraw.pathellipticarcabsolute.md)
- [ImagickDraw::pathFinish »](imagickdraw.pathfinish.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює еліптичну дугу

# ImagickDraw::pathEllipticArcRelative

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathEllipticArcRelative — Малює еліптичну дугу

### Опис

public **ImagickDraw::pathEllipticArcRelative**(
float `$rx`,
float `$ry`,
float `$x_axis_rotation`,
bool `$large_arc_flag`,
bool `$sweep_flag`,
float `$x`,
float `$y`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює еліптичну дугу від поточної точки до (x, y) з використанням
відносних координат. Розмір та орієнтація еліпса визначаються двома
радіусами (rx, ry) та параметром xAxisRotation, який вказує, як
еліпс загалом обертається щодо поточної системи координат. Центр
(cx, cy) еліпса обчислюється автоматично, щоб задовольнити
обмеження, що накладаються іншими параметрами. largeArcFlag та sweepFlag
беруть участь в автоматичних обчисленнях та допомагають визначити, як
намальована дуга. Якщо значення `large_arc_flag` дорівнює **`true`**, то
малюється найбільша з доступних дуг. Якщо значення `sweep_flag` дорівнює
true, то малюється дуга, що відповідає обертанню за годинниковою стрілкою.

### Список параметрів

`rx`
Радіус х.

`ry`
Радіус y.

`x_axis_rotation`
Обертання осі x.

`large_arc_flag`
Прапор large arc.

`sweep_flag`
Прапор sweep.

`x`
Координата х.

`y`
Координати y.

### Значення, що повертаються

Функція не повертає значення після виконання.
