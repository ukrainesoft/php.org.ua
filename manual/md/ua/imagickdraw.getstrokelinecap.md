- [«
ImagickDraw::getStrokeDashOffset](imagickdraw.getstrokedashoffset.md)
- [ImagickDraw::getStrokeLineJoin
»](imagickdraw.getstrokelinejoin.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Повертає форму, яка використовуватиметься наприкінці відкритих
внутрішніх контурів при їх обведенні

# ImagickDraw::getStrokeLineCap

(PECL imagick 2, PECL imagick 3)

ImagickDraw::getStrokeLineCap — Повертає форму, яка буде
використовуватися в кінці відкритих внутрішніх контурів при їх обведенні

### Опис

public **ImagickDraw::getStrokeLineCap**(): int

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Повертає форму, яка використовуватиметься наприкінці відкритих
внутрішніх контурів під час їх обведення.

### Значення, що повертаються

Повертає константу
[LINECAP](imagick.constants.md#imagick.constants.linecap)
(`imagick::LINECAP_*`) або 0, якщо форма обведення не задана.
