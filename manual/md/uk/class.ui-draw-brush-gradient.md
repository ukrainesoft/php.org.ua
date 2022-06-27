- [« UI\Draw\Brush::setColor](ui-draw-brush.setcolor.md)
- [UI\Draw\Brush\Gradient::addStop
»](ui-draw-brush-gradient.addstop.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Градієнтні кисті

# Градієнтні кисті

(UI 2.0.0)

## Вступ

Анотація клас для градієнтних пензлів

## Огляд класів

abstract class **UI\Draw\Brush\Gradient** extends
[UI\Draw\Brush](class.ui-draw-brush.md) {

/\* Методи \*/

public [addStop](ui-draw-brush-gradient.addstop.md)(float `$position`,
[UI\Draw\Color](class.ui-draw-color.md) `$color`): int

public [addStop](ui-draw-brush-gradient.addstop.md)(float `$position`,
int `$color`): int

public [delStop](ui-draw-brush-gradient.delstop.md)(int `$index`): int

public [setStop](ui-draw-brush-gradient.setstop.md)(int `$index`,
float `$position`, [UI\Draw\Color](class.ui-draw-color.md) `$color`):
bool

public [setStop](ui-draw-brush-gradient.setstop.md)(int `$index`,
float `$position`, int `$color`): bool

/\* Наслідувані методи \*/

public [UI\Draw\Brush::getColor](ui-draw-brush.getcolor.md)():
[UI\Draw\Color](class.ui-draw-color.md)

public
[UI\Draw\Brush::setColor](ui-draw-brush.setcolor.md)([UI\Draw\Color](class.ui-draw-color.md)
`$color`): void

public [UI\Draw\Brush::setColor](ui-draw-brush.setcolor.md)(int
`$color`): void

}

## Зміст

- [UI\Draw\Brush\Gradient::addStop](ui-draw-brush-gradient.addstop.md)
- Додає вузол градієнта
- [UI\Draw\Brush\Gradient::delStop](ui-draw-brush-gradient.delstop.md)
- Видаляє вузол градієнта
- [UI\Draw\Brush\Gradient::setStop](ui-draw-brush-gradient.setstop.md)
- Встановлює вузол градієнта
