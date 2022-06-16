- [« ImagickPixel::clear](imagickpixel.clear.md)
- [ImagickPixel::destroy »](imagickpixel.destroy.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Конструктор ImagickPixel

# ImagickPixel::\_\_construct

(PECL imagick 2, PECL imagick 3)

ImagickPixel::\_\_construct — Конструктор ImagickPixel

### Опис

public **ImagickPixel::\_\_construct**(string `$color` u003d ?)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Створюється об'єкт ImagickPixel. Якщо вказано колір, то об'єкт створюється та
ініціалізується із цим кольором перед поверненням.

### Список параметрів

`col`
Необов'язковий рядок із кольором для використання в ініціалізації цього
об'єкт.

### Значення, що повертаються

У разі успішного виконання повертає об'єкт ImagickPixel,
в іншому випадку викидає виняток ImagickPixelException.

### Приклади

**Приклад #1 Приклад використання **ImagickPixel::construct()****

`<?phpfunction construct() {    $columns u003d 4; $exampleColors u003d array(        "rgba(100%, 0%, 0%, 0.5)",        "hsb(33.3333%, 100%,  75%)", // medium green        "hsl(120, 255,   191.25)", //medium green        "graya(50%, 0.5)", //  semi-transparent mid gray        "LightCoral", "none", //"cmyk(0.9, 0.48, 0.83, 0.50)",        "#f00", / /  #rgb        "#ff0000", //  #rrggbb        "#ff0000ff", //  #rrggbbaa        "#ffff00000000", //  #rrrrggggbbbb        "#ffff00000000ffff", //  #rrrrggggbbbbaaaa        "rgb(255, 0, 0)", //  an integer in the range 0—255 for each component        "rgb(100.0%, 0.0%, 0.0%)", //  a float in the range 0—100% for each component        "rgb(255, 0, 0) ", //  range 0 - 255        "rgba(255, 0, 0, 1.0)", //  the same, with an explicit alpha value        "rgb(100%, 0%, 0%)", //  range 0.0% - 100.0%    "rgba(100%, 0%, 0%, 1.0)", // the same, with an explicit alpha value     |; $draw u003d new \ImagickDraw(); $countu003du003d0; $black u003d new \ImagickPixel('rgb(0, 0, 0)'); foreach ($exampleColors as $exampleColor) {        $color u003d new \ImagickPixel($exampleColor); $draw->setstrokewidth(1.0); $draw->setStrokeColor($black); $draw->setFillColor($color); $offsetX u003d ($count % $columns) * 50 + 5; $offsetY u003d intval($count / $columns) * 50 + 5; $draw->rectangle(0 + $offsetX, 0 + $offsetY, 40 + $offsetX, 40 + $offsetY); $ count++; }   $image u003d new \Imagick(); $image->newImage(350, 350, "blue"); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
