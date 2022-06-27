- [«
UI\Draw\Brush\RadialGradient::\_\_construct](ui-draw-brush-radialgradient.construct.md)
- [UI\Draw\Text\Layout::\_\_construct
»](ui-draw-text-layout.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Представляє макет тексту

# Представляє макет тексту

(UI 0.9.9)

## Вступ

Текстовий макет є макет тексту, який буде намальований
пером

## Огляд класів

class **UI\Draw\Text\Layout** {

/\* Конструктор \*/

public [\_\_construct](ui-draw-text-layout.construct.md)(string
`$text`, [UI\Draw\Text\Font](class.ui-draw-text-font.md) `$font`,
float `$width`)

/\* Методи \*/

public
[setColor](ui-draw-text-layout.setcolor.md)([UI\Draw\Color](class.ui-draw-color.md)
`$color`, int `$start` u003d 0, int `$end` u003d ?)

public [setColor](ui-draw-text-layout.setcolor.md)(int `$color`, int
`$start` u003d 0, int `$end` u003d ?)

public [setWidth](ui-draw-text-layout.setwidth.md)(float `$width`)

}

## Зміст

- [UI\Draw\Text\Layout::\_\_construct](ui-draw-text-layout.construct.md)
— Створити новий об'єкт макету тексту
- [UI\Draw\Text\Layout::setColor](ui-draw-text-layout.setcolor.md) -
Встановити колір
- [UI\Draw\Text\Layout::setWidth](ui-draw-text-layout.setwidth.md) -
Встановити ширину
