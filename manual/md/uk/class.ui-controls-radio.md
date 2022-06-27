- [«
UI\Controls\EditableCombo::setText](ui-controls-editablecombo.settext.md)
- [UI\Controls\Radio::append »](ui-controls-radio.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Радіо"

# Елемент управління "Радіо"

(UI 0.9.9)

## Вступ

Радіо схожий на радіокнопку з HTML

## Огляд класів

class **UI\Controls\Radio** extends [UI\Control](class.ui-control.md)
{

/\* Методи \*/

public [append](ui-controls-radio.append.md)(string `$text`)

public [getSelected](ui-controls-radio.getselected.md)(): int

protected [onSelected](ui-controls-radio.onselected.md)()

public [setSelected](ui-controls-radio.setselected.md)(int `$index`)

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

- [UI\Controls\Radio::append](ui-controls-radio.append.md) -
Додає варіант
- [UI\Controls\Radio::getSelected](ui-controls-radio.getselected.md)
— Отримати вибраний варіант
- [UI\Controls\Radio::onSelected](ui-controls-radio.onselected.md) -
Обробник вибору
- [UI\Controls\Radio::setSelected](ui-controls-radio.setselected.md)
— Встановити вибраний варіант
