- [«UI\Controls\Form::setPadded](ui-controls-form.setpadded.md)
- [UI\Controls\Grid::append »](ui-controls-grid.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Сітка" (розміщення)

# Елемент управління "Сітка" (розміщення)

(UI 0.9.9)

## Вступ

Сітка - це елемент керування, що дозволяє розміщувати дочірні елементи
у сітці

## Огляд класів

class **UI\Controls\Grid** extends [UI\Control](class.ui-control.md) {

/\* Константи \*/

const int `Fill`;

const int `Start`;

const int `Center`;

const int `End`;

const int `Leading`;

const int `Top`;

const int `Trailing`;

const int `Bottom`;

/\* Властивості \*/

protected `$controls`;

/\* Методи \*/

public [append](ui-controls-grid.append.md)(
[UI\Control](class.ui-control.md) `$control`,
int `$left`,
int `$top`,
int `$xspan`,
int `$yspan`,
bool `$ hexpand`,
int `$halign`,
bool `$vexpand`,
int `$valign`
)

public [isPadded](ui-controls-grid.ispadded.md)(): bool

public [setPadded](ui-controls-grid.setpadded.md)(bool `$padding`)

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

**`UI\Controls\Grid::Fill`**

**`UI\Controls\Grid::Start`**

**`UI\Controls\Grid::Center`**

**`UI\Controls\Grid::End`**

**`UI\Controls\Grid::Leading`**

**`UI\Controls\Grid::Top`**

**`UI\Controls\Grid::Trailing`**

**`UI\Controls\Grid::Bottom`**

## Властивості

`controls`
Містить елементи керування, не варто змінювати напряму

## Зміст

- [UI\Controls\Grid::append](ui-controls-grid.append.md) — Додати
керуючий елемент
- [UI\Controls\Grid::isPadded](ui-controls-grid.ispadded.md) -
Визначення заповнення
- [UI\Controls\Grid::setPadded](ui-controls-grid.setpadded.md) -
Встановити наповнення
