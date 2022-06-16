- [«UI\Controls\Label::setText](ui-controls-label.settext.md)
- [UI\Controls\Entry::\_\_construct
»](ui-controls-entry.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Введення"

# Елемент управління "Введення"

(UI 0.9.9)

## Вступ

Введення (Entry) - елемент керування текстовим записом, який підходить для введення
простого тексту, паролів чи пошукових запитів.

## Огляд класів

class **UI\Controls\Entry** extends [UI\Control](class.ui-control.md)
{

/\* Константи \*/

const int `Normal`;

const int `Password`;

const int `Search`;

/\* Конструктор \*/

public [\_\_construct](ui-controls-entry.construct.md)(int `$type` u003d
UI\Controls\Entry::Normal)

/\* Методи \*/

public [getText](ui-controls-entry.gettext.md)(): string

public [isReadOnly](ui-controls-entry.isreadonly.md)(): bool

protected [onChange](ui-controls-entry.onchange.md)()

public [setReadOnly](ui-controls-entry.setreadonly.md)(bool
`$readOnly`)

public [setText](ui-controls-entry.settext.md)(string `$text`)

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

**`UI\Controls\Entry::Normal`**
Звичайне однорядкове введення

**`UI\Controls\Entry::Password`**
Введення пароля

**`UI\Controls\Entry::Search`**
Введення пошуку

## Зміст

- [UI\Controls\Entry::\_\_construct](ui-controls-entry.construct.md)
— Створити новий об'єкт Entry
- [UI\Controls\Entry::getText](ui-controls-entry.gettext.md) -
Отримати текст
- [UI\Controls\Entry::isReadOnly](ui-controls-entry.isreadonly.md) -
Визначити, чи є елемент лише для читання
- [UI\Controls\Entry::onChange](ui-controls-entry.onchange.md) -
Обробник зміни
- [UI\Controls\Entry::setReadOnly](ui-controls-entry.setreadonly.md)
- Встановити "тільки для читання"
- [UI\Controls\Entry::setText](ui-controls-entry.settext.md) -
Встановити текст
