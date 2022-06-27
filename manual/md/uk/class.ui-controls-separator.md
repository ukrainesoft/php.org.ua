- [«
UI\Controls\Progress::setValue](ui-controls-progress.setvalue.md)
- [UI\Controls\Separator::\_\_construct
»](ui-controls-separator.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Розділювач"

# Елемент управління "Розділювач"

(UI 0.9.9)

## Вступ

Розділювач представляє елемент управління роздільника без будь-яких
функцій.

## Огляд класів

class **UI\Controls\Separator** extends
[UI\Control](class.ui-control.md) {

/\* Константи \*/

const int `Horizontal`;

const int `Vertical`;

/\* Конструктор \*/

public [\_\_construct](ui-controls-separator.construct.md)(int `$type`
u003d UI\Controls\Separator::Horizontal)

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

## Зумовлені константи

**`UI\Controls\Separator::Horizontal`**
Горизонтальний роздільник

**`UI\Controls\Separator::Vertical`**
Вертикальний роздільник

## Зміст

- [UI\Controls\Separator::\_\_construct](ui-controls-separator.construct.md)
— Створити новий об'єкт Separator
