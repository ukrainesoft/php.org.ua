- [«UI\Draw\Stroke](class.ui-draw-stroke.md)
- [UI\Draw\Stroke::getCap »](ui-draw-stroke.getcap.md)

- [PHP Manual](index.md)
- [UI\Draw\Stroke](class.ui-draw-stroke.md)
- Створити новий об'єкт Stroke

# UI\Draw\Stroke::\_\_construct

(UI 0.9.9)

UI\Draw\Stroke::\_\_construct — Створити новий об'єкт Stroke

### Опис

public **UI\Draw\Stroke::\_\_construct**(
int `$cap` u003d UI\Draw\Line\Cap::Flat,
int `$join` u003d UI\Draw\Line\Join::Miter,
float `$thickness` u003d 1,
float `$miterLimit` u003d 10
)

Створює новий об'єкт Stroke

### Список параметрів

`cap`
UI\Draw\Line\Cap::Flat, UI\Draw\Line\Cap::Round або
UI\Draw\Line\Cap::Square

`join`
UI\Draw\Line\Join::Miter, UI\Draw\Line\Join::Round або
UI\Draw\Line\Join::Bevel

`thickness`
Товщина обведення

`miterLimit`
Межа зрізу (за замовчуванням підходить для всіх підтримуваних платформ)
