- [« ImagickDraw::setFont](imagickdraw.setfont.md)
- [ImagickDraw::setFontSize »](imagickdraw.setfontsize.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює сімейство шрифтів для використання при анотуванні
текстом

# ImagickDraw::setFontFamily

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontFamily — Встановлює сімейство шрифтів для
використання при анотуванні текстом

### Опис

public **ImagickDraw::setFontFamily**(string `$font_family`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює сімейство шрифтів для використання при анотуванні
текстом.

### Список параметрів

`font_family`
Сімейство шрифтів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setFontFamily()****

` <?phpfunction setFontFamily($fillColor, $strokeColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $strokeColoru003d new \ImagickPixel($strokeColor); $fillColoru003d new \ImagickPixel($fillColor); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->setFontSize(48); $draw->setFontFamily("Times"); $draw->annotation(50, 50, "Lorem Ipsum!"); $draw->setFontFamily("AvantGarde"); $draw->annotation(50, 100, "Lorem Ipsum!"); $draw->setFontFamily("NewCenturySchlbk"); $draw->annotation(50, 150, "Lorem Ipsum!"); $draw->setFontFamily("Palatino"); $draw->annotation(50, 200, "Lorem Ipsum!"); $imagicku003du003dnewImagick(); $imagick->newImage(450, 250, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
