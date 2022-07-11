- [«UI\Window::setTitle](ui-window.settitle.md)
- [UI\Control::destroy »](ui-control.destroy.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- елемент управління

# Елемент управління

(UI 0.9.9)

## Вступ

Це закритий базовий клас для всіх елементів керування
інтерфейсу користувача.

## Огляд класів

final class **UI\Control** {

/\* Методи \*/

public [destroy](ui-control.destroy.md)()

public [disable](ui-control.disable.md)()

public [enable](ui-control.enable.md)()

public [getParent](ui-control.getparent.md)():
[UI\Control](class.ui-control.md)

public [getTopLevel](ui-control.gettoplevel.md)(): int

public [hide](ui-control.hide.md)()

public [isEnabled](ui-control.isenabled.md)(): bool

public [isVisible](ui-control.isvisible.md)(): bool

public
[setParent](ui-control.setparent.md)([UI\Control](class.ui-control.md)
`$parent`)

public [show](ui-control.show.md)()

}

## Зміст

- [UI\Control::destroy](ui-control.destroy.md) — Знищити
керуючий елемент
- [UI\Control::disable](ui-control.disable.md) — Вимкнути
керуючий елемент
- [UI\Control::enable](ui-control.enable.md) - Увімкнути керуючий
елемент
- [UI\Control::getParent](ui-control.getparent.md) — Отримати
батьківський керуючий елемент
- [UI\Control::getTopLevel](ui-control.gettoplevel.md) — Отримати
верхній рівень
- [UI\Control::hide](ui-control.hide.md) - Приховати керуючий
елемент
- [UI\Control::isEnabled](ui-control.isenabled.md) — Визначити,
чи включений керуючий елемент
- [UI\Control::isVisible](ui-control.isvisible.md) - Визначити,
чи видимий керуючий елемент
- [UI\Control::setParent](ui-control.setparent.md) — Встановити
батьківський керуючий елемент
- [UI\Control::show](ui-control.show.md) - Показати керуючий
елемент
