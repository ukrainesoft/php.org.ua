- [«
UI\Draw\Brush\Gradient::setStop](ui-draw-brush-gradient.setstop.md)
- [UI\Draw\Brush\LinearGradient::\_\_construct
»](ui-draw-brush-lineargradient.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Лінійний градієнт

# Лінійний градієнт

(UI 2.0.0)

## Вступ

## Огляд класів

class **UI\Draw\Brush\LinearGradient** extends
[UI\Draw\Brush\Gradient](class.ui-draw-brush-gradient.md) {

/\* Конструктор \*/

public
[\_\_construct](ui-draw-brush-lineargradient.construct.md)([UI\Point](class.ui-point.md)
`$start`, [UI\Point](class.ui-point.md) `$end`)

/\* Наслідувані методи \*/

public
[UI\Draw\Brush\Gradient::addStop](ui-draw-brush-gradient.addstop.md)(float
`$position`, [UI\Draw\Color](class.ui-draw-color.md) `$color`): int

public
[UI\Draw\Brush\Gradient::addStop](ui-draw-brush-gradient.addstop.md)(float
`$position`, int `$color`): int

public
[UI\Draw\Brush\Gradient::delStop](ui-draw-brush-gradient.delstop.md)(int
`$index`): int

public
[UI\Draw\Brush\Gradient::setStop](ui-draw-brush-gradient.setstop.md)(int
`$index`, float `$position`, [UI\Draw\Color](class.ui-draw-color.md)
`$color`): bool

public
[UI\Draw\Brush\Gradient::setStop](ui-draw-brush-gradient.setstop.md)(int
`$index`, float `$position`, int `$color`): bool

}

## Зміст

- [UI\Draw\Brush\LinearGradient::\_\_construct](ui-draw-brush-lineargradient.construct.md)
- Конструктор класу LinearGradient
