- [«
ImagickDraw::getStrokeLineJoin](imagickdraw.getstrokelinejoin.md)
- [ImagickDraw::getStrokeOpacity »](imagickdraw.getstrokeopacity.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Повертає межу зрізу обведення

# ImagickDraw::getStrokeMiterLimit

(PECL imagick 2, PECL imagick 3)

ImagickDraw::getStrokeMiterLimit — Повертає межу зрізу обведення

### Опис

public **ImagickDraw::getStrokeMiterLimit**(): int

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Повертає межу зрізу. Коли два відрізки лінії зустрічаються під гострим
кутом і для 'lineJoin' задані кутові стики, зріз може виходити далеко
за межі товщини лінії, що обводить контур. 'miterLimit' накладає
обмеження відношення довжини зрізу до 'lineWidth'.

### Значення, що повертаються

Повертає ціле число, що описує межу зрізу, або 0, якщо межа
зрізу не встановлено.
