- [«UI\Executor::setInterval](ui-executor.setinterval.md)
- [UI\Controls\Tab::append »](ui-controls-tab.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Таб"

# Елемент управління "Таб"

(UI 0.9.9)

## Вступ

Таб може містити багато вибраних користувачем сторінок елементів
управління, кожна з якої є заголовок.

## Огляд класів

class **UI\Controls\Tab** extends [UI\Control](class.ui-control.md) {

/\* Властивості \*/

protected `$controls`;

/\* Методи \*/

public [append](ui-controls-tab.append.md)(string `$name`,
[UI\Control](class.ui-control.md) `$control`): int

public [delete](ui-controls-tab.delete.md)(int `$index`): bool

public [hasMargin](ui-controls-tab.hasmargin.md)(int `$page`): bool

public [insertAt](ui-controls-tab.insertat.md)(string `$name`, int
`$page`, [UI\Control](class.ui-control.md) `$control`)

public [pages](ui-controls-tab.pages.md)(): int

public [setMargin](ui-controls-tab.setmargin.md)(int `$page`, bool
`$margin`)

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
Містить елементи керування, не варто змінювати напряму

## Зміст

- [UI\Controls\Tab::append](ui-controls-tab.append.md) — Додати
сторінку
- [UI\Controls\Tab::delete](ui-controls-tab.delete.md) — Видалити
сторінку
- [UI\Controls\Tab::hasMargin](ui-controls-tab.hasmargin.md) -
Визначення поля
- [UI\Controls\Tab::insertAt](ui-controls-tab.insertat.md) -
Вставити сторінку
- [UI\Controls\Tab::pages](ui-controls-tab.pages.md) - Кількість
сторінок
- [UI\Controls\Tab::setMargin](ui-controls-tab.setmargin.md) -
Встановити поле
