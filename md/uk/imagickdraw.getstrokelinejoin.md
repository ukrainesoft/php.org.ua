- [« ImagickDraw::getStrokeLineCap](imagickdraw.getstrokelinecap.md)
- [ImagickDraw::getStrokeMiterLimit
»](imagickdraw.getstrokemiterlimit.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Повертає форму, яка буде використовуватися в кутах контурів при
їх обведенні

# ImagickDraw::getStrokeLineJoin

(PECL imagick 2, PECL imagick 3)

ImagickDraw::getStrokeLineJoin — Повертає форму, яка буде
використовуватися в кутах контурів при їх обведенні

### Опис

public **ImagickDraw::getStrokeLineJoin**(): int

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Повертає фігуру, яка використовуватиметься в кутах контурів (або
інших векторних фігур) при їх обведенні.

### Значення, що повертаються

Повертає одну із констант
[LINEJOIN](imagick.constants.md#imagick.constants.linejoin)
(`imagick::LINEJOIN_*`) або 0, якщо з'єднання лінії обведення не встановлено.
