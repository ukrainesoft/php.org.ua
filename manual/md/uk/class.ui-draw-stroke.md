- [« UI\Draw\Color::setChannel](ui-draw-color.setchannel.md)
- [UI\Draw\Stroke::\_\_construct »](ui-draw-stroke.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Малювання обведення

# Малювання обведення

(UI 0.9.9)

## Вступ

Містить конфігурацію Pen для виконання обведення

## Огляд класів

class **UI\Draw\Stroke** {

/\* Конструктор \*/

public [\_\_construct](ui-draw-stroke.construct.md)(
int `$cap` u003d UI\Draw\Line\Cap::Flat,
int `$join` u003d UI\Draw\Line\Join::Miter,
float `$thickness` u003d 1,
float `$miterLimit` u003d 10
)

/\* Методи \*/

public [getCap](ui-draw-stroke.getcap.md)(): int

public [getJoin](ui-draw-stroke.getjoin.md)(): int

public [getMiterLimit](ui-draw-stroke.getmiterlimit.md)(): float

public [getThickness](ui-draw-stroke.getthickness.md)(): float

public [setCap](ui-draw-stroke.setcap.md)(int `$cap`)

public [setJoin](ui-draw-stroke.setjoin.md)(int `$join`)

public [setMiterLimit](ui-draw-stroke.setmiterlimit.md)(float
`$limit`)

public [setThickness](ui-draw-stroke.setthickness.md)(float
`$thickness`)

}

## Зміст

- [UI\Draw\Stroke::\_\_construct](ui-draw-stroke.construct.md) -
Створити новий об'єкт Stroke
- [UI\Draw\Stroke::getCap](ui-draw-stroke.getcap.md) — Отримати
кінець лінії
- [UI\Draw\Stroke::getJoin](ui-draw-stroke.getjoin.md) - Отримати
з'єднання лінії
- [UI\Draw\Stroke::getMiterLimit](ui-draw-stroke.getmiterlimit.md) -
Отримати межу зрізу
- [UI\Draw\Stroke::getThickness](ui-draw-stroke.getthickness.md) -
Отримати товщину
- [UI\Draw\Stroke::setCap](ui-draw-stroke.setcap.md) — Встановити
кінець лінії
- [UI\Draw\Stroke::setJoin](ui-draw-stroke.setjoin.md) - Отримати
з'єднання лінії
- [UI\Draw\Stroke::setMiterLimit](ui-draw-stroke.setmiterlimit.md) -
Встановити межу зрізу
- [UI\Draw\Stroke::setThickness](ui-draw-stroke.setthickness.md) -
Встановити товщину
