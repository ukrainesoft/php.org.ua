- [« ImagickDraw::push](imagickdraw.push.md)
- [ImagickDraw::pushDefs »](imagickdraw.pushdefs.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Запускає визначення шляху відсічного контуру

# ImagickDraw::pushClipPath

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pushClipPath — Запускає визначення шляху відсічного
контуру

### Опис

public **ImagickDraw::pushClipPath**(string `$clip_mask_id`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Запускає визначення шляху відсічного контуру, що складається з
будь-якої кількості команд малювання та завершується командою
[ImagickDraw::popClipPath()](imagickdraw.popclippath.md).

### Список параметрів

`clip_mask_id`
Ідентифікатор маски відсічного контуру

### Значення, що повертаються

Функція не повертає значення після виконання.
