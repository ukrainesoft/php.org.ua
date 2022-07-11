- [« UI\MenuItem::setChecked](ui-menuitem.setchecked.md)
- [UI\Area::onDraw »](ui-area.ondraw.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Area

# Area

(UI 0.9.9)

## Вступ

Область (Area) являє собою полотно, яке можна використовувати для
малювання та реагування на події миші та клавіш.

## Огляд класів

class **UI\Area** extends [UI\Control](class.ui-control.md) {

/\* Константи \*/

const int `Ctrl`;

const int `Alt`;

const int `Shift`;

const int `Super`;

const int `Down`;

const int `Up`;

/\* Методи \*/

protected [onDraw](ui-area.ondraw.md)(
[UI\Draw\Pen](class.ui-draw-pen.md) `$pen`,
[UI\Size](class.ui-size.md) `$areaSize`,
[UI\Point](class.ui-point.md) `$clipPoint`,
[UI\Size](class.ui-size.md) `$clipSize`
)

protected [onKey](ui-area.onkey.md)(string `$key`, int `$ext`, int
`$flags`)

protected
[onMouse](ui-area.onmouse.md)([UI\Point](class.ui-point.md)
`$areaPoint`, [UI\Size](class.ui-size.md) `$areaSize`, int `$flags`)

public [redraw](ui-area.redraw.md)()

public [scrollTo](ui-area.scrollto.md)([UI\Point](class.ui-point.md)
`$point`, [UI\Size](class.ui-size.md) `$size`)

public [setSize](ui-area.setsize.md)([UI\Size](class.ui-size.md)
`$size`)

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

**`UI\Area::Ctrl`**
Повинен бути встановлений у модифікаторах, переданих подіям клавіш та
миші, коли активна клавіша CTRL

**`UI\Area::Alt`**
Повинен бути встановлений у модифікаторах, переданих подіям клавіш та
миші, коли активна клавіша ALT

**`UI\Area::Shift`**
Повинен бути встановлений у модифікаторах, переданих подіям клавіш та
миші, коли активна клавіша SHIFT

**`UI\Area::Super`**

**`UI\Area::Down`**
Має бути встановлений у модифікаторах, переданих подіям клавіатури та
миші

**`UI\Area::Up`**
Має бути встановлений у модифікаторах, переданих подіям клавіатури та
миші

## Зміст

- [UI\Area::onDraw](ui-area.ondraw.md) — Функція зворотного виклику
при малюванні
- [UI\Area::onKey](ui-area.onkey.md) — Функція зворотного дзвінка за
натисканні
- [UI\Area::onMouse](ui-area.onmouse.md) — Функція зворотного дзвінка
миші
- [UI\Area::redraw](ui-area.redraw.md) — Перемалювати область
- [UI\Area::scrollTo](ui-area.scrollto.md) — Прокрутити область
- [UI\Area::setSize](ui-area.setsize.md) — Встановити розмір
