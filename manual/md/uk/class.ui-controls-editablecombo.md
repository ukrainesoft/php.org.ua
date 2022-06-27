- [«
UI\Controls\Combo::setSelected](ui-controls-combo.setselected.md)
- [UI\Controls\EditableCombo::append
»](ui-controls-editablecombo.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Редагований елемент управління "Комбо"

# Редагований елемент управління "Комбо"

(UI 0.9.9)

## Вступ

Редагований елемент управління "Комбо" дозволяє користувачеві вводити
довільні опції

## Огляд класів

class **UI\Controls\EditableCombo** extends
[UI\Control](class.ui-control.md) {

/\* Методи \*/

public [append](ui-controls-editablecombo.append.md)(string `$text`)

public [getText](ui-controls-editablecombo.gettext.md)(): string

protected [onChange](ui-controls-editablecombo.onchange.md)()

public [setText](ui-controls-editablecombo.settext.md)(string `$text`)

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

- [UI\Controls\EditableCombo::append](ui-controls-editablecombo.append.md)
- Додати опцію
- [UI\Controls\EditableCombo::getText](ui-controls-editablecombo.gettext.md)
— Отримати текст
- [UI\Controls\EditableCombo::onChange](ui-controls-editablecombo.onchange.md)
- Обробник зміни
- [UI\Controls\EditableCombo::setText](ui-controls-editablecombo.settext.md)
- Встановити текст
