- [«Gmagick::writeimage](gmagick.writeimage.md)
- [GmagickDraw::annotate »](gmagickdraw.annotate.md)

- [PHP Manual](index.md)
- [Gmagick](book.gmagick.md)
- Клас GmagickDraw

# Клас GmagickDraw

(PECL gmagick \>u003d Unknown)

## Вступ

## Огляд класів

class **GmagickDraw** {

/\* Методи \*/

public [annotate](gmagickdraw.annotate.md)(float `$x`, float `$y`,
string `$text`): [GmagickDraw](class.gmagickdraw.md)

public [arc](gmagickdraw.arc.md)(
float `$sx`,
float `$sy`,
float `$ex`,
float `$ey`,
float `$sd`,
float `$ed`
): [GmagickDraw](class.gmagickdraw.md)

public [bezier](gmagickdraw.bezier.md)(array `$coordinate_array`):
[GmagickDraw](class.gmagickdraw.md)

public [ellipse](gmagickdraw.ellipse.md)(
float `$ox`,
float `$oy`,
float `$rx`,
float `$ry`,
float `$start`,
float `$end`
): [GmagickDraw](class.gmagickdraw.md)

public [getfillcolor](gmagickdraw.getfillcolor.md)():
[GmagickPixel](class.gmagickpixel.md)

public [getfillopacity](gmagickdraw.getfillopacity.md)(): float

public [getfont](gmagickdraw.getfont.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getfontsize](gmagickdraw.getfontsize.md)(): float

public [getfontstyle](gmagickdraw.getfontstyle.md)(): int

public [getfontweight](gmagickdraw.getfontweight.md)(): int

public [getstrokecolor](gmagickdraw.getstrokecolor.md)():
[GmagickPixel](class.gmagickpixel.md)

public [getstrokeopacity](gmagickdraw.getstrokeopacity.md)(): float

public [getstrokewidth](gmagickdraw.getstrokewidth.md)(): float

public [gettextdecoration](gmagickdraw.gettextdecoration.md)(): int

public [gettextencoding](gmagickdraw.gettextencoding.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [line] (gmagickdraw.line.md) (
float `$sx`,
float `$sy`,
float `$ex`,
float `$ey`
): [GmagickDraw](class.gmagickdraw.md)

public [point](gmagickdraw.point.md)(float `$x`, float `$y`):
[GmagickDraw](class.gmagickdraw.md)

public [polygon](gmagickdraw.polygon.md)(array `$coordinates`):
[GmagickDraw](class.gmagickdraw.md)

public [polyline](gmagickdraw.polyline.md)(array `$coordinate_array`):
[GmagickDraw](class.gmagickdraw.md)

public [rectangle](gmagickdraw.rectangle.md)(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`
): [GmagickDraw](class.gmagickdraw.md)

public [rotate](gmagickdraw.rotate.md)(float `$degrees`):
[GmagickDraw](class.gmagickdraw.md)

public [roundrectangle](gmagickdraw.roundrectangle.md)(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`,
float `$rx`,
float `$ry`
): [GmagickDraw](class.gmagickdraw.md)

public [scale](gmagickdraw.scale.md)(float `$x`, float `$y`):
[GmagickDraw](class.gmagickdraw.md)

public
[setfillcolor](gmagickdraw.setfillcolor.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$color`): [GmagickDraw](class.gmagickdraw.md)

public [setfillopacity](gmagickdraw.setfillopacity.md)(float
`$fill_opacity`): [GmagickDraw](class.gmagickdraw.md)

public [setfont](gmagickdraw.setfont.md)(string `$font`):
[GmagickDraw](class.gmagickdraw.md)

public [setfontsize](gmagickdraw.setfontsize.md)(float `$pointsize`):
[GmagickDraw](class.gmagickdraw.md)

public [setfontstyle](gmagickdraw.setfontstyle.md)(int `$style`):
[GmagickDraw](class.gmagickdraw.md)

public [setfontweight](gmagickdraw.setfontweight.md)(int `$weight`):
[GmagickDraw](class.gmagickdraw.md)

public
[setstrokecolor](gmagickdraw.setstrokecolor.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$color`): [GmagickDraw](class.gmagickdraw.md)

public [setstrokeopacity](gmagickdraw.setstrokeopacity.md)(float
`$stroke_opacity`): [GmagickDraw](class.gmagickdraw.md)

public [setstrokewidth](gmagickdraw.setstrokewidth.md)(float
`$width`): [GmagickDraw](class.gmagickdraw.md)

public [settextdecoration](gmagickdraw.settextdecoration.md)(int
`$decoration`): [GmagickDraw](class.gmagickdraw.md)

public [settextencoding](gmagickdraw.settextencoding.md)(string
`$encoding`): [GmagickDraw](class.gmagickdraw.md)

}

## Зміст

- [GmagickDraw::annotate](gmagickdraw.annotate.md) — Малює текст на
зображенні
- [GmagickDraw::arc](gmagickdraw.arc.md) - Малює дугу
- [GmagickDraw::bezier](gmagickdraw.bezier.md) - Малює криву Безьє
- [GmagickDraw::ellipse](gmagickdraw.ellipse.md) - Малює еліпс на
зображенні
- [GmagickDraw::getfillcolor](gmagickdraw.getfillcolor.md) -
Повертає колір заливки
- [GmagickDraw::getfillopacity](gmagickdraw.getfillopacity.md) -
Повертає значення прозорості, що використовується при малюванні
- [GmagickDraw::getfont](gmagickdraw.getfont.md) — Повертає шрифт
- [GmagickDraw::getfontsize](gmagickdraw.getfontsize.md) -
Повертає розмір шрифту
- [GmagickDraw::getfontstyle](gmagickdraw.getfontstyle.md) -
Повертає стиль шрифту
- [GmagickDraw::getfontweight](gmagickdraw.getfontweight.md) -
Повертає товщину шрифту
- [GmagickDraw::getstrokecolor](gmagickdraw.getstrokecolor.md) -
Повертає колір для обведення контурів об'єкта.
- [GmagickDraw::getstrokeopacity](gmagickdraw.getstrokeopacity.md) -
Повертає прозорість обведених контурів об'єкта
- [GmagickDraw::getstrokewidth](gmagickdraw.getstrokewidth.md) -
Повертає ширину обведення, що використовується для відображення контурів.
об'єкта
- [GmagickDraw::gettextdecoration](gmagickdraw.gettextdecoration.md)
— Повертає оформлення тексту
- [GmagickDraw::gettextencoding](gmagickdraw.gettextencoding.md) -
Повертає кодовий набір, який використовується для текстових анотацій
- [GmagickDraw::line](gmagickdraw.line.md) — Малює лінію
- [GmagickDraw::point](gmagickdraw.point.md) — Малює точку
- [GmagickDraw::polygon](gmagickdraw.polygon.md) - Малює
багатокутник
- [GmagickDraw::polyline](gmagickdraw.polyline.md) — Малює ламану
лінію
- [GmagickDraw::rectangle](gmagickdraw.rectangle.md) - Малює
прямокутник
- [GmagickDraw::rotate](gmagickdraw.rotate.md) — Застосовує вказаний
поворот до поточного координатного простору
- [GmagickDraw::roundrectangle](gmagickdraw.roundrectangle.md) -
Малює прямокутник із закругленими кутами
- [GmagickDraw::scale](gmagickdraw.scale.md) — Регулює
коефіцієнт масштабування
- [GmagickDraw::setfillcolor](gmagickdraw.setfillcolor.md) -
Встановлює колір заливки, який буде використовуватись для
малювання об'єктів із заливкою
- [GmagickDraw::setfillopacity](gmagickdraw.setfillopacity.md) -
Встановлює непрозорість заливки
- [GmagickDraw::setfont](gmagickdraw.setfont.md) — Встановлює
вказаний шрифт для використання під час анотації тексту
- [GmagickDraw::setfontsize](gmagickdraw.setfontsize.md) -
Встановлює розмір шрифту для використання під час анотації тексту
- [GmagickDraw::setfontstyle](gmagickdraw.setfontstyle.md) -
Встановлює стиль шрифту для використання під час анотації тексту
- [GmagickDraw::setfontweight](gmagickdraw.setfontweight.md) -
Встановлює товщину шрифту
- [GmagickDraw::setstrokecolor](gmagickdraw.setstrokecolor.md) -
Встановлює колір, який використовується для обведення контурів об'єкта
- [GmagickDraw::setstrokeopacity](gmagickdraw.setstrokeopacity.md) -
Визначає прозорість обведення контурів об'єкта
- [GmagickDraw::setstrokewidth](gmagickdraw.setstrokewidth.md)
Встановлює ширину обведення, що використовується для відображення контурів.
об'єкта
- [GmagickDraw::settextdecoration](gmagickdraw.settextdecoration.md)
- Визначає оформлення
- [GmagickDraw::settextencoding](gmagickdraw.settextencoding.md) -
Задає кодовий набір тексту
