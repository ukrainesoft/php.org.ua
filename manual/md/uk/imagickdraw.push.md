- [« ImagickDraw::popPattern](imagickdraw.poppattern.md)
- [ImagickDraw::pushClipPath »](imagickdraw.pushclippath.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Клонує поточний об'єкт ImagickDraw і додає його до стек

# ImagickDraw::push

(PECL imagick 2, PECL imagick 3)

ImagickDraw::push — Клонує поточний об'єкт ImagickDraw та додає його
у стек

### Опис

public **ImagickDraw::push**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Клонує поточний об'єкт ImagickDraw для створення нового об'єкту
ImagickDraw, який потім додається до стек ImagickDraw. Початковий
малюючий об'єкт ImagickDraw (або кілька об'єктів) можна повернути,
викликавши [ImagickDraw::pop()](imagickdraw.pop.md). Об'єкти ImagickDraw
зберігаються у стеку ImagickDraw. Для кожної операції видалення має
існувати еквівалентна операція додавання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::push()****

`<?phpfunction push($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillModifiedColor); $draw->setStrokeWidth(2); $draw->setFontSize(72); $draw->push(); $draw->translate(50, 50); $draw->rectangle(200, 200, 300, 300); $draw->pop(); $draw->setFillColor($fillColor); $draw->rectangle(200, 200, 300, 300); $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
