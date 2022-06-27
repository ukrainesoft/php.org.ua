- [«UI\Controls\Tab::setMargin](ui-controls-tab.setmargin.md)
- [UI\Controls\Check::\_\_construct
»](ui-controls-check.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Елемент управління "Чекбокс"

# Елемент управління "Чекбокс"

(UI 0.9.9)

## Вступ

Чекбокс (Check) є поміченим клікабельним блоком

## Огляд класів

class **UI\Controls\Check** extends [UI\Control](class.ui-control.md)
{

/\* Конструктор \*/

public [\_\_construct](ui-controls-check.construct.md)(string `$text`)

/\* Методи \*/

public [getText](ui-controls-check.gettext.md)(): string

public [isChecked](ui-controls-check.ischecked.md)(): bool

protected [onToggle](ui-controls-check.ontoggle.md)()

public [setChecked](ui-controls-check.setchecked.md)(bool `$checked`)

public [setText](ui-controls-check.settext.md)(string `$text`)

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

## Зміст

- [UI\Controls\Check::\_\_construct](ui-controls-check.construct.md)
- Створити новий об'єкт Check
- [UI\Controls\Check::getText](ui-controls-check.gettext.md) -
Отримати текст
- [UI\Controls\Check::isChecked](ui-controls-check.ischecked.md) -
Визначення позначки
- [UI\Controls\Check::onToggle](ui-controls-check.ontoggle.md) -
Функція зворотного виклику перемикання
- [UI\Controls\Check::setChecked](ui-controls-check.setchecked.md) -
Встановити статус вибраності
- [UI\Controls\Check::setText](ui-controls-check.settext.md) -
Встановити текст
