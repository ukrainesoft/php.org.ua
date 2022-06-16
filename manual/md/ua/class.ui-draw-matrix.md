- [«
UI\Draw\Path::newFigureWithArc](ui-draw-path.newfigurewitharc.md)
- [UI\Draw\Matrix::invert »](ui-draw-matrix.invert.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Матриця малювання

# Матриця малювання

(UI 0.9.9)

## Вступ

## Огляд класів

class **UI\Draw\Matrix** {

/\* Методи \*/

public [invert](ui-draw-matrix.invert.md)()

public [isInvertible](ui-draw-matrix.isinvertible.md)(): bool

public
[multiply](ui-draw-matrix.multiply.md)([UI\Draw\Matrix](class.ui-draw-matrix.md)
`$matrix`): [UI\Draw\Matrix](class.ui-draw-matrix.md)

public
[rotate](ui-draw-matrix.rotate.md)([UI\Point](class.ui-point.md)
`$point`, float `$amount`)

public
[scale](ui-draw-matrix.scale.md)([UI\Point](class.ui-point.md)
`$center`, [UI\Point](class.ui-point.md) `$point`)

public [skew](ui-draw-matrix.skew.md)([UI\Point](class.ui-point.md)
`$point`, [UI\Point](class.ui-point.md) `$amount`)

public
[translate](ui-draw-matrix.translate.md)([UI\Point](class.ui-point.md)
`$point`)

}

## Зміст

- [UI\Draw\Matrix::invert](ui-draw-matrix.invert.md) — Інвертувати
матрицю
- [UI\Draw\Matrix::isInvertible](ui-draw-matrix.isinvertible.md) -
Визначення, чи інвертована матриця
- [UI\Draw\Matrix::multiply](ui-draw-matrix.multiply.md) — Помножити
матрицю
- [UI\Draw\Matrix::rotate](ui-draw-matrix.rotate.md) — Перевернути
матрицю
- [UI\Draw\Matrix::scale](ui-draw-matrix.scale.md) - Масштабувати
матрицю
- [UI\Draw\Matrix::skew](ui-draw-matrix.skew.md) - Нахилити матрицю
- [UI\Draw\Matrix::translate](ui-draw-matrix.translate.md) -
Перекласти матрицю
