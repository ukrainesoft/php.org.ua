- [«UI\Controls\Check::setText](ui-controls-check.settext.md)
- [UI\Controls\Button::\_\_construct
»](ui-controls-button.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Кнопка"

# Елемент управління "Кнопка"

(UI 0.9.9)

## Вступ

Являє собою позначену клікабельну кнопку

## Огляд класів

class **UI\Controls\Button** extends [UI\Control](class.ui-control.md)
{

/\* Конструктор \*/

public [\_\_construct](ui-controls-button.construct.md)(string
`$text`)

/\* Методи \*/

public [getText](ui-controls-button.gettext.md)(): string

protected [onClick](ui-controls-button.onclick.md)()

public [setText](ui-controls-button.settext.md)(string `$text`)

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

- [UI\Controls\Button::\_\_construct](ui-controls-button.construct.md)
— Створити новий об'єкт Button
- [UI\Controls\Button::getText](ui-controls-button.gettext.md) -
Отримати текст
- [UI\Controls\Button::onClick](ui-controls-button.onclick.md) -
Обробник кліку
- [UI\Controls\Button::setText](ui-controls-button.settext.md) -
Встановити текст
