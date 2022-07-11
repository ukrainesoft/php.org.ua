- [«UI\Area](class.ui-area.md)
- [UI\Area::onKey »](ui-area.onkey.md)

- [PHP Manual](index.md)
- [UI\Area](class.ui-area.md)
- Функція зворотного виклику під час малювання

# UI\Area::onDraw

(UI 0.9.9)

UI\Area::onDraw — Функція зворотного виклику під час малювання

### Опис

protected **UI\Area::onDraw**(
[UI\Draw\Pen](class.ui-draw-pen.md) `$pen`,
[UI\Size](class.ui-size.md) `$areaSize`,
[UI\Point](class.ui-point.md) `$clipPoint`,
[UI\Size](class.ui-size.md) `$clipSize`
)

Викликається, коли ця область вимагає перемальовки

### Список параметрів

`pen`
Ручка (Pen), що підходить для малювання у цьому районі

`areaSize`
Розмір області

`clipPoint`
Точка обрізки (clip point) області

`clipSize`
Розмір обрізки (clip size) області
