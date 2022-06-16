- [«
UI\Controls\ColorButton::setColor](ui-controls-colorbutton.setcolor.md)
- [UI\Controls\Label::\_\_construct
»](ui-controls-label.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Мітка"

# Елемент управління "Мітка"

(UI 0.9.9)

## Вступ

Мітка представляє один рядок тексту, призначений для ідентифікації
користувачем певного елемента інтерфейсу.

## Огляд класів

class **UI\Controls\Label** extends [UI\Control](class.ui-control.md)
{

/\* Конструктор \*/

public [\_\_construct](ui-controls-label.construct.md)(string `$text`)

/\* Методи \*/

public [getText](ui-controls-label.gettext.md)(): string

public [setText](ui-controls-label.settext.md)(string `$text`)

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

- [UI\Controls\Label::\_\_construct](ui-controls-label.construct.md)
- Створити новий об'єкт Label
- [UI\Controls\Label::getText](ui-controls-label.gettext.md) -
Отримати текст
- [UI\Controls\Label::setText](ui-controls-label.settext.md) -
Встановити текст
