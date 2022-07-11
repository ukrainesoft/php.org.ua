- [« Установка](ui.installation.md)
- [UI\Point::at »](ui-point.at.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Представляє позицію (x,y)

# Представляє позицію (x,y)

(UI 0.9.9)

## Вступ

Точки використовуються у всьому інтерфейсі користувача для представлення
координат на екрані, керуючому елементі чи області.

## Огляд класів

final class **UI\Point** {

/\* Властивості \*/

public `$x`;

public `$y`;

/\* Конструктор \*/

public [\_\_construct](ui-point.construct.md)(float `$x`, float `$y`)

/\* Методи \*/

public static [at](ui-point.at.md)(float `$point`):
[UI\Point](class.ui-point.md)

public static [at](ui-point.at.md)([UI\Size](class.ui-size.md)
`$size`): [UI\Point](class.ui-point.md)

public [getX](ui-point.getx.md)(): float

public [getY](ui-point.gety.md)(): float

public [setX](ui-point.setx.md)(float `$point`)

public [setY](ui-point.sety.md)(float `$point`)

}

## Властивості

`x`
Містить координату X, може бути прочитана/записана безпосередньо

`y`
Містить координату Y, може бути прочитана/записана безпосередньо

## Зміст

- [UI\Point::at](ui-point.at.md) - Приведення Size
- [UI\Point::\_\_construct](ui-point.construct.md) - Створити новий
об'єкт Point
- [UI\Point::getX](ui-point.getx.md) — Отримує X
- [UI\Point::getY](ui-point.gety.md) — Отримати Y
- [UI\Point::setX](ui-point.setx.md) — Встановити X
- [UI\Point::setY](ui-point.sety.md) — Встановити Y
