- [« GmagickDraw::annotate](gmagickdraw.annotate.md)
- [GmagickDraw::bezier »](gmagickdraw.bezier.md)

- [PHP Manual](index.md)
- [GmagickDraw](class.gmagickdraw.md)
- Малює дугу

# GmagickDraw::arc

(PECL gmagick \>u003d Unknown)

GmagickDraw::arc — Малює дугу

### Опис

public **GmagickDraw::arc**(
float `$sx`,
float `$sy`,
float `$ex`,
float `$ey`,
float `$sd`,
float `$ed`
): [GmagickDraw](class.gmagickdraw.md)

Малює дугу, що знаходиться в межах прямокутника, що обмежує, на
зображення.

### Список параметрів

`sx`
Початкова координата x прямокутника, що обмежує.

`sy`
Початкова координата y обмежує прямокутника.

`ex`
Кінцева координата x прямокутника, що обмежує.

`ey`
Кінцева координата y обмежує прямокутника.

`sd`
Початковий градус повороту.

`ed`
Кінцевий градус повороту.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md).
