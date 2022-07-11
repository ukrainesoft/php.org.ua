- [«UI\Controls\Entry::setText](ui-controls-entry.settext.md)
- [UI\Controls\MultilineEntry::append
»](ui-controls-multilineentry.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Многорядкове введення"

# Елемент управління "Багаторядне введення"

(UI 0.9.9)

## Вступ

Багаторядне введення - це елемент управління текстового запису, здатний
зберігати кілька рядків тексту з перенесенням рядків або без нього.

## Огляд класів

class **UI\Controls\MultilineEntry** extends
[UI\Control](class.ui-control.md) {

/\* Константи \*/

const int `Wrap`;

const int `NoWrap`;

/\* Конструктор \*/

public [\_\_construct](ui-controls-multilineentry.construct.md)(int
`$type` u003d ?)

/\* Методи \*/

public [append](ui-controls-multilineentry.append.md)(string `$text`)

public [getText](ui-controls-multilineentry.gettext.md)(): string

public [isReadOnly](ui-controls-multilineentry.isreadonly.md)(): bool

protected [onChange](ui-controls-multilineentry.onchange.md)()

public [setReadOnly](ui-controls-multilineentry.setreadonly.md)(bool
`$readOnly`)

public [setText](ui-controls-multilineentry.settext.md)(string
`$text`)

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

**`UI\Controls\MultilineEntry::Wrap`**
Дозволити перенесення рядків

**`UI\Controls\MultilineEntry::NoWrap`**
Не дозволяти перенесення рядків

## Зміст

- [UI\Controls\MultilineEntry::append](ui-controls-multilineentry.append.md)
— Додати текст
- [UI\Controls\MultilineEntry::\_\_construct](ui-controls-multilineentry.construct.md)
- Створити новий об'єкт "Многорядкове введення"
- [UI\Controls\MultilineEntry::getText](ui-controls-multilineentry.gettext.md)
— Отримати текст
- [UI\Controls\MultilineEntry::isReadOnly](ui-controls-multilineentry.isreadonly.md)
- Визначення "тільки для читання"
- [UI\Controls\MultilineEntry::onChange](ui-controls-multilineentry.onchange.md)
- Обробник зміни
- [UI\Controls\MultilineEntry::setReadOnly](ui-controls-multilineentry.setreadonly.md)
- Встановити "тільки для читання"
- [UI\Controls\MultilineEntry::setText](ui-controls-multilineentry.settext.md)
- Встановити текст
