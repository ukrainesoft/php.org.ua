- [« ImagickPixel::isSimilar](imagickpixel.issimilar.md)
- [ImagickPixel::setColorCount »](imagickpixel.setcolorcount.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Встановлює колір

# ImagickPixel::setColor

(PECL imagick 2, PECL imagick 3)

ImagickPixel::setColor — Встановлює колір

### Опис

public **ImagickPixel::setColor**(string `$color`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює колір об'єкта ImagickPixel зазначеним рядком (наприклад
"blue", "#0000ff", "rgb(0,0,255)", "cmyk(100,100,100,10)" і т.д.).

### Список параметрів

`col`
Визначення кольору для використання у порядку ініціалізації об'єкта
ImagickPixel.

### Значення, що повертаються

Повертає **`true`** якщо колір був встановлений, інакше
**`false`**.

### Приклади

**Приклад #1 Приклад використання **ImagickPixel::setColor()****

` <?phpfunction setColor() {    $draw u003d new \ImagickDraw(); $strokeColor u003d new \ImagickPixel('green'); $fillColoru003d new \ImagickPixel(); $fillColor->setColor('rgba(100%, 75%, 0%, 1.0)'); $draw->setstrokewidth(3.0); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->rectangle(200, 200, 300, 300); $image u003d new \Imagick(); $image->newImage(500, 500, "SteelBlue2"); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
