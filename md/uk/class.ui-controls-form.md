- [«
UI\Controls\Picker::\_\_construct](ui-controls-picker.construct.md)
- [UI\Controls\Form::append »](ui-controls-form.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Форма" (розташування)

# Елемент управління "Форма" (розташування)

(UI 0.9.9)

## Вступ

Форма - це елемент керування, що дозволяє розміщувати інші елементи
управління у макеті (формі).

## Огляд класів

class **UI\Controls\Form** extends [UI\Control](class.ui-control.md) {

/\* Властивості \*/

protected `$controls`;

/\* Методи \*/

public [append](ui-controls-form.append.md)(string `$label`,
[UI\Control](class.ui-control.md) `$control`, bool `$stretchy` u003d
**`false`**): int

public [delete](ui-controls-form.delete.md)(int `$index`): bool

public [isPadded](ui-controls-form.ispadded.md)(): bool

public [setPadded](ui-controls-form.setpadded.md)(bool `$padded`)

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

- [UI\Controls\Form::append](ui-controls-form.append.md) — Додати
керуючий елемент
- [UI\Controls\Form::delete](ui-controls-form.delete.md) — Видалити
елемент управління
- [UI\Controls\Form::isPadded](ui-controls-form.ispadded.md) -
Визначення заповнення
- [UI\Controls\Form::setPadded](ui-controls-form.setpadded.md) -
Встановити наповнення
