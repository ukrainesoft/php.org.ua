- [« ImagickDraw::getGravity](imagickdraw.getgravity.md)
- [ImagickDraw::getStrokeColor »](imagickdraw.getstrokecolor.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Повертає поточне налаштування згладжування обведення

# ImagickDraw::getStrokeAntialias

(PECL imagick 2, PECL imagick 3)

ImagickDraw::getStrokeAntialias — Повертає поточне налаштування
згладжування обведення

### Опис

public **ImagickDraw::getStrokeAntialias**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Повертає поточне налаштування згладжування обведення. За замовчуванням
обведені контури згладжуються. Коли згладжування вимкнено, для
обведених пікселів встановлюється граничне значення, щоб
визначити, чи слід використовувати колір обведення або базовий колір
полотно.

### Значення, що повертаються

Повертає **`true`**, якщо згладжування увімкнено або **`false`**, якщо
воно вимкнено.
