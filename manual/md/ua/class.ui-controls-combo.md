- [«
UI\Controls\Separator::\_\_construct](ui-controls-separator.construct.md)
- [UI\Controls\Combo::append »](ui-controls-combo.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Комбо"

# Елемент управління "Комбо"

(UI 0.9.9)

## Вступ

Елемент управління "Комбо" представляє список опцій, наприклад, схожий
на HTML-елемент.

## Огляд класів

class **UI\Controls\Combo** extends [UI\Control](class.ui-control.md)
{

/\* Методи \*/

public [append](ui-controls-combo.append.md)(string `$text`)

public [getSelected](ui-controls-combo.getselected.md)(): int

protected [onSelected](ui-controls-combo.onselected.md)()

public [setSelected](ui-controls-combo.setselected.md)(int `$index`)

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

- [UI\Controls\Combo::append](ui-controls-combo.append.md) -
Додати опцію
- [UI\Controls\Combo::getSelected](ui-controls-combo.getselected.md)
— Отримати вибрану опцію
- [UI\Controls\Combo::onSelected](ui-controls-combo.onselected.md) -
Обробник обраної опції
- [UI\Controls\Combo::setSelected](ui-controls-combo.setselected.md)
— Встановлює вибрану опцію
