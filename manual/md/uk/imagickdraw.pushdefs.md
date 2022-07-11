- [« ImagickDraw::pushClipPath](imagickdraw.pushclippath.md)
- [ImagickDraw::pushPattern »](imagickdraw.pushpattern.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Вказує, що наступні команди створюють іменовані елементи
ранньої обробки

# ImagickDraw::pushDefs

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pushDefs — Вказує, що наступні команди створюють
іменовані елементи для ранньої обробки

### Опис

public **ImagickDraw::pushDefs**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Вказує, що команди аж до завершальної команди
[ImagickDraw::popDefs()](imagickdraw.popdefs.md) створюють іменовані
елементи (наприклад, шляхи відсічного контуру, текстури тощо), які
можуть безпечно оброблятися раніше підвищення ефективності.

### Значення, що повертаються

Функція не повертає значення після виконання.
