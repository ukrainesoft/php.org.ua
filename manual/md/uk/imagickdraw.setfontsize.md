- [« ImagickDraw::setFontFamily](imagickdraw.setfontfamily.md)
- [ImagickDraw::setFontStretch »](imagickdraw.setfontstretch.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює розмір шрифту для використання під час анотування
текстом

# ImagickDraw::setFontSize

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontSize — Встановлює розмір шрифту для використання
при анотуванні текстом

### Опис

public **ImagickDraw::setFontSize**(float `$pointsize`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює розмір шрифту для використання під час анотування текстом.

### Список параметрів

`pointsize`
Розмір шрифту.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFontSize()****

` <?phpfunction setFontSize($fillColor, $strokeColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFont("../fonts/Arial.ttf"); $ sizes u003d u003d [24, | 36, | 48, | 60, | 72]; foreach ($sizes as $size) {        $draw->setFontSize($size); $draw->annotation(50, ($size * $size / 16), "Lorem Ipsum!"); }   $imagick u003d new \Imagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
