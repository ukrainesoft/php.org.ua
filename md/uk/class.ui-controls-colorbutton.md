- [«UI\Controls\Button::setText](ui-controls-button.settext.md)
- [UI\Controls\ColorButton::getColor
»](ui-controls-colorbutton.getcolor.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Кнопка з палітрою кольорів"

# Елемент управління "Кнопка з палітрою кольорів"

(UI 0.9.9)

## Вступ

Кнопка з палітрою кольорів – це кнопка, яка відображає селектор кольору
при натисканні

## Огляд класів

class **UI\Controls\ColorButton** extends
[UI\Control](class.ui-control.md) {

/\* Методи \*/

public [getColor](ui-controls-colorbutton.getcolor.md)(): UI\Color

protected [onChange](ui-controls-colorbutton.onchange.md)()

public
[setColor](ui-controls-colorbutton.setcolor.md)([UI\Draw\Color](class.ui-draw-color.md)
`$color`)

public [setColor](ui-controls-colorbutton.setcolor.md)(int `$color`)

/\* Наслідувані методи \*/

public [UI\Control::destroy](ui-control.destroy.md)()

public [UI\Control::disable](ui-control.disable.md)()

public [UI\Control::enable](ui-control.enable.md)()

public [UI\Control::getParent](ui-control.getparent.md)():
[UI\Control](class.ui-control.md)

public [UI\Control::getTopLevel](ui-control.gettoplevel.md)(): int

public [UI\Control::hide](ui-control.hide.md)()

public [UI\Control::isEnabled](ui-control.isenabled.md)(): bool

public [UI\Control::isVisible](ui-control.isvisible.md)(): bool

public
[UI\Control::setParent](ui-control.setparent.md)([UI\Control](class.ui-control.md)
`$parent`)

public [UI\Control::show](ui-control.show.md)()

}

## Зміст

- [UI\Controls\ColorButton::getColor](ui-controls-colorbutton.getcolor.md)
— Отримати об'єкт Color
- [UI\Controls\ColorButton::onChange](ui-controls-colorbutton.onchange.md)
- Обробник зміни
- [UI\Controls\ColorButton::setColor](ui-controls-colorbutton.setcolor.md)
— Встановити об'єкт Color
