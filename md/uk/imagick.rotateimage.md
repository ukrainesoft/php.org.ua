- [« Imagick::rollImage](imagick.rollimage.md)
- [Imagick::rotationalBlurImage »](imagick.rotationalblurimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає зображення

# Imagick::rotateImage

(PECL imagick 2, PECL imagick 3)

Imagick::rotateImage — Повертає зображення

### Опис

public
**Imagick::rotateImage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`, float `$degrees`): bool

Повертає зображення на вказану кількість градусів. Порожні
трикутники, що залишилися від повороту зображення, заповнюються кольором
фону.

### Список параметрів

`background`
Колір фону.

`degrees`
Кут повороту у градусах. Кут повороту інтерпретується як кількість
градусів для повороту зображення за годинниковою стрілкою.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| PECL imagick 2.1.0 Тепер дозволено використання рядка, який представляє колір, як перший параметр. Попередні версії допускали лише об'єкт ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::rotateImage()****

`<?phpfunction rotateImage($imagePath, $angle, $color) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->rotateimage($color, $angle); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
