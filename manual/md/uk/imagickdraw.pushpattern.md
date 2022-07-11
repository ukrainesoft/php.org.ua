- [« ImagickDraw::pushDefs](imagickdraw.pushdefs.md)
- [ImagickDraw::rectangle »](imagickdraw.rectangle.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Вказує, що наступні команди аж до
ImagickDraw::opPattern() становлять визначення іменованого
патерну

# ImagickDraw::pushPattern

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pushPattern — Вказує, що наступні команди аж до
ImagickDraw::opPattern() складають визначення іменованого патерну

### Опис

public **ImagickDraw::pushPattern**(
string `$pattern_id`,
float `$x`,
float `$y`,
float `$width`,
float `$height`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Вказує, що наступні команди до DrawPopPattern() містять
визначення іменованого патерну. Простору патерну призначаються
координати верхнього лівого кута, ширина і висота, і воно стає
простір для малювання. Все, що можна намалювати, можна
використовувати у визначенні патерну. Іменовані патерни можуть
використовуватися як визначення обведення або кистей.

### Список параметрів

`pattern_id`
ID патерну.

`x`
Координата х лівого верхнього кута.

`y`
Координата у лівого верхнього кута.

`width`
Ширина патерну.

`height`
Висота патерну.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::pushPattern()****

` <?phpfunction pushPattern($strokeColor, $fillColor, $backgroundColor) {   $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(1); $draw->pushPattern("MyFirstPattern", 0, 0, 50, 50); for ($x u003d 0; $x < 50; $x +u003d 10) {                                               ) % 5); $draw->rectangle($positionX, $y, $positionX + 5, $y + 5); }    }    $draw->popPattern(); $draw->setFillOpacity(0); $draw->rectangle(100, 100, 400, 400); $draw->setFillOpacity(1); $draw->setFillOpacity(1); $draw->push(); $draw->setFillPatternURL('#MyFirstPattern'); $draw->setFillColor('yellow'); $draw->rectangle(100, 100, 400, 400); $draw->pop(); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
