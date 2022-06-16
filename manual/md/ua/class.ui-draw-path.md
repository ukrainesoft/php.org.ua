- [«UI\Draw\Pen::write](ui-draw-pen.write.md)
- [UI\Draw\Path::addRectangle »](ui-draw-path.addrectangle.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Шлях малювання

# Шлях малювання

(UI 0.9.9)

## Вступ

Шлях малювання спрямовує перо, де малювати по області

## Огляд класів

class **UI\Draw\Path** {

/\* Константи \*/

const int `Winding`;

const int `Alternate`;

/\* Конструктор \*/

public [\_\_construct](ui-draw-path.construct.md)(int `$mode` u003d
UI\Draw\Path::Winding)

/\* Методи \*/

public
[addRectangle](ui-draw-path.addrectangle.md)([UI\Point](class.ui-point.md)
`$point`, [UI\Size](class.ui-size.md) `$size`)

public [arcTo](ui-draw-path.arcto.md)(
[UI\Point](class.ui-point.md) `$point`,
float `$radius`,
float `$angle`,
float `$sweep`,
float `$negative`
)

public [bezierTo](ui-draw-path.bezierto.md)(
[UI\Point](class.ui-point.md) `$point`,
float `$radius`,
float `$angle`,
float `$sweep`,
float `$negative`
)

public [closeFigure](ui-draw-path.closefigure.md)()

public [end](ui-draw-path.end.md)()

public [lineTo](ui-draw-path.lineto.md)(
[UI\Point](class.ui-point.md) `$point`,
float `$radius`,
float `$angle`,
float `$sweep`,
float `$negative`
)

public
[newFigure](ui-draw-path.newfigure.md)([UI\Point](class.ui-point.md)
`$point`)

public [newFigureWithArc](ui-draw-path.newfigurewitharc.md)(
[UI\Point](class.ui-point.md) `$point`,
float `$radius`,
float `$angle`,
float `$sweep`,
float `$negative`
)

}

## Зумовлені константи

**`UI\Draw\Path::Winding`**
Це режим малювання за замовчуванням

**`UI\Draw\Path::Alternate`**
Це альтернативний режим малювання

## Зміст

- [UI\Draw\Path::addRectangle](ui-draw-path.addrectangle.md) -
Намалювати прямокутник
- [UI\Draw\Path::arcTo](ui-draw-path.arcto.md) - Намалювати дугу
- [UI\Draw\Path::bezierTo](ui-draw-path.bezierto.md) - Намалювати
криву Безьє
- [UI\Draw\Path::closeFigure](ui-draw-path.closefigure.md) — Закрити
фігуру
- [UI\Draw\Path::\_\_construct](ui-draw-path.construct.md) - Створити
новий об'єкт Path
- [UI\Draw\Path::end](ui-draw-path.end.md) - Завершити шлях
- [UI\Draw\Path::lineTo](ui-draw-path.lineto.md) - Намалювати лінію
- [UI\Draw\Path::newFigure](ui-draw-path.newfigure.md) — Намалювати
фігуру
- [UI\Draw\Path::newFigureWithArc](ui-draw-path.newfigurewitharc.md)
- Намалювати фігуру з дугою
