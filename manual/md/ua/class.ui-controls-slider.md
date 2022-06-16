- [«UI\Controls\Spin::setValue](ui-controls-spin.setvalue.md)
- [UI\Controls\Slider::\_\_construct
»](ui-controls-slider.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Слайдер"

# Елемент управління "Слайдер"

(UI 0.9.9)

## Вступ

Слайдер - це елемент управління, що представляє діапазон та поточне
значення у ньому. Ковзаючий елемент управління (іноді званий
"великим пальцем") відображає значення і може бути відрегульований в
межах діапазону.

## Огляд класів

class **UI\Controls\Slider** extends [UI\Control](class.ui-control.md)
{

/\* Конструктор \*/

public [\_\_construct](ui-controls-slider.construct.md)(int `$min`,
int `$max`)

/\* Методи \*/

public [getValue](ui-controls-slider.getvalue.md)(): int

protected [onChange](ui-controls-slider.onchange.md)()

public [setValue](ui-controls-slider.setvalue.md)(int `$value`)

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

- [UI\Controls\Slider::\_\_construct](ui-controls-slider.construct.md)
- Створює новий об'єкт Slider
- [UI\Controls\Slider::getValue](ui-controls-slider.getvalue.md) -
Отримати значення
- [UI\Controls\Slider::onChange](ui-controls-slider.onchange.md) -
Обробник зміни
- [UI\Controls\Slider::setValue](ui-controls-slider.setvalue.md) -
Встановити значення
