- [« GmagickDraw::rotate](gmagickdraw.rotate.md)
- [GmagickDraw::scale »](gmagickdraw.scale.md)

- [PHP Manual](index.md)
- [GmagickDraw](class.gmagickdraw.md)
- Малює прямокутник із закругленими кутами

# GmagickDraw::roundrectangle

(PECL gmagick \>u003d Unknown)

GmagickDraw::roundrectangle — Малює прямокутник із закругленими
кутами

### Опис

public **GmagickDraw::roundrectangle**(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`,
float `$rx`,
float `$ry`
): [GmagickDraw](class.gmagickdraw.md)

Малює прямокутник із закругленими кутами за двома координатами і
радіусам кутів x і y, використовуючи поточне обведення, її ширину та налаштування
заливки.

### Список параметрів

`x1`
Перша координата x.

`y1`
Перша координата y.

`x2`
Друга координата x.

`y2`
Друга координата y.

`rx`
Радіус кута у горизонтальному напрямку.

`ry`
Радіус кута у вертикальному напрямку.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md).
