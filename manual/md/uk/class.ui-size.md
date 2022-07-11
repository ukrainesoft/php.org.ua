- [« UI\Point::setY](ui-point.sety.md)
- [UI\Size::\_\_construct »](ui-size.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- представляє розміри (ширина, висота)

# Представляє розміри (ширина, висота)

(UI 0.9.9)

## Вступ

Розміри використовуються в інтерфейсі користувача для подання
розміру екрана, керуючого елемента чи області.

## Огляд класів

final class **UI\Size** {

/\* Властивості \*/

public `$width`;

public `$height`;

/\* Конструктор \*/

public [\_\_construct](ui-size.construct.md)(float `$width`, float
`$height`)

/\* Методи \*/

public [getHeight](ui-size.getheight.md)(): float

public [getWidth](ui-size.getwidth.md)(): float

public static [of](ui-size.of.md)(float `$size`):
[UI\Size](class.ui-size.md)

public static [of](ui-size.of.md)([UI\Point](class.ui-point.md)
`$point`): [UI\Size](class.ui-size.md)

public [setHeight](ui-size.setheight.md)(float `$size`)

public [setWidth](ui-size.setwidth.md)(float `$size`)

}

## Властивості

`width`
Містить ширину, може бути прочитана/записана безпосередньо

`height`
Містить висоту, може бути прочитана/записана безпосередньо

## Зміст

- [UI\Size::\_\_construct](ui-size.construct.md) - Створити новий
об'єкт Size
- [UI\Size::getHeight](ui-size.getheight.md) - Отримує висоту
- [UI\Size::getWidth](ui-size.getwidth.md) — Отримує ширину
- [UI\Size::of](ui-size.of.md) - Приведення Point
- [UI\Size::setHeight](ui-size.setheight.md) — Встановити висоту
- [UI\Size::setWidth](ui-size.setwidth.md) — Встановити ширину
