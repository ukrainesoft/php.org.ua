- [« UI\Size::setWidth](ui-size.setwidth.md)
- [UI\Window::add »](ui-window.add.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Вікно

# Вікно

(UI 0.9.9)

## Вступ

Представляє інтерфейс вікна

## Огляд класів

class **UI\Window** extends [UI\Control](class.ui-control.md) {

/\* Властивості \*/

protected `$controls`;

/\* Конструктор \*/

public [\_\_construct](ui-window.construct.md)(string `$title`, Size
`$size`, bool `$menu` u003d **`false`**)

/\* Методи \*/

public [add](ui-window.add.md)([UI\Control](class.ui-control.md)
`$control`)

public [error](ui-window.error.md)(string `$title`, string `$msg`)

public [getSize](ui-window.getsize.md)():
[UI\Size](class.ui-size.md)

public [getTitle](ui-window.gettitle.md)(): string

public [hasBorders](ui-window.hasborders.md)(): bool

public [hasMargin](ui-window.hasmargin.md)(): bool

public [isFullScreen](ui-window.isfullscreen.md)(): bool

public [msg](ui-window.msg.md)(string `$title`, string `$msg`)

protected [onClosing](ui-window.onclosing.md)(): int

public [open](ui-window.open.md)(): string

public [save](ui-window.save.md)(): string

public [setBorders](ui-window.setborders.md)(bool `$borders`)

public [setFullScreen](ui-window.setfullscreen.md)(bool `$full`)

public [setMargin](ui-window.setmargin.md)(bool `$margin`)

public [setSize](ui-window.setsize.md)([UI\Size](class.ui-size.md)
`$size`)

public [setTitle](ui-window.settitle.md)(string `$title`)

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

## Властивості

`controls`
Містить елементи керування, не слід використовувати безпосередньо

## Зміст

- [UI\Window::add](ui-window.add.md) — Додати елемент керування
- [UI\Window::\_\_construct](ui-window.construct.md) - Створити новий
об'єкт Window
- [UI\Window::error](ui-window.error.md) — Показати блок помилки
- [UI\Window::getSize](ui-window.getsize.md) — Отримати розмір вікна
- [UI\Window::getTitle](ui-window.gettitle.md) - Отримати заголовок
- [UI\Window::hasBorders](ui-window.hasborders.md) — Визначення
рамки
- [UI\Window::hasMargin](ui-window.hasmargin.md) — Визначення полів
- [UI\Window::isFullScreen](ui-window.isfullscreen.md) - Визначення
повного екрану
- [UI\Window::msg](ui-window.msg.md) — Показати блок повідомлення
- [UI\Window::onClosing](ui-window.onclosing.md) - Callback-функція
закриття
- [UI\Window::open](ui-window.open.md) — Відкрити діалогове вікно
- [UI\Window::save](ui-window.save.md) — Зберегти діалогове вікно
- [UI\Window::setBorders](ui-window.setborders.md) — Використання
рамок
- [UI\Window::setFullScreen](ui-window.setfullscreen.md) -
Використання повного екрану
- [UI\Window::setMargin](ui-window.setmargin.md) — Використання
поля
- [UI\Window::setSize](ui-window.setsize.md) — Встановити розмір
- [UI\Window::setTitle](ui-window.settitle.md) — Заголовок вікна
