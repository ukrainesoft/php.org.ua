- [«UI\Controls\Box::setPadded](ui-controls-box.setpadded.md)
- [UI\Draw\Pen::clip »](ui-draw-pen.clip.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Малювання за допомогою "Перо"

# Малювання за допомогою "Перо"

(UI 0.9.9)

## Вступ

Перо передається обробнику події "малювання області" (Area Draw), він
використовується для обрізання, заповнення, обведення та запису в "шляху
малювання" (Draw Paths).

## Огляд класів

final class **UI\Draw\Pen** {

/\* Методи \*/

public
[clip](ui-draw-pen.clip.md)([UI\Draw\Path](class.ui-draw-path.md)
`$ path`)

public
[fill](ui-draw-pen.fill.md)([UI\Draw\Path](class.ui-draw-path.md)
`$path`, [UI\Draw\Brush](class.ui-draw-brush.md) `$with`)

public
[fill](ui-draw-pen.fill.md)([UI\Draw\Path](class.ui-draw-path.md)
`$path`, [UI\Draw\Color](class.ui-draw-color.md) `$with`)

public
[fill](ui-draw-pen.fill.md)([UI\Draw\Path](class.ui-draw-path.md)
`$path`, int `$with`)

public [restore](ui-draw-pen.restore.md)()

public [save](ui-draw-pen.save.md)()

public
[stroke](ui-draw-pen.stroke.md)([UI\Draw\Path](class.ui-draw-path.md)
`$path`, [UI\Draw\Brush](class.ui-draw-brush.md) `$with`,
[UI\Draw\Stroke](class.ui-draw-stroke.md) `$stroke`)

public
[stroke](ui-draw-pen.stroke.md)([UI\Draw\Path](class.ui-draw-path.md)
`$path`, [UI\Draw\Color](class.ui-draw-color.md) `$with`,
[UI\Draw\Stroke](class.ui-draw-stroke.md) `$stroke`)

public
[stroke](ui-draw-pen.stroke.md)([UI\Draw\Path](class.ui-draw-path.md)
`$path`, int `$with`, [UI\Draw\Stroke](class.ui-draw-stroke.md)
`$stroke`)

public
[transform](ui-draw-pen.transform.md)([UI\Draw\Matrix](class.ui-draw-matrix.md)
`$matrix`)

public [write](ui-draw-pen.write.md)([UI\Point](class.ui-point.md)
`$point`, [UI\Draw\Text\Layout](class.ui-draw-text-layout.md)
`$layout`)

}

## Зміст

- [UI\Draw\Pen::clip](ui-draw-pen.clip.md) - Обрізати шлях
- [UI\Draw\Pen::fill](ui-draw-pen.fill.md) - Залити шлях
- [UI\Draw\Pen::restore](ui-draw-pen.restore.md) — Відновити
- [UI\Draw\Pen::save](ui-draw-pen.save.md) — Зберегти
- [UI\Draw\Pen::stroke](ui-draw-pen.stroke.md) - Обвести шлях
- [UI\Draw\Pen::transform](ui-draw-pen.transform.md) - Перетворити
матрицю
- [UI\Draw\Pen::write](ui-draw-pen.write.md) — Намалювати текст у
точці
