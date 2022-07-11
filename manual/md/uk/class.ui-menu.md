- [«UI\Control::show](ui-control.show.md)
- [UI\Menu::append »](ui-menu.append.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Меню

# Меню

(UI 0.9.9)

## Вступ

Меню має бути створено до першого вікна і може відображатись у будь-якому
вікні

## Огляд класів

class **UI\Menu** {

/\* Конструктор \*/

public [\_\_construct](ui-menu.construct.md)(string `$name`)

/\* Методи \*/

public [append](ui-menu.append.md)(string `$name`, string `$type` u003d
UI\MenuItem::class): [UI\MenuItem](class.ui-menuitem.md)

public [appendAbout](ui-menu.appendabout.md)(string `$type` u003d
UI\MenuItem::class): [UI\MenuItem](class.ui-menuitem.md)

public [appendCheck](ui-menu.appendcheck.md)(string `$name`, string
`$type` u003d UI\MenuItem::class): [UI\MenuItem](class.ui-menuitem.md)

public [appendPreferences](ui-menu.appendpreferences.md)(string
`$type` u003d UI\MenuItem::class): [UI\MenuItem](class.ui-menuitem.md)

public [appendQuit](ui-menu.appendquit.md)(string `$type` u003d
UI\MenuItem::class): [UI\MenuItem](class.ui-menuitem.md)

public [appendSeparator](ui-menu.appendseparator.md)()

}

## Зміст

- [UI\Menu::append](ui-menu.append.md) — Додати пункт меню
- [UI\Menu::appendAbout](ui-menu.appendabout.md) — Додати пункт
меню About
- [UI\Menu::appendCheck](ui-menu.appendcheck.md) — Додати пункт
меню з чекбоксом
- [UI\Menu::appendPreferences](ui-menu.appendpreferences.md) -
Додати пункт меню "Параметри" (Preferences)
- [UI\Menu::appendQuit](ui-menu.appendquit.md) — Додати пункт меню
"Вихід" (Quit)
- [UI\Menu::appendSeparator](ui-menu.appendseparator.md) — Додати
пункт меню "Розділювач" (Separator)
- [UI\Menu::\_\_construct](ui-menu.construct.md) - Створити новий
об'єкт Menu
