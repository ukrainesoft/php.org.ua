- [« UI\Draw\Matrix::translate](ui-draw-matrix.translate.md)
- [UI\Draw\Color::\_\_construct »](ui-draw-color.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Подання кольору

# Подання кольору

(UI 0.9.9)

## Вступ

Представляє кольори RGBA, окремі канали доступні через загальнодоступні
властивості.

## Огляд класів

class **UI\Draw\Color** {

/\* Константи \*/

const int `Red`;

const int `Green`;

const int `Blue`;

const int `Alpha`;

/\* Властивості \*/

public `$ r`;

public `$g`;

public `$b`;

public `$a`;

/\* Конструктор \*/

public
[\_\_construct](ui-draw-color.construct.md)([UI\Draw\Color](class.ui-draw-color.md)
`$color` u003d ?)

public [\_\_construct](ui-draw-color.construct.md)(int `$color` u003d ?)

/\* Методи \*/

public [getChannel](ui-draw-color.getchannel.md)(int `$channel`):
float

public [setChannel](ui-draw-color.setchannel.md)(int `$channel`, float
`$value`): void

}

## Властивості

`r`
Забезпечує доступ до червоного каналу

`g`
Забезпечує доступ до зеленого каналу

`b`
Забезпечує доступ до синього каналу

`a`
Забезпечує доступ до альфа-каналу

## Зумовлені константи

**`UI\Draw\Color::Red`**
Визначає червоний канал

**`UI\Draw\Color::Green`**
Визначає зелений канал

**`UI\Draw\Color::Blue`**
Визначає синій канал

**`UI\Draw\Color::Alpha`**
Визначає альфа-канал

## Зміст

- [UI\Draw\Color::\_\_construct](ui-draw-color.construct.md) -
Створити новий об'єкт Color
- [UI\Draw\Color::getChannel](ui-draw-color.getchannel.md) -
Керування кольором
- [UI\Draw\Color::setChannel](ui-draw-color.setchannel.md) -
Керування кольором
