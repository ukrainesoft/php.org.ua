- [« ImagickDraw::comment](imagickdraw.comment.md)
- [ImagickDraw::\_\_construct »](imagickdraw.construct.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Накладає зображення на поточне зображення

# ImagickDraw::composite

(PECL imagick 2, PECL imagick 3)

ImagickDraw::composite — Накладає зображення на поточне зображення

### Опис

public **ImagickDraw::composite**(
int `$compose`,
float `$x`,
float `$y`,
float `$width`,
float `$height`,
[Imagick](class.imagick.md) `$compositeWand`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Накладає зображення на поточне зображення, використовуючи вказане
оператор накладання, зазначену позицію та вказаний розмір.

### Список параметрів

`compose`
Оператор накладання. Одна з констант [Оператора
накладання](imagick.constants.md#imagick.constants.compositeop)
(`imagick::COMPOSITE_*`).

`x`
Координата X лівого верхнього кута.

`y`
Координата Y лівого верхнього кута.

`width`
Ширина зображення композиції.

`height`
Висота зображення композиції.

`compositeWand`
Об'єкт [Imagick](class.imagick.md), з якого взято композиційне
зображення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::composite()****

` <?phpfunction composite($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setFillOpacity(1); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setStrokeWidth(2); $draw->setFont("../fonts/CANDY.TTF"); $draw->setFontSize(140); $draw->rectangle(0, 0, 1000, 300); $draw->setFillColor('white'); $draw->setfillopacity(1); $draw->annotation(50, 180, "Lorem Ipsum!"); // Створення об'єкта зображення, в який можна перетворити команди малювання. $imagicku003du003dnewImagick(); $imagick->newImage(1000, 302, $backgroundColor); $imagick->setImageFormat("png"); //Перетворення команд малювання в об'єкті ImagickDraw    //в зображення. $imagick->drawImage($draw); //Відображення зображення в браузері   header("Content-Type:image/png"); echo $imagick->getImageBlob();}?> `
