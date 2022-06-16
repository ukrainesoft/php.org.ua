- [« Imagick::colorizeImage](imagick.colorizeimage.md)
- [Imagick::combineImages »](imagick.combineimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує перетворення кольору до зображення

# Imagick::colorMatrixImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::colorMatrixImage — Застосовує перетворення кольору до зображення

### Опис

public **Imagick::colorMatrixImage**(array `$color_matrix` u003d
Imagick::CHANNEL_DEFAULT): bool

Застосовує перетворення кольору до зображення. Цей метод дозволяє
змінювати насиченість, обертання відтінку, яскравість альфа-каналу та інші
ефекти. Хоча можна використовувати матриці перетворення змінного
розміру, зазвичай використовується матриця 5x5 для зображення RGBA та матриця
6x6 для CMYKA (або RGBA зі зміщеннями). Матриця аналогічна матрицям,
які використовуються в Adobe Flash, за винятком того, що зміщення
вказано в стовпці 6, а не 5 (для підтримки зображень CMYKA), а
усунення нормалізовані (зміщення Flash ділиться на 255).

### Список параметрів

`color_matrix`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::colorMatrixImage()****

`<?phpfunction colorMatrixImage($imagePath, $colorMatrix) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->setImageOpacity(1); //Цветовая матрица должна выглядеть так:    //    $colorMatrix u003d [    //        1.5, 0.0, 0.0, 0.0, 0.0, -0.157,    //        0.0, 1.0, 0.5, 0.0, 0.0, -0.157,    //        0.0, 0.0, 1.5, 0.0, 0.0, -0.157,    //        0.0, 0.0, 0.0, 1.0, 0.0,  0.0,    //        0.0, 0.0, 0.0, 0.0, 1.0,  0.0,    //        0.0, 0.0, 0.0, 0.0, 0.0,  1.0 //    ]; $backgroundu003dNewImagick(); $background->newPseudoImage($imagick->getImageWidth(), $imagick->getImageHeight(), "pattern:checkerboard"); $background->setImageFormat('png'); $imagick->setImageFormat('png'); $imagick->colorMatrixImage($colorMatrix); $background->compositeImage($imagick, \Imagick::COMPOSITE_ATOP, 0, 0); header("Content-Type: image/png"); echo $background->getImageBlob();}?> `
