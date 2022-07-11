- [« UI\Controls\Slider::setValue](ui-controls-slider.setvalue.md)
- [UI\Controls\Progress::getValue
»](ui-controls-progress.getvalue.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Хід виконання"

# Елемент управління "Хід виконання"

(UI 0.9.9)

## Вступ

Елемент управління "Хід виконання" схожий на знайомий індикатор
виконання: Він являє собою індикатор виконання у відсотках з
допустимим діапазоном від 0 до 100 (включно).

## Огляд класів

class **UI\Controls\Progress** extends
[UI\Control](class.ui-control.md) {

/\* Методи \*/

public [getValue](ui-controls-progress.getvalue.md)(): int

public [setValue](ui-controls-progress.setvalue.md)(int `$value`)

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

- [UI\Controls\Progress::getValue](ui-controls-progress.getvalue.md)
— Отримати значення
- [UI\Controls\Progress::setValue](ui-controls-progress.setvalue.md)
— Встановити значення
