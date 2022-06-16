- [« ImagickDraw::setStrokeAlpha](imagickdraw.setstrokealpha.md)
- [ImagickDraw::setStrokeColor »](imagickdraw.setstrokecolor.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Керує згладжуванням обведення контурів

# ImagickDraw::setStrokeAntialias

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeAntialias — Керує згладжуванням обведень
контурів

### Опис

public **ImagickDraw::setStrokeAntialias**(bool `$stroke_antialias`):
bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Керує згладжуванням обведення контурів. За замовчуванням обведені контури
згладжуються. Коли згладжування вимкнено, для обведених пікселів
встановлюється граничне значення, щоб визначити, чи слід
використовувати колір обведення або колір базового полотна.

### Список параметрів

`stroke_antialias`
Настроювання згладжування.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeAntialias()****

` <?phpfunction setStrokeAntialias($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->setStrokeAntialias(false); $draw->line(100, 100, 400, 105); $draw->line(100, 140, 400, 185); $draw->setStrokeAntialias(true); $draw->line(100, 110, 400, 115); $draw->line(100, 150, 400, 195); $image u003d new \Imagick(); $image->newImage(500, 250, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
