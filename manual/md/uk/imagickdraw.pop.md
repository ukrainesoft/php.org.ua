- [« ImagickDraw::polyline](imagickdraw.polyline.md)
- [ImagickDraw::popClipPath »](imagickdraw.popclippath.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Знищує поточний об'єкт ImagickDraw у стеку та повертається до раніше
доданого об'єкту ImagickDraw

# ImagickDraw::pop

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pop — Знищує поточний об'єкт ImagickDraw у стеку та
повертається до раніше доданого об'єкту ImagickDraw

### Опис

public **ImagickDraw::pop**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Знищує поточний об'єкт ImagickDraw у стеку та повертається до раніше
доданого об'єкту ImagickDraw. Може бути кілька
зображень ImagickDraw. Спроба витягти більше зображень ImagickDraw,
чим було додано, призведе до виникнення помилки, правильним
використанням є вилучення тільки тих зображень ImagickDraw,
які були додані у стек.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
