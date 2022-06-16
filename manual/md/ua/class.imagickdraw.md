- [« Imagick::writeImagesFile](imagick.writeimagesfile.md)
- [ImagickDraw::affine »](imagickdraw.affine.md)

- [PHP Manual](index.md)
- [ImageMagick](book.imagick.md)
- Клас ImagickDraw

# Клас [ImagickDraw](class.imagickdraw.md)

(PECL imagick 2, PECL imagick 3)

## Огляд класів

class **ImagickDraw** {

public [affine](imagickdraw.affine.md)(array `$affine`): bool

public [annotation](imagickdraw.annotation.md)(float `$x`, float `$y`,
string `$text`): bool

public [arc](imagickdraw.arc.md)(
float `$sx`,
float `$sy`,
float `$ex`,
float `$ey`,
float `$sd`,
float `$ed`
): bool

public [bezier](imagickdraw.bezier.md)(array `$coordinates`): bool

public [circle](imagickdraw.circle.md)(
float `$ox`,
float `$oy`,
float `$px`,
float `$py`
): bool

public [clear](imagickdraw.clear.md)(): bool

public [clone](imagickdraw.clone.md)():
[ImagickDraw](class.imagickdraw.md)

public [color](imagickdraw.color.md)(float `$x`, float `$y`, int
`$paintMethod`): bool

public [comment](imagickdraw.comment.md)(string `$comment`): bool

public [composite](imagickdraw.composite.md)(
int `$compose`,
float `$x`,
float `$y`,
float `$width`,
float `$height`,
[Imagick](class.imagick.md) `$compositeWand`
): bool

public [\_\_construct](imagickdraw.construct.md)()

public [destroy](imagickdraw.destroy.md)(): bool

public [ellipse](imagickdraw.ellipse.md)(
float `$ox`,
float `$oy`,
float `$rx`,
float `$ry`,
float `$start`,
float `$end`
): bool

public [getClipPath](imagickdraw.getclippath.md)(): string

public [getClipRule](imagickdraw.getcliprule.md)(): int

public [getClipUnits](imagickdraw.getclipunits.md)(): int

public [getFillColor](imagickdraw.getfillcolor.md)():
[ImagickPixel](class.imagickpixel.md)

public [getFillOpacity](imagickdraw.getfillopacity.md)(): float

public [getFillRule](imagickdraw.getfillrule.md)(): int

public [getFont](imagickdraw.getfont.md)(): string

public [getFontFamily](imagickdraw.getfontfamily.md)(): string

public [getFontSize](imagickdraw.getfontsize.md)(): float

public [getFontStretch](imagickdraw.getfontstretch.md)(): int

public [getFontStyle](imagickdraw.getfontstyle.md)(): int

public [getFontWeight](imagickdraw.getfontweight.md)(): int

public [getGravity](imagickdraw.getgravity.md)(): int

public [getStrokeAntialias](imagickdraw.getstrokeantialias.md)(): bool

public [getStrokeColor](imagickdraw.getstrokecolor.md)():
[ImagickPixel](class.imagickpixel.md)

public [getStrokeDashArray](imagickdraw.getstrokedasharray.md)():
array

public [getStrokeDashOffset](imagickdraw.getstrokedashoffset.md)():
float

public [getStrokeLineCap](imagickdraw.getstrokelinecap.md)(): int

public [getStrokeLineJoin](imagickdraw.getstrokelinejoin.md)(): int

public [getStrokeMiterLimit](imagickdraw.getstrokemiterlimit.md)():
int

public [getStrokeOpacity](imagickdraw.getstrokeopacity.md)(): float

public [getStrokeWidth](imagickdraw.getstrokewidth.md)(): float

public [getTextAlignment](imagickdraw.gettextalignment.md)(): int

public [getTextAntialias](imagickdraw.gettextantialias.md)(): bool

public [getTextDecoration](imagickdraw.gettextdecoration.md)(): int

public [getTextEncoding](imagickdraw.gettextencoding.md)(): string

public
[getTextInterlineSpacing](imagickdraw.gettextinterlinespacing.md)():
float

public
[getTextInterwordSpacing](imagickdraw.gettextinterwordspacing.md)():
float

public [getTextKerning](imagickdraw.gettextkerning.md)(): float

public [getTextUnderColor](imagickdraw.gettextundercolor.md)():
[ImagickPixel](class.imagickpixel.md)

public [getVectorGraphics](imagickdraw.getvectorgraphics.md)(): string

public [line] (imagickdraw.line.md) (
float `$sx`,
float `$sy`,
float `$ex`,
float `$ey`
): bool

public [matte](imagickdraw.matte.md)(float `$x`, float `$y`, int
`$paintMethod`): bool

public [pathClose](imagickdraw.pathclose.md)(): bool

public [pathCurveToAbsolute](imagickdraw.pathcurvetoabsolute.md)(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`,
float `$x`,
float `$y`
): bool

public
[pathCurveToQuadraticBezierAbsolute](imagickdraw.pathcurvetoquadraticbezierabsolute.md)(
float `$x1`,
float `$y1`,
float `$x`,
float `$y`
): bool

public
[pathCurveToQuadraticBezierRelative](imagickdraw.pathcurvetoquadraticbezierrelative.md)(
float `$x1`,
float `$y1`,
float `$x`,
float `$y`
): bool

public
[pathCurveToQuadraticBezierSmoothAbsolute](imagickdraw.pathcurvetoquadraticbeziersmoothabsolute.md)(float
`$x`, float `$y`): bool

public
[pathCurveToQuadraticBezierSmoothRelative](imagickdraw.pathcurvetoquadraticbeziersmoothrelative.md)(float
`$x`, float `$y`): bool

public [pathCurveToRelative](imagickdraw.pathcurvetorelative.md)(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`,
float `$x`,
float `$y`
): bool

public
[pathCurveToSmoothAbsolute](imagickdraw.pathcurvetosmoothabsolute.md)(
float `$x2`,
float `$y2`,
float `$x`,
float `$y`
): bool

public
[pathCurveToSmoothRelative](imagickdraw.pathcurvetosmoothrelative.md)(
float `$x2`,
float `$y2`,
float `$x`,
float `$y`
): bool

public
[pathEllipticArcAbsolute](imagickdraw.pathellipticarcabsolute.md)(
float `$rx`,
float `$ry`,
float `$x_axis_rotation`,
bool `$large_arc_flag`,
bool `$sweep_flag`,
float `$x`,
float `$y`
): bool

public
[pathEllipticArcRelative](imagickdraw.pathellipticarcrelative.md)(
float `$rx`,
float `$ry`,
float `$x_axis_rotation`,
bool `$large_arc_flag`,
bool `$sweep_flag`,
float `$x`,
float `$y`
): bool

public [pathFinish](imagickdraw.pathfinish.md)(): bool

public [pathLineToAbsolute](imagickdraw.pathlinetoabsolute.md)(float
`$x`, float `$y`): bool

public
[pathLineToHorizontalAbsolute](imagickdraw.pathlinetohorizontalabsolute.md)(float
`$x`): bool

public
[pathLineToHorizontalRelative](imagickdraw.pathlinetohorizontalrelative.md)(float
`$x`): bool

public [pathLineToRelative](imagickdraw.pathlinetorelative.md)(float
`$x`, float `$y`): bool

public
[pathLineToVerticalAbsolute](imagickdraw.pathlinetoverticalabsolute.md)(float
`$y`): bool

public
[pathLineToVerticalRelative](imagickdraw.pathlinetoverticalrelative.md)(float
`$y`): bool

public [pathMoveToAbsolute](imagickdraw.pathmovetoabsolute.md)(float
`$x`, float `$y`): bool

public [pathMoveToRelative](imagickdraw.pathmovetorelative.md)(float
`$x`, float `$y`): bool

public [pathStart](imagickdraw.pathstart.md)(): bool

public [point](imagickdraw.point.md)(float `$x`, float `$y`): bool

public [polygon](imagickdraw.polygon.md)(array `$coordinates`): bool

public [polyline](imagickdraw.polyline.md)(array `$coordinates`): bool

public [pop](imagickdraw.pop.md)(): bool

public [popClipPath](imagickdraw.popclippath.md)(): bool

public [popDefs](imagickdraw.popdefs.md)(): bool

public [popPattern](imagickdraw.poppattern.md)(): bool

public [push](imagickdraw.push.md)(): bool

public [pushClipPath](imagickdraw.pushclippath.md)(string
`$clip_mask_id`): bool

public [pushDefs](imagickdraw.pushdefs.md)(): bool

public [pushPattern](imagickdraw.pushpattern.md)(
string `$pattern_id`,
float `$x`,
float `$y`,
float `$width`,
float `$height`
): bool

public [rectangle](imagickdraw.rectangle.md)(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`
): bool

public [render](imagickdraw.render.md)(): bool

public [resetVectorGraphics](imagickdraw.resetvectorgraphics.md)():
bool

public [rotate](imagickdraw.rotate.md)(float `$degrees`): bool

public [roundRectangle](imagickdraw.roundrectangle.md)(
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`,
float `$rx`,
float `$ry`
): bool

public [scale](imagickdraw.scale.md)(float `$x`, float `$y`): bool

public [setClipPath](imagickdraw.setclippath.md)(string `$clip_mask`):
bool

public [setClipRule](imagickdraw.setcliprule.md)(int `$fill_rule`):
bool

public [setClipUnits](imagickdraw.setclipunits.md)(int `$clip_units`):
bool

public [setFillAlpha](imagickdraw.setfillalpha.md)(float `$opacity`):
bool

public
[setFillColor](imagickdraw.setfillcolor.md)([ImagickPixel](class.imagickpixel.md)
`$fill_pixel`): bool

public [setFillOpacity](imagickdraw.setfillopacity.md)(float
`$fillOpacity`): bool

public [setFillPatternURL](imagickdraw.setfillpatternurl.md)(string
`$fill_url`): bool

public [setFillRule](imagickdraw.setfillrule.md)(int `$fill_rule`):
bool

public [setFont](imagickdraw.setfont.md)(string `$font_name`): bool

public [setFontFamily](imagickdraw.setfontfamily.md)(string
`$font_family`): bool

public [setFontSize](imagickdraw.setfontsize.md)(float `$pointsize`):
bool

public [setFontStretch](imagickdraw.setfontstretch.md)(int
`$fontStretch`): bool

public [setFontStyle](imagickdraw.setfontstyle.md)(int `$style`): bool

public [setFontWeight](imagickdraw.setfontweight.md)(int
`$font_weight`): bool

public [setGravity](imagickdraw.setgravity.md)(int `$gravity`): bool

public [setResolution](imagickdraw.setresolution.md)(float
`$x_resolution`, float `$y_resolution`): bool

public [setStrokeAlpha](imagickdraw.setstrokealpha.md)(float
`$opacity`): bool

public [setStrokeAntialias](imagickdraw.setstrokeantialias.md)(bool
`$stroke_antialias`): bool

public
[setStrokeColor](imagickdraw.setstrokecolor.md)([ImagickPixel](class.imagickpixel.md)
`$stroke_pixel`): bool

public [setStrokeDashArray](imagickdraw.setstrokedasharray.md)(array
`$dashArray`): bool

public [setStrokeDashOffset](imagickdraw.setstrokedashoffset.md)(float
`$dash_offset`): bool

public [setStrokeLineCap](imagickdraw.setstrokelinecap.md)(int
`$linecap`): bool

public [setStrokeLineJoin](imagickdraw.setstrokelinejoin.md)(int
`$linejoin`): bool

public [setStrokeMiterLimit](imagickdraw.setstrokemiterlimit.md)(int
`$miterlimit`): bool

public [setStrokeOpacity](imagickdraw.setstrokeopacity.md)(float
`$stroke_opacity`): bool

public
[setStrokePatternURL](imagickdraw.setstrokepatternurl.md)(string
`$stroke_url`): bool

public [setStrokeWidth](imagickdraw.setstrokewidth.md)(float
`$stroke_width`): bool

public [setTextAlignment](imagickdraw.settextalignment.md)(int
`$alignment`): bool

public [setTextAntialias](imagickdraw.settextantialias.md)(bool
`$antiAlias`): bool

public [setTextDecoration](imagickdraw.settextdecoration.md)(int
`$decoration`): bool

public [setTextEncoding](imagickdraw.settextencoding.md)(string
`$encoding`): bool

public
[setTextInterlineSpacing](imagickdraw.settextinterlinespacing.md)(float
`$spacing`): bool

public
[setTextInterwordSpacing](imagickdraw.settextinterwordspacing.md)(float
`$spacing`): bool

public [setTextKerning](imagickdraw.settextkerning.md)(float
`$kerning`): bool

public
[setTextUnderColor](imagickdraw.settextundercolor.md)([ImagickPixel](class.imagickpixel.md)
`$under_color`): bool

public [setVectorGraphics](imagickdraw.setvectorgraphics.md)(string
`$xml`): bool

public [setViewbox](imagickdraw.setviewbox.md)(
int `$x1`,
int `$y1`,
int `$x2`,
int `$y2`
): bool

public [skewX](imagickdraw.skewx.md)(float `$degrees`): bool

public [skewY](imagickdraw.skewy.md)(float `$degrees`): bool

public [translate](imagickdraw.translate.md)(float `$x`, float `$y`):
bool

}

## Зміст

- [ImagickDraw::affine](imagickdraw.affine.md) — Регулює поточну
матрицю афінного перетворення
- [ImagickDraw::annotation](imagickdraw.annotation.md) - Малює
текст на зображенні
- [ImagickDraw::arc](imagickdraw.arc.md) - Малює дугу
- [ImagickDraw::bezier](imagickdraw.bezier.md) - Малює криву Безьє
- [ImagickDraw::circle](imagickdraw.circle.md) — Малює коло
- [ImagickDraw::clear](imagickdraw.clear.md) - Очищає ImagickDraw
- [ImagickDraw::clone](imagickdraw.clone.md) — Робить точну копію
вказаного об'єкту ImagickDraw
- [ImagickDraw::color](imagickdraw.color.md) — Малює колір на
зображенні
- [ImagickDraw::comment](imagickdraw.comment.md) — Додає
коментар
- [ImagickDraw::composite](imagickdraw.composite.md) — Накладає
зображення на поточне зображення
- [ImagickDraw::\_\_construct](imagickdraw.construct.md) -
Конструктор класу ImagickDraw
- [ImagickDraw::destroy](imagickdraw.destroy.md) - Звільняє все
пов'язані ресурси
- [ImagickDraw::ellipse](imagickdraw.ellipse.md) — Малює на
зображенні еліпс
- [ImagickDraw::getClipPath](imagickdraw.getclippath.md) -
Повертає ідентифікатор поточного відсічного контуру
- [ImagickDraw::getClipRule](imagickdraw.getcliprule.md)
Повертає поточне правило заливання багатокутника
- [ImagickDraw::getClipUnits](imagickdraw.getclipunits.md) -
Повертає інтерпретацію одиниць відсічного контуру
- [ImagickDraw::getFillColor](imagickdraw.getfillcolor.md) -
Повертає колір заливки
- [ImagickDraw::getFillOpacity](imagickdraw.getfillopacity.md) -
Повертає непрозорість, що використовується при малюванні
- [ImagickDraw::getFillRule](imagickdraw.getfillrule.md) -
Повертає правило заливання
- [ImagickDraw::getFont](imagickdraw.getfont.md) — Повертає шрифт
- [ImagickDraw::getFontFamily](imagickdraw.getfontfamily.md) -
Повертає сімейство шрифтів
- [ImagickDraw::getFontSize](imagickdraw.getfontsize.md) -
Повертає розмір шрифту
- [ImagickDraw::getFontStretch](imagickdraw.getfontstretch.md) -
Опис
- [ImagickDraw::getFontStyle](imagickdraw.getfontstyle.md) -
Повертає стиль шрифту
- [ImagickDraw::getFontWeight](imagickdraw.getfontweight.md) -
Повертає товщину шрифту
- [ImagickDraw::getGravity](imagickdraw.getgravity.md) - Повертає
гравітацію розміщення тексту
- [ImagickDraw::getStrokeAntialias](imagickdraw.getstrokeantialias.md)
— Повертає поточне налаштування згладжування обведення
- [ImagickDraw::getStrokeColor](imagickdraw.getstrokecolor.md) -
Повертає колір для обведення контурів об'єкта.
- [ImagickDraw::getStrokeDashArray](imagickdraw.getstrokedasharray.md)
- Повертає масив, що представляє патерн зі штрихів та пробілів,
використовуваних для обведення контурів
- [ImagickDraw::getStrokeDashOffset](imagickdraw.getstrokedashoffset.md)
— Повертає зсув у штриховому патерні для початку штрихування.
- [ImagickDraw::getStrokeLineCap](imagickdraw.getstrokelinecap.md) -
Повертає форму, яка використовуватиметься наприкінці відкритих
внутрішніх контурів при їх обведенні
- [ImagickDraw::getStrokeLineJoin](imagickdraw.getstrokelinejoin.md)
— Повертає форму, яка використовуватиметься у кутах контурів
при їх обведенні
- [ImagickDraw::getStrokeMiterLimit](imagickdraw.getstrokemiterlimit.md)
— Повертає межу зрізу обведення
- [ImagickDraw::getStrokeOpacity](imagickdraw.getstrokeopacity.md) -
Повертає непрозорість обведених контурів об'єкта
- [ImagickDraw::getStrokeWidth](imagickdraw.getstrokewidth.md) -
Повертає ширину обведення, що використовується для малювання контурів.
об'єкта
- [ImagickDraw::getTextAlignment](imagickdraw.gettextalignment.md) -
Повертає вирівнювання тексту
- [ImagickDraw::getTextAntialias](imagickdraw.gettextantialias.md) -
Повертає поточне настроювання згладжування тексту
- [ImagickDraw::getTextDecoration](imagickdraw.gettextdecoration.md)
— Повертає оформлення тексту
- [ImagickDraw::getTextEncoding](imagickdraw.gettextencoding.md) -
Повертає кодовий набір, який використовується для текстових анотацій
- [ImagickDraw::getTextInterlineSpacing](imagickdraw.gettextinterlinespacing.md)
— Повертає міжрядковий інтервал тексту
- [ImagickDraw::getTextInterwordSpacing](imagickdraw.gettextinterwordspacing.md)
— Повертає міжслівний інтервал тексту
- [ImagickDraw::getTextKerning](imagickdraw.gettextkerning.md) -
Повертає міжлітерний інтервал тексту
- [ImagickDraw::getTextUnderColor](imagickdraw.gettextundercolor.md)
— Повертає колір під текстом
- [ImagickDraw::getVectorGraphics](imagickdraw.getvectorgraphics.md)
— Повертає рядок, який містить векторну графіку
- [ImagickDraw::line](imagickdraw.line.md) — Малює лінію
- [ImagickDraw::matte](imagickdraw.matte.md) - Зафарбовує канал
непрозорості зображення
- [ImagickDraw::pathClose](imagickdraw.pathclose.md) — Додає
елемент шляху до поточного шляху
- [ImagickDraw::pathCurveToAbsolute](imagickdraw.pathcurvetoabsolute.md)
— Малює кубічну криву Безьє
- [ImagickDraw::pathCurveToQuadraticBezierAbsolute](imagickdraw.pathcurvetoquadraticbezierabsolute.md)
— Малює квадратичну криву Безьє
- [ImagickDraw::pathCurveToQuadraticBezierRelative](imagickdraw.pathcurvetoquadraticbezierrelative.md)
— Малює квадратичну криву Безьє
- [ImagickDraw::pathCurveToQuadraticBezierSmoothAbsolute](imagickdraw.pathcurvetoquadraticbeziersmoothabsolute.md)
— Малює квадратичну криву Безьє
- [ImagickDraw::pathCurveToQuadraticBezierSmoothRelative](imagickdraw.pathcurvetoquadraticbeziersmoothrelative.md)
— Малює квадратичну криву Безьє
- [ImagickDraw::pathCurveToRelative](imagickdraw.pathcurvetorelative.md)
— Малює кубічну криву Безьє
- [ImagickDraw::pathCurveToSmoothAbsolute](imagickdraw.pathcurvetosmoothabsolute.md)
— Малює кубічну криву Безьє
- [ImagickDraw::pathCurveToSmoothRelative](imagickdraw.pathcurvetosmoothrelative.md)
— Малює кубічну криву Безьє
- [ImagickDraw::pathEllipticArcAbsolute](imagickdraw.pathellipticarcabsolute.md)
— Малює еліптичну дугу
- [ImagickDraw::pathEllipticArcRelative](imagickdraw.pathellipticarcrelative.md)
— Малює еліптичну дугу
- [ImagickDraw::pathFinish](imagickdraw.pathfinish.md) - Завершує
поточний шлях
- [ImagickDraw::pathLineToAbsolute](imagickdraw.pathlinetoabsolute.md)
— Малює лінію
- [ImagickDraw::pathLineToHorizontalAbsolute](imagickdraw.pathlinetohorizontalabsolute.md)
— Малює горизонтальну лінію
- [ImagickDraw::pathLineToHorizontalRelative](imagickdraw.pathlinetohorizontalrelative.md)
— Малює горизонтальну лінію
- [ImagickDraw::pathLineToRelative](imagickdraw.pathlinetorelative.md)
— Малює лінію
- [ImagickDraw::pathLineToVerticalAbsolute](imagickdraw.pathlinetoverticalabsolute.md)
— Малює вертикальну лінію
- [ImagickDraw::pathLineToVerticalRelative](imagickdraw.pathlinetoverticalrelative.md)
— Малює вертикальну лінію
- [ImagickDraw::pathMoveToAbsolute](imagickdraw.pathmovetoabsolute.md)
- Починає новий внутрішній контур
- [ImagickDraw::pathMoveToRelative](imagickdraw.pathmovetorelative.md)
- Починає новий внутрішній контур
- [ImagickDraw::pathStart](imagickdraw.pathstart.md) — Оголошує
початок відображення контуру
- [ImagickDraw::point](imagickdraw.point.md) — Малює точку
- [ImagickDraw::polygon](imagickdraw.polygon.md) - Малює
багатокутник
- [ImagickDraw::polyline](imagickdraw.polyline.md) - Малює ламану
лінію
- [ImagickDraw::pop](imagickdraw.pop.md) — Знищує поточний об'єкт
ImagickDraw у стеку та повертається до раніше доданого об'єкту
ImagickDraw
- [ImagickDraw::popClipPath](imagickdraw.popclippath.md) - Завершує
визначення шляху відсічного контуру
- [ImagickDraw::popDefs](imagickdraw.popdefs.md) — Завершує список
визначень
- [ImagickDraw::popPattern](imagickdraw.poppattern.md) - Завершує
визначення шаблону
- [ImagickDraw::push](imagickdraw.push.md) — Клонує поточний
об'єкт ImagickDraw і додає його в стек
- [ImagickDraw::pushClipPath](imagickdraw.pushclippath.md) -
Запускає визначення шляху відсічного контуру
- [ImagickDraw::pushDefs](imagickdraw.pushdefs.md) — Вказує, що
наступні команди створюють іменовані елементи для ранньої обробки
- [ImagickDraw::pushPattern](imagickdraw.pushpattern.md) -
Вказує, що наступні команди аж до
ImagickDraw::opPattern() становлять визначення іменованого
патерну
- [ImagickDraw::rectangle](imagickdraw.rectangle.md) - Малює
прямокутник
- [ImagickDraw::render](imagickdraw.render.md) - Малює все
попередні команди малювання на зображенні
- [ImagickDraw::resetVectorGraphics](imagickdraw.resetvectorgraphics.md)
— Скидає векторну графіку
- [ImagickDraw::rotate](imagickdraw.rotate.md) — Застосовує вказаний
поворот до поточного координатного простору
- [ImagickDraw::roundRectangle](imagickdraw.roundrectangle.md) -
Малює прямокутник із закругленими кутами
- [ImagickDraw::scale](imagickdraw.scale.md) — Регулює
коефіцієнт масштабування
- [ImagickDraw::setClipPath](imagickdraw.setclippath.md) — Зв'язує
іменований контур відсічного контуру із зображенням
- [ImagickDraw::setClipRule](imagickdraw.setcliprule.md) -
Встановлює правило заливання багатокутника, яке буде
використовуватися відсічним контуром
- [ImagickDraw::setClipUnits](imagickdraw.setclipunits.md) -
Встановлює інтерпретацію одиниць траєкторії відсічного контуру
- [ImagickDraw::setFillAlpha](imagickdraw.setfillalpha.md)
Встановлює непрозорість під час малювання з використанням кольору.
або текстури заливки
- [ImagickDraw::setFillColor](imagickdraw.setfillcolor.md) -
Встановлює колір заливки, який використовується для малювання об'єктів.
заливкою
- [ImagickDraw::setFillOpacity](imagickdraw.setfillopacity.md) -
Встановлює непрозорість під час малювання з використанням кольору.
або текстури заливки
- [ImagickDraw::setFillPatternURL](imagickdraw.setfillpatternurl.md)
— Встановлює URL-адресу для використання як зразок
заливки для заливки об'єктів
- [ImagickDraw::setFillRule](imagickdraw.setfillrule.md)
Встановлює правило заливки для малювання
полігонів
- [ImagickDraw::setFont](imagickdraw.setfont.md) — Встановлює
вказаний шрифт для використання при анотуванні текстом
- [ImagickDraw::setFontFamily](imagickdraw.setfontfamily.md) -
Встановлює сімейство шрифтів для використання при анотуванні
текстом
- [ImagickDraw::setFontSize](imagickdraw.setfontsize.md) -
Встановлює розмір шрифту для використання під час анотування
текстом
- [ImagickDraw::setFontStretch](imagickdraw.setfontstretch.md) -
Встановлює розтягування шрифту для використання при анотуванні
текстом
- [ImagickDraw::setFontStyle](imagickdraw.setfontstyle.md) -
Встановлює стиль шрифту для використання під час анотування
текстом
- [ImagickDraw::setFontWeight](imagickdraw.setfontweight.md) -
Встановлює товщину шрифту
- [ImagickDraw::setGravity](imagickdraw.setgravity.md)
Встановлює гравітацію розміщення тексту
- [ImagickDraw::setResolution](imagickdraw.setresolution.md) -
Встановлює дозвіл
- [ImagickDraw::setStrokeAlpha](imagickdraw.setstrokealpha.md)
Визначає непрозорість обведення контурів об'єкта
- [ImagickDraw::setStrokeAntialias](imagickdraw.setstrokeantialias.md)
— Керує згладжуванням обведення контурів
- [ImagickDraw::setStrokeColor](imagickdraw.setstrokecolor.md) -
Встановлює колір, який використовується для обведення контурів об'єкта
- [ImagickDraw::setStrokeDashArray](imagickdraw.setstrokedasharray.md)
— Задає патерн із штрихів та пробілів, які використовуються для обведення
контурів
- [ImagickDraw::setStrokeDashOffset](imagickdraw.setstrokedashoffset.md)
— Задає зсув у штриховому патерні для початку штрихування
- [ImagickDraw::setStrokeLineCap](imagickdraw.setstrokelinecap.md) -
Задає форму, яка використовуватиметься наприкінці відкритих
внутрішніх контурів при їх обведенні
- [ImagickDraw::setStrokeLineJoin](imagickdraw.setstrokelinejoin.md)
- Задає форму, яка буде використовуватися в кутах контурів при їх
обведенні
- [ImagickDraw::setStrokeMiterLimit](imagickdraw.setstrokemiterlimit.md)
- Задає межу зрізу обведення
- [ImagickDraw::setStrokeOpacity](imagickdraw.setstrokeopacity.md) -
Визначає непрозорість обведення контурів об'єкта
- [ImagickDraw::setStrokePatternURL](imagickdraw.setstrokepatternurl.md)
— Встановлює патерн для обведення контурів об'єкта.
- [ImagickDraw::setStrokeWidth](imagickdraw.setstrokewidth.md) -
Встановлює ширину обведення, яка використовується для малювання контурів.
об'єкта
- [ImagickDraw::setTextAlignment](imagickdraw.settextalignment.md) -
Задає вирівнювання тексту
- [ImagickDraw::setTextAntialias](imagickdraw.settextantialias.md) -
Керує згладжуванням тексту
- [ImagickDraw::setTextDecoration](imagickdraw.settextdecoration.md)
- Визначає оформлення
- [ImagickDraw::setTextEncoding](imagickdraw.settextencoding.md)
Задає кодовий набір тексту
- [ImagickDraw::setTextInterlineSpacing](imagickdraw.settextinterlinespacing.md)
— Встановлює міжрядковий інтервал тексту
- [ImagickDraw::setTextInterwordSpacing](imagickdraw.settextinterwordspacing.md)
— Встановлює міжмовний інтервал тексту
- [ImagickDraw::setTextKerning](imagickdraw.settextkerning.md) -
Встановлює міжлітерний інтервал тексту
- [ImagickDraw::setTextUnderColor](imagickdraw.settextundercolor.md)
— Задає колір прямокутника фону
- [ImagickDraw::setVectorGraphics](imagickdraw.setvectorgraphics.md)
— Встановлює векторну графіку
- [ImagickDraw::setViewbox](imagickdraw.setviewbox.md) -
Встановлює загальний розмір полотна
- [ImagickDraw::skewX](imagickdraw.skewx.md) — Нахиляє поточну
систему координат по горизонталі
- [ImagickDraw::skewY](imagickdraw.skewy.md) — Нахиляє поточну
систему координат по вертикалі
- [ImagickDraw::translate](imagickdraw.translate.md) — Застосовує
перенесення до поточної системи координат
