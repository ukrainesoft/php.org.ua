- [«
UI\Controls\Radio::setSelected](ui-controls-radio.setselected.md)
- [UI\Controls\Picker::\_\_construct
»](ui-controls-picker.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент керування "Селектор"

# Елемент управління "Селектор"

(UI 0.9.9)

## Вступ

Селектор представляє кнопку, яка при натисканні відкриває нативний
інтерфейс селектора дати/часу/дати та часу.

## Огляд класів

class **UI\Controls\Picker** extends [UI\Control](class.ui-control.md)
{

/\* Константи \*/

const int `Date`;

const int `Time`;

const int `DateTime`;

/\* Конструктор \*/

public [\_\_construct](ui-controls-picker.construct.md)(int `$type` u003d
UI\Controls\Picker::Date)

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

**`UI\Controls\Picker::Date`**
Селектор дати

**`UI\Controls\Picker::Time`**
Селектор часу

**`UI\Controls\Picker::DateTime`**
Селектор дати та часу

## Зміст

- [UI\Controls\Picker::\_\_construct](ui-controls-picker.construct.md)
- Створює новий об'єкт Picker
