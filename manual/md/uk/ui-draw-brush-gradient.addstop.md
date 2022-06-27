- [« UI\Draw\Brush\Gradient](class.ui-draw-brush-gradient.md)
- [UI\Draw\Brush\Gradient::delStop
»](ui-draw-brush-gradient.delstop.md)

- [PHP Manual](index.md)
- [UI\Draw\Brush\Gradient](class.ui-draw-brush-gradient.md)
- Додає вузол градієнта

# UI\Draw\Brush\Gradient::addStop

(UI 2.0.0)

UI\Draw\Brush\Gradient::addStop — Додає вузол градієнта

### Опис

public **UI\Draw\Brush\Gradient::addStop**(float `$position`,
[UI\Draw\Color](class.ui-draw-color.md) `$color`): int

public **UI\Draw\Brush\Gradient::addStop**(float `$position`, int
`$color`): int

Додає вузол градієнта заданого кольору заданої позиції.

### Список параметрів

`position`
Позиція нового вузла.

`col`
Колір для нового вузла може бути UI\Draw\Color або RRGGBBAA.

### Значення, що повертаються

Загальна кількість вузлів.
