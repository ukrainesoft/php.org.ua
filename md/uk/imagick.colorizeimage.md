- [« Imagick::colorFloodfillImage](imagick.colorfloodfillimage.md)
- [Imagick::colorMatrixImage »](imagick.colormatriximage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змішування кольору заливки із зображенням

# Imagick::colorizeImage

(PECL imagick 2, PECL imagick 3)

Imagick::colorizeImage — Змішування кольору заливки із зображенням

### Опис

public
**Imagick::colorizeImage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$colorize`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$opacity`, bool `$legacy` u003d **`false`**): bool

Змішує колір заливки з кожним пікселем зображення.

### Список параметрів

`colorize`
Об'єкт ImagickPixel або рядок, що містить колір

`opacity`
Об'єкт ImagickPixel або дробове число, що містить прозорість.
1.0 означає без прозорості; 0.0 означає повну прозорість.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------|
| PECL imagick 2.1.0 Для першого параметра можна передавати колір у вигляді рядка та вказувати значення прозорості у другому параметрі. Попередні версії допускали лише об'єкт ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::colorizeImage()****

`<?phpfunction colorizeImage($imagePath, $color, $opacity) {    $imagick u003d new \Imagick(realpath($imagePath)); $opacity u003d $opacity / 255.0; $opacityColoru003du003dnewImagickPixel("rgba(0, 0, 0,$opacity)"); $imagick->colorizeImage($color, $opacityColor); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
