- [«UI\Controls\Group::setTitle](ui-controls-group.settitle.md)
- [UI\Controls\Box::append »](ui-controls-box.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Блок керування (розміщення)

# Блок управління (розміщення)

(UI 0.9.9)

## Вступ

Блок (Box) дозволяє розташувати інші елементи керування

## Огляд класів

class **UI\Controls\Box** extends [UI\Control](class.ui-control.md) {

/\* Константи \*/

const int `Vertical`;

const int `Horizontal`;

/\* Властивості \*/

protected `$controls`;

/\* Конструктор \*/

public [\_\_construct](ui-controls-box.construct.md)(int
`$orientation` u003d UI\Controls\Box::Horizontal)

/\* Методи \*/

public [append](ui-controls-box.append.md)(Control `$control`, bool
`$stretchy` u003d **`false`**): int

public [delete](ui-controls-box.delete.md)(int `$index`): bool

public [getOrientation](ui-controls-box.getorientation.md)(): int

public [isPadded](ui-controls-box.ispadded.md)(): bool

public [setPadded](ui-controls-box.setpadded.md)(bool `$padded`)

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

## Зумовлені константи

**`UI\Controls\Box::Vertical`**

**`UI\Controls\Box::Horizontal`**

## Зміст

- [UI\Controls\Box::append](ui-controls-box.append.md) — Додати
керуючий елемент
- [UI\Controls\Box::\_\_construct](ui-controls-box.construct.md) -
Створити новий об'єкт Box
- [UI\Controls\Box::delete](ui-controls-box.delete.md) — Видалити
керуючий елемент
- [UI\Controls\Box::getOrientation](ui-controls-box.getorientation.md)
— Здобути орієнтацію
- [UI\Controls\Box::isPadded](ui-controls-box.ispadded.md) -
Визначення заповнення
- [UI\Controls\Box::setPadded](ui-controls-box.setpadded.md) -
Встановити наповнення
