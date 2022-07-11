- [« UI\Controls\Grid::setPadded](ui-controls-grid.setpadded.md)
- [UI\Controls\Group::append »](ui-controls-group.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- елемент управління "Група" (розміщення)

# Елемент управління "Група" (розміщення)

(UI 0.9.9)

## Вступ

Група представляє контейнер для дочірніх елементів

## Огляд класів

class **UI\Controls\Group** extends [UI\Control](class.ui-control.md)
{

/\* Властивості \*/

protected `$controls`;

/\* Конструктор \*/

public [\_\_construct](ui-controls-group.construct.md)(string
`$title`)

/\* Методи \*/

public
[append](ui-controls-group.append.md)([UI\Control](class.ui-control.md)
`$control`)

public [getTitle](ui-controls-group.gettitle.md)(): string

public [hasMargin](ui-controls-group.hasmargin.md)(): bool

public [setMargin](ui-controls-group.setmargin.md)(bool `$margin`)

public [setTitle](ui-controls-group.settitle.md)(string `$title`)

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

- [UI\Controls\Group::append](ui-controls-group.append.md) -
Додати керуючий елемент
- [UI\Controls\Group::\_\_construct](ui-controls-group.construct.md)
- Створити новий об'єкт Group
- [UI\Controls\Group::getTitle](ui-controls-group.gettitle.md) -
Отримати заголовок
- [UI\Controls\Group::hasMargin](ui-controls-group.hasmargin.md) -
Визначення поля
- [UI\Controls\Group::setMargin](ui-controls-group.setmargin.md) -
Встановити поле
- [UI\Controls\Group::setTitle](ui-controls-group.settitle.md) -
Встановити заголовок
